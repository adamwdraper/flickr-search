define([
    'backbone'
], function (Backbone) {
    var Model = Backbone.Model.extend({
        getUrl: function () {
            return this.get('url_q');
        },
        getLink: function () {
            return 'https://www.flickr.com/photos/' + this.get('owner') + '/' + this.get('id');
        }
    });

    return Model;
});