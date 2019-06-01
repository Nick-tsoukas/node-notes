const validator = require('validator'),
      chalk     = require('chalk'),
      log       = console.log,
      getNotes  = require('./getNotes');

const msg = getNotes();

log("========================================");

// log out number from the msg 
// event numbers should be green and odd number should be red

msg.forEach((number) => {
    if(number % 2){
        log(chalk.red.bgWhite(`\nThe number ${number} is ODD`));
    }
    log(chalk.green.bgRedBright(`\nThe number ${number} is EVEN`));
})