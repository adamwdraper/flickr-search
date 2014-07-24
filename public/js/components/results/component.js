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
    'template!./error.html',
    'template!./no-results.html'
], function ($, _, Backbone, InfiniteScroll, Tiles, Photos, loader, err, noResults) {
    var View = Backbone.View.extend({
            templates: {
                loader: loader(),
                err: err()
            },
            collection: new Photos(),
            listeners: {
                'change:keyword router': 'fetchByKeyword',
                'sync collection': 'renderResults',
                'reset collection': 'renderResults',
                'error collection': 'renderError',
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
                this.listenTo(this.plugins.infiniteScroll, 'nearBottom', this.fetchByPage);
                this.plugins.infiniteScroll.trigger('pause');

                // trigger render if keyword was loaded from url
                if (this.router.get('keyword')) {
                    this.fetchByKeyword();
                }

                return this;
            },
            renderResults: function () {
                if (this.collection.length) {
                    // add tiles to container
                    this.addTiles();

                    // start infinite scroll listening
                    this.plugins.infiniteScroll.trigger('reset');
                } else {
                    // no results
                    if (this.router.get('page') === 1) {
                        if (this.router.get('keyword')) {
                            // show no results message
                            this.$container.html(noResults({
                                keyword: this.router.get('keyword')
                            }));
                        } else {
                            this.$container.empty();
                        }
                    } else {
                        // no more results
                        this.plugins.infiniteScroll.trigger('destroy');
                    }
                }
            },
            renderTemplate: function (template) {
                this.$container.html(this.templates[template]);
            },
            renderError: function () {
                this.renderTemplate('err');
            },
            renderLoader: function () {
                // add loader if it doesn't exist
                if (!this.$el.find('[data-loader]').length) {
                    this.renderTemplate('loader');
                }
            },
            fetchByKeyword: function () {
                this.plugins.infiniteScroll.trigger('pause');

                this.renderLoader();

                // reset page
                this.router.set('page', 1);

                this.trigger('fetch');
            },
            fetchByPage: function () {
                this.router.set('page', this.router.get('page') + 1);

                this.trigger('fetch');
            },
            fetch: _.debounce(function () {
                if (this.router.get('keyword')) {
                    this.collection.fetch();
                } else if (this.collection.length) {
                    this.collection.reset();
                }
            }, 500),
            addTiles: function () {
                var photos = [];

                this.collection.each(function (photo) {
                    var dimensions = photo.getDimensions();

                    // flickr api doesn't alwasy return dimensions so we weed those out for now
                    if (dimensions.height && dimensions.width) {
                        photos.push({
                            src: photo.getUrl(),
                            href: photo.getLink(),
                            height: dimensions.height,
                            width: dimensions.width
                        });
                    }
                });

                // new set of results
                if (this.router.get('page') === 1) {
                    this.$container.tiles('empty');
                }

                // render the tiles with plugin
                this.$container.tiles('add', photos);
            }
        });

    return View;
});