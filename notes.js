const fs = require('fs');
const chalk = require('chalk')
const log = console.log;

const getNotes = () => {
    return 'your notes';
}

const addNote = (title, body) => {
   const notes = loadNotes();
   // check if note already exists 
   let duplicateNote = notes.filter((n) => {
      return n.title === title;
   });

   if(duplicateNote.length == 0 ){
       notes.push({
           title: title,
           body: body
       });
       log(chalk.green.bold('Saving your note'));
       saveNotes(notes);

   } else {
    log('this note already exists ')
   }


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



module.exports = {
    getNotes: getNotes,
    addNote: addNote
}