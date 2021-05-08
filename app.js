const notes = require('./src/notes');
const support = require('./src/support');
const chalk = require('chalk');
const { Command } = require('commander');
const program = new Command();
program.version('0.0.1').description('Caesar cipher CLI tool');

const action = () => {
    notes.readFile()
}

const shift = () => {
    console.log("Shift!")
}

const readMessage = () => {
    console.log("readMessage")
}

const writeMessage = () => {
    console.log("writeMessage")
}

// Create an action encode/decode command
program
    .option('-a, --action <type>', 'an action encode/decode')
    .option('-s, --shift <shift>', 'a shift')
    .option('-i, --input <input-file>', 'an output file', readMessage)
    .option('-o, --output <output-file>', 'an output file', writeMessage)
    .action(() => {
    })
    .parse(process.argv);

const options = program.opts()
console.log(options);
console.log(support.validChain(options, 'action'))
//Check if options exist
options.action === undefined ? console.log(chalk.red.inverse(support.optionErrorMsg('ACTION'))) : '';
options.action !== 'encode' && options.action !== 'decode' ? console.log(chalk.red.inverse('Write correct type for ACTION!')) : '';
options.shift === undefined ? console.log(chalk.red.inverse(support.optionErrorMsg('SHIFT'))) : '';
!Number.isInteger(Number(options.shift)) ? console.log(chalk.red.inverse('Write INTEGER shift!')) : '';


if(!options) {
    process.stdin.setEncoding('utf8');

    process.stdin.on('readable', () => {
        var chunk = process.stdin.read();
        if (chunk !== null) {
            process.stdout.write(`data: ${chunk}`);
        }
    });
}
