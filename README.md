# node-notes

Node-notes is a command line tool that allows you to create and log notes to the terminal. A note must contain a title and a body. When adding a note for the first time, the program creates a notes.json file in the current working directory where it will store all the notes.

It's a really simple command line utility that can ...

- Create a note ...
``` javascript
note add --title="Some Title" --body="The text of the note"
```
- Read a single note
```javascript
note read --title="enter title of a note"
```
- List all notes
```javascript
note list
```
- Remove a note
```javascript
note remove --title="The title of the note you want to remove"
```

![notes-node-in-action](https://firebasestorage.googleapis.com/v0/b/client-management-111c5.appspot.com/o/note-app.png?alt=media&token=fcebbf73-0626-47fb-9e7b-df981c1da942)
