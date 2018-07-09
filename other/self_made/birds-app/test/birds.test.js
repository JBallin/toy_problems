const request = require('supertest');
const app = require('../app');

describe('GET /birds', () => {
  it('respond with status 200', done => {
    request(app)
      .get('/birds')
      .expect(200, done);
  });
});
