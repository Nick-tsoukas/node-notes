const validator = require('validator'),
      chalk     = require('chalk'),
      log       = console.log,
      getNotes  = require('./getNotes');

const msg = getNotes();
const name = 'Nick'

log(chalk.red('you have a unread message'))
log(chalk.blue('you just received a message'))

