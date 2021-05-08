const fs = require('fs');

const readFile = () => {
    const notes = loadNotes();
    console.log(notes);
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('./doc/input.txt');
        const dataJSON = dataBuffer.toString();
        return dataJSON;
    } catch (e) {
        return []
    }
}

module.exports = {
    readFile: readFile
}
