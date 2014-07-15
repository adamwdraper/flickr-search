define([
    'jquery',
    'underscore',
    'backbone',
    'template!./loader.html',
    'template!./end.html'
], function($, _, Backbone, loader, end) {
    var View = Backbone.View.extend({
        loader: loader,
        end: end,
        events: {},
        listeners: {
            'nearBottom': 'nearBottom',
            'reset': 'reset',
            'pause': 'pause',
            'destroy': 'destroy'
        },
        options: {
            padding: 500
        },
        initialize: function () {
            _.bindAll(this, 'nearBottom', 'reset', 'pause');
        },
        render: function () {
            this.$document = $(document);
            this.$window = $(window);
            this.$target = this.options.scrollTarget ? $(this.options.scrollTarget) : this.$document;

            this.scrollSpy();

            this.$loader = $(this.loader());
            this.$end = $(this.end());

            return this;
        },
        renderLoader: function () {
            this.$el.append(this.$loader);
        },
        removeLoader: function () {
            this.$loader.remove();
        },
        scrollSpy: function () {
            var _this = this;

            // listen for scroll
            this.$target.on('scroll.infinte-scroll.' + this.cid, function () {
                if(_this.isNearBottom()) {
                    _this.trigger('nearBottom');
                }
            });
        },
        isNearBottom: function () {
            var elementHeight,
                documentHeight;

            elementHeight = (this.$el.outerHeight() + this.$el.offset().top);
            documentHeight = (this.$document.scrollTop() + this.$window.height());

            return (elementHeight - documentHeight) < this.options.padding;
        },
        nearBottom: function () {
            this.$target.off('scroll.infinte-scroll.' + this.cid);
            this.renderLoader();
        },
        reset: function () {
            this.removeLoader();
            this.scrollSpy();
        },
        pause: function () {
            this.$target.off('scroll.infinte-scroll.' + this.cid);
        },
        destroy: function() {
            this.$target.off('scroll.infinte-scroll.' + this.cid);
            this.removeLoader();
            this.$el.append(this.$end);
        }
    });

    return View;
});