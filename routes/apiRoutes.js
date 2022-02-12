const router = require('express').Router();
const {  validateNote, createNewNote } = require('../lib/notes');
const notes = require('../db/db.json');

// GET NOTES
router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

// Create new note
router.post('/notes', (req,res) => {
    req.body.id = notes.length.toString();

    if (!validateNote(req.body)) {
        res.status(400).send('The note is not property formatted');
    } else {
        const note = createNewNote(req.body);
        res.json(note);
    }
});


module.exports = router;