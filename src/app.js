const notes = require('./notes');
const { Command } = require('commander');
const program = new Command();
program.version('0.0.1').description('Caesar cipher CLI tool');

// Create an action encode/decode command
program
  .command('action <action>')
  .description('an action encode/decode')
  .alias('a')
  .action(argv => {
    console.log('action');
    notes.addNote(argv.title, argv.body);
  });

// Create shift command
program
  .command('shift')
  .description('a shift')
  .alias('s')
  .action(() => {
    console.log('shift');
  });

// Create input command
program.option('-i, --input <input-file>', 'an input file').action(() => {
  console.log('input');
});

// Create output command
program.option('-o, --output <output-file>', 'an output file').action(() => {
  console.log('output');
});

program.parse(process.argv);

// Create add command
// yargs.command({
//   command: 'add',
//   describe: 'Add a new note',
//   builder: {
//     title: {
//       describe: 'Note title',
//       demandOption: true,
//       type: 'string'
//     },
//     body: {
//       describe: 'Note body',
//       demandOption: true,
//       type: 'string'
//     }
//   },
//   handler: argv => {
//     console.log("Hello!");
//     notes.addNote(argv.title, argv.body);
//   }
// });

// yargs.parse();
