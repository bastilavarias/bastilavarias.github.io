(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{290:function(e,t,a){var i={"./channel/channel-chat-list.png":171,"./channel/channel-login-dialog.png":172,"./channel/channel-login.png":173,"./channel/channel-profile.png":174,"./channel/channel-room-form.png":175,"./channel/channel-room-list.png":176,"./forum-site/fs-blog-form.png":177,"./forum-site/fs-blog-information.png":178,"./forum-site/fs-blog-list.png":179,"./forum-site/fs-login-dialog.png":180,"./forum-site/fs-profile.png":181};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}r.keys=function(){return Object.keys(i)},r.resolve=o,e.exports=r,r.id=290},295:function(e){e.exports=JSON.parse('{"introduction":"I\'m Sebastian Curtis T. Lavarias, 20 years of age. A student and web developer from Manila, Philippines. Currently, I\'m in my junior year at <span class=\'success--text\'>Universidad de Manila</span> taking Bachelor of Science in Information Technology.","skills":[{"text":"HTML","icon":"mdi-language-html5"},{"text":"CSS","icon":"mdi-language-css3"},{"text":"JavaScript","icon":"mdi-language-javascript"},{"text":"TypeScript","icon":"mdi-language-typescript"},{"text":"Vue.js","icon":"mdi-vuejs"},{"text":"Node.js","icon":"mdi-nodejs"},{"text":"SQL","icon":"mdi-database"},{"text":"Git","icon":"mdi-git"}],"featuredProjects":[{"name":"Channel","description":"A simple messenger clone created for developers wants to hit a instant chat to other group of developers.","url":{"demo":"https://channel-web.herokuapp.com/","sourceCode":"https://github.com/bastilavarias/channel/tree/1.0.0"},"technologies":[{"text":"Vue.js","icon":"mdi-vuejs"},{"text":"Node.js","icon":"mdi-nodejs"},{"text":"SQL","icon":"mdi-database"},{"text":"GitHub OAuth","icon":"mdi-github"},{"text":"Git","icon":"mdi-git"}],"role":"Full Stack Developer","imagePaths":["channel/channel-login.png","channel/channel-login-dialog.png","channel/channel-chat-list.png","channel/channel-profile.png","channel/channel-room-list.png","channel/channel-room-form.png"]},{"name":"Forum Site","description":"A simple reddit clone created for developers to ask a different kind of questions to other developers.","url":{"demo":"https://forum-site-demo.herokuapp.com/","sourceCode":"https://github.com/bastilavarias/forum-site/tree/1.0.0"},"technologies":[{"text":"Vue.js","icon":"mdi-vuejs"},{"text":"Node.js","icon":"mdi-nodejs"},{"text":"SQL","icon":"mdi-database"},{"text":"GitHub OAuth","icon":"mdi-github"},{"text":"Git","icon":"mdi-git"}],"role":"Full Stack Developer","imagePaths":["forum-site/fs-login-dialog.png","forum-site/fs-blog-list.png","forum-site/fs-blog-information.png","forum-site/fs-blog-form.png","forum-site/fs-profile.png"]}],"repositories":[{"name":"Expense manager","description":"My custom expense manager tailored for my daily expense activity.","sourceCodeUrl":"https://github.com/bastilavarias/expense-manager"},{"name":"Nursing quizlet","description":"Simple nursing best practices quiz web application made for nursing students at my university.","sourceCodeUrl":"https://github.com/bastilavarias/nursing-quizlet"},{"name":"3 typescript sorter","description":"3 typescript-node application that sorts an array of numbers, string and linked list.","sourceCodeUrl":"https://github.com/bastilavarias/typscript-node-3-types-sorter"}]}')},304:function(e,t,a){"use strict";a.r(t);var i=a(295),r={name:"icon-tooltip",props:{text:{type:String,required:!1},color:{type:String,required:!1},className:{type:String,required:!1}}},o=a(22),n=a(29),s=a.n(n),l=a(104),c=a(286),d=Object(o.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-tooltip",{attrs:{top:""},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on;return[a("v-icon",e._g({class:e.className,attrs:{color:e.color}},i),[e._t("default")],2)]}}],null,!0)},[e.text?a("span",[e._v(e._s(e.text))]):e._e()])}),[],!1,null,null,null),u=d.exports;s()(d,{VIcon:l.a,VTooltip:c.a});var m={name:"project-card",components:{IconTooltip:u},props:{name:{type:String,required:!0},description:{type:String,required:!0},url:{type:Object,required:!0},technologies:{type:Array,required:!0},role:{type:String,required:!0},imagePaths:{type:Array,required:!0}},data:function(){return{carouselState:null,isImageZoomed:!1,carouselZoomedImageState:null}},methods:{zoomImage:function(){this.carouselZoomedImageState=this.carouselState,this.isImageZoomed=!0}}},p=a(106),v=a(271),g=a(168),h=a(310),f=a(311),b=a(307),x=a(303),_=Object(o.a)(m,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-card",{attrs:{"min-height":"800"}},[i("v-carousel",{attrs:{cycle:"",height:"250","hide-delimiter-background":"","show-arrows-on-hover":""},model:{value:e.carouselState,callback:function(t){e.carouselState=t},expression:"carouselState"}},e._l(e.imagePaths,(function(t,r){return i("v-carousel-item",{key:r,attrs:{src:a(290)("./"+t)},on:{click:e.zoomImage}})})),1),i("v-card-title",[e._v(e._s(e.name))]),i("v-card-text",[e._v("\n    "+e._s(e.description)+"\n  ")]),i("v-divider",{staticClass:"mx-4"}),i("v-card-title",[i("v-icon",{staticClass:"mr-1"},[e._v("\n      mdi-desktop-classic\n    ")]),i("span",[e._v("\n      Technologies\n    ")])],1),i("v-card-text",e._l(e.technologies,(function(t,a){return i("icon-tooltip",{key:a,attrs:{"class-name":"ma-1",text:t.text}},[e._v("\n      "+e._s(t.icon)+"\n    ")])})),1),i("v-divider",{staticClass:"mx-4"}),i("v-card-title",[i("v-icon",{staticClass:"mr-1"},[e._v("\n      mdi-shield-account\n    ")]),i("span",[e._v("\n      Role\n    ")])],1),i("v-card-text",[e._v("\n    "+e._s(e.role)+"\n  ")]),i("v-divider",{staticClass:"mx-4"}),i("v-card-title",[i("v-icon",{staticClass:"mr-1"},[e._v("\n      mdi-web-box\n    ")]),i("span",[e._v("\n      URLs\n    ")])],1),i("v-card-text",[i("div",{staticClass:"d-flex align-center mb-2"},[i("v-icon",{staticClass:"mr-2",attrs:{small:""}},[e._v("mdi-web")]),i("a",{attrs:{href:e.url.demo,target:"_blank"}},[i("span",[e._v("Click to view the demo.")])])],1),i("div",{staticClass:"d-flex align-center"},[i("v-icon",{staticClass:"mr-2",attrs:{small:""}},[e._v("mdi-github")]),i("a",{attrs:{href:e.url.sourceCode,target:"_blank"}},[i("span",[e._v("Click to view the source code.")])])],1)]),i("v-dialog",{attrs:{width:"1100"},model:{value:e.isImageZoomed,callback:function(t){e.isImageZoomed=t},expression:"isImageZoomed"}},[i("v-card",[i("v-carousel",{attrs:{height:"100%","hide-delimiter-background":"","show-arrows-on-hover":""},model:{value:e.carouselZoomedImageState,callback:function(t){e.carouselZoomedImageState=t},expression:"carouselZoomedImageState"}},e._l(e.imagePaths,(function(e,t){return i("v-carousel-item",{key:t,attrs:{src:a(290)("./"+e)}})})),1),i("v-card-actions",[i("div",{staticClass:"flex-grow-1"}),i("v-btn",{staticClass:"text-capitalize",attrs:{text:""},on:{click:function(t){e.isImageZoomed=!1}}},[e._v("\n          Close\n        ")])],1)],1)],1)],1)}),[],!1,null,null,null),C=_.exports;s()(_,{VBtn:p.a,VCard:v.a,VCardActions:g.a,VCardText:g.b,VCardTitle:g.c,VCarousel:h.a,VCarouselItem:f.a,VDialog:b.a,VDivider:x.a,VIcon:l.a});var y=a(41),S={name:"repository-card",props:{className:{type:String,required:!1},name:{type:String,required:!0},description:{type:String,required:!1},sourceCodeUrl:{type:String,required:!0}},mixins:[y.a]},k=a(281),V=a(285),w=Object(o.a)(S,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-card",{class:""+e.className,attrs:{"min-width":"200"}},[i("div",{staticClass:"d-flex justify-space-between"},[i("div",[i("v-card-title",{staticClass:"text-capitalize"},[e._v(e._s(e.name?e.name:"No name."))]),i("v-card-text",[i("span",{staticClass:"d-block mb-3 text-truncate"},[e._v("\n          "+e._s(e.description?e.truncateText(e.description):"No description.")+"\n        ")])])],1),i("v-avatar",{staticClass:"ma-1",attrs:{size:65}},[i("v-img",{attrs:{src:a(170),"lazy-src":a(170)}})],1)],1),i("v-card-actions",[i("div",{staticClass:"flex-grow-1"}),i("v-btn",{attrs:{small:"",color:"error",href:e.sourceCodeUrl,target:"_blank"}},[i("span",{staticClass:"text-capitalize mr-1"},[e._v("Source Code")]),i("v-icon",{attrs:{small:""}},[e._v("mdi-xml")])],1)],1)],1)}),[],!1,null,null,null),j=w.exports;s()(w,{VAvatar:k.a,VBtn:p.a,VCard:v.a,VCardActions:g.a,VCardText:g.b,VCardTitle:g.c,VIcon:l.a,VImg:V.a});var I={components:{DefaultLayout:a(108).a,RepositoryCard:j,ProjectCard:C},metaInfo:function(){return{title:"About Me",description:this.aboutMe.introduction}},data:function(){return{aboutMe:i,slidGroupState:null}}},q=a(282),T=a(284),M=a(283),N=a(56),P=a(309),A=Object(o.a)(I,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("default-layout",[a("v-card",[a("v-card-title",[e._v("Hello 🙋‍♂")]),a("v-card-text",[a("span",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:e._s(e.aboutMe.introduction)}})]),a("v-card-title",[e._v("\n      My Skills 👨‍💻️\n    ")]),a("v-card-text",e._l(e.aboutMe.skills,(function(t,i){return a("v-chip",{key:i,staticClass:"ma-2"},[a("v-icon",{staticClass:"mr-1"},[e._v(e._s(t.icon))]),a("span",[e._v(e._s(t.text))])],1)})),1),a("v-card-title",[e._v("\n      Featured Projects 🖥️\n    ")]),a("v-card-text",[a("v-row",e._l(e.aboutMe.featuredProjects,(function(e,t){return a("v-col",{key:t,attrs:{cols:"12",sm:"6"}},[a("project-card",{attrs:{name:e.name,description:e.description,url:e.url,technologies:e.technologies,role:e.role,imagePaths:e.imagePaths}})],1)})),1)],1),a("v-card-title",[e._v("\n      Repositories 📁\n    ")]),a("v-card-text",[a("v-slide-group",{attrs:{"show-arrows":""},model:{value:e.slidGroupState,callback:function(t){e.slidGroupState=t},expression:"slidGroupState"}},e._l(e.aboutMe.repositories,(function(e,t){return a("v-slide-item",{key:t},[a("repository-card",{attrs:{name:e.name,description:e.description,sourceCodeUrl:e.sourceCodeUrl,"class-name":"ma-1"}})],1)})),1)],1),a("v-card-actions",[a("div",{staticClass:"flex-grow-1"}),a("v-btn",{attrs:{text:"",color:"error",href:"https://github.com/bastilavarias?tab=repositories",target:"_blank"}},[a("span",{staticClass:"text-capitalize mr-1"},[e._v("View More")]),a("v-icon",{attrs:{color:"error"}},[e._v("mdi-xml")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=A.exports;s()(A,{VBtn:p.a,VCard:v.a,VCardActions:g.a,VCardText:g.b,VCardTitle:g.c,VChip:q.a,VCol:T.a,VIcon:l.a,VRow:M.a,VSlideGroup:N.b,VSlideItem:P.a})}}]);