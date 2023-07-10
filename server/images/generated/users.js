const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Cesta ke složce s originálními obrázky
const inputDirPath = 'static/storage/users';
// Cesta ke složce s výstupními obrázky
const outputDirPath = 'static/generated/users';

// Velikosti obrázků
// update 2023-06-28
const sizes = [
    { width: 186, height: null, prefix: "s-" },
    { width: 230, height: null, prefix: "s-" },
    { width: 256, height: null, prefix: "s-" },
    { width: 274, height: null, prefix: "s-" },
    { width: 360, height: null, prefix: "s-" },
    { width: 186 * 2, height: null, prefix: "s-", suffix: "-2x" },
    { width: 230 * 2, height: null, prefix: "s-", suffix: "-2x" },
    { width: 256 * 2, height: null, prefix: "s-", suffix: "-2x" },
    { width: 274 * 2, height: null, prefix: "s-", suffix: "-2x" },
    { width: 360 * 2, height: null, prefix: "s-", suffix: "-2x" }
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