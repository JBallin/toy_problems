process.env.NODE_ENV = 'test';

const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('should return html', done => {
    request(app)
    .get('/')
    .expect('Content-Type', /html/)
    .expect(200, done);
  })
})
