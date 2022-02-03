const router = require('express').Router();
const notes = require('../public/index.html');

// GET NOTES
router.get('/notes', (req, res) => {
    let results = notes;
})