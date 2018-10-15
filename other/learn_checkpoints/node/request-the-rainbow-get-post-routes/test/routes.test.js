const app = require('../app')
const chai = require('chai')
const expect = chai.expect

chai.use(require('chai-http'))

describe('app routes', function () {
  it('GET\t/red', function (done) {
    chai.request(app)
      .get('/red')
      .end((err, res) => {
        expect(res.body, 'You must write a GET for the red route').to.deep.equal({ color: 'red' })
        done()
      })
  })

  it('POST\t/orange', function (done) {
    chai.request(app)
      .post('/orange')
      .end((err, res) => {
        expect(res.body, 'You must write a POST for the orange route').to.deep.equal({ color: 'orange' })
        done()
      })
  })

  it('GET\t/yellow', function (done) {
    chai.request(app)
      .get('/yellow')
      .end((err, res) => {
        expect(res.body, 'You must write a GET for the yellow route').to.deep.equal({ color: 'yellow' })
        done()
      })
  })

  it('POST\t/green', function (done) {
    chai.request(app)
      .post('/green')
      .end((err, res) => {
        expect(res.body, 'You must write a POST for the green route').to.deep.equal({ color: 'green' })
        done()
      })
  })

  it('GET\t/blue', function (done) {
    chai.request(app)
      .get('/blue')
      .end((err, res) => {
        expect(res.body, 'You must write a GET for the blue route').to.deep.equal({ color: 'blue' })
        done()
      })
  })

  it('POST\t/indigo', function (done) {
    chai.request(app)
      .post('/indigo')
      .end((err, res) => {
        expect(res.body, 'You must write a POST for the indigo route').to.deep.equal({ color: 'indigo' })
        done()
      })
  })

  it('GET\t/violet', function (done) {
    chai.request(app)
      .get('/violet')
      .end((err, res) => {
        expect(res.body, 'You must write a GET for the violet route').to.deep.equal({ color: 'violet' })
        done()
      })
  })

  it('POST\t/red', function (done) {
    chai.request(app)
      .post('/red')
      .end((err, res) => {
        expect(res.body, 'You must write a POST for the red route').to.deep.equal({ color: 'red' })
        done()
      })
  })
})
