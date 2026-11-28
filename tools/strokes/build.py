import sys, json, math; sys.path.insert(0, '.')
from skel import *
import importlib
specmod, rasterfile, out = sys.argv[1], sys.argv[2], sys.argv[3]
SPEC = importlib.import_module(specmod).SPEC
K, G = load(rasterfile)
def col_center(m, xg):
    # centre of the vertical bar near xg: columns filled for y 58..92
    best = []
    for x in np.arange(xg-5, xg+5, 1/K):
        px, _ = u2p(K, x, 0)
        y0, y1 = u2p(K, 0, 58)[1], u2p(K, 0, 92)[1]
        if m[y0:y1, px].mean() > 0.97: best.append(x)
    return (min(best)+max(best))/2 if best else xg
def head_y(m, x0, x1):
    ys = []
    for y in np.arange(44, 58, 1/K):
        py = u2p(K, 0, y)[1]
        a, b = u2p(K, x0+3, 0)[0], u2p(K, x1-3, 0)[0]
        if m[py, a:b].mean() > 0.9: ys.append(y)
    return (min(ys)+max(ys))/2 if ys else 51
res = {}
for ch, strokes in SPEC.items():
    m = G[ch]['mask']; sk = skel(m); pts = np.argwhere(sk)
    S = []
    for st in strokes:
        if isinstance(st, tuple):
            if st[0] == 'H':
                S.append([[st[1], 50], [st[2], 50]])
            elif st[0] == 'V':
                x = round(col_center(m, st[1]), 1); S.append([[x, 50], [x, 99]])
            elif st[0] == 'V2':
                S.append([[st[1], st[2]], [st[1], st[3]]])
            elif st[0] == 'DOT':
                _, cx, cy = st; M = np.argwhere(m); U = np.array([p2u(K, c, r) for r, c in M[::7]])
                near = U[np.hypot(U[:,0]-cx, U[:,1]-cy) < 8]; c0 = near.mean(0)
                S.append([[round(c0[0] + 2.2*math.cos(a), 1), round(c0[1] + 2.2*math.sin(a), 1)] for a in np.radians(np.arange(0, 361, 30))])
            elif st[0] == 'D':
                _, cx, cy = st
                U = np.array([p2u(K, c, r) for r, c in pts]); c0 = np.array([cx, cy], float)
                for _ in range(4): near = U[np.hypot(U[:,0]-c0[0], U[:,1]-c0[1]) < 10]; c0 = near.mean(0); r = np.hypot(*(near - c0).T).mean()
                S.append([[round(c0[0] + r*math.cos(a), 1), round(c0[1] + r*math.sin(a), 1)] for a in np.radians(np.arange(-90, -451, -20))])
        else:
            S.append(trace(K, sk, pts, st))
    minx = min(p[0] for s in S for p in s); dx = 2 - minx
    S = [[[round(x+dx, 1), y] for x, y in s] for s in S]
    w = math.ceil(max(p[0] for s in S for p in s) + 2)
    res[ch] = dict(w=w, s=S, dx=round(dx, 2))
json.dump(res, open(out, 'w'), ensure_ascii=False)  # dx: how far the letter was moved so its left edge is at x = 2
print(len(res), sum(len(s) for v in res.values() for s in v['s']), 'points')
