(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{332:function(t,n,o){var e=o(1),i=o(4),a=o(89),s=[].slice,c=function(t){return function(n,o){var e=arguments.length>2,i=e?s.call(arguments,2):void 0;return t(e?function(){("function"==typeof n?n:Function(n)).apply(this,i)}:n,o)}};e({global:!0,bind:!0,forced:/MSIE .\./.test(a)},{setTimeout:c(i.setTimeout),setInterval:c(i.setInterval)})},456:function(t,n,o){},669:function(t,n,o){"use strict";var e=o(456);o.n(e).a},839:function(t,n,o){"use strict";o.r(n);o(332);var e={methods:{openLoading:function(){var t=this.$vs.loading({target:this.$refs.content});setTimeout((function(){t.close()}),3e3)},openLoadingButton:function(){console.log(this.$refs.button.$el);var t=this.$vs.loading({target:this.$refs.button,scale:"0.6",background:"primary",opacity:1,color:"#fff"});setTimeout((function(){t.close()}),3e3)}}},i=(o(669),o(41)),a=Object(i.a)(e,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{ref:"target",staticClass:"center",attrs:{id:"target"}},[o("div",{staticClass:"con-btns"},[o("vs-button",{ref:"button",attrs:{flat:""},on:{click:t.openLoadingButton}},[t._v("Open Loading "),o("b",[t._v("Button")])]),t._v(" "),o("vs-button",{attrs:{border:""},on:{click:t.openLoading}},[t._v("Open Loading "),o("b",[t._v("Target")])])],1),t._v(" "),o("div",{ref:"content",staticClass:"content-div"},[t._v("\n    I am the container "),o("br"),t._v(" of the "),o("b",[t._v("loading")])])])}),[],!1,null,"67244a03",null);n.default=a.exports}}]);