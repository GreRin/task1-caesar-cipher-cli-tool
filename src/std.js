const fs = require('fs');
const notes = require('./notes');
const cipher = require('./encode-decode');

const consoleInput = options => {
  process.stdin.setEncoding('utf8');
  process.stdin.on('readable', () => {
    let chunk = process.stdin.read();
    if (chunk !== null) {
      fs.readdir('doc', (err, data) => {
        // If the output file is missed - use stdout as an output destination.
        if (data.indexOf('output.txt') !== -1) {
          chunk = cipher.encodeDecode(chunk, options);
          notes.writeFile(chunk);
        }
        chunk = cipher.encodeDecode(chunk, options);
        process.stdout.write(chunk);
      });
    }
  });
};

module.exports = {
  consoleInput
};
