const validator = require('validator'),
      chalk     = require('chalk'),
      log       = console.log,
      getNotes  = require('./getNotes');

const msg = getNotes();
let input = process.argv.slice(2);

input.forEach((input) => {
    log(input)
})