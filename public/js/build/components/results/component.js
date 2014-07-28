/**
 * Tiles - jQuery Plugin for row gridded images
 *
 * Version: 0.0.1 (5/25/2012)
 * Requires: jQuery v1.7+
 *
 * Copyright (c) 2011 User - http://github.com/adamwdraper
 * Under MIT and GPL licenses:
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 */

(function(e){typeof define=="function"&&define.amd?define("libraries/jquery/plugins/tiles",["jquery"],e):e(jQuery)})(function(e){var t,n={imageHeight:250,margin:1},r=[],i=function(e){var t=n.imageHeight,r=t/Number(e.height).toFixed(3);e.height=Number(e.height)*r,e.width=Number(e.width)*r},s=function(e,t,n){return Math.abs(e-n)>Math.abs(t-n)},o=function(e,t,n){var r;return function(){var s=this,o=arguments,u=function(){n||e.apply(s,o),r=null};r?clearTimeout(r):n&&e.apply(s,o),r=setTimeout(u,t||250)}},u=function(e){var n=t.width(),r=[],o={width:0,photos:[]};return e.forEach(function(t,u){i(t),s(o.width,o.width+t.width,n)?(o.photos.push(t),o.width=o.width+t.width):(r.push(o),o={width:t.width,photos:[t]}),u===e.length-1&&r.push(o)}),r},a=function(i){var s=t.width(),o=i?u(i):u(r);i||t.empty(),o.forEach(function(r){var i=(s-n.margin*r.photos.length*2)/r.width;r.photos.forEach(function(r){var s=e("<a></a>"),o=e("<img>");o.attr("src",r.src),n.margin&&o.css("margin",n.margin+"px"),o.width(Math.floor(r.width*i)),o.height(Math.floor(r.height*i)),o.on("load",function(){e(this).addClass("loaded")}),r.href&&s.attr("href",r.href).attr("target","_blank"),s.addClass("tile").html(o),t.append(s)})})},f=function(){a()},l={init:function(){return this.each(function(){t=e(this),t.data("initialized")||(t.data("initialized",!0),e(window).on("resize",o(f)))})},add:function(e){r=r.concat(e),a(e)},empty:function(){r=[],t.empty()}};e.fn.tiles=function(t){if(l[t])return l[t].apply(this,Array.prototype.slice.call(arguments,1));if(typeof t=="object"||!t)return l.init.apply(this,arguments);e.error("Method "+t+" does not exist on jQuery.plugin")}}),define("components/results/photo",["backbone"],function(e){var t=e.Model.extend({getUrl:function(){return this.get("url_z")},getDimensions:function(){return{height:Number(this.get("height_z")),width:Number(this.get("width_z"))}},getLink:function(){return"https://www.flickr.com/photos/"+this.get("owner")+"/"+this.get("id")}});return t}),define("components/results/photos",["backbone","utilities/flickr/utility","./photo"],function(e,t,n){var r=e.Collection.extend({model:n,url:function(){var e={method:"flickr.photos.search",api_key:t.api.key,text:this.router.get("keyword"),extras:"description, media, date_taken, owner_name, tags, url_z, url_c, url_l",format:"json",nojsoncallback:1,per_page:40,sort:"relevance",page:this.router.get("page")};return"https://api.flickr.com/services/rest/?"+$.param(e)},parse:function(e){return e.photos.photo}});return r}),define("text!components/results/loader.html",[],function(){return'<div class="ui-loader" data-loader>\n    <span class="spinner"></span>\n</div>'}),define("text!components/results/error.html",[],function(){return'<div class="message">Error, please try again</div>'}),define("text!components/results/no-results.html",[],function(){return'<div class="message">No images found for &quot;{{ keyword }}&quot;</div>'}),define("components/results/component",["jquery","underscore","backbone","plugins/infinite-scroll/plugin","libraries/jquery/plugins/tiles","./photos","template!./loader.html","template!./error.html","template!./no-results.html"],function(e,t,n,r,i,s,o,u,a){var f=n.View.extend({templates:{loader:o(),err:u()},collection:new s,listeners:{"change:keyword router":"fetchByKeyword","sync collection":"renderResults","reset collection":"renderResults","error collection":"renderError",fetch:"fetch"},events:{},initialize:function(){t.bindAll(this,"fetch")},render:function(){return this.$container=this.$el.find("[data-container]"),this.$container.tiles(),this.plugins.infiniteScroll=(new r({el:this.$container})).render(),this.listenTo(this.plugins.infiniteScroll,"nearBottom",this.fetchByPage),this.plugins.infiniteScroll.trigger("pause"),this.router.get("keyword")&&this.fetchByKeyword(),this},renderResults:function(){this.collection.length?(this.addTiles(),this.plugins.infiniteScroll.trigger("reset")):this.router.get("page")===1?this.router.get("keyword")?this.$container.html(a({keyword:this.router.get("keyword")})):this.$container.empty():this.plugins.infiniteScroll.trigger("destroy")},renderTemplate:function(e){this.$container.html(this.templates[e])},renderError:function(){this.renderTemplate("err")},renderLoader:function(){this.$el.find("[data-loader]").length||this.renderTemplate("loader")},fetchByKeyword:function(){this.plugins.infiniteScroll.trigger("pause"),this.renderLoader(),this.router.set("page",1),this.trigger("fetch")},fetchByPage:function(){this.router.set("page",this.router.get("page")+1),this.trigger("fetch")},fetch:t.debounce(function(){this.router.get("keyword")?this.collection.fetch():this.collection.length&&this.collection.reset()},500),addTiles:function(){var e=[];this.collection.each(function(t){var n=t.getDimensions();n.height&&n.width&&e.push({src:t.getUrl(),href:t.getLink(),height:n.height,width:n.width})}),this.router.get("page")===1&&this.$container.tiles("empty"),this.$container.tiles("add",e)}});return f});