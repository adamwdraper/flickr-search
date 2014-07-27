/**
 * @appular search
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
            params: {
                keyword: {
                    value: '',
                    alias: 'k'
                },
                page: {
                    value: 1,
                    alias: 'p',
                    type: 'number'
                }
            }
        });

    return Router;
});