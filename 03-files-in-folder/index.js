const fs = require('fs');

const list = async () => {
         fs.readdir('./03-files-in-folder/secret-folder', (err, fileName) => {
			 fileNamesArray = fileName.map((file, index) => {
				 nameOnly = file.split('.')[0];
				 extensionOnly = file.split('.')[1];
				 
				 const stats = fs.statSync('./03-files-in-folder/secret-folder/' + fileName[index]);
				 const fileSizeInKb = stats.size / 1024 + 'kb';
				 
				 return {
					 name: nameOnly,
					 extension: extensionOnly,
					 size: fileSizeInKb 
				 };
			 });
			 
			 for(item of fileNamesArray){
				 console.log(`${item.name} - ${item.extension} - ${item.size}`);
			 }
			 
		 }); 
};

list();