/**
 * @appular search
 */
define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {
    var App = Backbone.App.extend({
            params: {
                keyword: {
                    value: '',
                    alias: 'k'
                },
                page: {
                    value: 1,
                    alias: 'p',
                    type: 'number',
                    addToUrl: false
                }
            },
            initialize: function () {},
            render: function () {
                Backbone.trigger('appular:app:rendered');

                return this;
            }
        });

    return App;
});