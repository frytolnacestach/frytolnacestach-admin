const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Cesta ke složce s originálními obrázky
const inputDirPath = 'static/storage/main';
// Cesta ke složce s výstupními obrázky
const outputDirPath = 'static/generated/main';

// Velikosti obrázků
const sizes = [
    { width: 100, height: null, prefix: "h-" },
	{ width: 108, height: null, prefix: "h-" },
	{ width: 126, height: null, prefix: "h-" },
	{ width: 172, height: null, prefix: "h-" },
	{ width: 192, height: null, prefix: "h-" },
	{ width: 220, height: null, prefix: "h-" },
	{ width: 258, height: null, prefix: "h-" },
	{ width: 286, height: null, prefix: "h-" },
	{ width: 310, height: null, prefix: "h-" },
	{ width: 312, height: null, prefix: "h-" },
	{ width: 320, height: null, prefix: "h-" },
	{ width: 330, height: null, prefix: "h-" },
	{ width: 334, height: null, prefix: "h-" },
	{ width: 340, height: null, prefix: "h-" },
	{ width: 344, height: null, prefix: "h-" },
	{ width: 360, height: null, prefix: "h-" },
	{ width: 370, height: null, prefix: "h-" },
	{ width: 380, height: null, prefix: "h-" },
	{ width: 384, height: null, prefix: "h-" },
	{ width: 420, height: null, prefix: "h-" },
	{ width: 430, height: null, prefix: "h-" },
	{ width: 440, height: null, prefix: "h-" },
	{ width: 442, height: null, prefix: "h-" },
	{ width: 468, height: null, prefix: "h-" },
	{ width: 536, height: null, prefix: "h-" },
	{ width: 546, height: null, prefix: "h-" },
	{ width: 614, height: null, prefix: "h-" },
	{ width: 620, height: null, prefix: "h-" },
	{ width: 728, height: null, prefix: "h-" },
	{ width: 738, height: null, prefix: "h-" },
	{ width: 780, height: null, prefix: "h-" },
	{ width: 900, height: null, prefix: "h-" },
	{ width: 952, height: null, prefix: "h-" },
	{ width: 962, height: null, prefix: "h-" },
	{ width: 980, height: null, prefix: "h-" },
	{ width: 1180, height: null, prefix: "h-" },
	{ width: 1248, height: null, prefix: "h-" },
	{ width: 1360, height: null, prefix: "h-" },
	{ width: 1880, height: null, prefix: "h-" },
	{ width: null, height: 226, prefix: "v-" },
	{ width: null, height: 264, prefix: "v-" },
	{ width: null, height: 314, prefix: "v-" },
	{ width: null, height: 332, prefix: "v-" },
	{ width: null, height: 354, prefix: "v-" },
	{ width: null, height: 380, prefix: "v-" },
	{ width: null, height: 424, prefix: "v-" },
	{ width: null, height: 40, prefix: "s-" },
	{ width: null, height: 50, prefix: "s-" },
	{ width: null, height: 70, prefix: "s-" },
	{ width: null, height: 166, prefix: "s-" },
	{ width: null, height: 172, prefix: "s-" },
	{ width: null, height: 186, prefix: "s-" },
	{ width: null, height: 210, prefix: "s-" },
	{ width: null, height: 224, prefix: "s-" },
	{ width: null, height: 230, prefix: "s-" },
	{ width: null, height: 240, prefix: "s-" },
	{ width: null, height: 256, prefix: "s-" },
	{ width: null, height: 274, prefix: "s-" },
	{ width: null, height: 306, prefix: "s-" },
	{ width: null, height: 320, prefix: "s-" },
	{ width: null, height: 344, prefix: "s-" },
	{ width: null, height: 360, prefix: "s-" },
	{ width: null, height: 370, prefix: "s-" },
	{ width: null, height: 430, prefix: "s-" },
	{ width: null, height: 556, prefix: "s-" },
	{ width: null, height: 738, prefix: "s-" },
	{ width: null, height: 962, prefix: "s-" },
	{ width: 100 * 2, height: null, prefix: "h-", suffix: "-2x" },
	{ width: 108 * 2, height: null, prefix: "h-", suffix: "-2x" },
	{ width: 126 * 2, height: null, prefix: "h-", suffix: "-2x" },
	{ width: 172 * 2, height: null, prefix: "h-", suffix: "-2x" },
	{ width: 192 * 2, height: null, prefix: "h-", suffix: "-2x" },
	{ width: 220 * 2, height: null, prefix: "h-", suffix: "-2x" },
	{ width: 258 * 2, height: null, prefix: "h-", suffix: "-2x" },
	{ width: 286 * 2, height: null, prefix: "h-", suffix: "-2x" },
	{ width: 310 * 2, height: null, prefix: "h-", suffix: "-2x" },
	{ width: 312 * 2, height: null, prefix: "h-", suffix: "-2x" },
	{ width: 320 * 2, height: null, prefix: "h-", suffix: "-2x" },
	{ width: 330 * 2, height: null, prefix: "h-", suffix: "-2x" },
	{ width: 334 * 2, height: null, prefix: "h-", suffix: "-2x" },
	{ width: 340 * 2, height: null, prefix: "h-", suffix: "-2x" },
	{ width: 344 * 2, height: null, prefix: "h-", suffix: "-2x" },
	{ width: 360 * 2, height: null, prefix: "h-", suffix: "-2x" },
	{ width: 370 * 2, height: null, prefix: "h-", suffix: "-2x" },
	{ width: 380 * 2, height: null, prefix: "h-", suffix: "-2x" },
	{ width: 384 * 2, height: null, prefix: "h-", suffix: "-2x" },
	{ width: 420 * 2, height: null, prefix: "h-", suffix: "-2x" },
	{ width: 430 * 2, height: null, prefix: "h-", suffix: "-2x" },
	{ width: 440 * 2, height: null, prefix: "h-", suffix: "-2x" },
	{ width: 442 * 2, height: null, prefix: "h-", suffix: "-2x" },
	{ width: 468 * 2, height: null, prefix: "h-", suffix: "-2x" },
	{ width: 536 * 2, height: null, prefix: "h-", suffix: "-2x" },
	{ width: 546 * 2, height: null, prefix: "h-", suffix: "-2x" },
	{ width: 614 * 2, height: null, prefix: "h-", suffix: "-2x" },
	{ width: 620 * 2, height: null, prefix: "h-", suffix: "-2x" },
	{ width: 728 * 2, height: null, prefix: "h-", suffix: "-2x" },
	{ width: 738 * 2, height: null, prefix: "h-", suffix: "-2x" },
	{ width: 780 * 2, height: null, prefix: "h-", suffix: "-2x" },
	{ width: 900 * 2, height: null, prefix: "h-", suffix: "-2x" },
	{ width: 952 * 2, height: null, prefix: "h-", suffix: "-2x" },
	{ width: 962 * 2, height: null, prefix: "h-", suffix: "-2x" },
	{ width: 980 * 2, height: null, prefix: "h-", suffix: "-2x" },
	{ width: 1180 * 2, height: null, prefix: "h-", suffix: "-2x" },
	{ width: 1248 * 2, height: null, prefix: "h-", suffix: "-2x" },
	{ width: 1360 * 2, height: null, prefix: "h-", suffix: "-2x" },
	{ width: 1880 * 2, height: null, prefix: "h-", suffix: "-2x" },
	{ width: null, height: 226 * 2, prefix: "v-", suffix: "-2x" },
	{ width: null, height: 264 * 2, prefix: "v-", suffix: "-2x" },
	{ width: null, height: 314 * 2, prefix: "v-", suffix: "-2x" },
	{ width: null, height: 332 * 2, prefix: "v-", suffix: "-2x" },
	{ width: null, height: 354 * 2, prefix: "v-", suffix: "-2x" },
	{ width: null, height: 380 * 2, prefix: "v-", suffix: "-2x" },
	{ width: null, height: 424 * 2, prefix: "v-", suffix: "-2x" },
	{ width: null, height: 40 * 2, prefix: "s-", suffix: "-2x" },
	{ width: null, height: 50 * 2, prefix: "s-", suffix: "-2x" },
	{ width: null, height: 70 * 2, prefix: "s-", suffix: "-2x" },
	{ width: null, height: 166 * 2, prefix: "s-", suffix: "-2x" },
	{ width: null, height: 172 * 2, prefix: "s-", suffix: "-2x" },
	{ width: null, height: 186 * 2, prefix: "s-", suffix: "-2x" },
	{ width: null, height: 210 * 2, prefix: "s-", suffix: "-2x" },
	{ width: null, height: 224 * 2, prefix: "s-", suffix: "-2x" },
	{ width: null, height: 230 * 2, prefix: "s-", suffix: "-2x" },
	{ width: null, height: 240 * 2, prefix: "s-", suffix: "-2x" },
	{ width: null, height: 256 * 2, prefix: "s-", suffix: "-2x" },
	{ width: null, height: 274 * 2, prefix: "s-", suffix: "-2x" },
	{ width: null, height: 306 * 2, prefix: "s-", suffix: "-2x" },
	{ width: null, height: 320 * 2, prefix: "s-", suffix: "-2x" },
	{ width: null, height: 344 * 2, prefix: "s-", suffix: "-2x" },
	{ width: null, height: 360 * 2, prefix: "s-", suffix: "-2x" },
	{ width: null, height: 370 * 2, prefix: "s-", suffix: "-2x" },
	{ width: null, height: 430 * 2, prefix: "s-", suffix: "-2x" },
	{ width: null, height: 556 * 2, prefix: "s-", suffix: "-2x" },
	{ width: null, height: 738 * 2, prefix: "s-", suffix: "-2x" },
	{ width: null, height: 962 * 2, prefix: "s-", suffix: "-2x" }
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

		if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.webp') {
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