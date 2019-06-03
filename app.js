const chalk = require('chalk'),
    yargs = require('yargs'),
    notes = require('./notes.js'),
    log = console.log;


//  defines 
yargs.version('1.1.0');

yargs.command({
    command: 'add',
    describe: "Add a new note",
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        const { title,  body }  = argv
        notes.addNote(title,body);
    }
})

yargs.command({
    command: 'remove',
    describe: "Removing a note",
    handler: function () {
        log('Remove a note ,,,,, ')
    }
});

yargs.command({
    command: 'list',
    describe: 'Lists all the notes',
    handler: () => {
        log('this will list all the notes from the database')
    }
});

yargs.command({
    command: 'read',
    describe: 'Reads one of your notes from the database',
    handler: () => {
        log(chalk.bold('this is the note that you requested'))
    }
})


yargs.parse()