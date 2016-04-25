'use strict';

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = require('../..');


var newAnimals;

describe('Animals API:', function () {

  describe('GET /api/animal', function () {
    var animalss;

    beforeEach(function (done) {
      (0, _supertest2.default)(app).get('/api/animal').expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        animalss = res.body;
        done();
      });
    });

    it('should respond with JSON array', function () {
      animalss.should.be.instanceOf(Array);
    });
  });

  describe('POST /api/animal', function () {
    beforeEach(function (done) {
      (0, _supertest2.default)(app).post('/api/animal').send({
        name: 'New Animals',
        info: 'This is the brand new animals!!!'
      }).expect(201).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        newAnimals = res.body;
        done();
      });
    });

    it('should respond with the newly created animals', function () {
      newAnimals.name.should.equal('New Animals');
      newAnimals.info.should.equal('This is the brand new animals!!!');
    });
  });

  describe('GET /api/animal/:id', function () {
    var animals;

    beforeEach(function (done) {
      (0, _supertest2.default)(app).get('/api/animal/' + newAnimals._id).expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        animals = res.body;
        done();
      });
    });

    afterEach(function () {
      animals = {};
    });

    it('should respond with the requested animals', function () {
      animals.name.should.equal('New Animals');
      animals.info.should.equal('This is the brand new animals!!!');
    });
  });

  describe('PUT /api/animal/:id', function () {
    var updatedAnimals;

    beforeEach(function (done) {
      (0, _supertest2.default)(app).put('/api/animal/' + newAnimals._id).send({
        name: 'Updated Animals',
        info: 'This is the updated animals!!!'
      }).expect(200).expect('Content-Type', /json/).end(function (err, res) {
        if (err) {
          return done(err);
        }
        updatedAnimals = res.body;
        done();
      });
    });

    afterEach(function () {
      updatedAnimals = {};
    });

    it('should respond with the updated animals', function () {
      updatedAnimals.name.should.equal('Updated Animals');
      updatedAnimals.info.should.equal('This is the updated animals!!!');
    });
  });

  describe('DELETE /api/animal/:id', function () {

    it('should respond with 204 on successful removal', function (done) {
      (0, _supertest2.default)(app).delete('/api/animal/' + newAnimals._id).expect(204).end(function (err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
    });

    it('should respond with 404 when animals does not exist', function (done) {
      (0, _supertest2.default)(app).delete('/api/animal/' + newAnimals._id).expect(404).end(function (err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
    });
  });
});
//# sourceMappingURL=animals.integration.js.map
