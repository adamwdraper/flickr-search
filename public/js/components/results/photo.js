define([
    'backbone'
], function (Backbone) {
    var Model = Backbone.Model.extend({
        getUrl: function () {
            return this.get('url_q');
        }
    });

    return Model;
});