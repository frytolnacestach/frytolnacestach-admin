(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{295:function(t,r,n){"use strict";n.r(r);var e=n(10),c=(n(64),{name:"AdminPlatformsPage",mounted:function(){var t=localStorage.getItem("user-info");t&&"undefined"!=t||this.$router.push("login")},asyncData:function(t){return Object(e.a)(regeneratorRuntime.mark((function r(){var n,e;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.$axios,r.next=3,n.$get("https://frytolnacestach-api.vercel.app/api/platforms");case 3:return e=r.sent,r.abrupt("return",{platforms:e});case 5:case"end":return r.stop()}}),r)})))()}}),o=c,l=n(13),component=Object(l.a)(o,(function(){var t=this,r=t._self._c;return r("main",{staticClass:"t-main"},[t._m(0),t._v(" "),r("nav",{staticClass:"m-nav-breadcrumbs"},[r("div",{staticClass:"m-nav-breadcrumbs__outer"},[r("div",{staticClass:"m-nav-breadcrumbs__inner"},[r("ul",{staticClass:"m-nav-breadcrumbs__items"},[r("li",{staticClass:"m-nav-breadcrumbs__item"},[r("NuxtLink",{staticClass:"m-nav-breadcrumbs__link",attrs:{to:"/admin/"}},[t._v("Administrace")])],1),t._v(" "),t._m(1)])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"o-hero"},[t("div",{staticClass:"o-hero__outer"},[t("div",{staticClass:"o-hero__inner"},[t("h1",{staticClass:"o-hero__headline"},[this._v("\n                    Administrace - Platformy\n                ")])])])])},function(){var t=this._self._c;return t("li",{staticClass:"m-nav-breadcrumbs__item"},[t("span",{staticClass:"m-nav-breadcrumbs__span"},[this._v("Platformy")])])}],!1,null,null,null);r.default=component.exports}}]);