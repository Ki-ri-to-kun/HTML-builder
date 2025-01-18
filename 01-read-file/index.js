const fs = require('fs');

const read = async () => {
    const readStream = fs.createReadStream('./text.txt');
    readStream.on('data', (data) => process.stdout.write(data.toString()));
};

read();