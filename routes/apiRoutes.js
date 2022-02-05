const router = require('express').Router();
const { filterByQuery, createNewNote, validateNote }; 
const { notes } = require('../public/notes.html');

// GET NOTES
router.get('/api/notes', (req, res) => {
    let results = notes;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});

// Create new note
router.post('/api/notes', (req,res) => {
    req.body.id = notes.length.toString();

    if (!validateNote(req.body)) {
        res.status(400).send('The note is not property formatted');
    } else {
        const note = createNewNote(req.body, note);
        res.json(note);
    }
});

router.delete('/api/notes/:id', (req,res) => {
    notes.delete(req.params.id)
});


module.exports = router;