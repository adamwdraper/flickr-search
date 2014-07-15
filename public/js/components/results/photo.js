define([
    'backbone'
], function (Backbone) {
    var Model = Backbone.Model.extend({
        getUrl: function () {
            return this.get('url_z');
        },
        getDimensions: function () {
            return {
                height: Number(this.get('height_z')),
                width: Number(this.get('width_z'))
            };
        },
        getLink: function () {
            return 'https://www.flickr.com/photos/' + this.get('owner') + '/' + this.get('id');
        }
    });

    return Model;
});