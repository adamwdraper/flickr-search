// Uses AMD or browser globals to create a jQuery plugin.

/**
 * Name - jQuery Plugin
 *
 * Version: 0.0.1 (5/25/2012)
 * Requires: jQuery v1.7+
 *
 * Copyright (c) 2011 User - http://github.com/username
 * Under MIT and GPL licenses:
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    var $this,
        options = {
            imageHeight: 250
        },
        normalizeHeight = function (photo) {
            var height = options.imageHeight,
                scale = height/Number(photo.height);

            photo.height = Number(photo.height) * scale;
            photo.width = Number(photo.width) * scale;
        },
        isCloser = function (a, b, goal) {
            return Math.abs(a - goal) > Math.abs(b - goal);
        },
        api = {
            init: function () {
                return this.each(function () {
                    $this = $(this);

                    if (!$this.data('initialized')) {
                        $this.data('initialized', true);
                    }
                });
            },
            add: function (photos) {
                var containerWidth = $this.width(),
                    rows = [],
                    row = {
                        width: 0,
                        photos: []
                    };

                photos.forEach(function (photo) {
                    // normalize dimensions
                    normalizeHeight(photo);

                    // figure out which is closer to the container width
                    if (isCloser(row.width, row.width + photo.width, containerWidth)) {
                        // add to row
                        row.photos.push(photo);
                        row.width = row.width + photo.width;
                    } else {
                        // close old row
                        rows.push(row);

                        // reset to next row
                        row = {
                            width: photo.width,
                            photos: [
                                photo
                            ]
                        };
                    }
                });

                rows.forEach(function (row) {
                    // find out scale for row
                    var scale = containerWidth/row.width;

                    row.photos.forEach(function (photo) {
                        var image = new Image();
                        image.src = photo.src;

                        image.width = photo.width * scale;
                        image.height = photo.height * scale;

                        $this.append(image);
                    });
                });
            },
            empty: function () {
                $this.empty();
            }
        };

    $.fn.tiles = function (method) {
        if (api[method]) {
            return api[method].apply( this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return api.init.apply(this, arguments);
        } else {
            $.error('Method ' +  method + ' does not exist on jQuery.plugin');
        }
    };
}));