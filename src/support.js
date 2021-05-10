const chalk = require('chalk');
const Process = require('process');

const optionErrorMsg = options => {
  if (options.action === undefined || options.shift === undefined) {
    process.stderr.write(
      chalk.red.inverse(
        'Option ACTION or SHIFT missed or was written incorrect!'
      )
    );
    Process.exit(1);
  }
  if (options.action !== 'encode' && options.action !== 'decode') {
    process.stderr.write(chalk.red.inverse('Write correct type for ACTION!'));
    Process.exit(1);
  }
  if (!Number.isInteger(Number(options.shift))) {
    process.stderr.write(chalk.red.inverse('Write INTEGER shift!'));
    Process.exit(1);
  }
};

module.exports = {
  optionErrorMsg
};
