const fs = require('fs');
const chalk = require('chalk');
const { Command } = require('commander');
const program = new Command();
program.version('0.0.1').description('Caesar cipher CLI tool');

const notes = require('./src/notes');
const support = require('./src/support');
const std = require('./src/std');

// Create an options for cli
program
  .option('-a, --action <type>', 'an action encode/decode')
  .option('-s, --shift <shift>', 'a shift')
  .option('-i, --input <input-file>', 'an output file')
  .option('-o, --output <output-file>', 'an output file')
  .parse(process.argv);

const options = program.opts();

console.log(options);
// Check if options exist, if type of actions is correct, if shift value is integer
support.optionErrorMsg(options);

// If the input file is missed - use 'stdin' as an input source
if (options.input === undefined) {
  fs.readdir('doc', (err, data) => {
    if (err) {
      console.log(chalk.red.inverse('The directory `doc` does not exist!'));
      return;
    }
    data.indexOf('input.txt') !== -1
      ? notes.readFile(options)
      : std.consoleInput(options);
  });
}
