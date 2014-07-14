define([
    'backbone'
], function (Backbone) {
    var Model = Backbone.Model.extend({
        getImageUrl: function () {
            return 'https://farm' + this.get('farm') + '.staticflickr.com/' + this.get('server') + '/' + this.get('id') + '_' + this.get('secret') + '.jpg';
        }
    });

    return Model;
});