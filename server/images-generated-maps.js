const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Cesta ke složce s originálními obrázky
const inputDirPath = 'static/storage/maps';
// Cesta ke složce s výstupními obrázky
const outputDirPath = 'static/generated/maps';

// Velikosti obrázků
// update 2023-06-28
const sizes = [
  { width: 320, height: null, prefix: "h-" },
  { width: 344, height: null, prefix: "h-" },
  { width: 370, height: null, prefix: "h-" },
  { width: 430, height: null, prefix: "h-" },
  { width: 546, height: null, prefix: "h-" },
  { width: 738, height: null, prefix: "h-" },
  { width: 962, height: null, prefix: "h-" },
  { width: 320 * 2, height: null, prefix: "h-", suffix: "-2x" },
  { width: 344 * 2, height: null, prefix: "h-", suffix: "-2x" },
  { width: 370 * 2, height: null, prefix: "h-", suffix: "-2x" },
  { width: 430 * 2, height: null, prefix: "h-", suffix: "-2x" },
  { width: 546 * 2, height: null, prefix: "h-", suffix: "-2x" },
  { width: 738 * 2, height: null, prefix: "h-", suffix: "-2x" },
  { width: 962 * 2, height: null, prefix: "h-", suffix: "-2x" },
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
        const outputImagePath = path.join(outputDirPath, `${prefix}${path.parse(file).name}-${width ? width : height}${suffix}.webp`);
        await resizeAndSaveImage(originalImagePath, outputImagePath, width, height, suffix);
      }
    }
  }
});
