const fs = require('fs');

const readFile = (options) => {
  const notes = loadNotes();
  console.log(notes);
};

const writeFile = chunk => {
  console.log('Write file!');
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('./doc/input.txt');
    const dataJSON = dataBuffer.toString();
    return dataJSON;
  } catch (e) {
    return [];
  }
};

module.exports = {
  readFile,
  writeFile
};
