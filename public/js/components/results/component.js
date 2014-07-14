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
                'app change:keyword': 'fetch',
                'collection sync': 'renderResults'
            },
            events: {},
            initialize: function () {},
            render: function () {

                return this;
            },
            fetch: _.debounce(function () {
                var keyword = this.app.get('keyword');

                this.collection.options.keyword = keyword;

                if (keyword) {
                    this.collection.fetch();
                }
            }, 500),
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