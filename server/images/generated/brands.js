const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Cesta ke složce s originálními obrázky
const inputDirPath = 'static/storage/brands';
// Cesta ke složce s výstupními obrázky
const outputDirPath = 'static/generated/brands';

// Velikosti obrázků
// update 2023-06-28
const sizes = [
    { width: 330, height: null, prefix: "h-" },
    { width: 360, height: null, prefix: "h-" },
    { width: 420, height: null, prefix: "h-" },
    { width: 536, height: null, prefix: "h-" },
    { width: 728, height: null, prefix: "h-" },
    { width: 780, height: null, prefix: "h-" },
    { width: 900, height: null, prefix: "h-" },
    { width: 952, height: null, prefix: "h-" },
    { width: 1248, height: null, prefix: "h-" },
    { width: null, height: 172, prefix: "s-" },
    { width: null, height: 186, prefix: "s-" },
    { width: null, height: 210, prefix: "s-" },
    { width: null, height: 224, prefix: "s-" },
    { width: null, height: 240, prefix: "s-" },
    { width: null, height: 274, prefix: "s-" },
    { width: null, height: 306, prefix: "s-" },
    { width: null, height: 360, prefix: "s-" },
    { width: 330 * 2, height: null, prefix: "h-", suffix: "-2x" },
    { width: 360 * 2, height: null, prefix: "h-", suffix: "-2x" },
    { width: 420 * 2, height: null, prefix: "h-", suffix: "-2x" },
    { width: 536 * 2, height: null, prefix: "h-", suffix: "-2x" },
    { width: 728 * 2, height: null, prefix: "h-", suffix: "-2x" },
    { width: 780 * 2, height: null, prefix: "h-", suffix: "-2x" },
    { width: 900 * 2, height: null, prefix: "h-", suffix: "-2x" },
    { width: 952 * 2, height: null, prefix: "h-", suffix: "-2x" },
    { width: 1248 * 2, height: null, prefix: "h-", suffix: "-2x" },
    { width: null, height: 172 * 2, prefix: "s-", suffix: "-2x" },
    { width: null, height: 186 * 2, prefix: "s-", suffix: "-2x" },
    { width: null, height: 210 * 2, prefix: "s-", suffix: "-2x" },
    { width: null, height: 224 * 2, prefix: "s-", suffix: "-2x" },
    { width: null, height: 240 * 2, prefix: "s-", suffix: "-2x" },
    { width: null, height: 274 * 2, prefix: "s-", suffix: "-2x" },
    { width: null, height: 306 * 2, prefix: "s-", suffix: "-2x" },
    { width: null, height: 360 * 2, prefix: "s-", suffix: "-2x" }
];

// ____________________________________________
// Funkce pro změnu velikosti a uložení obrázku
const resizeAndSaveImage = async (inputPath, outputPath, width, height) => {
	// Načtení obrázku pomocí sharp
	const image = sharp(inputPath);
	// Změna velikosti obrázku
	const resizedImage = await image.resize({ width: width, height: height, fit: 'contain' }).webp({ quality: 80 });
	// Uložení obrázku
	await resizedImage.toFile(outputPath);
};

// Získání seznamu obrázků v adresáři inputDirPath
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
		// Převedení připony na malé písmena
		const ext = path.extname(file).toLowerCase();

		if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
			// Výběr existujícího souboru z adresáře
			const originalImagePath = path.join(inputDirPath, file);

			// Vytvoření kopie v původní velikosti ve formátu webp
			const originalOutputPath = path.join(outputDirPath, `${path.parse(file).name}.webp`);
			await resizeAndSaveImage(originalImagePath, originalOutputPath, null, null, '');

			// Vytvoření dalších verzí s novými velikostmi a přidáním prefixu a suffixu
			for (const sizeObj of sizes) {
				const width = sizeObj.width;
				const height = sizeObj.height;
				const prefix = sizeObj.prefix || '';
				const suffix = sizeObj.suffix || '';
				const outputImagePath = path.join(outputDirPath, `${prefix}${path.parse(file).name}-${width ? width : height}${suffix}.webp`);
				await resizeAndSaveImage(originalImagePath, outputImagePath, width, height);
			}
		}
	}
});