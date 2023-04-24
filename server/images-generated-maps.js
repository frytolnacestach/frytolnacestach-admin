const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Cesta ke složce s originálními obrázky
const inputDirPath = 'static/storage/maps';
// Cesta ke složce s výstupními obrázky
const outputDirPath = 'static/generated/maps';

// Velikosti obrázků
const sizes = [
    { width: 300, height: null },
    { width: 340, height: null },
    { width: 420, height: null },
    { width: 550, height: null },
    { width: 740, height: null },
    { width: 980, height: null },
    { width: 300 * 2, height: null, suffix: "-2x" },
    { width: 340 * 2, height: null, suffix: "-2x" },
    { width: 420 * 2, height: null, suffix: "-2x" },
    { width: 550 * 2, height: null, suffix: "-2x" },
    { width: 740 * 2, height: null, suffix: "-2x" },
    { width: 980 * 2, height: null, suffix: "-2x" }
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
