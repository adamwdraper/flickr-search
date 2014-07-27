define([
    'jquery',
    'underscore',
    'backbone',
    './router'
], function ($, _, Backbone, Router) {
    var router = new Router();

    describe('Search Router', function () {
        describe('Router', function () {
            it('Exists', function () {
                assert.ok(router);
                expect(router).to.be.instanceOf(Object);
            });
        });
    });
});
