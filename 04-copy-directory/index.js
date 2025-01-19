const fs = require('fs');

if(fs.existsSync("./04-copy-directory/files_copy")){
	fs.rmSync("./04-copy-directory/files_copy", { recursive: true, force: true });	
}
fs.mkdirSync("./04-copy-directory/files_copy");

const copy = async () => {
      fs.cp('./04-copy-directory/files', './04-copy-directory/files_copy', {recursive: true}, (err) => err && console.log(err));
};

copy();

