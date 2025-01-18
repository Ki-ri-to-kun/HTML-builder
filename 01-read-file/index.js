const fs = require('fs');

const read = async () => {
    const readStream = fs.createReadStream('./01-read-file/text.txt');
    readStream.on('data', (data) => process.stdout.write(data.toString()));
};

read();