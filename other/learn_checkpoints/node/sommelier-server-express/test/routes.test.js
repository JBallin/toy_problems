const app = require('../app')
const chai = require('chai')
const expect = chai.expect

chai.use(require('chai-http'))

describe('wines\t/wines', function () {
  before(function () {
    this.resource = '/wines'
  })

  describe('index', function () {
    describe('/', function () {
      it('returns all records', function (done) {
        chai.request(app)
          .get(this.resource)
          .end((err, res) => {
            expect(res.body.data).to.not.be.null
            expect(res.body.data.length).to.equal(4)

            const wine = res.body.data[0]
            expect(wine.id).to.equal(1)
            expect(wine.name).to.equal('Forma de Vida')
            done()
          })
      })
    })

    describe('/?location=', function () {
      it('returns just those records that have a matching location', function (done) {
        chai.request(app)
          .get(`${this.resource}/?location=California`)
          .end((err, res) => {
            expect(res.body.data).to.not.be.null
            expect(res.body.data.length).to.equal(2)

            const wine = res.body.data[1]
            expect(wine.id).to.equal(4)
            expect(wine.name).to.equal('Brethren of the Road')
            done()
          })
      })
    })
  })

  describe('show', function () {
    describe('/:id', function () {
      it('returns a single resource based on the id', function (done) {
        chai.request(app)
          .get(`${this.resource}/1`)
          .end((err, res) => {
            expect(res.body.data).to.not.be.null

            expect(res.body.data.id).to.equal(1)
            expect(res.body.data.name).to.equal('Forma de Vida')
            done()
          })
      })
    })
  })
})
