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
  - Letter sets: English a–z, A–Z and 0–9 (print), and Devanagari स्वर (vowels, including अं and अः), व्यंजन (consonants, including क्ष, त्र and ज्ञ) and अंक (numerals). **Letters from my text** picks out the letters in your practice text.
  - Devanagari follows the order usually taught in Indian schools: the body of the letter first, then the vertical line (खड़ी पाई), then the headline (शिरोरेखा) last. The letter shapes follow the Kalam handwriting font, so a teacher's version may differ a little.
- **Paper:** plain Lines, **Slant** (diagonal guide lines between the rules, like British handwriting paper, to keep every letter leaning the same way) or **Grid** (squared paper lined up with the baseline)
- **Cross-dot margin (× •):** one mark in the left margin on each writing line, alternating × and •
- **Grade:** scores each row as you write. A badge on the row shows the score, and the sheet marks ink that strayed off the letters in red and parts of letters you missed in amber. The summary at the bottom gives:
  - **On the letters:** how much of your ink lands on the guide letters
  - **Letters covered:** how much of the guide letters your ink went over
  - **Accuracy:** the balance of the two, so scribbling everywhere or tracing only one letter both score low
  - **Stroke order & direction** (Tutor mode): how many strokes were written in the right order and the right way

  Grading is strict on purpose. Ink within a hair of the letter (about 2 px on the large size) counts fully, ink a little further out counts half, and beyond that it counts as a miss. Roughly: 4 px off scores about 90%, 7 px about 65%. 100% takes careful writing.

  Freehand rows (Trace + copy, and the last row of Repeat & fade) are compared with the line above, lined up with where you started writing.
- **Full screen:** the corner button hides the toolbar so the sheet fills the screen like a plain page. A small floating bar keeps Undo, page arrows and Exit (Esc also exits). If Safari drops its own full screen (for example after a swipe near the top edge), the app stays in full-screen layout until you tap Exit. For no Safari bars at all, use **Add to Home Screen**
- **Tips:** a tip bar under the toolbar with advice on grip, posture, letter sizes and stroke order, chosen for the script and mode you're using. Flip through with the arrows, or hide it with × (the **Tips** button brings it back)
- Pressure-sensitive ink, eraser, undo/redo, clear, and 3 ink colors

## Apple Pencil handling
| Issue on iPad | What the app does |
| --- | --- |
| Telling the Pencil from fingers | Safari reports Apple Pencil as a pen and fingers as touch. With **Pencil only** on, fingers never draw on the page, but they can still tap buttons. With it off, both draw |
| Palm already drawing when the Pencil lands | The Pencil cancels the finger stroke and takes over |
| Palm resting on the toolbar presses buttons | Finger taps on the toolbar are ignored only while the Pencil is mid-stroke |
| Long press brings up the magnifier, text selection or callout menu | Turned off on the writing sheet |
| Pinch and double-tap zoom (Safari ignores `user-scalable=no`) | Blocked with `touch-action` and gesture event handling |
| Fast strokes look jagged | Uses coalesced pointer events where Safari provides them, plus curve smoothing |
| Pencil hover (M2 or later iPad Pro, Pencil Pro) | Shows a small ring where the tip will land |
| Palm or knuckle touches down while you write with a finger | The stroke keeps going; a second finger only counts as a two-finger tap if it lands right as the stroke starts |
| A finger lifts off over the toolbar, or iOS cancels a touch | Tracking resets on the next touch, so fingers never get stuck unable to draw |
| Two-finger tap | Undo |

These are limits of web apps that the app can't change:
- Double-tap and squeeze on the Pencil aren't available to websites.
- Swipes from the screen edges still open Control Center and the Home Screen. In Safari, **Add to Home Screen** gives you the most room.
- The practice-text box is locked until you tap it, so iPad's Scribble can't turn strokes on the page into typed text. Once you tap the box, Scribble works there, which is handy for writing new practice text with the Pencil.

## GitHub Pages
`.github/workflows/pages.yml` deploys this repo to GitHub Pages on every push to `main`, or when you run it by hand from the Actions tab.

One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
