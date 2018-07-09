const express = require('express');
const router = express.Router();
const knex = require('../knex')
const path = require('path');

// Give form to add new bird
router.get('/new', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/birds.html')));
}

// Give name and description of bird with id of params.body.id
router.get('/about/:id', () => {
  knex('birds')
  .then()
})

// Add new bird to db from form
router.post('/')

// Change bird description, add edit button next to each bird in GET /birds
router.put('/:id')

// Delete a specific bird, add delete button next to each bird in GET /birds
router.delete('/:id')


module.exports = router;
