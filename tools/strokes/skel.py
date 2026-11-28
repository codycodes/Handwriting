import warnings; warnings.filterwarnings("ignore")
import json, sys, heapq, numpy as np
from skimage.morphology import skeletonize, binary_closing, disk
from PIL import Image, ImageDraw, ImageFont

def load(file):
    global OX
    r = json.load(open(file)); K = r['K']; OX = r.get('ox', 20); G = {}
    for ch, v in r['out'].items():
        m = np.array([[c == '1' for c in row] for row in v['rows']])
        G[ch] = dict(mask=m, adv=v['adv'])
    return K, G

def skel(m):
    m = binary_closing(m, disk(2))
    return skeletonize(m)

OX = 20
def u2p(K, x, y): return (int(round((x + OX) * K)), int(round((y + 40) * K)))
def p2u(K, px, py): return ((px / K) - OX, (py / K) - 40)

NB = [(-1,-1),(-1,0),(-1,1),(0,-1),(0,1),(1,-1),(1,0),(1,1)]
def nearest(sk, pts, x, y):
    d = (pts[:,0]-y)**2 + (pts[:,1]-x)**2
    i = int(np.argmin(d)); return tuple(pts[i])
def route(sk, a, b):
    # Dijkstra on skeleton pixels (row, col)
    dist = {a: 0}; prev = {}; h = [(0, a)]
    H, W = sk.shape
    while h:
        d, u = heapq.heappop(h)
        if u == b: break
        if d > dist.get(u, 1e18): continue
        for dy, dx in NB:
            v = (u[0]+dy, u[1]+dx)
            if 0 <= v[0] < H and 0 <= v[1] < W and sk[v]:
                nd = d + (1.4142 if dy and dx else 1)
                if nd < dist.get(v, 1e18): dist[v] = nd; prev[v] = u; heapq.heappush(h, (nd, v))
    if b not in dist: return None
    path = [b]
    while path[-1] != a: path.append(prev[path[-1]])
    return path[::-1]

def rdp(pts, eps):
    if len(pts) < 3: return pts
    a, b = np.array(pts[0]), np.array(pts[-1]); ab = b - a; L = np.hypot(*ab)
    P = np.array(pts)
    if L == 0: d = np.hypot(*(P - a).T)
    else: d = np.abs(ab[0]*(P[:,1]-a[1]) - ab[1]*(P[:,0]-a[0])) / L
    i = int(np.argmax(d))
    if d[i] > eps: return rdp(pts[:i+1], eps)[:-1] + rdp(pts[i:], eps)
    return [pts[0], pts[-1]]

def smooth(pts, n=2):
    P = np.array(pts, float)
    for _ in range(n):
        Q = P.copy(); Q[1:-1] = (P[:-2] + 2*P[1:-1] + P[2:]) / 4; P = Q
    return P.tolist()

def trace(K, sk, pts, wps):
    """wps: list of (x,y) units; returns list of [x,y] units following skeleton."""
    snapped = [nearest(sk, pts, *u2p(K, x, y)) for x, y in wps]
    out = []
    for a, b in zip(snapped, snapped[1:]):
        p = route(sk, a, b)
        if p is None: p = [a, b]
        out += p if not out else p[1:]
    if len(snapped) == 1: out = snapped
    U = [p2u(K, c, r) for r, c in out]
    U = smooth(U, 3)
    U = rdp(U, 0.35)
    return [[round(x, 1), round(y, 1)] for x, y in U]
