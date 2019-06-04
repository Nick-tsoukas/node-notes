const fs = require('fs');
const chalk = require('chalk');
const log = console.log;
// const notes = loadNotes();


const getNotes = () => {
    return 'your notes';
}

const listNotes = () => {
    const notes = loadNotes()
    log(chalk.green.bold('===============\n Loading notes\n==============='))
    notes.forEach((n,index) => {
        console.log(`${index + 1}. ${n.title}`);
    })
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const note = {title: title, body: body};
    let checkNote = duplicateNote(notes, title);
    if (checkNote.length === 0) {
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


const loadNotes = () => {
    try {
        return createJsonFromFile();
    } catch (err) {
        return [];
    }
}


module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
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