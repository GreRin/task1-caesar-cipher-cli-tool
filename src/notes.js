const fs = require('fs');
const cipher = require('./encode-decode');

const readFile = options => {
  const dataBuffer = fs.readFileSync('./doc/input.txt');
  const readableStream = dataBuffer.toString();
  let outputStr = cipher.encodeDecode(readableStream, options);
  writeFile(readableStream, outputStr);
};

const writeFile = (chunk, outputStr)  => {
  let writeableStream = fs.createWriteStream('./doc/output.txt',{flags: 'a'});
  writeableStream.write('input: ' + chunk + 'output: ' + outputStr);
  writeableStream.end();
};

const loadNotes = () => {
  try {
    let readableStream = fs.createReadStream('./doc/input.txt', "utf8");
    console.log(readableStream);
    // const dataBuffer = fs.readFileSync('./doc/input.txt');
    // const dataJSON = dataBuffer.toString();
    // return dataJSON;
  } catch (e) {
    return e;
  }
};

module.exports = {
  readFile,
  writeFile
};
