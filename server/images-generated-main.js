const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Cesta ke složce s originálními obrázky
const inputDirPath = 'static/storage/main';
// Cesta ke složce s výstupními obrázky
const outputDirPath = 'static/generated/main';

// Velikosti obrázků
// update 2023-06-28
const sizes = [
    { width: 310, height: null, prefix: "h-" },
    { width: 334, height: null, prefix: "h-" },
    { width: 360, height: null, prefix: "h-" },
    { width: 420, height: null, prefix: "h-" },
    { width: 536, height: null, prefix: "h-" },
    { width: 728, height: null, prefix: "h-" },
    { width: 952, height: null, prefix: "h-" },
    { width: 1180, height: null, prefix: "h-" },
    { width: 1360, height: null, prefix: "h-" },
    { width: 1880, height: null, prefix: "h-" },
    { width: null, height: 320, prefix: "s-" },
    { width: null, height: 344, prefix: "s-" },
    { width: null, height: 370, prefix: "s-" },
    { width: null, height: 430, prefix: "s-" },
    { width: null, height: 556, prefix: "s-" },
    { width: null, height: 738, prefix: "s-" },
    { width: null, height: 962, prefix: "s-" },
    { width: 310 * 2, height: null, prefix: "h-", suffix: "-2x" },
    { width: 334 * 2, height: null, prefix: "h-", suffix: "-2x" },
    { width: 360 * 2, height: null, prefix: "h-", suffix: "-2x" },
    { width: 420 * 2, height: null, prefix: "h-", suffix: "-2x" },
    { width: 536 * 2, height: null, prefix: "h-", suffix: "-2x" },
    { width: 728 * 2, height: null, prefix: "h-", suffix: "-2x" },
    { width: 952 * 2, height: null, prefix: "h-", suffix: "-2x" },
    { width: 1180 * 2, height: null, prefix: "h-", suffix: "-2x" },
    { width: 1360 * 2, height: null, prefix: "h-", suffix: "-2x" },
    { width: 1880 * 2, height: null, prefix: "h-", suffix: "-2x" },
    { width: null, height: 320 * 2, prefix: "s-", suffix: "-2x" },
    { width: null, height: 344 * 2, prefix: "s-", suffix: "-2x" },
    { width: null, height: 370 * 2, prefix: "s-", suffix: "-2x" },
    { width: null, height: 430 * 2, prefix: "s-", suffix: "-2x" },
    { width: null, height: 556 * 2, prefix: "s-", suffix: "-2x" },
    { width: null, height: 738 * 2, prefix: "s-", suffix: "-2x" },
    { width: null, height: 962 * 2, prefix: "s-", suffix: "-2x" }
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
