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

function range(start, stop) {
    return [...Array(stop - start + 1).keys()].map(i => i + start);
}

router.get('/range/:min/:max', (req, res) => {
  const min = parseInt(req.params.min);
  const max = parseInt(req.params.max);
  knex('birds')
  .whereIn('id', range(min, max))
  .then(data => res.json(data))
})

router.get('/size', (req, res) => {
  knex('birds').max('id')
  .then(size => res.json(size[0].max));
})

module.exports = router;
