/* eslint-disable no-console */

const displayCycle = (req, res, next) => {
  const start = new Date();
  next();
  const end = new Date();
  const duration = end - start;
  console.log(req.method, req.url, res.statusCode, duration, 'ms', '-', res.get('Content-Length'));
};

module.exports = displayCycle;
