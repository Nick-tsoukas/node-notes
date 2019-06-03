const chalk = require('chalk'),
    yargs = require('yargs'),
    notes = require('./notes.js'),
    titleBuilderYargs = {describe: "note title", demandOption: true, type:'string'},
    log = console.log;


//  defines 
yargs.version('1.1.0');

// Adds a note
yargs.command({
    command: 'add',
    describe: "Add a new note",
    builder: {
        title: titleBuilderYargs,
        body: {
            describe: "Note body",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        const { title,  body }  = argv;
        notes.addNote(title,body);
    }
})

// removes a note 
yargs.command({
    command: 'remove',
    describe: "Removing a note",
    builder: {
        title: titleBuilderYargs
    },
    handler: function (argv) {
        const { title } = argv;
        // try and get the index of the note
        notes.removeNote(title);
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