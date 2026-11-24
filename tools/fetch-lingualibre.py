#!/usr/bin/env python3
"""Download native-speaker recordings from Lingua Libre for every word in words.js.

Lingua Libre (https://lingualibre.org) recordings live on Wikimedia Commons, free to use
under CC BY-SA. This finds one Hindi and one Marathi recording per word (where they exist),
converts each to a small trimmed MP3 in audio/hi/ or audio/mr/, and lists them, with the
speaker's name and the file's Commons page for attribution, in audio/index.json. The app
plays these first, so GitHub Pages serves them with no lookups and no API keys.

    python3 tools/fetch-lingualibre.py          # needs ffmpeg for the MP3s; then commit audio/

Easiest: run it on GitHub instead (Actions → Fetch Lingua Libre recordings → Run workflow).
That workflow commits audio/ for you, and the site redeploys afterwards.

It lists every Hindi and Marathi file on Lingua Libre (a few dozen requests, slowly, as
Wikimedia asks of anonymous clients) and matches words locally. Run it again after adding
words: words already in audio/index.json are skipped (words with no recording are tried again).
"""
import json, re, subprocess, sys, time, unicodedata, urllib.parse, urllib.request, urllib.error
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
AUDIO = ROOT / "audio"
API = "https://commons.wikimedia.org/w/api.php"
UA = "PenmanshipPad-audio-fetch/1.0 (https://github.com/codycodes/Handwriting)"
LANGS = {"hi": "Q1568 (hin)", "mr": "Q1571 (mar)"}
PAUSE = 1.5  # seconds between requests: Wikimedia limits anonymous clients


def get(url, tries=6):
    for i in range(tries):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers={"User-Agent": UA}), timeout=60) as r:
                body = r.read()
            if body.startswith(b"You are making too many requests"):
                raise urllib.error.HTTPError(url, 429, "rate limited", {}, None)
            return body
        except urllib.error.HTTPError as e:
            if e.code not in (429, 503) or i == tries - 1:
                raise
            wait = int((e.headers or {}).get("Retry-After") or 0) or 20 * (i + 1)
            print(f"  rate limited, waiting {wait}s")
            time.sleep(wait)
    raise RuntimeError("unreachable")


def all_recordings(lang):
    """Every Lingua Libre file for a language, as {word: [(speaker, url, page)]}.

    Lists the files by name prefix, 500 per request, instead of searching word by word,
    so the whole run makes a few dozen API requests rather than hundreds."""
    prefix = f"LL-{LANGS[lang]}-".replace(" ", "_")
    cache = ROOT / "tools" / f".lingualibre-{lang}.json"   # reused for a day, not committed
    if cache.exists() and time.time() - cache.stat().st_mtime < 86400:
        return json.loads(cache.read_text(encoding="utf-8"))
    out, cont, n = {}, {}, 0
    while True:
        q = {"action": "query", "format": "json", "list": "allimages", "aiprefix": prefix, "ailimit": "500",
             "aiprop": "url", **cont}
        j = json.loads(get(API + "?" + urllib.parse.urlencode(q)))
        for im in (j.get("query") or {}).get("allimages", []):
            t = unicodedata.normalize("NFC", im["name"].replace("_", " "))
            m = re.match(r"LL-Q\d+ \([a-z]+\)-(.+?)-(.+)\.(wav|ogg|oga|flac|mp3)$", t)
            if m:
                out.setdefault(m.group(2), []).append([m.group(1), im["url"], im.get("descriptionurl")])
        n += 1
        print(f"  {lang}: {sum(map(len, out.values()))} files after {n} requests")
        if "continue" not in j:
            break
        cont = j["continue"]
        time.sleep(PAUSE)
    cache.write_text(json.dumps(out, ensure_ascii=False), encoding="utf-8")
    return out


def pick(recs, word):
    """One recording of exactly this word; the same choice every run. Speaker names with a
    hyphen make the split ambiguous, so the word must match the end of the file name."""
    hits = sorted((r for r in recs.get(word, [])), key=lambda r: r[0])
    if not hits:
        return None
    speaker, url, page = hits[0]
    return {"speaker": speaker, "url": url, "page": page, "license": "CC BY-SA 4.0"}


def to_mp3(raw, dest):
    """Mono MP3 with the silence at both ends trimmed, so playback starts right away."""
    trim = "silenceremove=start_periods=1:start_threshold=-45dB,areverse,silenceremove=start_periods=1:start_threshold=-45dB,areverse"
    r = subprocess.run(["ffmpeg", "-loglevel", "error", "-y", "-i", "pipe:0", "-af", trim, "-ac", "1", "-ar", "32000",
                        "-codec:a", "libmp3lame", "-b:a", "64k", str(dest)], input=raw, capture_output=True)
    if r.returncode or not dest.exists() or dest.stat().st_size < 500:
        # Trimming can eat a very quiet recording entirely; keep it untrimmed then.
        subprocess.run(["ffmpeg", "-loglevel", "error", "-y", "-i", "pipe:0", "-ac", "1", "-ar", "32000",
                        "-codec:a", "libmp3lame", "-b:a", "64k", str(dest)], input=raw, check=True, capture_output=True)


def main():
    src = (ROOT / "words.js").read_text(encoding="utf-8")
    words = {}
    for w, langs in re.findall(r"\[\s*'([^']+)',\s*'((?:hi|mr)(?: (?:hi|mr))?)'", src):
        langs = langs.split()
        # Phrases: the whole phrase, and each word in it on its own.
        for part in [w] + (re.sub(r"[^\w\sऀ-ॿ]", " ", w).split() if " " in w else []):
            words.setdefault(part, set()).update(langs)
    index_path = AUDIO / "index.json"
    index = json.loads(index_path.read_text(encoding="utf-8")) if index_path.exists() else {}
    if not isinstance(index, dict):
        index = {}
    count = {l: len(list((AUDIO / l).glob("*.mp3"))) if (AUDIO / l).exists() else 0 for l in LANGS}
    todo = [w for w in sorted(words) if not index.get(w)]
    print(f"{len(words)} words, {len(todo)} to look up")
    recs = {}
    for lang in LANGS:
        recs[lang] = all_recordings(lang)
        time.sleep(PAUSE)
    # A speaker name can contain "-", so also index every possible split of the name.
    for lang, table in recs.items():
        for key, items in list(table.items()):
            parts = key.split("-")
            for i in range(1, len(parts)):
                for it in items:
                    table.setdefault("-".join(parts[i:]), []).append([it[0] + "-" + "-".join(parts[:i]), it[1], it[2]])
    for n, w in enumerate(todo, 1):
        got = []
        for lang in ("hi", "mr"):
            hit = pick(recs[lang], unicodedata.normalize("NFC", w))
            if not hit:
                continue
            time.sleep(PAUSE)
            try:
                raw = get(hit["url"])
                (AUDIO / lang).mkdir(parents=True, exist_ok=True)
                name = f"{lang}/{count[lang] + 1:04d}.mp3"
                to_mp3(raw, AUDIO / name)
                count[lang] += 1
            except Exception as e:  # one bad file shouldn't stop the run; it's retried next time
                print(f"  skipped {w} ({lang}): {e}")
                continue
            got.append({"f": name, "lang": lang, "speaker": hit["speaker"], "page": hit["page"], "license": hit["license"]})
        index[w] = got
        print(f"[{n}/{len(todo)}] {w}: " + (", ".join(f"{g['lang']} by {g['speaker']}" for g in got) or "none"))
        if n % 10 == 0 or n == len(todo):
            index_path.write_text(json.dumps(index, ensure_ascii=False, indent=1, sort_keys=True) + "\n", encoding="utf-8")
    index_path.write_text(json.dumps(index, ensure_ascii=False, indent=1, sort_keys=True) + "\n", encoding="utf-8")
    have = sum(1 for v in index.values() if v)
    print(f"Done: {have} of {len(index)} words have a recording.")


if __name__ == "__main__":
    sys.exit(main())
