const express = require('express');
const router = express.Router();
const knex = require('../knex')

router.delete('/:id', (req, res) => {
  knex('birds')
  .where('id', req.params.id)
  .del()
  .returning(['id', 'type', 'description'])
  .then(removed => {
    console.log('removed:', removed[0]);
  })
})

module.exports = router;
