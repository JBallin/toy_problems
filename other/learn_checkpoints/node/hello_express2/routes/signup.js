const express = require('express');
const path = require('path');

const router = express.Router();

const signupPath = path.join(__dirname, '..', 'public', 'signup.html');

router.get('/', (req, res) => res.sendFile(signupPath));

router.post('/', express.json(), express.urlencoded({ extended: true }), (req, res) => {
  const { first_name: first, last_name: last } = req.body;
  if (!first || !last) {
    res.status(400);
    throw new Error('Signup form data required');
  }
  res.render('index', { header: 'Sign Up Complete', text: `Thanks for joining ${`${first} ${last}`}!` });
});

module.exports = router;
