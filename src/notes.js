const fs = require('fs');
const cipher = require('./encode-decode');

const readFile = options => {
  const readableStream = fs.createReadStream('./doc/input.txt');
  readableStream.on('data', chunk => {
    const outputStr = cipher.encodeDecode(chunk.toString(), options);
    writeFile(chunk.toString(), outputStr);
  });
};

const writeFile = (chunk, outputStr) => {
  const writeableStream = fs.createWriteStream('./doc/output.txt', {
    flags: 'a'
  });
  writeableStream.write(`input: ${chunk}output: ${outputStr}`);
  writeableStream.end();
};

module.exports = {
  readFile,
  writeFile
};
