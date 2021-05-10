const fs = require('fs');
const notes = require('./notes');
const cipher = require('./encode-decode');

const consoleInput = options => {
  process.stdin.setEncoding('utf8');
  process.stdin.on('readable', () => {
    let chunk = process.stdin.read();
    let outputStr = '';
    if (chunk !== null) {
      fs.readdir('doc', (err, data) => {
        if (err) {
          console.log(err.stack);
        }
        // If the output file is missed - use stdout as an output destination else write in file
        if (data.indexOf('output.txt') !== -1) {
          outputStr = cipher.encodeDecode(chunk, options);
          notes.writeFile(chunk, outputStr);
        } else {
          outputStr = cipher.encodeDecode(chunk, options);
          process.stdout.write(outputStr);
        }
        chunk = process.stdin.read();
      });
    }
  });
};

module.exports = {
  consoleInput
};
