'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var animalsCtrlStub = {
    index: 'animalsCtrl.index',
    show: 'animalsCtrl.show',
    create: 'animalsCtrl.create',
    update: 'animalsCtrl.update',
    destroy: 'animalsCtrl.destroy'
};

var routerStub = {
    get: sinon.spy(),
    put: sinon.spy(),
    patch: sinon.spy(),
    post: sinon.spy(),
    delete: sinon.spy()
};

// require the index with our stubbed out modules
var animalsIndex = proxyquire('./index.js', {
    'express': {
        Router: function Router() {
            return routerStub;
        }
    },
    './animals.controller': animalsCtrlStub
});

describe('Animals API Router:', function () {

    it('should return an express router instance', function () {
        animalsIndex.should.equal(routerStub);
    });

    describe('GET /api/animal', function () {

        it('should route to animals.controller.index', function () {
            routerStub.get.withArgs('/', 'animalsCtrl.index').should.have.been.calledOnce;
        });
    });

    describe('GET /api/animal/:id', function () {

        it('should route to animals.controller.show', function () {
            routerStub.get.withArgs('/:id', 'animalsCtrl.show').should.have.been.calledOnce;
        });
    });

    describe('POST /api/animal', function () {

        it('should route to animals.controller.create', function () {
            routerStub.post.withArgs('/', 'animalsCtrl.create').should.have.been.calledOnce;
        });
    });

    describe('PUT /api/animal/:id', function () {

        it('should route to animals.controller.update', function () {
            routerStub.put.withArgs('/:id', 'animalsCtrl.update').should.have.been.calledOnce;
        });
    });

    describe('PATCH /api/animal/:id', function () {

        it('should route to animals.controller.update', function () {
            routerStub.patch.withArgs('/:id', 'animalsCtrl.update').should.have.been.calledOnce;
        });
    });

    describe('DELETE /api/animal/:id', function () {

        it('should route to animals.controller.destroy', function () {
            routerStub.delete.withArgs('/:id', 'animalsCtrl.destroy').should.have.been.calledOnce;
        });
    });
});
//# sourceMappingURL=index.spec.js.map
