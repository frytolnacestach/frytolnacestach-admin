(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{294:function(t,e,n){"use strict";n.r(e);var o=n(10),r=(n(64),{name:"AdminPostPage",mounted:function(){var t=localStorage.getItem("user-info");t&&"undefined"!=t||this.$router.push("login")},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,e.next=3,n.$get("https://frytolnacestach-api.vercel.app/api/posts");case 3:return o=e.sent,e.abrupt("return",{posts:o});case 5:case"end":return e.stop()}}),e)})))()}}),c=n(13),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"t-main"},[t._m(0),t._v(" "),e("section",{staticClass:"t-section my-4"},[e("div",{staticClass:"t-section__inner"},[e("nav",{staticClass:"o-nav-operation"},[e("div",{staticClass:"o-nav-operation__outer"},[e("div",{staticClass:"o-nav-operation__inner"},[e("ul",{staticClass:"o-nav-operation__items"},[e("li",{staticClass:"o-nav-operation__item"},[e("NuxtLink",{staticClass:"o-nav-operation__title",attrs:{to:"/admin/post/create"}},[t._v("Vytvoření příspěvku")])],1)])])])])])]),t._v(" "),e("section",{staticClass:"t-section my-4"},[e("div",{staticClass:"t-section__inner"},[e("div",{staticClass:"o-article-list"},[e("div",{staticClass:"o-article-list__outer"},[e("div",{staticClass:"o-article-list__inner"},[e("div",{staticClass:"o-article-list__items"},t._l(t.posts,(function(n){return e("div",{key:n.id,staticClass:"o-article-list__item"},[e("h3",{staticClass:"o-article-list__title"},[e("NuxtLink",{staticClass:"o-article-list__title-link",attrs:{to:"/admin/post/".concat(n.slug)}},[t._v(t._s(n.title))])],1),t._v(" "),e("p",{staticClass:"o-article-list__perex"},[t._v(t._s(n.perex))])])})),0)])])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"o-hero"},[t("div",{staticClass:"o-hero__outer"},[t("div",{staticClass:"o-hero__inner"},[t("h1",{staticClass:"o-hero__headline"},[this._v("\n                    Administrace - Články\n                ")])])])])}],!1,null,null,null);e.default=component.exports}}]);