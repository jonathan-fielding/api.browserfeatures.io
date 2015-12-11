
describe('BrowsersController Tests', function() {

  var browsersController;
  var req;
  var res;
  var next;

  beforeEach(function() {
    req = {};
    res = { status: function(code) { return { json: function(obj) {} }} };

    sinon.spy(res, "status");

    browsersController = require('../../../../../app/controllers/v1/browsers/browsers-controller');
  });

  describe('get()', function() {

    it('should be a function', function(done) {
      expect(browsersController.get).to.be.a('function');
      done();
    });

    it('should call res.status() one time', function(done) {
      browsersController.get(req, res, next);

      expect(res.status.callCount).to.equal(1);
      done();
    });

    it('should call res.status() with 200', function(done) {
        browsersController.get(req, res, next);

      expect(res.status.calledWith(200)).to.equal(true);
      done();
    });

  });
});
