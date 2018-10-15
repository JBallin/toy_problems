const express = require('express');

const app = express();

app.disable('x-powered-by');

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`)); // eslint-disable-line no-console
