(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{302:function(t,e,r){"use strict";r.r(e);var l=r(10),n=(r(64),r(65)),o=r.n(n),m={name:"AdminPostSlugPage",data:function(){return{edit:{dir:"",slug:"",path:"",date:"",dateUpdate:"",dateInformation:"",imageList:"",imageHero:"",imageMap:"",urlYoutube:"",urlWiki:"",urlMap:"",title:"",perex:"",textOpener:"",textAuthor:"",textWiki:"",reviewText:"",reviewValue:"",perexPrice:"",perexTriplength:"",perexTime:"",tags:"",locations:"",travels:"",prices:"",triplengths:"",times:""},errorForm:"",post:""}},methods:{editForm:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.post("https://frytolnacestach-api.vercel.app/api/post-edit",{headers:{"Content-Type":"application/json","Access-Control-Allow-Headers":"x-access-token, Origin, Content-Type, Accept"},method:"POST",body:{dir:t.edit.dir,slug:t.edit.slug,path:t.edit.path,date:t.edit.date,dataUpdate:t.edit.dateUpdate,dataInformation:t.edit.dateInformation,imageList:t.edit.imageList,imageHero:t.edit.imageHero,imageMap:t.edit.imageMap,urlYoutube:t.edit.urlYoutube,urlWiki:t.edit.urlWiki,urlMap:t.edit.urlMap,title:t.edit.title,perex:t.edit.perex,textOpener:t.edit.textOpener,textAuthor:t.edit.textAuthor,textWiki:t.edit.textWiki,reviewText:t.edit.reviewText,reviewValue:t.edit.reviewValue,perexPrice:t.edit.perexPrice,perexTriplength:t.edit.perexTriplength,perexTime:t.edit.perexTime,tags:t.edit.tags,locations:t.edit.locations,travels:t.edit.travels,prices:t.edit.prices,triplengths:t.edit.triplengths,times:t.edit.times}}).then((function(t){console.log(t)})).catch((function(t){console.log(t)}));case 3:e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))()}},mounted:function(){var t=localStorage.getItem("user-info");t&&"undefined"!=t||this.$router.push("login"),this.edit.dir=this.post[0].dir,this.edit.slug=this.post[0].slug,this.edit.path=this.post[0].path,this.edit.date=this.post[0].date,this.edit.dateUpdate=this.post[0].dateUpdate,this.edit.dateInformation=this.post[0].dateInformation,this.edit.imageList=this.post[0].imageList,this.edit.imageHero=this.post[0].imageHero,this.edit.imageMap=this.post[0].imageMap,this.edit.urlYoutube=this.post[0].urlYoutube,this.edit.urlWiki=this.post[0].urlWiki,this.edit.urlMap=this.post[0].urlMap,this.edit.title=this.post[0].title,this.edit.perex=this.post[0].perex,this.edit.textOpener=this.post[0].textOpener,this.edit.textAuthor=this.post[0].textAuthor,this.edit.textWiki=this.post[0].textWiki,this.edit.reviewText=this.post[0].reviewText,this.edit.reviewValue=this.post[0].reviewValue,this.edit.perexPrice=this.post[0].perexPrice,this.edit.perexTriplength=this.post[0].perexTriplength,this.edit.perexTime=this.post[0].perexTime,this.edit.tags=JSON.stringify(this.post[0].tags),this.edit.locations=JSON.stringify(this.post[0].locations),this.edit.travels=JSON.stringify(this.post[0].travels),this.edit.prices=JSON.stringify(this.post[0].prices),this.edit.triplengths=JSON.stringify(this.post[0].triplengths),this.edit.times=JSON.stringify(this.post[0].times)},asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var r,l,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,l=t.params,e.next=3,r.$get("https://frytolnacestach-api.vercel.app/api/post/".concat(l.slug));case 3:return n=e.sent,e.abrupt("return",{post:n});case 5:case"end":return e.stop()}}),e)})))()}},d=r(13),component=Object(d.a)(m,(function(){var t=this,e=t._self._c;return e("main",{staticClass:"t-main"},[e("div",{staticClass:"o-hero"},[e("div",{staticClass:"o-hero__outer"},[e("div",{staticClass:"o-hero__inner"},[e("h1",{staticClass:"o-hero__headline"},[t._v("\n                    Článek "+t._s(this.edit.title)+"\n                ")])])])]),t._v(" "),e("nav",{staticClass:"m-nav-breadcrumbs"},[e("div",{staticClass:"m-nav-breadcrumbs__outer"},[e("div",{staticClass:"m-nav-breadcrumbs__inner"},[e("ul",{staticClass:"m-nav-breadcrumbs__items"},[e("li",{staticClass:"m-nav-breadcrumbs__item"},[e("NuxtLink",{staticClass:"m-nav-breadcrumbs__link",attrs:{to:"/admin/"}},[t._v("Administrace")])],1),t._v(" "),e("li",{staticClass:"m-nav-breadcrumbs__item"},[e("NuxtLink",{staticClass:"m-nav-breadcrumbs__link",attrs:{to:"/admin/posts"}},[t._v("Články")])],1),t._v(" "),e("li",{staticClass:"m-nav-breadcrumbs__item"},[e("span",{staticClass:"m-nav-breadcrumbs__span"},[t._v("Editace článku - "+t._s(this.edit.title))])])])])])]),t._v(" "),e("section",{staticClass:"t-section my-4"},[e("div",{staticClass:"t-section__inner"},[e("div",{staticClass:"o-form-edit"},[e("div",{staticClass:"o-form-edit__outer"},[e("div",{staticClass:"o-form-edit__inner"},[t.errorForm?e("div",{staticClass:"o-flash-messages"},[e("div",{staticClass:"o-flash-messages__items"},[e("div",{staticClass:"o-flash-messages__item"},[e("div",{staticClass:"o-flash-messages__outer"},[e("div",{staticClass:"o-flash-messages__inner"},[e("span",{staticClass:"o-flash-messages__text"},[t._v(t._s(t.errorForm))])])])])])]):t._e(),t._v(" "),e("form",{staticClass:"o-form-edit__form",on:{submit:function(e){return e.preventDefault(),t.editForm.apply(null,arguments)}}},[e("div",{staticClass:"o-form-edit__items"},[e("div",{staticClass:"o-form-edit__item"},[t._m(0),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.edit.dir,expression:"edit.dir"}],staticClass:"a-input",attrs:{type:"text",name:"dir"},domProps:{value:t.edit.dir},on:{input:function(e){e.target.composing||t.$set(t.edit,"dir",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"o-form-edit__item"},[t._m(1),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.edit.slug,expression:"edit.slug"}],staticClass:"a-input",attrs:{type:"text",name:"slug"},domProps:{value:t.edit.slug},on:{input:function(e){e.target.composing||t.$set(t.edit,"slug",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"o-form-edit__item"},[t._m(2),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.edit.path,expression:"edit.path"}],staticClass:"a-input",attrs:{type:"text",name:"path"},domProps:{value:t.edit.path},on:{input:function(e){e.target.composing||t.$set(t.edit,"path",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"o-form-edit__item"},[t._m(3),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.edit.date,expression:"edit.date"}],staticClass:"a-input",attrs:{type:"text",name:"date"},domProps:{value:t.edit.date},on:{input:function(e){e.target.composing||t.$set(t.edit,"date",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"o-form-edit__item"},[t._m(4),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.edit.dateUpdate,expression:"edit.dateUpdate"}],staticClass:"a-input",attrs:{type:"text",name:"dateUpdate"},domProps:{value:t.edit.dateUpdate},on:{input:function(e){e.target.composing||t.$set(t.edit,"dateUpdate",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"o-form-edit__item"},[t._m(5),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.edit.dateInformation,expression:"edit.dateInformation"}],staticClass:"a-input",attrs:{type:"text",name:"dateInformation"},domProps:{value:t.edit.dateInformation},on:{input:function(e){e.target.composing||t.$set(t.edit,"dateInformation",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"o-form-edit__item"},[t._m(6),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.edit.imageList,expression:"edit.imageList"}],staticClass:"a-input",attrs:{type:"text",name:"imageList"},domProps:{value:t.edit.imageList},on:{input:function(e){e.target.composing||t.$set(t.edit,"imageList",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"o-form-edit__item"},[t._m(7),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.edit.imageHero,expression:"edit.imageHero"}],staticClass:"a-input",attrs:{type:"text",name:"imageHero"},domProps:{value:t.edit.imageHero},on:{input:function(e){e.target.composing||t.$set(t.edit,"imageHero",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"o-form-edit__item"},[t._m(8),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.edit.imageMap,expression:"edit.imageMap"}],staticClass:"a-input",attrs:{type:"text",name:"imageMap"},domProps:{value:t.edit.imageMap},on:{input:function(e){e.target.composing||t.$set(t.edit,"imageMap",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"o-form-edit__item"},[t._m(9),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.edit.urlYoutube,expression:"edit.urlYoutube"}],staticClass:"a-input",attrs:{type:"text",name:"urlYoutube"},domProps:{value:t.edit.urlYoutube},on:{input:function(e){e.target.composing||t.$set(t.edit,"urlYoutube",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"o-form-edit__item"},[t._m(10),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.edit.urlWiki,expression:"edit.urlWiki"}],staticClass:"a-input",attrs:{type:"text",name:"urlWiki"},domProps:{value:t.edit.urlWiki},on:{input:function(e){e.target.composing||t.$set(t.edit,"urlWiki",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"o-form-edit__item"},[t._m(11),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.edit.urlMap,expression:"edit.urlMap"}],staticClass:"a-input",attrs:{type:"text",name:"urlMap"},domProps:{value:t.edit.urlMap},on:{input:function(e){e.target.composing||t.$set(t.edit,"urlMap",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"o-form-edit__item"},[t._m(12),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.edit.title,expression:"edit.title"}],staticClass:"a-input",attrs:{type:"text",name:"title"},domProps:{value:t.edit.title},on:{input:function(e){e.target.composing||t.$set(t.edit,"title",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"o-form-edit__item"},[t._m(13),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.edit.perex,expression:"edit.perex"}],staticClass:"a-input",attrs:{type:"text",name:"perex"},domProps:{value:t.edit.perex},on:{input:function(e){e.target.composing||t.$set(t.edit,"perex",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"o-form-edit__item"},[t._m(14),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.edit.textOpener,expression:"edit.textOpener"}],staticClass:"a-textarea",attrs:{type:"text",name:"textOpener"},domProps:{value:t.edit.textOpener},on:{input:function(e){e.target.composing||t.$set(t.edit,"textOpener",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"o-form-edit__item"},[t._m(15),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.edit.textAuthor,expression:"edit.textAuthor"}],staticClass:"a-textarea",attrs:{type:"text",name:"textAuthor"},domProps:{value:t.edit.textAuthor},on:{input:function(e){e.target.composing||t.$set(t.edit,"textAuthor",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"o-form-edit__item"},[t._m(16),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.edit.textWiki,expression:"edit.textWiki"}],staticClass:"a-textarea",attrs:{type:"text",name:"textWiki"},domProps:{value:t.edit.textWiki},on:{input:function(e){e.target.composing||t.$set(t.edit,"textWiki",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"o-form-edit__item"},[t._m(17),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.edit.reviewText,expression:"edit.reviewText"}],staticClass:"a-textarea",attrs:{type:"text",name:"reviewText"},domProps:{value:t.edit.reviewText},on:{input:function(e){e.target.composing||t.$set(t.edit,"reviewText",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"o-form-edit__item"},[t._m(18),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.edit.reviewValue,expression:"edit.reviewValue"}],staticClass:"a-input",attrs:{type:"text",name:"reviewValue"},domProps:{value:t.edit.reviewValue},on:{input:function(e){e.target.composing||t.$set(t.edit,"reviewValue",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"o-form-edit__item"},[t._m(19),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.edit.perexPrice,expression:"edit.perexPrice"}],staticClass:"a-input",attrs:{type:"text",name:"perexPrice"},domProps:{value:t.edit.perexPrice},on:{input:function(e){e.target.composing||t.$set(t.edit,"perexPrice",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"o-form-edit__item"},[t._m(20),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.edit.perexTriplength,expression:"edit.perexTriplength"}],staticClass:"a-input",attrs:{type:"text",name:"perexTriplength"},domProps:{value:t.edit.perexTriplength},on:{input:function(e){e.target.composing||t.$set(t.edit,"perexTriplength",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"o-form-edit__item"},[t._m(21),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.edit.perexTime,expression:"edit.perexTime"}],staticClass:"a-input",attrs:{type:"text",name:"perexTime"},domProps:{value:t.edit.perexTime},on:{input:function(e){e.target.composing||t.$set(t.edit,"perexTime",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"o-form-edit__item"},[t._m(22),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.edit.tags,expression:"edit.tags"}],staticClass:"a-textarea",attrs:{type:"text",name:"tags"},domProps:{value:t.edit.tags},on:{input:function(e){e.target.composing||t.$set(t.edit,"tags",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"o-form-edit__item"},[t._m(23),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.edit.locations,expression:"edit.locations"}],staticClass:"a-textarea",attrs:{type:"text",name:"locations"},domProps:{value:t.edit.locations},on:{input:function(e){e.target.composing||t.$set(t.edit,"locations",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"o-form-edit__item"},[t._m(24),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.edit.travels,expression:"edit.travels"}],staticClass:"a-textarea",attrs:{type:"text",name:"travels"},domProps:{value:t.edit.travels},on:{input:function(e){e.target.composing||t.$set(t.edit,"travels",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"o-form-edit__item"},[t._m(25),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.edit.prices,expression:"edit.prices"}],staticClass:"a-textarea",attrs:{type:"text",name:"prices"},domProps:{value:t.edit.prices},on:{input:function(e){e.target.composing||t.$set(t.edit,"prices",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"o-form-edit__item"},[t._m(26),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.edit.triplengths,expression:"edit.triplengths"}],staticClass:"a-textarea",attrs:{type:"text",name:"triplengths"},domProps:{value:t.edit.triplengths},on:{input:function(e){e.target.composing||t.$set(t.edit,"triplengths",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"o-form-edit__item"},[t._m(27),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.edit.times,expression:"edit.times"}],staticClass:"a-textarea",attrs:{type:"text",name:"times"},domProps:{value:t.edit.times},on:{input:function(e){e.target.composing||t.$set(t.edit,"times",e.target.value)}}})])]),t._v(" "),t._m(28)])])])])])])])}),[function(){var t=this._self._c;return t("label",{staticClass:"m-label"},[t("span",{staticClass:"m-label__name"},[this._v("Dir:")])])},function(){var t=this._self._c;return t("label",{staticClass:"m-label"},[t("span",{staticClass:"m-label__name"},[this._v("Slug:")])])},function(){var t=this._self._c;return t("label",{staticClass:"m-label"},[t("span",{staticClass:"m-label__name"},[this._v("Path:")])])},function(){var t=this._self._c;return t("label",{staticClass:"m-label"},[t("span",{staticClass:"m-label__name"},[this._v("Date:")])])},function(){var t=this._self._c;return t("label",{staticClass:"m-label"},[t("span",{staticClass:"m-label__name"},[this._v("Data update:")])])},function(){var t=this._self._c;return t("label",{staticClass:"m-label"},[t("span",{staticClass:"m-label__name"},[this._v("Date Information:")])])},function(){var t=this._self._c;return t("label",{staticClass:"m-label"},[t("span",{staticClass:"m-label__name"},[this._v("Image List:")])])},function(){var t=this._self._c;return t("label",{staticClass:"m-label"},[t("span",{staticClass:"m-label__name"},[this._v("Image Hero:")])])},function(){var t=this._self._c;return t("label",{staticClass:"m-label"},[t("span",{staticClass:"m-label__name"},[this._v("Image Map:")])])},function(){var t=this._self._c;return t("label",{staticClass:"m-label"},[t("span",{staticClass:"m-label__name"},[this._v("Url Youtube:")])])},function(){var t=this._self._c;return t("label",{staticClass:"m-label"},[t("span",{staticClass:"m-label__name"},[this._v("Url Wiki:")])])},function(){var t=this._self._c;return t("label",{staticClass:"m-label"},[t("span",{staticClass:"m-label__name"},[this._v("Url Map:")])])},function(){var t=this._self._c;return t("label",{staticClass:"m-label"},[t("span",{staticClass:"m-label__name"},[this._v("Title:")])])},function(){var t=this._self._c;return t("label",{staticClass:"m-label"},[t("span",{staticClass:"m-label__name"},[this._v("Perex:")])])},function(){var t=this._self._c;return t("label",{staticClass:"m-label"},[t("span",{staticClass:"m-label__name"},[this._v("Text Opener:")])])},function(){var t=this._self._c;return t("label",{staticClass:"m-label"},[t("span",{staticClass:"m-label__name"},[this._v("Text Author:")])])},function(){var t=this._self._c;return t("label",{staticClass:"m-label"},[t("span",{staticClass:"m-label__name"},[this._v("Text Wiki:")])])},function(){var t=this._self._c;return t("label",{staticClass:"m-label"},[t("span",{staticClass:"m-label__name"},[this._v("Review Text:")])])},function(){var t=this._self._c;return t("label",{staticClass:"m-label"},[t("span",{staticClass:"m-label__name"},[this._v("Review Value:")])])},function(){var t=this._self._c;return t("label",{staticClass:"m-label"},[t("span",{staticClass:"m-label__name"},[this._v("Perex Price:")])])},function(){var t=this._self._c;return t("label",{staticClass:"m-label"},[t("span",{staticClass:"m-label__name"},[this._v("Perex Triplength:")])])},function(){var t=this._self._c;return t("label",{staticClass:"m-label"},[t("span",{staticClass:"m-label__name"},[this._v("Perex Time:")])])},function(){var t=this._self._c;return t("label",{staticClass:"m-label"},[t("span",{staticClass:"m-label__name"},[this._v("Tags(json):")])])},function(){var t=this._self._c;return t("label",{staticClass:"m-label"},[t("span",{staticClass:"m-label__name"},[this._v("Locations(json):")])])},function(){var t=this._self._c;return t("label",{staticClass:"m-label"},[t("span",{staticClass:"m-label__name"},[this._v("Travels(json):")])])},function(){var t=this._self._c;return t("label",{staticClass:"m-label"},[t("span",{staticClass:"m-label__name"},[this._v("Prices(json):")])])},function(){var t=this._self._c;return t("label",{staticClass:"m-label"},[t("span",{staticClass:"m-label__name"},[this._v("Triplengths(json):")])])},function(){var t=this._self._c;return t("label",{staticClass:"m-label"},[t("span",{staticClass:"m-label__name"},[this._v("Times(json):")])])},function(){var t=this._self._c;return t("div",{staticClass:"o-form-edit__buttons mt-1"},[t("div",{staticClass:"o-form-edit__button"},[t("div",{staticClass:"m-button"},[t("button",{staticClass:"m-button__input",attrs:{type:"submit"}},[this._v("Uložit úpravy")])])])])}],!1,null,null,null);e.default=component.exports}}]);