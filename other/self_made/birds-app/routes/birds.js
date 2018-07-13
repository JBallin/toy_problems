const express = require('express');
const router = express.Router();
const knex = require('../knex')

// GET all birds
router.get('/', (req, res) => {
  knex('birds')
  .then(data => res.json(data))
  .catch(err => next(err))
});

// GET size (num, max) birds starting from start (id)
router.get('/get/:start/:size', (req, res) => {
  const start = parseInt(req.params.start);
  const size = parseInt(req.params.size);
  knex('birds')
  .where('id', '>=', start)
  .limit(size)
  .then(data => res.json(data))
})

// GET size (num, max) birds starting from start (id) but go in descending order
router.get('/get/reverse/:start/:size', (req, res) => {
  const start = parseInt(req.params.start);
  const size = parseInt(req.params.size);
  knex('birds')
  .where('id', '<=', start)
  .orderBy('id', 'desc')
  .limit(size)
  .then(data => res.json(data))
})

// GET max id in birds table
router.get('/get/max', (req, res) => {
  knex('birds').max('id')
  .then(size => res.json(size[0].max));
})

module.exports = router;
