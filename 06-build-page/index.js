const fs = require('fs');
const copy = require('../04-copy-directory/index.js');

fs.mkdir('./06-build-page/project-dist', (err) => {
	err && console.log(err);
	copy('./06-build-page/assets', './06-build-page/project-dist');
});
