/**
 * @appular header
 */

define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {
    var View = Backbone.View.extend({
            bindings: {
                input: 'value'
            },
            events: {},
            initialize: function () {},
            render: function () {
                this.stickit(this.app.get('keyword', {
                    model: true
                }));

                return this;
            }
        });

    return View;
});