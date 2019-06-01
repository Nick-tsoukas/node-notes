const fs = require('fs');
const notes = ['this is note 1 ', 'this is note 2', 'this is note 3'];

fs.writeFileSync('notes.txt', 'Lets see what happens when we write to the file again');

notes.forEach((note) => {

    fs.appendFile('notes.txt', `\n${note}`, (err) => {
        if(err) return err;
        console.log('adding a note to the file');
        fs.readFile('notes.txt', (err, data) => {
            let buf = new Buffer.from(data);
            console.log(buf.toString('utf8'))
        })
    })
})
