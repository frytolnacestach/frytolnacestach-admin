(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{297:function(e,t,n){"use strict";n.r(t);var r=n(10),o=(n(64),{name:"AdminVideosPage",mounted:function(){var e=localStorage.getItem("user-info");e&&"undefined"!=e||this.$router.push("login")},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$axios,t.next=3,n.$get("https://frytolnacestach-api.vercel.app/api/videos");case 3:return r=t.sent,t.abrupt("return",{videos:r});case 5:case"end":return t.stop()}}),t)})))()}}),c=o,l=n(13),component=Object(l.a)(c,(function(){this._self._c;return this._m(0)}),[function(){var e=this._self._c;return e("main",{staticClass:"t-main"},[e("div",{staticClass:"o-hero"},[e("div",{staticClass:"o-hero__outer"},[e("div",{staticClass:"o-hero__inner"},[e("h1",{staticClass:"o-hero__headline"},[this._v("\n                    Administrace - Videa\n                ")])])])])])}],!1,null,null,null);t.default=component.exports}}]);