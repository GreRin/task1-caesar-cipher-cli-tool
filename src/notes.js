const fs = require('fs');
const chalk = require('chalk');

const addNote = (title, body) => {
  console.log('Hello!');
  const notes = loadNotes();
  const duplicateNote = notes.find(note => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title,
      body
    });
    // saveNotes(notes);
    console.log(chalk.green.inverse('New note added!'));
  } else {
    console.log(chalk.red.inverse('Note title taken!'));
  }
};

// const saveNotes = notes => {
//   const dataJSON = JSON.stringify(notes);
//   fs.writeFileSync('notes.json', dataJSON);
// };

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('input.txt');
    const dataJSON = dataBuffer.toString();
    console.log(dataJSON);
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  addNote
};
