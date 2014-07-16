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
    'template!./loader.html',
    'template!./no-results.html'
], function ($, _, Backbone, InfiniteScroll, Tiles, Photos, loader, noResults) {
    var View = Backbone.View.extend({
            loader: loader(),
            collection: new Photos(),
            listeners: {
                'app change:keyword': 'nextKeyword',
                'collection sync': 'renderResults',
                'collection reset': 'renderResults',
                'initKeyword': 'nextKeyword',
                'fetch': 'fetch'
            },
            events: {},
            initialize: function () {
                _.bindAll(this, 'fetch');
            },
            render: function () {
                // initialize tiles
                this.$container = this.$el.find('[data-container]');
                this.$container.tiles();

                // initialize infinite scroll and listen for events
                this.plugins.infiniteScroll = new InfiniteScroll({
                    el: this.$container
                }).render();
                this.listenTo(this.plugins.infiniteScroll, 'nearBottom', this.nextPage);

                // trigger render if keyword was loaded from url
                if (this.app.get('keyword')) {
                    this.trigger('initKeyword');
                }

                return this;
            },
            nextKeyword: function () {
                // add loader if it doesn't exist
                if (!this.$el.find('[data-loader]').length) {
                    this.$container.html(this.loader);
                }

                // reset page
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

                if (this.collection.length) {
                    this.collection.each(function (photo) {
                        var dimensions = photo.getDimensions();

                        photos.push({
                            src: photo.getUrl(),
                            href: photo.getLink(),
                            height: dimensions.height,
                            width: dimensions.width
                        });
                    });

                    if (this.app.get('page') === 1) {
                        this.$container.tiles('empty');
                    }

                    this.$container.tiles('add', photos);

                    this.plugins.infiniteScroll.trigger('reset');
                } else {
                    // if first page add no results message else end infinite scroll
                    if (this.app.get('page') === 1) {
                        this.$container.html(noResults({
                            keyword: this.app.get('keyword')
                        }));
                    } else {
                        this.plugins.infiniteScroll.trigger('destroy');
                    }
                }
            }
        });

    return View;
});