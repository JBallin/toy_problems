const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('responds with status 200', done => {
    request(app)
      .get('/')
      // .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
