const express = require('express');
const app = express();

 app.use('/', (req, res, next) => {
	console.log('used app!');
	next();
});

app.get('/', (req, res, next) => {
	res.send('Hello World!');
});

app.post('/:id', (req, res, next) => {
	const id = req.params.id;
	if (id > 10) { 
		res.send(`id ${id} is out of range!`)
	} else {
		res.send('selected id: ' + id);
	}
});

app.listen('3000');
console.log('listening on port 3000');
