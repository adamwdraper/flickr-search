/**
 * @appular boilerplate
 */
define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {
    var Router = Backbone.Router.extend({
            options: {
                pushState: true
            },
            params: {}
        });

    return Router;
});