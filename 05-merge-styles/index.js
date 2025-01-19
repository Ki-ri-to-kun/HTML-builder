const fs = require('fs');

const readDataFromCssFile = async (fileName) => {
	return new Promise((resolve, reject) => {
	const readStream = fs.createReadStream('./05-merge-styles/styles/' + fileName);
	readStream.on('data', (data) => {
	resolve(data.toString());
	});
});
};

const list = async () => {
	return new Promise((resolve, reject) => {
		fs.readdir('./05-merge-styles/styles', (err, fileName) => {
		cssFiles = fileName.filter(file => file.split('.')[1] === 'css');
		resolve(cssFiles);
		}); 
	});
};

const main = async() => {
	const cssFilesNames = await list();
	const cssFilesData = [];
	for(fileName of cssFilesNames){
		const data = await readDataFromCssFile(fileName);
		cssFilesData.push(data);
	}
	return cssFilesData;
};

main().then(data => {
	const file = fs.createWriteStream('./05-merge-styles/project-dist/bundle.css');
	data.forEach(item => file.write(item));
	file.end();
	});
