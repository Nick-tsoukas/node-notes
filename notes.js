const fs = require('fs');
const chalk = require('chalk');
const log = console.log;
// const notes = loadNotes();

const listNotes = () => {
    const notes = loadNotes()
    log(chalk.green.bold('===============\n Loading notes\n==============='))
    notes.forEach((n,index) => {
        console.log(`${index + 1}. ${n.title}`);
    })
}

const addNote = (title, body) => {
    title = title.trim();
    const notes = loadNotes();
    const note = {title: title, body: body};
    // a better way to do this is notes.find((note) => note.title === title);
    let checkNote = duplicateNote(notes, title);
    if (!checkNote.length) {
        
        notes.push(note);
        log(chalk.green.bold('Saving your note'));
       return  saveNotes(notes);
    } else log(chalk.red.bold('This note already exists'));
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('./notes.json', dataJSON);
}

const removeNote = (title) => {
    const notes = loadNotes();
    let removed = false;
//  Imperative solution 
    notes.forEach((note, index) => {
        if (note.title === title) {
            console.log(note)
            //    remove the note
            log('removing note ...');
            notes.splice(index, 1);
            removed = true;
            saveNotes(notes);
            return log(chalk.green.bold('Successfully removed note'));
        }
    });
    if(removed === false){
        log(chalk.red.bold('Note does not exist ... please check the title and try again'));
    }
}

const readNote = (title) => {
    notes = loadNotes();
    const note = notes.find((note) => note.title === title);
    if(!note) return log(chalk.red.bold("Could not find the note ... please try again"));
     log(chalk.green.bold('Awesome! We found a note!!!'));
     log(chalk.green(JSON.stringify(note)))
}


const loadNotes = () => {
    try {
        return createJsonFromFile();
    } catch (err) {
        return [];
    }
}


module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}


// helper functions 
function createJsonFromFile() {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON)
}

function duplicateNote(notes, title) {
    const check = notes.filter((n) => {
        return n.title === title;
    });
    return check;
}