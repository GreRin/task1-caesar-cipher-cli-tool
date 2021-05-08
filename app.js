const fs = require('fs');
const chalk = require('chalk');
const { Command } = require('commander');
const program = new Command();
program.version('0.0.1').description('Caesar cipher CLI tool');

const notes = require('./src/notes');
const support = require('./src/support');
const std = require("./src/std");

// Create an options for cli
program
  .option('-a, --action <type>', 'an action encode/decode', false)
  .option('-s, --shift <shift>', 'a shift', '0')
  .option('-i, --input <input-file>', 'an output file')
  .option('-o, --output <output-file>', 'an output file')
  .parse(process.argv);

const options = program.opts();

console.log(options);
// Check if options exist
options.action === undefined
  ? console.log(chalk.red.inverse(support.optionErrorMsg('ACTION')))
  : '';
options.action !== 'encode' && options.action !== 'decode'
  ? console.log(chalk.red.inverse('Write correct type for ACTION!'))
  : '';
options.shift === undefined
  ? console.log(chalk.red.inverse(support.optionErrorMsg('SHIFT')))
  : '';
!Number.isInteger(Number(options.shift))
  ? console.log(chalk.red.inverse('Write INTEGER shift!'))
  : '';

//If the input file is missed - use 'stdin' as an input source
if (options.input === undefined) {
    fs.readdir('doc', (err, data) => {
        data.indexOf('input.txt') !== -1 ? notes.readFile() : std.consoleInput(options);
    })
}
