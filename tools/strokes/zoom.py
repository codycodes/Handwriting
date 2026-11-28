import sys; sys.path.insert(0, '.')
from skel import *
file, out = sys.argv[1], sys.argv[2]; chars = sys.argv[3:]
import os; X0, X1, Y0, Y1 = [int(v) for v in os.environ.get("BOX", "-5,90,15,115").split(",")]
K, G = load(file); S = 5
cw, chh = (X1-X0)*S, (Y1-Y0)*S; cols = 3
img = Image.new('RGB', (cols*cw, ((len(chars)+cols-1)//cols)*chh), 'white'); dr = ImageDraw.Draw(img)
f = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 12)
for i, ch in enumerate(chars):
    m = G[ch]['mask']; sk = skel(m); ox, oy = (i%cols)*cw, (i//cols)*chh
    for gx in range(X0, X1, 5):
        X = ox+(gx-X0)*S; dr.line([(X, oy), (X, oy+chh)], fill=(255,170,170) if gx%10==0 else (238,238,238))
        if gx % 10 == 0: dr.text((X+1, oy+chh-14), str(gx), fill=(200,0,0), font=f)
    for gy in range(Y0, Y1, 5):
        Y = oy+(gy-Y0)*S; dr.line([(ox, Y), (ox+cw, Y)], fill=(255,170,170) if gy%10==0 else (238,238,238))
        if gy % 10 == 0: dr.text((ox+1, Y+1), str(gy), fill=(200,0,0), font=f)
    for arr, col, step in ((m, (195,210,245), 1), (sk, (0,0,0), 1)):
        ys, xs = np.nonzero(arr)
        for y, x in zip(ys, xs):
            ux, uy = p2u(K, x, y)
            if X0 <= ux < X1 and Y0 <= uy < Y1:
                img.putpixel((ox+int((ux-X0)*S), oy+int((uy-Y0)*S)), col)
    dr.text((ox+cw-40, oy+4), ch, fill=(0,0,0), font=f)
    dr.rectangle([ox, oy, ox+cw-1, oy+chh-1], outline=(90,90,90))
img.save(out)
