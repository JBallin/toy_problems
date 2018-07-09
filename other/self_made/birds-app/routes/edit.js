const express = require('express');
const router = express.Router();
const knex = require('../knex')

// PUT bird name/description based on form
/* TODO:
  - Create form that's identical to submission but different HEADER and neither field is required
  - Add edit button next to each bird in GET /birds
  - updated_at should work!
*/
router.put('/:id', (res, req) => {

})

// Delete a specific bird, add delete button next to each bird in GET /birds
router.delete('/:id')


module.exports = router;
