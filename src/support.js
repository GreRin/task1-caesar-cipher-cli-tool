const chalk = require('chalk');

const optionErrorMsg = options => {
  if (options.action === undefined || options.shift === undefined) {
    process.stderr.write(
      chalk.red.inverse(
        'Option ACTION or SHIFT missed or was written incorrect!'
      )
    );
    process.exit(1);
  }
  if (options.action !== 'encode' && options.action !== 'decode') {
    process.stderr.write(chalk.red.inverse('Write correct type for ACTION!'));
    process.exit(1);
  }
  if (!Number.isInteger(Number(options.shift))) {
    process.stderr.write(chalk.red.inverse('Write INTEGER shift!'));
    process.exit(1);
  }
};

module.exports = {
  optionErrorMsg
};
