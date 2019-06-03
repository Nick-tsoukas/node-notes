const createJsonFromFile = function createJsonFromFile() {
    const dataBuffer = fs.readFileSync('../notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON)
}

const duplicateNote =  function duplicateNote(notes, title) {
    const check = notes.filter((n) => {
        return n.title === title;
    });
    return check;
}

module.exports = {
    createJsonFromFile: createJsonFromFile,
    duplicateNote: duplicateNote
}