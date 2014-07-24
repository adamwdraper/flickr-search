/**
 * @appular search
 */
define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {
    var Router = Backbone.Router.extend({
            data: {
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