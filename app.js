#!/usr/bin/env node

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
    aliases: ['add', 'a'],
    describe: "Add a new note",
    builder: {
        title: titleBuilderYargs,
        body: {
            describe: "Note body",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        const { title,  body }  = argv;
        notes.addNote(title,body);
    }
})

// removes a note 
yargs.command({
    command: 'remove',
    aliases: ['remove', 'r'],
    describe: "Removing a note",
    builder: {
        title: titleBuilderYargs
    },
    handler(argv) {
        const { title } = argv;
        notes.removeNote(title);
    }
});

yargs.command({
    command: 'list',
    aliases: ['list', '-l'],
    describe: 'Lists all the notes',
    handler() {
       notes.listNotes();
    }
});

yargs.command({
    command: 'read',
    aliases: ['read', 'r'],
    handler(argv) {
        const { title } = argv;
        notes.readNote(title);
    }
})


yargs.parse()