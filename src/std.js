const fs = require('fs');
const notes = require('./notes');

const consoleInput = () => {
  process.stdin.setEncoding('utf8');
  process.stdin.on('readable', () => {
    let chunk = process.stdin.read();
    if (chunk !== null) {
      fs.readdir('doc', (err, data) => {
        // If the output file is missed - use stdout as an output destination.
        data.indexOf('output.txt') !== -1
          ? notes.writeFile(chunk)
          : process.stdout.write(chunk);
        chunk = process.stdin.read();
      });
    }
  });
};

module.exports = {
  consoleInput
};
