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
        methods = {
            init: function () {
                return this.each(function () {
                    $this = $(this);

                    if (!$this.data('initialized')) {
                        $this.data('initialized', true);
                    }
                });
            },
            add: function (photos) {
                photos.forEach(function (photo) {
                    var image = new Image();

                    image.src = photo.src;

                    $this.append(image);
                });
            }
        };

    $.fn.tiles = function (method) {
        if (methods[method]) {
            return methods[method].apply( this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' +  method + ' does not exist on jQuery.plugin');
        }
    };
}));