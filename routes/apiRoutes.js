const router = require('express').Router();
const { notes } = require('../public/notes.html');

// GET NOTES
router.get('/api/notes', (req, res) => {
    let results = notes;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});

router.post('/api/notes', (req,res) => {
    req.body.id = notes.length.toString();

    if (!validateNotes(req.body)) {
        res.status(400).send('The note is not property formatted');
    } else {
        const note = createNewNote(req.body, animals);
        res.json(note);
    }
});

module.exports = router;