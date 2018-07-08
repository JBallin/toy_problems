const express = require('express');
const router = express.Router();
const knex = require('../knex')
const path = require('path');

router.get('/', (req, res) => res.sendFile(path.join(__dirname, '..', 'public/birds.html')));

router.get('/about', () => {
  knex('birds')
  .then()
})

router.post('/')

router.put('/')

router.delete('/')


module.exports = router;
