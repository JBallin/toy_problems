const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const morgan = require('morgan')

app.disable('x-powered-by')
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'))
app.use(bodyParser.json())

// Papa Parse settings
const Papa = require('papaparse')
const csvPath = path.join(__dirname, 'db', 'wines.csv')
const options = { header: true, skipEmptyLines: true, dynamicTyping: true }

app.get('/wines', (req, res, next) => {
  const { location } = req.query;

  const csv = fs.readFileSync(csvPath, 'utf-8');
  let { data } = Papa.parse(csv, options);

  if (location) {
    data = data.filter(wine => wine.location === location);
    if (!data.length) next({ status: 400, message: `No wine exists with location '${location}'` });
  }

  res.json({ data });
})

app.get('/wines/:id', (req, res, next) => {
  const { id } = req.params;

  const csv = fs.readFileSync(csvPath, 'utf-8');
  let { data } = Papa.parse(csv, options);

  data = data.find(wine => wine.id === Number(id));
  if (!data) next({ status: 400, message: `No wine exists with an id of '${id}'` });

  res.json({ data });
})

app.use((err, req, res, next) => {
  const status = err.status || 500
  res.status(status).json({ error: err })
})

app.use((req, res, next) => {
  res.status(404).json({ error: { message: 'Not found' }})
})

const listener = () => `Listening on port ${port}!`
app.listen(port, listener)

module.exports = app
