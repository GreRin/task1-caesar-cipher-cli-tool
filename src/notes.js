const fs = require('fs');
const cipher = require('./encode-decode');

const readFile = options => {
  const dataBuffer = fs.readFileSync('./doc/input.txt');
  const readableStream = dataBuffer.toString();
  const outputStr = cipher.encodeDecode(readableStream, options);
  writeFile(readableStream, outputStr);
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
