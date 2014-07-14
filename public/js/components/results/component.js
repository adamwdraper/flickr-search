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
                this.plugins.infiniteScroll = new InfiniteScroll({
                    el: this.$el
                }).render();
                this.listenTo(this.plugins.infiniteScroll, 'nearBottom', this.nextPage);

                return this;
            },
            nextKeyword: function () {
                this.app.set('page', 1, {
                    silent: true
                });

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
                var html = '';

                this.collection.each(function (photo) {
                    html += template({
                        src: photo.getUrl()
                    });
                });

                if (this.app.get('page') === 1) {
                    this.$el.html(html);
                } else {
                    this.$el.append(html);
                }

                this.plugins.infiniteScroll.trigger('reset');
            }
        });

    return View;
});