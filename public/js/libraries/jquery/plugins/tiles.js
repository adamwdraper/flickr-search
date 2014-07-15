/**
 * Tiles - jQuery Plugin
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
            imageHeight: 250,
            margin: 1
        },
        photos = [],
        normalizeHeight = function (photo) {
            var height = options.imageHeight,
                scale = (height/Number(photo.height + (options.margin * 2))).toFixed(3);

            photo.height = Number(photo.height - (options.margin * 2)) * scale;
            photo.width = Number(photo.width - (options.margin * 2)) * scale;
        },
        isCloser = function (a, b, goal) {
            return Math.abs(a - goal) > Math.abs(b - goal);
        },
        debounce = function (func, threshold, execAsap) {
            var timeout;
            return function debounced () {
                var obj = this, args = arguments;
                function delayed () {
                    if (!execAsap)
                        func.apply(obj, args);
                    timeout = null;
                };

                if (timeout)
                    clearTimeout(timeout);
                else if (execAsap)
                    func.apply(obj, args);

                timeout = setTimeout(delayed, threshold || 250);
            };
        },
        buildRows = function (photos) {
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

                    // start to next row
                    row = {
                        width: photo.width,
                        photos: [
                            photo
                        ]
                    };
                }
            });

            return rows;
        },
        render = function (newPhotos) {
            var containerWidth = $this.width(),
                rowsToRender = newPhotos ? buildRows(newPhotos) : buildRows(photos);

            if (!newPhotos) {
                $this.empty();
            }
            
            rowsToRender.forEach(function (row) {
                // find out scale for row
                var scale = containerWidth/row.width;

                row.photos.forEach(function (photo) {
                    var $a = $('<a></a>'),
                        $image = $('<img>');

                    $image.attr('src', photo.src);
                    if (options.margin) {
                        $image.css('margin', options.margin + 'px');
                    }
                    $image.width(Math.floor((photo.width - (options.margin * 2)) * scale));
                    $image.height(Math.floor((photo.height - (options.margin * 2)) * scale));

                    $image.on('load', function () {
                        $(this).addClass('loaded');
                    });

                    if (photo.href) {
                        $a.attr('href', photo.href).attr('target', '_blank');
                    }

                    $a.addClass('tile').html($image);

                    $this.append($a);
                });
            });
        },
        resized = function () {
            render();
        },
        api = {
            init: function () {
                return this.each(function () {
                    $this = $(this);

                    if (!$this.data('initialized')) {
                        $this.data('initialized', true);

                        $(window).on('resize', debounce(resized));
                    }
                });
            },
            add: function (newPhotos) {
                // add new rows to all rows
                photos = photos.concat(newPhotos);

                render(newPhotos);
            },
            empty: function () {
                photos = [];

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