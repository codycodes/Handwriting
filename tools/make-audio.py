#!/usr/bin/env python3
"""Make studio-quality recordings of every Hindi and Marathi word in words.js.

Uses Azure AI Speech neural voices (free tier: 500,000 characters a month, far more than
these lists need). Each word is spoken by a Hindi voice, or by a Marathi voice when the word
is Marathi only, and saved to audio/<n>.mp3. audio/index.json maps each word to its file;
the app plays these first, before Lingua Libre recordings or the iPad's voice.

    export AZURE_SPEECH_KEY=...        # from the Speech resource in the Azure portal
    export AZURE_SPEECH_REGION=eastus  # the resource's region
    python3 tools/make-audio.py        # then commit audio/ and push

Run it again after adding words: files that already exist are kept.
"""
import json, os, re, sys, urllib.request
from pathlib import Path
from xml.sax.saxutils import escape

ROOT = Path(__file__).resolve().parent.parent
VOICES = {"hi": ("hi-IN", "hi-IN-SwaraNeural"), "mr": ("mr-IN", "mr-IN-AarohiNeural")}

key, region = os.environ.get("AZURE_SPEECH_KEY"), os.environ.get("AZURE_SPEECH_REGION")
if not key or not region:
    sys.exit("Set AZURE_SPEECH_KEY and AZURE_SPEECH_REGION first (see the top of this file).")

src = (ROOT / "words.js").read_text(encoding="utf-8")
# Every ['word', 'langs', ...] entry in the lists.
words = {}
for w, langs in re.findall(r"\[\s*'([^']+)',\s*'((?:hi|mr)(?: (?:hi|mr))?)'", src):
    words.setdefault(w, langs.split())

audio = ROOT / "audio"
audio.mkdir(exist_ok=True)
index_path = audio / "index.json"
index = json.loads(index_path.read_text(encoding="utf-8")) if index_path.exists() else {}

url = f"https://{region}.tts.speech.microsoft.com/cognitiveservices/v1"
made = 0
for n, (w, langs) in enumerate(sorted(words.items())):
    if w in index and (audio / index[w]).exists():
        continue
    lang, voice = VOICES["mr" if langs == ["mr"] else "hi"]
    ssml = (f'<speak version="1.0" xml:lang="{lang}"><voice name="{voice}">'
            f'<prosody rate="-15%">{escape(w)}</prosody></voice></speak>')
    req = urllib.request.Request(url, data=ssml.encode("utf-8"), headers={
        "Ocp-Apim-Subscription-Key": key,
        "Content-Type": "application/ssml+xml",
        "X-Microsoft-OutputFormat": "audio-24khz-96kbitrate-mono-mp3",
        "User-Agent": "penmanship-pad",
    })
    name = f"w{len(index) + 1:04d}.mp3"
    with urllib.request.urlopen(req) as r:
        (audio / name).write_bytes(r.read())
    index[w] = name
    made += 1
    print(f"{w} -> {name} ({voice})")

index_path.write_text(json.dumps(index, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
print(f"Made {made} new recordings; {len(index)} in audio/index.json.")
