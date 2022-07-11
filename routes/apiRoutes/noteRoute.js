const router = require('express').Router();
const { createNote } = require("../../lib/notes")
const {notes} = require('../../db/db.json');

router.get('/notes', (req,res) => {
  let saved = notes;
  res.json(saved);
});

router.post('/notes', (req, res) => {
  req.body.id = notes.length.toString();
  const note = createNote(req.body, notes);
  res.json(note);
});

router.delete('/notes/:id', (req, res) => {
  console.log(req.params.id)

})

module.exports = router;