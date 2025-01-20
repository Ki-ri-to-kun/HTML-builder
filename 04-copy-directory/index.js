const fs = require('fs');

if(fs.existsSync("./04-copy-directory/files_copy")){
	fs.rmSync("./04-copy-directory/files_copy", { recursive: true, force: true });	
}
fs.mkdirSync("./04-copy-directory/files_copy");

const copy = async (fromDir = './04-copy-directory/files', toDir = './04-copy-directory/files_copy') => {
      fs.cp(fromDir, toDir, {recursive: true}, (err) => err && console.log(err));
};

copy();

module.exports = copy;
