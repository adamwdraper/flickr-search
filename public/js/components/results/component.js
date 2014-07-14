/**
 * @appular results
 */

define([
    'jquery',
    'underscore',
    'backbone',
    'plugins/infinite-scroll/plugin',
    './photos',
    'template!./template.html'
], function ($, _, Backbone, InfiniteScroll, Photos, template) {
    var View = Backbone.View.extend({
            collection: new Photos(),
            listeners: {
                'app change:keyword': 'fetch',
                'app change:page': 'fetch',
                'collection sync': 'renderResults',
                'collection reset': 'renderResults'
            },
            events: {},
            initialize: function () {
                _.bindAll(this, 'fetch');
            },
            render: function () {
                this.plugins.infiniteScroll = new InfiniteScroll({
                    el: this.$el
                }).render();
                this.listenTo(this.plugins.infiniteScroll, 'nearBottom', this.nextPage);

                return this;
            },
            fetch: _.debounce(function () {
                var keyword = this.app.get('keyword'),
                    page = 1;
                
                this.app.set('page', page, {
                    silent: true
                });

                this.collection.options.keyword = keyword;
                this.collection.options.page = page;

                if (keyword) {
                    this.collection.fetch();
                } else if (this.collection.length) {
                    this.collection.reset();
                }
            }, 500),
            nextPage: function () {
                var page = this.app.get('page');

                this.app.set('page', page + 1);
            },
            renderResults: function () {
                var html = '';

                this.collection.each(function (photo) {
                    html += template({
                        src: photo.getImageUrl()
                    });
                });

                if (this.app.get('page') === 1) {
                    this.$el.html(html);
                } else {
                    this.$el.append(html);
                }
            }
        });

    return View;
});