const { chromium } = require('playwright'); const fs = require('fs');
(async () => {
  const [fam, deva, file, ...chars] = process.argv.slice(2);
  const b = await chromium.launch(); const p = await b.newPage();
  await p.goto('file://' + __dirname + '/raster.html');
  const r = await p.evaluate(([f, c, d, o]) => raster(f, c, d, 6, o), [fam, chars, deva === '1', +(process.env.OX || 20)]);
  fs.writeFileSync(file, JSON.stringify(r)); await b.close();
})();
