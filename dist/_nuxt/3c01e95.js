(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{297:function(t,n,e){"use strict";e.r(n);var r=e(10),o=(e(64),{name:"AdminVideosPage",mounted:function(){var t=localStorage.getItem("user-info");t&&"undefined"!=t||this.$router.push("login")},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function n(){var e,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.$axios,n.next=3,e.$get("https://frytolnacestach-api.vercel.app/api/videos");case 3:return r=n.sent,n.abrupt("return",{videos:r});case 5:case"end":return n.stop()}}),n)})))()}}),c=o,_=e(13),component=Object(_.a)(c,(function(){var t=this,n=t._self._c;return n("main",{staticClass:"t-main"},[t._m(0),t._v(" "),n("nav",{staticClass:"m-nav-breadcrumbs"},[n("div",{staticClass:"m-nav-breadcrumbs__outer"},[n("div",{staticClass:"m-nav-breadcrumbs__inner"},[n("ul",{staticClass:"m-nav-breadcrumbs__items"},[n("li",{staticClass:"m-nav-breadcrumbs__item"},[n("NuxtLink",{staticClass:"m-nav-breadcrumbs__link",attrs:{to:"/admin/"}},[t._v("Administrace")])],1),t._v(" "),t._m(1)])])])]),t._v(" "),n("section",{staticClass:"t-section my-4"},[n("div",{staticClass:"t-section__inner"},[n("nav",{staticClass:"o-nav-operation"},[n("div",{staticClass:"o-nav-operation__outer"},[n("div",{staticClass:"o-nav-operation__inner"},[n("ul",{staticClass:"o-nav-operation__items"},[n("li",{staticClass:"o-nav-operation__item"},[n("div",{staticClass:"o-nav-admin__item-container"},[n("NuxtLink",{staticClass:"o-nav-operation__title",attrs:{to:"/admin/videos/create"}},[t._v("Přidat video")])],1)])])])])])])]),t._v(" "),n("section",{staticClass:"t-section mb-8"},[n("div",{staticClass:"t-section__inner"},[n("div",{staticClass:"o-admin-list"},[n("div",{staticClass:"o-admin-list__outer"},[n("div",{staticClass:"o-admin-list__inner"},[n("div",{staticClass:"o-admin-list__items"},t._l(t.videos,(function(video){return n("div",{key:video.id,staticClass:"o-admin-list__item"},[n("h3",{staticClass:"o-admin-list__title"},[n("NuxtLink",{staticClass:"o-admin-list__title-link",attrs:{to:"/admin/videos/".concat(video.slug)}},[t._v(t._s(video.title))])],1),t._v(" "),n("p",{staticClass:"o-admin-list__perex"},[t._v(t._s(video.url))])])})),0)])])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"o-hero"},[t("div",{staticClass:"o-hero__outer"},[t("div",{staticClass:"o-hero__inner"},[t("h1",{staticClass:"o-hero__headline"},[this._v("\n                    Administrace - Videa\n                ")])])])])},function(){var t=this._self._c;return t("li",{staticClass:"m-nav-breadcrumbs__item"},[t("span",{staticClass:"m-nav-breadcrumbs__span"},[this._v("Videa")])])}],!1,null,null,null);n.default=component.exports}}]);