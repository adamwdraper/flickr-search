define(["jquery","underscore","backbone","template!./template.html"],function(e,t,n,r){var i=n.View.extend({template:r,bindings:{},listeners:{},events:{},initialize:function(){},render:function(){return this.$el.html(this.template()),this}});return i});