/**
 * @appular results
 */

define([
    'jquery',
    'underscore',
    'backbone',
    './collection',
    'template!./template.html'
], function ($, _, Backbone, Collection, template) {
    var View = Backbone.View.extend({
            collection: new Collection(),
            listeners: {
                'collection sync': 'renderResults'
            },
            events: {},
            initialize: function () {
                this.listenTo(this.app.get('keyword', {
                    model: true
                }), 'change:value', this.fetch);
            },
            render: function () {

                return this;
            },
            fetch: function () {
                this.collection.fetch();
            },
            renderResults: function () {
                var html = '';

                this.collection.each(function (photo) {
                    html += template({
                        src: photo.getImageUrl()
                    });
                });

                this.$el.append(html);
            }
        });

    return View;
});