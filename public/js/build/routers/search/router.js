//     Underscore.js 1.6.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

//     (c) 2010-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors

//     Backbone may be freely distributed under the MIT license.

(function(){var e=this,t=e._,n={},r=Array.prototype,i=Object.prototype,s=Function.prototype,o=r.push,u=r.slice,a=r.concat,f=i.toString,l=i.hasOwnProperty,c=r.forEach,h=r.map,p=r.reduce,d=r.reduceRight,v=r.filter,m=r.every,g=r.some,y=r.indexOf,b=r.lastIndexOf,w=Array.isArray,E=Object.keys,S=s.bind,x=function(e){if(e instanceof x)return e;if(!(this instanceof x))return new x(e);this._wrapped=e};typeof exports!="undefined"?(typeof module!="undefined"&&module.exports&&(exports=module.exports=x),exports._=x):e._=x,x.VERSION="1.6.0";var T=x.each=x.forEach=function(e,t,r){if(e==null)return e;if(c&&e.forEach===c)e.forEach(t,r);else if(e.length===+e.length){for(var i=0,s=e.length;i<s;i++)if(t.call(r,e[i],i,e)===n)return}else{var o=x.keys(e);for(var i=0,s=o.length;i<s;i++)if(t.call(r,e[o[i]],o[i],e)===n)return}return e};x.map=x.collect=function(e,t,n){var r=[];return e==null?r:h&&e.map===h?e.map(t,n):(T(e,function(e,i,s){r.push(t.call(n,e,i,s))}),r)};var N="Reduce of empty array with no initial value";x.reduce=x.foldl=x.inject=function(e,t,n,r){var i=arguments.length>2;e==null&&(e=[]);if(p&&e.reduce===p)return r&&(t=x.bind(t,r)),i?e.reduce(t,n):e.reduce(t);T(e,function(e,s,o){i?n=t.call(r,n,e,s,o):(n=e,i=!0)});if(!i)throw new TypeError(N);return n},x.reduceRight=x.foldr=function(e,t,n,r){var i=arguments.length>2;e==null&&(e=[]);if(d&&e.reduceRight===d)return r&&(t=x.bind(t,r)),i?e.reduceRight(t,n):e.reduceRight(t);var s=e.length;if(s!==+s){var o=x.keys(e);s=o.length}T(e,function(u,a,f){a=o?o[--s]:--s,i?n=t.call(r,n,e[a],a,f):(n=e[a],i=!0)});if(!i)throw new TypeError(N);return n},x.find=x.detect=function(e,t,n){var r;return C(e,function(e,i,s){if(t.call(n,e,i,s))return r=e,!0}),r},x.filter=x.select=function(e,t,n){var r=[];return e==null?r:v&&e.filter===v?e.filter(t,n):(T(e,function(e,i,s){t.call(n,e,i,s)&&r.push(e)}),r)},x.reject=function(e,t,n){return x.filter(e,function(e,r,i){return!t.call(n,e,r,i)},n)},x.every=x.all=function(e,t,r){t||(t=x.identity);var i=!0;return e==null?i:m&&e.every===m?e.every(t,r):(T(e,function(e,s,o){if(!(i=i&&t.call(r,e,s,o)))return n}),!!i)};var C=x.some=x.any=function(e,t,r){t||(t=x.identity);var i=!1;return e==null?i:g&&e.some===g?e.some(t,r):(T(e,function(e,s,o){if(i||(i=t.call(r,e,s,o)))return n}),!!i)};x.contains=x.include=function(e,t){return e==null?!1:y&&e.indexOf===y?e.indexOf(t)!=-1:C(e,function(e){return e===t})},x.invoke=function(e,t){var n=u.call(arguments,2),r=x.isFunction(t);return x.map(e,function(e){return(r?t:e[t]).apply(e,n)})},x.pluck=function(e,t){return x.map(e,x.property(t))},x.where=function(e,t){return x.filter(e,x.matches(t))},x.findWhere=function(e,t){return x.find(e,x.matches(t))},x.max=function(e,t,n){if(!t&&x.isArray(e)&&e[0]===+e[0]&&e.length<65535)return Math.max.apply(Math,e);var r=-Infinity,i=-Infinity;return T(e,function(e,s,o){var u=t?t.call(n,e,s,o):e;u>i&&(r=e,i=u)}),r},x.min=function(e,t,n){if(!t&&x.isArray(e)&&e[0]===+e[0]&&e.length<65535)return Math.min.apply(Math,e);var r=Infinity,i=Infinity;return T(e,function(e,s,o){var u=t?t.call(n,e,s,o):e;u<i&&(r=e,i=u)}),r},x.shuffle=function(e){var t,n=0,r=[];return T(e,function(e){t=x.random(n++),r[n-1]=r[t],r[t]=e}),r},x.sample=function(e,t,n){return t==null||n?(e.length!==+e.length&&(e=x.values(e)),e[x.random(e.length-1)]):x.shuffle(e).slice(0,Math.max(0,t))};var k=function(e){return e==null?x.identity:x.isFunction(e)?e:x.property(e)};x.sortBy=function(e,t,n){return t=k(t),x.pluck(x.map(e,function(e,r,i){return{value:e,index:r,criteria:t.call(n,e,r,i)}}).sort(function(e,t){var n=e.criteria,r=t.criteria;if(n!==r){if(n>r||n===void 0)return 1;if(n<r||r===void 0)return-1}return e.index-t.index}),"value")};var L=function(e){return function(t,n,r){var i={};return n=k(n),T(t,function(s,o){var u=n.call(r,s,o,t);e(i,u,s)}),i}};x.groupBy=L(function(e,t,n){x.has(e,t)?e[t].push(n):e[t]=[n]}),x.indexBy=L(function(e,t,n){e[t]=n}),x.countBy=L(function(e,t){x.has(e,t)?e[t]++:e[t]=1}),x.sortedIndex=function(e,t,n,r){n=k(n);var i=n.call(r,t),s=0,o=e.length;while(s<o){var u=s+o>>>1;n.call(r,e[u])<i?s=u+1:o=u}return s},x.toArray=function(e){return e?x.isArray(e)?u.call(e):e.length===+e.length?x.map(e,x.identity):x.values(e):[]},x.size=function(e){return e==null?0:e.length===+e.length?e.length:x.keys(e).length},x.first=x.head=x.take=function(e,t,n){return e==null?void 0:t==null||n?e[0]:t<0?[]:u.call(e,0,t)},x.initial=function(e,t,n){return u.call(e,0,e.length-(t==null||n?1:t))},x.last=function(e,t,n){return e==null?void 0:t==null||n?e[e.length-1]:u.call(e,Math.max(e.length-t,0))},x.rest=x.tail=x.drop=function(e,t,n){return u.call(e,t==null||n?1:t)},x.compact=function(e){return x.filter(e,x.identity)};var A=function(e,t,n){return t&&x.every(e,x.isArray)?a.apply(n,e):(T(e,function(e){x.isArray(e)||x.isArguments(e)?t?o.apply(n,e):A(e,t,n):n.push(e)}),n)};x.flatten=function(e,t){return A(e,t,[])},x.without=function(e){return x.difference(e,u.call(arguments,1))},x.partition=function(e,t){var n=[],r=[];return T(e,function(e){(t(e)?n:r).push(e)}),[n,r]},x.uniq=x.unique=function(e,t,n,r){x.isFunction(t)&&(r=n,n=t,t=!1);var i=n?x.map(e,n,r):e,s=[],o=[];return T(i,function(n,r){if(t?!r||o[o.length-1]!==n:!x.contains(o,n))o.push(n),s.push(e[r])}),s},x.union=function(){return x.uniq(x.flatten(arguments,!0))},x.intersection=function(e){var t=u.call(arguments,1);return x.filter(x.uniq(e),function(e){return x.every(t,function(t){return x.contains(t,e)})})},x.difference=function(e){var t=a.apply(r,u.call(arguments,1));return x.filter(e,function(e){return!x.contains(t,e)})},x.zip=function(){var e=x.max(x.pluck(arguments,"length").concat(0)),t=new Array(e);for(var n=0;n<e;n++)t[n]=x.pluck(arguments,""+n);return t},x.object=function(e,t){if(e==null)return{};var n={};for(var r=0,i=e.length;r<i;r++)t?n[e[r]]=t[r]:n[e[r][0]]=e[r][1];return n},x.indexOf=function(e,t,n){if(e==null)return-1;var r=0,i=e.length;if(n){if(typeof n!="number")return r=x.sortedIndex(e,t),e[r]===t?r:-1;r=n<0?Math.max(0,i+n):n}if(y&&e.indexOf===y)return e.indexOf(t,n);for(;r<i;r++)if(e[r]===t)return r;return-1},x.lastIndexOf=function(e,t,n){if(e==null)return-1;var r=n!=null;if(b&&e.lastIndexOf===b)return r?e.lastIndexOf(t,n):e.lastIndexOf(t);var i=r?n:e.length;while(i--)if(e[i]===t)return i;return-1},x.range=function(e,t,n){arguments.length<=1&&(t=e||0,e=0),n=arguments[2]||1;var r=Math.max(Math.ceil((t-e)/n),0),i=0,s=new Array(r);while(i<r)s[i++]=e,e+=n;return s};var O=function(){};x.bind=function(e,t){var n,r;if(S&&e.bind===S)return S.apply(e,u.call(arguments,1));if(!x.isFunction(e))throw new TypeError;return n=u.call(arguments,2),r=function(){if(this instanceof r){O.prototype=e.prototype;var i=new O;O.prototype=null;var s=e.apply(i,n.concat(u.call(arguments)));return Object(s)===s?s:i}return e.apply(t,n.concat(u.call(arguments)))}},x.partial=function(e){var t=u.call(arguments,1);return function(){var n=0,r=t.slice();for(var i=0,s=r.length;i<s;i++)r[i]===x&&(r[i]=arguments[n++]);while(n<arguments.length)r.push(arguments[n++]);return e.apply(this,r)}},x.bindAll=function(e){var t=u.call(arguments,1);if(t.length===0)throw new Error("bindAll must be passed function names");return T(t,function(t){e[t]=x.bind(e[t],e)}),e},x.memoize=function(e,t){var n={};return t||(t=x.identity),function(){var r=t.apply(this,arguments);return x.has(n,r)?n[r]:n[r]=e.apply(this,arguments)}},x.delay=function(e,t){var n=u.call(arguments,2);return setTimeout(function(){return e.apply(null,n)},t)},x.defer=function(e){return x.delay.apply(x,[e,1].concat(u.call(arguments,1)))},x.throttle=function(e,t,n){var r,i,s,o=null,u=0;n||(n={});var a=function(){u=n.leading===!1?0:x.now(),o=null,s=e.apply(r,i),r=i=null};return function(){var f=x.now();!u&&n.leading===!1&&(u=f);var l=t-(f-u);return r=this,i=arguments,l<=0?(clearTimeout(o),o=null,u=f,s=e.apply(r,i),r=i=null):!o&&n.trailing!==!1&&(o=setTimeout(a,l)),s}},x.debounce=function(e,t,n){var r,i,s,o,u,a=function(){var f=x.now()-o;f<t?r=setTimeout(a,t-f):(r=null,n||(u=e.apply(s,i),s=i=null))};return function(){s=this,i=arguments,o=x.now();var f=n&&!r;return r||(r=setTimeout(a,t)),f&&(u=e.apply(s,i),s=i=null),u}},x.once=function(e){var t=!1,n;return function(){return t?n:(t=!0,n=e.apply(this,arguments),e=null,n)}},x.wrap=function(e,t){return x.partial(t,e)},x.compose=function(){var e=arguments;return function(){var t=arguments;for(var n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},x.after=function(e,t){return function(){if(--e<1)return t.apply(this,arguments)}},x.keys=function(e){if(!x.isObject(e))return[];if(E)return E(e);var t=[];for(var n in e)x.has(e,n)&&t.push(n);return t},x.values=function(e){var t=x.keys(e),n=t.length,r=new Array(n);for(var i=0;i<n;i++)r[i]=e[t[i]];return r},x.pairs=function(e){var t=x.keys(e),n=t.length,r=new Array(n);for(var i=0;i<n;i++)r[i]=[t[i],e[t[i]]];return r},x.invert=function(e){var t={},n=x.keys(e);for(var r=0,i=n.length;r<i;r++)t[e[n[r]]]=n[r];return t},x.functions=x.methods=function(e){var t=[];for(var n in e)x.isFunction(e[n])&&t.push(n);return t.sort()},x.extend=function(e){return T(u.call(arguments,1),function(t){if(t)for(var n in t)e[n]=t[n]}),e},x.pick=function(e){var t={},n=a.apply(r,u.call(arguments,1));return T(n,function(n){n in e&&(t[n]=e[n])}),t},x.omit=function(e){var t={},n=a.apply(r,u.call(arguments,1));for(var i in e)x.contains(n,i)||(t[i]=e[i]);return t},x.defaults=function(e){return T(u.call(arguments,1),function(t){if(t)for(var n in t)e[n]===void 0&&(e[n]=t[n])}),e},x.clone=function(e){return x.isObject(e)?x.isArray(e)?e.slice():x.extend({},e):e},x.tap=function(e,t){return t(e),e};var M=function(e,t,n,r){if(e===t)return e!==0||1/e==1/t;if(e==null||t==null)return e===t;e instanceof x&&(e=e._wrapped),t instanceof x&&(t=t._wrapped);var i=f.call(e);if(i!=f.call(t))return!1;switch(i){case"[object String]":return e==String(t);case"[object Number]":return e!=+e?t!=+t:e==0?1/e==1/t:e==+t;case"[object Date]":case"[object Boolean]":return+e==+t;case"[object RegExp]":return e.source==t.source&&e.global==t.global&&e.multiline==t.multiline&&e.ignoreCase==t.ignoreCase}if(typeof e!="object"||typeof t!="object")return!1;var s=n.length;while(s--)if(n[s]==e)return r[s]==t;var o=e.constructor,u=t.constructor;if(o!==u&&!(x.isFunction(o)&&o instanceof o&&x.isFunction(u)&&u instanceof u)&&"constructor"in e&&"constructor"in t)return!1;n.push(e),r.push(t);var a=0,l=!0;if(i=="[object Array]"){a=e.length,l=a==t.length;if(l)while(a--)if(!(l=M(e[a],t[a],n,r)))break}else{for(var c in e)if(x.has(e,c)){a++;if(!(l=x.has(t,c)&&M(e[c],t[c],n,r)))break}if(l){for(c in t)if(x.has(t,c)&&!(a--))break;l=!a}}return n.pop(),r.pop(),l};x.isEqual=function(e,t){return M(e,t,[],[])},x.isEmpty=function(e){if(e==null)return!0;if(x.isArray(e)||x.isString(e))return e.length===0;for(var t in e)if(x.has(e,t))return!1;return!0},x.isElement=function(e){return!!e&&e.nodeType===1},x.isArray=w||function(e){return f.call(e)=="[object Array]"},x.isObject=function(e){return e===Object(e)},T(["Arguments","Function","String","Number","Date","RegExp"],function(e){x["is"+e]=function(t){return f.call(t)=="[object "+e+"]"}}),x.isArguments(arguments)||(x.isArguments=function(e){return!!e&&!!x.has(e,"callee")}),typeof /./!="function"&&(x.isFunction=function(e){return typeof e=="function"}),x.isFinite=function(e){return isFinite(e)&&!isNaN(parseFloat(e))},x.isNaN=function(e){return x.isNumber(e)&&e!=+e},x.isBoolean=function(e){return e===!0||e===!1||f.call(e)=="[object Boolean]"},x.isNull=function(e){return e===null},x.isUndefined=function(e){return e===void 0},x.has=function(e,t){return l.call(e,t)},x.noConflict=function(){return e._=t,this},x.identity=function(e){return e},x.constant=function(e){return function(){return e}},x.property=function(e){return function(t){return t[e]}},x.matches=function(e){return function(t){if(t===e)return!0;for(var n in e)if(e[n]!==t[n])return!1;return!0}},x.times=function(e,t,n){var r=Array(Math.max(0,e));for(var i=0;i<e;i++)r[i]=t.call(n,i);return r},x.random=function(e,t){return t==null&&(t=e,e=0),e+Math.floor(Math.random()*(t-e+1))},x.now=Date.now||function(){return(new Date).getTime()};var _={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};_.unescape=x.invert(_.escape);var D={escape:new RegExp("["+x.keys(_.escape).join("")+"]","g"),unescape:new RegExp("("+x.keys(_.unescape).join("|")+")","g")};x.each(["escape","unescape"],function(e){x[e]=function(t){return t==null?"":(""+t).replace(D[e],function(t){return _[e][t]})}}),x.result=function(e,t){if(e==null)return void 0;var n=e[t];return x.isFunction(n)?n.call(e):n},x.mixin=function(e){T(x.functions(e),function(t){var n=x[t]=e[t];x.prototype[t]=function(){var e=[this._wrapped];return o.apply(e,arguments),F.call(this,n.apply(x,e))}})};var P=0;x.uniqueId=function(e){var t=++P+"";return e?e+t:t},x.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var H=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},j=/\\|'|\r|\n|\t|\u2028|\u2029/g;x.template=function(e,t,n){var r;n=x.defaults({},n,x.templateSettings);var i=new RegExp([(n.escape||H).source,(n.interpolate||H).source,(n.evaluate||H).source].join("|")+"|$","g"),s=0,o="__p+='";e.replace(i,function(t,n,r,i,u){return o+=e.slice(s,u).replace(j,function(e){return"\\"+B[e]}),n&&(o+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'"),r&&(o+="'+\n((__t=("+r+"))==null?'':__t)+\n'"),i&&(o+="';\n"+i+"\n__p+='"),s=u+t.length,t}),o+="';\n",n.variable||(o="with(obj||{}){\n"+o+"}\n"),o="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+o+"return __p;\n";try{r=new Function(n.variable||"obj","_",o)}catch(u){throw u.source=o,u}if(t)return r(t,x);var a=function(e){return r.call(this,e,x)};return a.source="function("+(n.variable||"obj")+"){\n"+o+"}",a},x.chain=function(e){return x(e).chain()};var F=function(e){return this._chain?x(e).chain():e};x.mixin(x),T(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var t=r[e];x.prototype[e]=function(){var n=this._wrapped;return t.apply(n,arguments),(e=="shift"||e=="splice")&&n.length===0&&delete n[0],F.call(this,n)}}),T(["concat","join","slice"],function(e){var t=r[e];x.prototype[e]=function(){return F.call(this,t.apply(this._wrapped,arguments))}}),x.extend(x.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}}),typeof define=="function"&&define.amd&&define("underscore",[],function(){return x})}).call(this),function(e,t){if(typeof define=="function"&&define.amd)define("backbone",["underscore","jquery","exports"],function(n,r,i){e.Backbone=t(e,i,n,r)});else if(typeof exports!="undefined"){var n=require("underscore");t(e,exports,n)}else e.Backbone=t(e,{},e._,e.jQuery||e.Zepto||e.ender||e.$)}(this,function(e,t,n,r){var i=e.Backbone,s=[],o=s.push,u=s.slice,a=s.splice;t.VERSION="1.1.2",t.$=r,t.noConflict=function(){return e.Backbone=i,this},t.emulateHTTP=!1,t.emulateJSON=!1;var f=t.Events={on:function(e,t,n){if(!c(this,"on",e,[t,n])||!t)return this;this._events||(this._events={});var r=this._events[e]||(this._events[e]=[]);return r.push({callback:t,context:n,ctx:n||this}),this},once:function(e,t,r){if(!c(this,"once",e,[t,r])||!t)return this;var i=this,s=n.once(function(){i.off(e,s),t.apply(this,arguments)});return s._callback=t,this.on(e,s,r)},off:function(e,t,r){var i,s,o,u,a,f,l,h;if(!this._events||!c(this,"off",e,[t,r]))return this;if(!e&&!t&&!r)return this._events=void 0,this;u=e?[e]:n.keys(this._events);for(a=0,f=u.length;a<f;a++){e=u[a];if(o=this._events[e]){this._events[e]=i=[];if(t||r)for(l=0,h=o.length;l<h;l++)s=o[l],(t&&t!==s.callback&&t!==s.callback._callback||r&&r!==s.context)&&i.push(s);i.length||delete this._events[e]}}return this},trigger:function(e){if(!this._events)return this;var t=u.call(arguments,1);if(!c(this,"trigger",e,t))return this;var n=this._events[e],r=this._events.all;return n&&h(n,t),r&&h(r,arguments),this},stopListening:function(e,t,r){var i=this._listeningTo;if(!i)return this;var s=!t&&!r;!r&&typeof t=="object"&&(r=this),e&&((i={})[e._listenId]=e);for(var o in i)e=i[o],e.off(t,r,this),(s||n.isEmpty(e._events))&&delete this._listeningTo[o];return this}},l=/\s+/,c=function(e,t,n,r){if(!n)return!0;if(typeof n=="object"){for(var i in n)e[t].apply(e,[i,n[i]].concat(r));return!1}if(l.test(n)){var s=n.split(l);for(var o=0,u=s.length;o<u;o++)e[t].apply(e,[s[o]].concat(r));return!1}return!0},h=function(e,t){var n,r=-1,i=e.length,s=t[0],o=t[1],u=t[2];switch(t.length){case 0:while(++r<i)(n=e[r]).callback.call(n.ctx);return;case 1:while(++r<i)(n=e[r]).callback.call(n.ctx,s);return;case 2:while(++r<i)(n=e[r]).callback.call(n.ctx,s,o);return;case 3:while(++r<i)(n=e[r]).callback.call(n.ctx,s,o,u);return;default:while(++r<i)(n=e[r]).callback.apply(n.ctx,t);return}},p={listenTo:"on",listenToOnce:"once"};n.each(p,function(e,t){f[t]=function(t,r,i){var s=this._listeningTo||(this._listeningTo={}),o=t._listenId||(t._listenId=n.uniqueId("l"));return s[o]=t,!i&&typeof r=="object"&&(i=this),t[e](r,i,this),this}}),f.bind=f.on,f.unbind=f.off,n.extend(t,f);var d=t.Model=function(e,t){var r=e||{};t||(t={}),this.cid=n.uniqueId("c"),this.attributes={},t.collection&&(this.collection=t.collection),t.parse&&(r=this.parse(r,t)||{}),r=n.defaults({},r,n.result(this,"defaults")),this.set(r,t),this.changed={},this.initialize.apply(this,arguments)};n.extend(d.prototype,f,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(e){return n.clone(this.attributes)},sync:function(){return t.sync.apply(this,arguments)},get:function(e){return this.attributes[e]},escape:function(e){return n.escape(this.get(e))},has:function(e){return this.get(e)!=null},set:function(e,t,r){var i,s,o,u,a,f,l,c;if(e==null)return this;typeof e=="object"?(s=e,r=t):(s={})[e]=t,r||(r={});if(!this._validate(s,r))return!1;o=r.unset,a=r.silent,u=[],f=this._changing,this._changing=!0,f||(this._previousAttributes=n.clone(this.attributes),this.changed={}),c=this.attributes,l=this._previousAttributes,this.idAttribute in s&&(this.id=s[this.idAttribute]);for(i in s)t=s[i],n.isEqual(c[i],t)||u.push(i),n.isEqual(l[i],t)?delete this.changed[i]:this.changed[i]=t,o?delete c[i]:c[i]=t;if(!a){u.length&&(this._pending=r);for(var h=0,p=u.length;h<p;h++)this.trigger("change:"+u[h],this,c[u[h]],r)}if(f)return this;if(!a)while(this._pending)r=this._pending,this._pending=!1,this.trigger("change",this,r);return this._pending=!1,this._changing=!1,this},unset:function(e,t){return this.set(e,void 0,n.extend({},t,{unset:!0}))},clear:function(e){var t={};for(var r in this.attributes)t[r]=void 0;return this.set(t,n.extend({},e,{unset:!0}))},hasChanged:function(e){return e==null?!n.isEmpty(this.changed):n.has(this.changed,e)},changedAttributes:function(e){if(!e)return this.hasChanged()?n.clone(this.changed):!1;var t,r=!1,i=this._changing?this._previousAttributes:this.attributes;for(var s in e){if(n.isEqual(i[s],t=e[s]))continue;(r||(r={}))[s]=t}return r},previous:function(e){return e==null||!this._previousAttributes?null:this._previousAttributes[e]},previousAttributes:function(){return n.clone(this._previousAttributes)},fetch:function(e){e=e?n.clone(e):{},e.parse===void 0&&(e.parse=!0);var t=this,r=e.success;return e.success=function(n){if(!t.set(t.parse(n,e),e))return!1;r&&r(t,n,e),t.trigger("sync",t,n,e)},I(this,e),this.sync("read",this,e)},save:function(e,t,r){var i,s,o,u=this.attributes;e==null||typeof e=="object"?(i=e,r=t):(i={})[e]=t,r=n.extend({validate:!0},r);if(i&&!r.wait){if(!this.set(i,r))return!1}else if(!this._validate(i,r))return!1;i&&r.wait&&(this.attributes=n.extend({},u,i)),r.parse===void 0&&(r.parse=!0);var a=this,f=r.success;return r.success=function(e){a.attributes=u;var t=a.parse(e,r);r.wait&&(t=n.extend(i||{},t));if(n.isObject(t)&&!a.set(t,r))return!1;f&&f(a,e,r),a.trigger("sync",a,e,r)},I(this,r),s=this.isNew()?"create":r.patch?"patch":"update",s==="patch"&&(r.attrs=i),o=this.sync(s,this,r),i&&r.wait&&(this.attributes=u),o},destroy:function(e){e=e?n.clone(e):{};var t=this,r=e.success,i=function(){t.trigger("destroy",t,t.collection,e)};e.success=function(n){(e.wait||t.isNew())&&i(),r&&r(t,n,e),t.isNew()||t.trigger("sync",t,n,e)};if(this.isNew())return e.success(),!1;I(this,e);var s=this.sync("delete",this,e);return e.wait||i(),s},url:function(){var e=n.result(this,"urlRoot")||n.result(this.collection,"url")||F();return this.isNew()?e:e.replace(/([^\/])$/,"$1/")+encodeURIComponent(this.id)},parse:function(e,t){return e},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(e){return this._validate({},n.extend(e||{},{validate:!0}))},_validate:function(e,t){if(!t.validate||!this.validate)return!0;e=n.extend({},this.attributes,e);var r=this.validationError=this.validate(e,t)||null;return r?(this.trigger("invalid",this,r,n.extend(t,{validationError:r})),!1):!0}});var v=["keys","values","pairs","invert","pick","omit"];n.each(v,function(e){d.prototype[e]=function(){var t=u.call(arguments);return t.unshift(this.attributes),n[e].apply(n,t)}});var m=t.Collection=function(e,t){t||(t={}),t.model&&(this.model=t.model),t.comparator!==void 0&&(this.comparator=t.comparator),this._reset(),this.initialize.apply(this,arguments),e&&this.reset(e,n.extend({silent:!0},t))},g={add:!0,remove:!0,merge:!0},y={add:!0,remove:!1};n.extend(m.prototype,f,{model:d,initialize:function(){},toJSON:function(e){return this.map(function(t){return t.toJSON(e)})},sync:function(){return t.sync.apply(this,arguments)},add:function(e,t){return this.set(e,n.extend({merge:!1},t,y))},remove:function(e,t){var r=!n.isArray(e);e=r?[e]:n.clone(e),t||(t={});var i,s,o,u;for(i=0,s=e.length;i<s;i++){u=e[i]=this.get(e[i]);if(!u)continue;delete this._byId[u.id],delete this._byId[u.cid],o=this.indexOf(u),this.models.splice(o,1),this.length--,t.silent||(t.index=o,u.trigger("remove",u,this,t)),this._removeReference(u,t)}return r?e[0]:e},set:function(e,t){t=n.defaults({},t,g),t.parse&&(e=this.parse(e,t));var r=!n.isArray(e);e=r?e?[e]:[]:n.clone(e);var i,s,o,u,a,f,l,c=t.at,h=this.model,p=this.comparator&&c==null&&t.sort!==!1,v=n.isString(this.comparator)?this.comparator:null,m=[],y=[],b={},w=t.add,E=t.merge,S=t.remove,x=!p&&w&&S?[]:!1;for(i=0,s=e.length;i<s;i++){a=e[i]||{},a instanceof d?o=u=a:o=a[h.prototype.idAttribute||"id"];if(f=this.get(o))S&&(b[f.cid]=!0),E&&(a=a===u?u.attributes:a,t.parse&&(a=f.parse(a,t)),f.set(a,t),p&&!l&&f.hasChanged(v)&&(l=!0)),e[i]=f;else if(w){u=e[i]=this._prepareModel(a,t);if(!u)continue;m.push(u),this._addReference(u,t)}u=f||u,x&&(u.isNew()||!b[u.id])&&x.push(u),b[u.id]=!0}if(S){for(i=0,s=this.length;i<s;++i)b[(u=this.models[i]).cid]||y.push(u);y.length&&this.remove(y,t)}if(m.length||x&&x.length){p&&(l=!0),this.length+=m.length;if(c!=null)for(i=0,s=m.length;i<s;i++)this.models.splice(c+i,0,m[i]);else{x&&(this.models.length=0);var T=x||m;for(i=0,s=T.length;i<s;i++)this.models.push(T[i])}}l&&this.sort({silent:!0});if(!t.silent){for(i=0,s=m.length;i<s;i++)(u=m[i]).trigger("add",u,this,t);(l||x&&x.length)&&this.trigger("sort",this,t)}return r?e[0]:e},reset:function(e,t){t||(t={});for(var r=0,i=this.models.length;r<i;r++)this._removeReference(this.models[r],t);return t.previousModels=this.models,this._reset(),e=this.add(e,n.extend({silent:!0},t)),t.silent||this.trigger("reset",this,t),e},push:function(e,t){return this.add(e,n.extend({at:this.length},t))},pop:function(e){var t=this.at(this.length-1);return this.remove(t,e),t},unshift:function(e,t){return this.add(e,n.extend({at:0},t))},shift:function(e){var t=this.at(0);return this.remove(t,e),t},slice:function(){return u.apply(this.models,arguments)},get:function(e){return e==null?void 0:this._byId[e]||this._byId[e.id]||this._byId[e.cid]},at:function(e){return this.models[e]},where:function(e,t){return n.isEmpty(e)?t?void 0:[]:this[t?"find":"filter"](function(t){for(var n in e)if(e[n]!==t.get(n))return!1;return!0})},findWhere:function(e){return this.where(e,!0)},sort:function(e){if(!this.comparator)throw new Error("Cannot sort a set without a comparator");return e||(e={}),n.isString(this.comparator)||this.comparator.length===1?this.models=this.sortBy(this.comparator,this):this.models.sort(n.bind(this.comparator,this)),e.silent||this.trigger("sort",this,e),this},pluck:function(e){return n.invoke(this.models,"get",e)},fetch:function(e){e=e?n.clone(e):{},e.parse===void 0&&(e.parse=!0);var t=e.success,r=this;return e.success=function(n){var i=e.reset?"reset":"set";r[i](n,e),t&&t(r,n,e),r.trigger("sync",r,n,e)},I(this,e),this.sync("read",this,e)},create:function(e,t){t=t?n.clone(t):{};if(!(e=this._prepareModel(e,t)))return!1;t.wait||this.add(e,t);var r=this,i=t.success;return t.success=function(e,n){t.wait&&r.add(e,t),i&&i(e,n,t)},e.save(null,t),e},parse:function(e,t){return e},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0,this.models=[],this._byId={}},_prepareModel:function(e,t){if(e instanceof d)return e;t=t?n.clone(t):{},t.collection=this;var r=new this.model(e,t);return r.validationError?(this.trigger("invalid",this,r.validationError,t),!1):r},_addReference:function(e,t){this._byId[e.cid]=e,e.id!=null&&(this._byId[e.id]=e),e.collection||(e.collection=this),e.on("all",this._onModelEvent,this)},_removeReference:function(e,t){this===e.collection&&delete e.collection,e.off("all",this._onModelEvent,this)},_onModelEvent:function(e,t,n,r){if((e==="add"||e==="remove")&&n!==this)return;e==="destroy"&&this.remove(t,r),t&&e==="change:"+t.idAttribute&&(delete this._byId[t.previous(t.idAttribute)],t.id!=null&&(this._byId[t.id]=t)),this.trigger.apply(this,arguments)}});var b=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","difference","indexOf","shuffle","lastIndexOf","isEmpty","chain","sample"];n.each(b,function(e){m.prototype[e]=function(){var t=u.call(arguments);return t.unshift(this.models),n[e].apply(n,t)}});var w=["groupBy","countBy","sortBy","indexBy"];n.each(w,function(e){m.prototype[e]=function(t,r){var i=n.isFunction(t)?t:function(e){return e.get(t)};return n[e](this.models,i,r)}});var E=t.View=function(e){this.cid=n.uniqueId("view"),e||(e={}),n.extend(this,n.pick(e,x)),this._ensureElement(),this.initialize.apply(this,arguments),this.delegateEvents()},S=/^(\S+)\s*(.*)$/,x=["model","collection","el","id","attributes","className","tagName","events"];n.extend(E.prototype,f,{tagName:"div",$:function(e){return this.$el.find(e)},initialize:function(){},render:function(){return this},remove:function(){return this.$el.remove(),this.stopListening(),this},setElement:function(e,n){return this.$el&&this.undelegateEvents(),this.$el=e instanceof t.$?e:t.$(e),this.el=this.$el[0],n!==!1&&this.delegateEvents(),this},delegateEvents:function(e){if(!e&&!(e=n.result(this,"events")))return this;this.undelegateEvents();for(var t in e){var r=e[t];n.isFunction(r)||(r=this[e[t]]);if(!r)continue;var i=t.match(S),s=i[1],o=i[2];r=n.bind(r,this),s+=".delegateEvents"+this.cid,o===""?this.$el.on(s,r):this.$el.on(s,o,r)}return this},undelegateEvents:function(){return this.$el.off(".delegateEvents"+this.cid),this},_ensureElement:function(){if(!this.el){var e=n.extend({},n.result(this,"attributes"));this.id&&(e.id=n.result(this,"id")),this.className&&(e["class"]=n.result(this,"className"));var r=t.$("<"+n.result(this,"tagName")+">").attr(e);this.setElement(r,!1)}else this.setElement(n.result(this,"el"),!1)}}),t.sync=function(e,r,i){var s=N[e];n.defaults(i||(i={}),{emulateHTTP:t.emulateHTTP,emulateJSON:t.emulateJSON});var o={type:s,dataType:"json"};i.url||(o.url=n.result(r,"url")||F()),i.data==null&&r&&(e==="create"||e==="update"||e==="patch")&&(o.contentType="application/json",o.data=JSON.stringify(i.attrs||r.toJSON(i))),i.emulateJSON&&(o.contentType="application/x-www-form-urlencoded",o.data=o.data?{model:o.data}:{});if(i.emulateHTTP&&(s==="PUT"||s==="DELETE"||s==="PATCH")){o.type="POST",i.emulateJSON&&(o.data._method=s);var u=i.beforeSend;i.beforeSend=function(e){e.setRequestHeader("X-HTTP-Method-Override",s);if(u)return u.apply(this,arguments)}}o.type!=="GET"&&!i.emulateJSON&&(o.processData=!1),o.type==="PATCH"&&T&&(o.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")});var a=i.xhr=t.ajax(n.extend(o,i));return r.trigger("request",r,a,i),a};var T=typeof window!="undefined"&&!!window.ActiveXObject&&(!window.XMLHttpRequest||!(new XMLHttpRequest).dispatchEvent),N={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};t.ajax=function(){return t.$.ajax.apply(t.$,arguments)};var C=t.Router=function(e){e||(e={}),e.routes&&(this.routes=e.routes),this._bindRoutes(),this.initialize.apply(this,arguments)},k=/\((.*?)\)/g,L=/(\(\?)?:\w+/g,A=/\*\w+/g,O=/[\-{}\[\]+?.,\\\^$|#\s]/g;n.extend(C.prototype,f,{initialize:function(){},route:function(e,r,i){n.isRegExp(e)||(e=this._routeToRegExp(e)),n.isFunction(r)&&(i=r,r=""),i||(i=this[r]);var s=this;return t.history.route(e,function(n){var o=s._extractParameters(e,n);s.execute(i,o),s.trigger.apply(s,["route:"+r].concat(o)),s.trigger("route",r,o),t.history.trigger("route",s,r,o)}),this},execute:function(e,t){e&&e.apply(this,t)},navigate:function(e,n){return t.history.navigate(e,n),this},_bindRoutes:function(){if(!this.routes)return;this.routes=n.result(this,"routes");var e,t=n.keys(this.routes);while((e=t.pop())!=null)this.route(e,this.routes[e])},_routeToRegExp:function(e){return e=e.replace(O,"\\$&").replace(k,"(?:$1)?").replace(L,function(e,t){return t?e:"([^/?]+)"}).replace(A,"([^?]*?)"),new RegExp("^"+e+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(e,t){var r=e.exec(t).slice(1);return n.map(r,function(e,t){return t===r.length-1?e||null:e?decodeURIComponent(e):null})}});var M=t.History=function(){this.handlers=[],n.bindAll(this,"checkUrl"),typeof window!="undefined"&&(this.location=window.location,this.history=window.history)},_=/^[#\/]|\s+$/g,D=/^\/+|\/+$/g,P=/msie [\w.]+/,H=/\/$/,B=/#.*$/;M.started=!1,n.extend(M.prototype,f,{interval:50,atRoot:function(){return this.location.pathname.replace(/[^\/]$/,"$&/")===this.root},getHash:function(e){var t=(e||this).location.href.match(/#(.*)$/);return t?t[1]:""},getFragment:function(e,t){if(e==null)if(this._hasPushState||!this._wantsHashChange||t){e=decodeURI(this.location.pathname+this.location.search);var n=this.root.replace(H,"");e.indexOf(n)||(e=e.slice(n.length))}else e=this.getHash();return e.replace(_,"")},start:function(e){if(M.started)throw new Error("Backbone.history has already been started");M.started=!0,this.options=n.extend({root:"/"},this.options,e),this.root=this.options.root,this._wantsHashChange=this.options.hashChange!==!1,this._wantsPushState=!!this.options.pushState,this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var r=this.getFragment(),i=document.documentMode,s=P.exec(navigator.userAgent.toLowerCase())&&(!i||i<=7);this.root=("/"+this.root+"/").replace(D,"/");if(s&&this._wantsHashChange){var o=t.$('<iframe src="javascript:0" tabindex="-1">');this.iframe=o.hide().appendTo("body")[0].contentWindow,this.navigate(r)}this._hasPushState?t.$(window).on("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!s?t.$(window).on("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval)),this.fragment=r;var u=this.location;if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot())return this.fragment=this.getFragment(null,!0),this.location.replace(this.root+"#"+this.fragment),!0;this._hasPushState&&this.atRoot()&&u.hash&&(this.fragment=this.getHash().replace(_,""),this.history.replaceState({},document.title,this.root+this.fragment))}if(!this.options.silent)return this.loadUrl()},stop:function(){t.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl),this._checkUrlInterval&&clearInterval(this._checkUrlInterval),M.started=!1},route:function(e,t){this.handlers.unshift({route:e,callback:t})},checkUrl:function(e){var t=this.getFragment();t===this.fragment&&this.iframe&&(t=this.getFragment(this.getHash(this.iframe)));if(t===this.fragment)return!1;this.iframe&&this.navigate(t),this.loadUrl()},loadUrl:function(e){return e=this.fragment=this.getFragment(e),n.any(this.handlers,function(t){if(t.route.test(e))return t.callback(e),!0})},navigate:function(e,t){if(!M.started)return!1;if(!t||t===!0)t={trigger:!!t};var n=this.root+(e=this.getFragment(e||""));e=e.replace(B,"");if(this.fragment===e)return;this.fragment=e,e===""&&n!=="/"&&(n=n.slice(0,-1));if(this._hasPushState)this.history[t.replace?"replaceState":"pushState"]({},document.title,n);else{if(!this._wantsHashChange)return this.location.assign(n);this._updateHash(this.location,e,t.replace),this.iframe&&e!==this.getFragment(this.getHash(this.iframe))&&(t.replace||this.iframe.document.open().close(),this._updateHash(this.iframe.location,e,t.replace))}if(t.trigger)return this.loadUrl(e)},_updateHash:function(e,t,n){if(n){var r=e.href.replace(/(javascript:|#).*$/,"");e.replace(r+"#"+t)}else e.hash="#"+t}}),t.history=new M;var j=function(e,t){var r=this,i;e&&n.has(e,"constructor")?i=e.constructor:i=function(){return r.apply(this,arguments)},n.extend(i,r,t);var s=function(){this.constructor=i};return s.prototype=r.prototype,i.prototype=new s,e&&n.extend(i.prototype,e),i.__super__=r.prototype,i};d.extend=m.extend=C.extend=E.extend=M.extend=j;var F=function(){throw new Error('A "url" property or function must be specified')},I=function(e,t){var n=t.error;t.error=function(r){n&&n(e,r,t),e.trigger("error",e,r,t)}};return t}),define("routers/search/router",["jquery","underscore","backbone"],function(e,t,n){var r=n.Router.extend({history:{pushState:!0},params:{keyword:{value:"",alias:"k"},page:{value:1,alias:"p",type:"number"}}});return r});