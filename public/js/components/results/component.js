/**
 * @appular results
 */

define([
    'jquery',
    'underscore',
    'backbone',
    'plugins/infinite-scroll/plugin',
    'libraries/jquery/plugins/tiles',
    './photos',
    'template!./photo.html'
], function ($, _, Backbone, InfiniteScroll, Tiles, Photos, template) {
    var View = Backbone.View.extend({
            collection: new Photos(),
            listeners: {
                'app change:keyword': 'nextKeyword',
                'collection sync': 'renderResults',
                'collection reset': 'renderResults',
                'fetch': 'fetch'
            },
            events: {},
            initialize: function () {
                _.bindAll(this, 'fetch');
            },
            render: function () {
                this.$container = this.$el.find('[data-container]');
                this.$container.tiles();

                this.plugins.infiniteScroll = new InfiniteScroll({
                    el: this.$container
                }).render();
                this.listenTo(this.plugins.infiniteScroll, 'nearBottom', this.nextPage);

                this.trigger('fetch');

                return this;
            },
            nextKeyword: function () {
                this.app.set('page', 1);

                this.trigger('fetch');
            },
            nextPage: function () {
                var page = this.app.get('page');

                this.app.set('page', page + 1);

                this.trigger('fetch');
            },
            fetch: _.debounce(function () {
                if (this.app.get('keyword')) {
                    this.collection.fetch();
                } else if (this.collection.length) {
                    this.collection.reset();
                }
            }, 500),
            renderResults: function () {
                var photos = [];

                this.collection.each(function (photo) {
                    var dimensions = photo.getDimensions();

                    photos.push({
                        src: photo.getUrl(),
                        height: dimensions.height,
                        width: dimensions.width
                    });
                });

                if (this.app.get('page') === 1) {
                    this.$container.tiles('add', photos);
                } else {
                    // this.$container.append(html);
                }

                this.plugins.infiniteScroll.trigger('reset');
            }
        });

    return View;
});