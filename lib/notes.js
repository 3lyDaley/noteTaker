const fs = require('fs');
const path = require('path');

// write createNote function
function createNote(body, noteArray) {
  const note = body;
  noteArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ notes: noteArray }, null, 2)
  );
  return note;
}

// write deleteNote function
function deleteNote(noteArray, id) {
  const delId = parseInt(id);
  //array_splice(noteArray, array_search(delId, noteArray), 1)
  noteArray.splice(delId, 1)
}

module.exports = { createNote };