!function(e){var n={};function t(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(a,o,function(n){return e[n]}.bind(null,o));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=64)}({4:function(e,n){e.exports=jQuery},64:function(e,n,t){"use strict";t.r(n);var a=t(4),o=t.n(a);function r(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var i=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.deactivatePlugins(),this.updateModules(),this.initializeClipBoard(),this.modeSelector(),this.usageTracking()}var n,t,a;return n=e,(t=[{key:"deactivatePlugins",value:function(){o()(".dashboard-deactivate-plugin").on("click",(function(e){e.preventDefault();var n=o()(this);return o.a.ajax({url:window.ajaxurl,type:"POST",data:{action:"rank_math_deactivate_plugins",security:rankMath.security,plugin:"all"}}).always((function(e){"1"===e&&n.parents(".rank-math-notice").remove()})),!1}))}},{key:"updateModules",value:function(){o()(".rank-math-modules").on("change",(function(){var e=o()(this),n=e.closest(".rank-math-box"),t=e.is(":checked"),a=e.val();n.addClass("saving"),o.a.ajax({url:rankMath.api.root+"rankmath/v1/saveModule",method:"POST",beforeSend:function(e){e.setRequestHeader("X-WP-Nonce",rankMath.api.nonce)},data:{module:a,state:t?"on":"off"}}).done((function(e){e?(n.removeClass("saving"),n.toggleClass("active",t),o.a.ajax({url:window.location.pathname+window.location.search,method:"GET"}).done((function(e){if(e){var n=o()(e).find("#toplevel_page_rank-math"),t=o()("#toplevel_page_rank-math > .wp-submenu");n.length&&n.find("> .wp-submenu > li").length!==t.children("li").length&&t.fadeOut(200,(function(){t.html(n.find("> .wp-submenu").hide().children()).fadeIn(400)}))}}))):window.alert("Something went wrong! Please try again.")}))}))}},{key:"initializeClipBoard",value:function(){"undefined"!=typeof ClipboardJS&&(o()(".get-debug-report").on("click",(function(){return o()("#debug-report").slideDown(),o()("#debug-report textarea").focus().select(),o()(this).parent().fadeOut(),!1})),new ClipboardJS("#copy-for-support"))}},{key:"modeSelector",value:function(){o()(".rank-math-mode-selector a").on("click",(function(e){e.preventDefault();var n=o()(this).data("mode");return o.a.ajax({url:rankMath.api.root+"rankmath/v1/updateMode",method:"POST",beforeSend:function(e){e.setRequestHeader("X-WP-Nonce",rankMath.api.nonce)},data:{mode:n}}).done((function(e){e?window.location.reload():window.alert("Something went wrong! Please try again.")})),!1}))}},{key:"usageTracking",value:function(){o()("#rank-math-usage-tracking").on("change",(function(){o.a.ajax({url:rankMath.api.root+"rankmath/v1/updateTracking",method:"POST",beforeSend:function(e){e.setRequestHeader("X-WP-Nonce",rankMath.api.nonce)},data:{enable:o()(this).is(":checked")}}).done((function(e){e||window.alert("Something went wrong! Please try again.")}))}))}}])&&r(n.prototype,t),a&&r(n,a),e}();jQuery(document).ready((function(){new i}))}});