define([
    'backbone',
    'utilities/flickr/utility',
    './model'
], function (Backbone, flickr, Model) {
    var Collection = Backbone.Collection.extend({
        model: Model,
        url: function () {
            var params = {
                    method: 'flickr.photos.search',
                    api_key: flickr.api.key,
                    text: 'tennis',
                    extras: 'description, media, date_taken, owner_name, tags, url_z, url_c, url_l',
                    format: 'json',
                    nojsoncallback: 1,
                    per_page: 25
                };

            return 'https://api.flickr.com/services/rest/?' + $.param(params);
        },
        parse: function (response) {
            return response.photos.photo;
        }
    });

    return Collection;
});