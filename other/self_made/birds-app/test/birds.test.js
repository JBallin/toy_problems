const request = require('supertest');
const app = require('../app');

describe('GET /birds', () => {
  it('responds with HTML + status 200', done => {
    request(app)
      .get('/birds')
      .expect('Content-Type', 'text/html; charset=UTF-8')
      .expect(200, done);
  });
});
