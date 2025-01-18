const fs = require('fs');

console.log('Enter text to write to file:');

const write = async () => {
    const output = fs.createWriteStream('./02-write-file/text.txt', {flags:'a'});
    process.stdin.on('data', (data) => {
        output.write(data);
    });
};

write();