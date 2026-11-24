# Penmanship Pad

A web app for practicing handwriting on iPad with Apple Pencil. It's one page (`index.html`) plus the stroke-order data for Tutor mode (`strokes.js`).

![Penmanship Pad on iPad in light and dark mode](screenshots/mockup.png)

**Live site:** https://codycodes.github.io/Handwriting/ (after GitHub Pages is turned on, see below)

On iPad, open it in Safari, then tap **Share → Add to Home Screen** to use it full screen like an app.

## Features
- **Cursive** (Playwrite US Trad, a font made for teaching handwriting), **Print** (Andika), and **देवनागरी / Devanagari** (Kalam)
- Ruled lines: ascender line, dashed midline (the headline for Devanagari), baseline, descender line, and a red margin
- Tracing guides drawn as **Outline** (default), **Dotted**, or **Faded** letters
- Example words to start with: *Cody codes*, *cool*, *hello*, *coffee*, and more, plus alphabets and Devanagari (नमस्ते, कोडी कोड्स, consonants, vowels and numerals)
- **Theme:** Auto (follows iPad's setting), Light or Dark
- Practice layouts: Trace (default), Trace + copy, Repeat & fade, and **Tutor**
- **Tutor:** learn how to write each letter, one letter per page.
  - A large model letter on the left draws itself stroke by stroke. Numbered circles show where each stroke starts (1, 2, 3...), and arrows show which way it goes. **Play** on the panel replays it; **Hide** tucks the panel away for more writing room, and the **Aa** tab in the margin brings it back.
  - Trace over the big letter and the panel coaches you live: "Good! Next: stroke 2", "Stroke 2 goes the other way", or "came out of order". Each stroke you write gets a marker with the stroke it matched: green is right, ↺ means backwards, amber means out of order.
  - Beside it are rows of the letter to trace, fading row by row, then a blank row to write it on your own. With Grade on, every letter you write is also checked for stroke order and direction, and that counts toward its score.
  - Letter sets: English a–z, A–Z and 0–9 (print), and Devanagari स्वर (vowels, including अं and अः), व्यंजन (consonants, including क्ष, त्र and ज्ञ) and अंक (numerals). **Custom text** shows the text box (the same text you use in the other modes) and teaches the letters in it.
  - Devanagari follows the order usually taught in Indian schools: the body of the letter first, then the vertical line (खड़ी पाई), then the headline (शिरोरेखा) last. The letter shapes follow the Kalam handwriting font, so a teacher's version may differ a little.
- **Paper:** plain Lines, **Slant** (diagonal guide lines between the rules, like British handwriting paper, to keep every letter leaning the same way) or **Grid** (squared paper lined up with the baseline)
- **Cross-dot margin (× •):** one mark in the left margin on each writing line, alternating × and •
- **Grade:** scores each row as you write. A badge on the row shows the score, and the sheet marks ink that strayed off the letters in red and parts of letters you missed in amber. The summary at the bottom breaks the score down:
  - **Shape:** your ink on the letters, and the letters covered by your ink. Ink within a hair of the letter (about 2 px on the large size) counts fully, a little further out counts half, beyond that it's a miss
  - **Stroke path** (Tutor): strokes written in the right order and the right direction
  - **Smooth lines:** steady strokes without wobble
  - **Straight lines** (Tutor): strokes that should be straight (like the vertical line and headline in Devanagari, or l and t) stay straight
  - **Size & baseline:** letters the same height as the guide, sitting on the same lines
  - **Connected** (Cursive): each word in one stroke, lifting only for dots and crosses (i, j, t, x)

  **Accuracy** is Shape multiplied by the others, so 100% means everything is right. Roughly: a tracing 4 px off scores about 90%, 7 px about 65%.
- **Progress:** when you finish a page (Clear, turn the page, or change the text), its score is saved for that text or letter. The summary then shows how you did against last time (▲ or ▼), your best, and a small chart of recent attempts

  Freehand rows (Trace + copy, and the last row of Repeat & fade) are compared with the line above, lined up with where you started writing.
- **Scroll:** set Fingers to **Scroll** (or tap **Scroll** on the page) and long text like *Happy 70th birthday, Dad* stays on one line; drag with a finger to see the rest. Drag up past the last row to add more rows. A flick keeps the page gliding. The Pencil always writes
- **On-page buttons:** the bottom-right corner of the page has the Scroll switch and the page arrows
- **Full screen:** the corner button hides the toolbar so the sheet fills the screen like a plain page. A small floating bar keeps Undo and Exit (Esc also exits). If Safari drops its own full screen (for example after a swipe near the top edge), the app stays in full-screen layout until you tap Exit. For no Safari bars at all, use **Add to Home Screen**
- **Tips:** a tip bar under the toolbar with advice on grip, posture, letter sizes and stroke order, chosen for the script and mode you're using. Flip through with the arrows, or hide it with × (the **Tips** button brings it back)
- Pressure-sensitive ink, eraser, undo/redo, clear, and 3 ink colors

## Hindi & Marathi
- **Learn** (toolbar) opens a path that ramps up in three stages:
  1. **Letters:** स्वर vowels, व्यंजन consonants and अंक numerals, in Tutor mode
  2. **Words:** 7 levels in the order Devanagari is taught (no vowel signs → ा → ि ी → ु ू → े ै ो ौ → nasal marks → joined letters), plus number words
  3. **Bollywood & culture:** everyday phrases, festival greetings and sayings (Diwali, Holi, Ganeshotsav, Sankranti), and famous film lines from Sholay, Deewaar, DDLJ, 3 Idiots, Sairat and more

  A letter or word is **mastered** when your last 3 tries average 75% or more, and a step is done when 80% of it is mastered. **Continue** takes you to the first step that isn't done, with only the words you haven't mastered yet. Inside a step the layout ramps too: **Trace** at first, **Trace + copy** from 40% mastered, then **Repeat & fade**. Every step stays open, so you can jump ahead.
- Every word shows its **meaning**, which **language** it belongs to (Hindi, Marathi or both, with separate meanings where they differ, like बस: "enough" in Hindi, "sit" in Marathi), and how it **sounds** in Latin letters (IAST style, with the silent "a" dropped the way it's spoken: कमल *kamal*, मुलगा *mulgā*)
- **Meanings** (toolbar) shows a bar above the page with each Devanagari word on it. Tap a word to hear it. Words not in the built-in lists are looked up on Wiktionary
- **Letters and their sounds:** next to each word in that bar, and in the Learn list, the word is split into its letters (a letter with its vowel sign counts as one, so कि is *ki*). Under each letter is how it sounds in that word; grey means its "a" is silent there (घर is *gha* + *r*). Tap a letter to hear it on its own, slowly, and see how to say each part: for example ट is "t" with the tongue tip curled back, थ is त with a puff of air, and ं is a nasal dot. In Tutor mode the same note sits at the top of the big letter
- **Tap a letter on the page** with your finger to open the same card for that letter, on any row with guide letters (Tutor rows too). The Pencil never opens it, and a quick tap in Draw mode doesn't leave a dot. **Practice this letter** on the card switches to just that letter: Tutor, stroke by stroke, when the app has its stroke order, otherwise a row of it to trace (English letters in cursive always get a cursive row)
- **Sound**, best first, with no API keys anywhere:
  1. **Native speakers from [Lingua Libre](https://lingualibre.org)**, saved in this repo under `audio/` so GitHub Pages serves them directly. `audio/index.json` lists each word's Hindi and Marathi recording with the speaker's name and the file's Wikimedia Commons page; the app shows the speaker while it plays (the recordings are CC BY-SA, which asks for that credit). A phrase with no recording of its own plays its words one after another
  2. Words that aren't in the lists (your own text, Anki lists): Lingua Libre is searched live from the iPad
  3. The iPad's Hindi voice. For a better one: **Settings → Accessibility → Spoken Content → Voices → Hindi** and download an Enhanced voice. iPad has no Marathi voice, so Marathi words use the Hindi one

  To save the recordings into the repo, run **Actions → Fetch Lingua Libre recordings → Run workflow** on GitHub (no keys: it uses GitHub's own token to commit). It lists every Hindi and Marathi file on Lingua Libre, matches the words in `words.js`, saves each as a small trimmed MP3 in `audio/`, commits them, and the site redeploys. Run it again after adding words. Until it has run, the app finds the same recordings live from the iPad. Lingua Libre doesn't have every word (about 40% of these have a recording); anyone can record missing ones there, and they'll be picked up next time. You can also run `python3 tools/fetch-lingualibre.py` on your own computer (needs `ffmpeg`)
- **Anki:** **Copy for Anki** or **Save .txt** gives a list Anki imports straight into the Basic note type (Front: the word; Back: how it sounds, meaning and language; Tags: `penmanship::<level>` and the language). **Paste from Anki** takes a *Notes in Plain Text* export (or any list with one word per line, optionally a tab and its meaning) and adds it as your own list

## Write along with a video
**Video** (toolbar) lets you write a Hindi or Marathi YouTube video line by line.
1. **Add a video:** paste its YouTube link, then its transcript in Devanagari. On YouTube, open the description, tap **Show transcript**, pick Hindi or Marathi and copy the lines with their times. `.srt` and `.vtt` subtitle files and plain text work too. Short caption pieces are joined into sentences. You can also paste the **English** transcript: each line gets the English spoken at the same time.
2. **Write along:** the video plays in a small player you can **drag anywhere** by its top bar (**S / M / L** changes its size). The line being spoken becomes the text on the page, and the video **pauses at the end of each line** so you can write it (turn this off with **⏸ line**).
3. While you write along, the **top text box shows the video's name**: tap it to rename the video.
4. Above the page, the line bar shows the Hindi with its **English underneath**. Lines without English are translated by machine when you reach them. **Next** plays the next line, **‹** goes back, and **Lines** lists the whole transcript: tap any line to jump there.

The player has −5 / +5 seconds, previous and next line, speed (1×, 0.75×, 0.5×), and a seek bar. Dragging it to a point also picks the line spoken there. Your place in each video is saved, so it picks up where you left off.

YouTube doesn't let web pages read captions without an API key, which is why you paste the transcript. Videos and transcripts are saved only in Safari on this iPad.

## Translate
**Translate** (toolbar, and on every transcript line) goes between Devanagari and English: Hindi → English, Marathi → English, English → Hindi or English → Marathi. It picks the direction from the script you type. Results show how the Devanagari sounds, with buttons to **Write** it on the page, **Hear** it, or **Copy** it. Single words use the app's own meanings first. Translation is by [MyMemory](https://mymemory.translated.net) (free, no account or key; about 5,000 characters a day per device), and every result is saved so nothing is translated twice.

## Progress over time
Every letter and word you write is scored and saved when you finish its page (Clear, turn the page, change the text, or leave the app), whether **Grade** is on or not. **Progress** (toolbar) shows:
- Totals, your last 7 days against the week before, and your best
- A chart of your daily average accuracy; tap a letter or word in the table for a chart of every attempt at it, and **Practice** to write it again
- A table of every letter or word, weakest first: tries, last, best, the average of your last 5 and its trend

Filter by **Letters** or **Words**, and by English or देवनागरी. Scores stay in the browser's storage on the iPad (`penmanship-pad:log`, one JSON entry per letter or word: time, text, script, mode, accuracy and each criterion). **Export** saves them as a JSON file, and **Import** merges one back in.

## Apple Pencil handling
| Issue on iPad | What the app does |
| --- | --- |
| Telling the Pencil from fingers | Safari reports Apple Pencil as a pen and fingers as touch. **Fingers** sets what a finger does on the page: **Draw** (when the Pencil isn't in use), **Scroll** (the Pencil still writes) or **Off**. Fingers can always tap buttons |
| Palm resting while you write | While the Pencil is writing, hovering, or was lifted less than a second ago, touches are treated as your palm: they don't draw, scroll, or count as a two-finger tap |
| Palm already drawing when the Pencil lands | The Pencil cancels the finger stroke and takes over |
| Palm resting on the toolbar presses buttons | Finger taps on the toolbar are ignored only while the Pencil is mid-stroke |
| Long press brings up the magnifier, text selection or callout menu | Turned off on the writing sheet |
| Pinch and double-tap zoom (Safari ignores `user-scalable=no`) | Blocked with `touch-action` and gesture event handling |
| Fast strokes look jagged | Uses coalesced pointer events where Safari provides them, plus curve smoothing |
| Pencil hover (M2 or later iPad Pro, Pencil Pro) | Shows a small ring where the tip will land |
| Palm or knuckle touches down while you write with a finger | The stroke keeps going; a second finger only counts as a two-finger tap if it lands right as the stroke starts |
| A finger lifts off over the toolbar, or iOS cancels a touch | Tracking resets on the next touch, so fingers never get stuck unable to draw |
| Two-finger tap | Undo, but not within 3 seconds of using the Pencil, so a palm lifting off never undoes your writing |
| Grade on while writing | Only the row you just wrote on is graded again, after the stroke ends, so the Pencil stays responsive however full the page gets |

These are limits of web apps that the app can't change:
- Double-tap and squeeze on the Pencil aren't available to websites.
- Swipes from the screen edges still open Control Center and the Home Screen. In Safari, **Add to Home Screen** gives you the most room.
- The practice-text box is locked until you tap it, so iPad's Scribble can't turn strokes on the page into typed text. Once you tap the box, Scribble works there, which is handy for writing new practice text with the Pencil.

## GitHub Pages
`.github/workflows/pages.yml` deploys this repo to GitHub Pages on every push to `main`, or when you run it by hand from the Actions tab.

One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
