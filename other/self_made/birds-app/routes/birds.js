const express = require('express');
const router = express.Router();
const knex = require('../knex')

// GET all birds
// TODO: Only show 3 birds at a time and fetch next 3 with ajax
router.get('/', (req, res) => {
  knex('birds')
  .then(data => res.json(data))
  .catch(err => next(err))
});


module.exports = router;
