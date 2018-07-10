process.env.NODE_ENV = 'test';

const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('Birds seeded properly', done => {
    request(app)
    .get('/')
    .expect('Content-Type', /json/)
    .expect(200, [
      {
        "id":1,
        "type":"Bluejay",
        "description":"Blue and stuff",
        "created_at":"2018-07-09T22:36:23.975Z",
        "updated_at":"2018-07-09T22:36:23.975Z"
      },
      {
        "id":2,
        "type":"Sparrow",
        "description":"Likes to eat worms",
        "created_at":"2018-07-09T22:36:23.975Z",
        "updated_at":"2018-07-09T22:36:23.975Z"
      },
      {
        "id":3,
        "type":"Seagull",
        "description":"Likes to eat fish",
        "created_at":"2018-07-09T22:36:23.975Z",
        "updated_at":"2018-07-09T22:36:23.975Z"
      }
    ], done);
  });
});
