const fs = require('fs');
const path = require('path');

// write createNote function
function createNote(body, noteArray) {
  const note = body;
  noteArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return note;
}

// write deleteNote function
// function deleteNote = (noteArray, callback) => {}

module.exports = { createNote };