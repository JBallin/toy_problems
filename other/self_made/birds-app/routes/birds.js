const express = require('express');
const router = express.Router();
const knex = require('../knex')

router.use('/', () => console.log('run every time hit /birds'));
router.get('/', () => res.sendFile('/public/birds.html'));
router.get('/about', () => {
  knex('birds')
  .then()
})
router.post('/')
router.put('/')
router.delete('/')
