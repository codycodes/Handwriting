"""Print a stroke table (JSON from build.py) as the lines that go inside `const deva = {...}`
or `const cursive = {...}` in strokes.js.   python3 emit.py deva_out.json > deva_js.txt"""
import json, sys
for ch, g in json.load(open(sys.argv[1])).items():
    s = '[' + ', '.join('[' + ','.join(f'[{x:g},{y:g}]' for x, y in st) + ']' for st in g['s']) + ']'
    print(f"    '{ch}': {{ w: {g['w']}, s: {s} }},")
