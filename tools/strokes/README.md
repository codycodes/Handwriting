# Building the Tutor traces

The Devanagari and cursive strokes in `strokes.js` are traced from the fonts themselves, so the
guides line up with the letters on the page:

1. `raster.js` draws each letter with the app's own sizing (x-height = 50 units, baseline at 100)
   and saves it as a bitmap. Needs Playwright and internet for Google Fonts.
2. `skel.py` thins each letter to its centre line (scikit-image).
3. The spec files (`deva_spec.py`, `cur_spec.py`) list each stroke, in teaching order, as a few
   waypoints in letter units. `build.py` snaps them to the centre line and follows it from one
   waypoint to the next, so only the order and direction are hand-made. `('H', x0, x1)` is a
   straight headline, `('V', x)` the vertical line, `('D', x, y)` a ring (anusvara, visarga) and
   `('DOT', x, y)` a small dot (i, j).
4. `emit.py` prints the result in the form `strokes.js` uses.

```bash
pip install scikit-image
node raster.js Gotu 1 deva.json अ आ इ …            # every letter in deva_spec.py
OX=45 node raster.js "Playwrite US Trad" 0 cur.json a b c …
python3 build.py deva_spec deva.json deva_out.json
python3 emit.py deva_out.json > deva_js.txt
```

`zoom.py` draws a letter's centre line on a grid (`BOX=x0,x1,y0,y1 python3 zoom.py deva.json out.png क ख`),
which is the easiest way to read off waypoints for a new letter.
