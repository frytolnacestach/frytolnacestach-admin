(window.webpackJsonp=window.webpackJsonp||[]).push([[4,2],{290:function(t,n,e){"use strict";e.r(n);var l=e(13),component=Object(l.a)({},(function(){var t=this,n=t._self._c;return n("nav",{staticClass:"o-nav-admin"},[n("div",{staticClass:"o-nav-admin__outer"},[n("div",{staticClass:"o-nav-admin__inner"},[n("ul",{staticClass:"o-nav-admin__items"},[n("li",{staticClass:"o-nav-admin__item"},[n("div",{staticClass:"o-nav-admin__item-container"},[n("NuxtLink",{staticClass:"o-nav-admin__title",attrs:{to:"/admin/base"}},[t._v("Základní informace")])],1)]),t._v(" "),n("li",{staticClass:"o-nav-admin__item"},[n("div",{staticClass:"o-nav-admin__item-container"},[n("NuxtLink",{staticClass:"o-nav-admin__title",attrs:{to:"/admin/platforms"}},[t._v("Platformy")])],1)]),t._v(" "),n("li",{staticClass:"o-nav-admin__item"},[n("div",{staticClass:"o-nav-admin__item-container"},[n("NuxtLink",{staticClass:"o-nav-admin__title",attrs:{to:"/admin/videos"}},[t._v("Videa")])],1)]),t._v(" "),n("li",{staticClass:"o-nav-admin__item"},[n("div",{staticClass:"o-nav-admin__item-container"},[n("NuxtLink",{staticClass:"o-nav-admin__title",attrs:{to:"/admin/posts"}},[t._v("Články")])],1)])])])])])}),[],!1,null,null,null);n.default=component.exports},291:function(t,n,e){"use strict";e.r(n);var l={name:"AdminPage",components:{NavAdmin:e(290).default},mounted:function(){var t=localStorage.getItem("user-info");t&&"undefined"!=t||this.$router.push("login")}},_=e(13),component=Object(_.a)(l,(function(){var t=this,n=t._self._c;return n("main",{staticClass:"t-main"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("section",{staticClass:"t-section py-4"},[n("div",{staticClass:"t-section__inner"},[n("NavAdmin")],1)])])}),[function(){var t=this._self._c;return t("div",{staticClass:"o-hero"},[t("div",{staticClass:"o-hero__outer"},[t("div",{staticClass:"o-hero__inner"},[t("h1",{staticClass:"o-hero__headline"},[this._v("\n                    Administrace\n                ")])])])])},function(){var t=this._self._c;return t("nav",{staticClass:"m-nav-breadcrumbs"},[t("div",{staticClass:"m-nav-breadcrumbs__outer"},[t("div",{staticClass:"m-nav-breadcrumbs__inner"},[t("ul",{staticClass:"m-nav-breadcrumbs__items"},[t("li",{staticClass:"m-nav-breadcrumbs__item"},[t("span",{staticClass:"m-nav-breadcrumbs__span"},[this._v("Administrace")])])])])])])}],!1,null,null,null);n.default=component.exports;installComponents(component,{NavAdmin:e(290).default})}}]);