/**
 * @appular boilerplate
 */

define([
    'jquery',
    'underscore',
    'backbone',
    'template!./template.html'
], function ($, _, Backbone, template) {
    var View = Backbone.View.extend({
            template: template,
            events: {},
            initialize: function () {
                this.listenTo(this.app.get('keyword', {
                    model: true
                }), 'change:value', this.fetch);
            },
            render: function () {
                this.$el.html(this.template());

                return this;
            },
            fetch: function () {
                console.log('fetch');
            }
        });

    return View;
});