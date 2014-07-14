/**
 * @appular results
 */

define([
    'jquery',
    'underscore',
    'backbone',
    './photos',
    'template!./template.html'
], function ($, _, Backbone, Photos, template) {
    var View = Backbone.View.extend({
            collection: new Photos(),
            listeners: {
                'app change:keyword': 'fetch',
                'collection sync': 'renderResults',
                'collection reset': 'renderResults'
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
                } else if (this.collection.length) {
                    this.collection.reset();
                }
            }, 500),
            renderResults: function () {
                var html = '';

                this.collection.each(function (photo) {
                    html += template({
                        src: photo.getImageUrl()
                    });
                });

                this.$el.html(html);
            }
        });

    return View;
});