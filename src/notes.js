const fs = require('fs');
const cipher = require('./encode-decode');

const readFile = options => {
  const chunk = loadNotes();
  let outputStr = cipher.encodeDecode(chunk, options);
  writeFile(chunk, outputStr);
};

const writeFile = (chunk, outputStr)  => {
  fs.appendFileSync('./doc/output.txt', 'input: ' + chunk + 'output: ' + outputStr);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('./doc/input.txt');
    const dataJSON = dataBuffer.toString();
    return dataJSON;
  } catch (e) {
    return e;
  }
};

module.exports = {
  readFile,
  writeFile
};
