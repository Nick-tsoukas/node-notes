const fs = require('fs');

const getNotes = () => {
    return 'your notes';
}

const addNote = (title, body) => {
   const notes = loadNotes();
   checkDuplicateNotes(notes,title);

   notes.push({
       title: title,
       body: body
   });

   saveNotes(notes);

}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('./notes.json', dataJSON);
}



const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON)
    } catch (err) {
        return [];
    }
}

const checkDuplicateNotes = (notes,title) => {
    const hasNote = notes.filter((n) => {
        return n.title == title;
    })
    if(!hasNote.length >= 0){
         console.log('this note already exists');
    }
}



module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    checkDuplicateNotes: checkDuplicateNotes
}