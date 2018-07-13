process.env.NODE_ENV = 'test';

const request = require('supertest');
const app = require('../app');

describe('GET /birds', () => {
  it('should return JSON', done => {
    request(app)
    .get('/birds')
    .expect('Content-Type', /json/)
    .expect(200, done)
  })
})
