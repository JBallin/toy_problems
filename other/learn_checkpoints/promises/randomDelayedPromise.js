/* eslint-disable no-console */

const log = val => console.log(val);

const randomDelay = (cb, val, resolve) => {
  setTimeout(() => {
    cb(val);
    if (resolve) resolve(val);
  }, Math.random() * 3000);
};

const randomDelayedPromise = (cb, val) => new Promise(resolve => randomDelay(cb, val, resolve));

Promise.all([
  randomDelayedPromise(log, 1),
  randomDelayedPromise(log, 2),
  randomDelayedPromise(log, 3),
])
  // log the values in order
  .then(vals => vals.forEach(val => console.log(val)));
