define("components/header/component",["jquery","underscore","backbone"],function(e,t,n){var r=n.View.extend({bindings:{input:"value"},events:{},initialize:function(){},render:function(){return this.stickit(this.app.get("keyword",{model:!0})),this}});return r});