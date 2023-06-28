const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Cesta ke složce s originálními obrázky
const inputDirPath = 'static/storage/world/regions';
// Cesta ke složce s výstupními obrázky
const outputDirPath = 'static/generated/world/regions';

// Velikosti obrázků
// update 2023-06-28
const sizes = [
  { width: 108, height: null, prefix: "h-" },
  { width: 126, height: null, prefix: "h-" },
  { width: 172, height: null, prefix: "h-" },
  { width: 192, height: null, prefix: "h-" },
  { width: 220, height: null, prefix: "h-" },
  { width: 258, height: null, prefix: "h-" },
  { width: 286, height: null, prefix: "h-" },
  { width: 312, height: null, prefix: "h-" },
  { width: 334, height: null, prefix: "h-" },
  { width: 360, height: null, prefix: "h-" },
  { width: 380, height: null, prefix: "h-" },
  { width: 420, height: null, prefix: "h-" },
  { width: 440, height: null, prefix: "h-" },
  { width: 468, height: null, prefix: "h-" },
  { width: 536, height: null, prefix: "h-" },
  { width: 614, height: null, prefix: "h-" },
  { width: 728, height: null, prefix: "h-" },
  { width: 780, height: null, prefix: "h-" },
  { width: 900, height: null, prefix: "h-" },
  { width: 952, height: null, prefix: "h-" },
  { width: 1248, height: null, prefix: "h-" },
  { width: null, height: 226, prefix: "v-" },
  { width: null, height: 264, prefix: "v-" },
  { width: null, height: 314, prefix: "v-" },
  { width: null, height: 332, prefix: "v-" },
  { width: null, height: 354, prefix: "v-" },
  { width: null, height: 380, prefix: "v-" },
  { width: null, height: 424, prefix: "v-" },
  { width: null, height: 50, prefix: "s-" },
  { width: null, height: 70, prefix: "s-" },
  { width: null, height: 166, prefix: "s-" },
  { width: null, height: 186, prefix: "s-" },
  { width: null, height: 210, prefix: "s-" },
  { width: null, height: 224, prefix: "s-" },
  { width: null, height: 240, prefix: "s-" },
  { width: null, height: 256, prefix: "s-" },
  { width: null, height: 274, prefix: "s-" },
  { width: null, height: 306, prefix: "s-" },
  { width: null, height: 360, prefix: "s-" },
  { width: 108 * 2, height: null, prefix: "h-", suffix: "-2x" },
  { width: 126 * 2, height: null, prefix: "h-", suffix: "-2x" },
  { width: 172 * 2, height: null, prefix: "h-", suffix: "-2x" },
  { width: 192 * 2, height: null, prefix: "h-", suffix: "-2x" },
  { width: 220 * 2, height: null, prefix: "h-", suffix: "-2x" },
  { width: 258 * 2, height: null, prefix: "h-", suffix: "-2x" },
  { width: 286 * 2, height: null, prefix: "h-", suffix: "-2x" },
  { width: 312 * 2, height: null, prefix: "h-", suffix: "-2x" },
  { width: 334 * 2, height: null, prefix: "h-", suffix: "-2x" },
  { width: 360 * 2, height: null, prefix: "h-", suffix: "-2x" },
  { width: 380 * 2, height: null, prefix: "h-", suffix: "-2x" },
  { width: 420 * 2, height: null, prefix: "h-", suffix: "-2x" },
  { width: 440 * 2, height: null, prefix: "h-", suffix: "-2x" },
  { width: 468 * 2, height: null, prefix: "h-", suffix: "-2x" },
  { width: 536 * 2, height: null, prefix: "h-", suffix: "-2x" },
  { width: 614 * 2, height: null, prefix: "h-", suffix: "-2x" },
  { width: 728 * 2, height: null, prefix: "h-", suffix: "-2x" },
  { width: 780 * 2, height: null, prefix: "h-", suffix: "-2x" },
  { width: 900 * 2, height: null, prefix: "h-", suffix: "-2x" },
  { width: 952 * 2, height: null, prefix: "h-", suffix: "-2x" },
  { width: 1248 * 2, height: null, prefix: "h-", suffix: "-2x" },
  { width: null, height: 226 * 2, prefix: "v-", suffix: "-2x" },
  { width: null, height: 264 * 2, prefix: "v-", suffix: "-2x" },
  { width: null, height: 314 * 2, prefix: "v-", suffix: "-2x" },
  { width: null, height: 332 * 2, prefix: "v-", suffix: "-2x" },
  { width: null, height: 354 * 2, prefix: "v-", suffix: "-2x" },
  { width: null, height: 380 * 2, prefix: "v-", suffix: "-2x" },
  { width: null, height: 424 * 2, prefix: "v-", suffix: "-2x" },
  { width: null, height: 50 * 2, prefix: "s-", suffix: "-2x" },
  { width: null, height: 70 * 2, prefix: "s-", suffix: "-2x" },
  { width: null, height: 166 * 2, prefix: "s-", suffix: "-2x" },
  { width: null, height: 186 * 2, prefix: "s-", suffix: "-2x" },
  { width: null, height: 210 * 2, prefix: "s-", suffix: "-2x" },
  { width: null, height: 224 * 2, prefix: "s-", suffix: "-2x" },
  { width: null, height: 240 * 2, prefix: "s-", suffix: "-2x" },
  { width: null, height: 256 * 2, prefix: "s-", suffix: "-2x" },
  { width: null, height: 274 * 2, prefix: "s-", suffix: "-2x" },
  { width: null, height: 306 * 2, prefix: "s-", suffix: "-2x" },
  { width: null, height: 360 * 2, prefix: "s-", suffix: "-2x" }
];

// Funkce pro změnu velikosti a uložení obrázku
const resizeAndSaveImage = async (inputPath, outputPath, width, height, suffix) => {
  // Načtení obrázku pomocí sharp
  const image = sharp(inputPath);
  // Změna velikosti obrázku
  const resizedImage = await image.resize({ width: width, height: height, fit: 'contain' }).webp({ quality: 80 });
  // Uložení obrázku na disk
  await resizedImage.toFile(outputPath);
};

// Získání seznamu souborů v input složce
fs.readdir(inputDirPath, async (err, files) => {
  if (err) {
    console.error(`Error reading input directory: ${err}`);
    return;
  }
  
  // Vytvoření output složky, pokud neexistuje
  if (!fs.existsSync(outputDirPath)) {
    fs.mkdirSync(outputDirPath);
  }

  // Změna velikosti a uložení každého souboru
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
      const originalImagePath = path.join(inputDirPath, file);
      // Vytvoření kopie v původní velikosti a formátu webp
      const originalOutputPath = path.join(outputDirPath, `${path.parse(file).name}.webp`);
      await resizeAndSaveImage(originalImagePath, originalOutputPath, null, null, '');
      // Vytvoření dalších verzí s novými velikostmi a přidáním prefixu a suffixu
      for (const sizeObj of sizes) {
        const width = sizeObj.width;
        const height = sizeObj.height;
        const prefix = sizeObj.prefix || '';
        const suffix = sizeObj.suffix || '';
        const outputImagePath = path.join(outputDirPath, `${prefix}${path.parse(file).name}-${width}${suffix}.webp`);
        await resizeAndSaveImage(originalImagePath, outputImagePath, width, height, suffix);
      }
    }
  }
});
