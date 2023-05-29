const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Cesta ke složce s originálními obrázky
const inputDirPath = 'static/storage/fauna';
// Cesta ke složce s výstupními obrázky
const outputDirPath = 'static/generated/fauna';

// Velikosti obrázků
const sizes = [
    { width: 180, height: null },
    { width: 220, height: null },
    { width: 250, height: null },
    { width: 280, height: null },
    { width: 345, height: null },
    { width: 360, height: null },
    { width: 374, height: null },
    { width: 380, height: null },
    { width: 390, height: null },
    { width: 540, height: null },
    { width: 575, height: null },
    { width: 767, height: null },
    { width: 991, height: null },
    { width: 1139, height: null },
    { width: 1219, height: null },
    { width: 1399, height: null },
    { width: 1920, height: null },
    { width: 180 * 2, height: null, suffix: "-2x" },
    { width: 220 * 2, height: null, suffix: "-2x" },
    { width: 250 * 2, height: null, suffix: "-2x" },
    { width: 280 * 2, height: null, suffix: "-2x" },
    { width: 345 * 2, height: null, suffix: "-2x" },
    { width: 360 * 2, height: null, suffix: "-2x" },
    { width: 374 * 2, height: null, suffix: "-2x" },
    { width: 380 * 2, height: null, suffix: "-2x" },
    { width: 390 * 2, height: null, suffix: "-2x" },
    { width: 540 * 2, height: null, suffix: "-2x" },
    { width: 575 * 2, height: null, suffix: "-2x" },
    { width: 767 * 2, height: null, suffix: "-2x" },
    { width: 991 * 2, height: null, suffix: "-2x" },
    { width: 1139 * 2, height: null, suffix: "-2x" },
    { width: 1219 * 2, height: null, suffix: "-2x" },
    { width: 1399 * 2, height: null, suffix: "-2x" },
    { width: 1920 * 2, height: null, suffix: "-2x" }
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
      // Vytvoření dalších verzí s novými velikostmi a přidáním suffixu
      for (const sizeObj of sizes) {
        const width = sizeObj.width;
        const height = sizeObj.height;
        const suffix = sizeObj.suffix || '';
        const outputImagePath = path.join(outputDirPath, `${path.parse(file).name}-${width}${suffix}.webp`);
        await resizeAndSaveImage(originalImagePath, outputImagePath, width, height, suffix);
      }
    }
  }
});
