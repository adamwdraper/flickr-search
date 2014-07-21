define([
    'backbone',
    'utilities/flickr/utility',
    './photo'
], function (Backbone, flickr, Photo) {
    var Collection = Backbone.Collection.extend({
        model: Photo,
        url: function () {
            var params = {
                    method: 'flickr.photos.search',
                    api_key: flickr.api.key,
                    text: this.router.get('keyword'),
                    extras: 'description, media, date_taken, owner_name, tags, url_z, url_c, url_l',
                    format: 'json',
                    nojsoncallback: 1,
                    per_page: 40,
                    sort: 'relevance',
                    page: this.router.get('page')
                };

            return 'https://api.flickr.com/services/rest/?' + $.param(params);
        },
        parse: function (response) {
            return response.photos.photo;
        }
    });

    return Collection;
});