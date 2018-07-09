const express = require('express');
const router = express.Router();
const knex = require('../knex')
const path = require('path');

// GET form to add new bird
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/birds.html'))
});

// POST new bird to db from form
router.post('/new', (req, res) => {

})


module.exports = router;
