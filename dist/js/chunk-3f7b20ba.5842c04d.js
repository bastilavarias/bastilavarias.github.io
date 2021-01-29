(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f7b20ba"],{"10d2":function(t,e,i){"use strict";var s=i("8dd9");e["a"]=s["a"]},8336:function(t,e,i){"use strict";i("4160"),i("caad"),i("a9e3"),i("c7cd");var s=i("53ca"),a=i("3835"),n=i("5530"),o=(i("86cc"),i("10d2")),r=(i("99af"),i("8d4f"),i("a9ad")),l=i("80d2"),c=r["a"].extend({name:"v-progress-circular",props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:function(){return{radius:20}},computed:{calculatedSize:function(){return Number(this.size)+(this.button?8:0)},circumference:function(){return 2*Math.PI*this.radius},classes:function(){return{"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue:function(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray:function(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset:function(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth:function(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles:function(){return{height:Object(l["d"])(this.calculatedSize),width:Object(l["d"])(this.calculatedSize)}},svgStyles:function(){return{transform:"rotate(".concat(Number(this.rotate),"deg)")}},viewBoxSize:function(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle:function(t,e){return this.$createElement("circle",{class:"v-progress-circular__".concat(t),attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg:function(){var t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"".concat(this.viewBoxSize," ").concat(this.viewBoxSize," ").concat(2*this.viewBoxSize," ").concat(2*this.viewBoxSize)}},t)},genInfo:function(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)}},render:function(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}}),u=c,h=i("4e82"),d=i("f2e7"),v=i("c995"),p=i("fe6c"),b=i("1c87"),f=i("af2b"),g=i("58df"),m=i("d9bd"),C=Object(g["a"])(o["a"],b["a"],p["a"],f["a"],Object(h["a"])("btnToggle"),Object(d["b"])("inputValue"));e["a"]=C.extend().extend({name:"v-btn",props:{activeClass:{type:String,default:function(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,plain:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:function(){return{proxyClass:"v-btn--active"}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])(Object(n["a"])(Object(n["a"])(Object(n["a"])({"v-btn":!0},b["a"].options.computed.classes.call(this)),{},{"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--disabled":this.disabled,"v-btn--is-elevated":this.isElevated,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--has-bg":this.hasBg,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--plain":this.plain,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top},this.themeClasses),this.groupClasses),this.elevationClasses),this.sizeableClasses)},computedElevation:function(){if(!this.disabled)return v["a"].options.computed.computedElevation.call(this)},computedRipple:function(){var t,e=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!=(t=this.ripple)?t:e)},hasBg:function(){return!this.text&&!this.plain&&!this.outlined&&!this.icon},isElevated:function(){return Boolean(!this.icon&&!this.text&&!this.outlined&&!this.depressed&&!this.disabled&&!this.plain&&(null==this.elevation||Number(this.elevation)>0))},isRound:function(){return Boolean(this.icon||this.fab)},styles:function(){return Object(n["a"])({},this.measurableStyles)}},created:function(){var t=this,e=[["flat","text"],["outline","outlined"],["round","rounded"]];e.forEach((function(e){var i=Object(a["a"])(e,2),s=i[0],n=i[1];t.$attrs.hasOwnProperty(s)&&Object(m["a"])(s,n,t)}))},methods:{click:function(t){!this.retainFocusOnClick&&!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent:function(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader:function(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(u,{props:{indeterminate:!0,size:23,width:2}})])}},render:function(t){var e=[this.genContent(),this.loading&&this.genLoader()],i=this.generateRouteLink(),a=i.tag,n=i.data,o=this.hasBg?this.setBackgroundColor:this.setTextColor;return"button"===a&&(n.attrs.type=this.type,n.attrs.disabled=this.disabled),n.attrs.value=["string","number"].includes(Object(s["a"])(this.value))?this.value:JSON.stringify(this.value),t(a,this.disabled?n:o(this.color,n),e)}})},"86cc":function(t,e,i){},"8adc":function(t,e,i){},"8ce9":function(t,e,i){},"8d4f":function(t,e,i){},c7cd:function(t,e,i){"use strict";var s=i("23e7"),a=i("857a"),n=i("af03");s({target:"String",proto:!0,forced:n("fixed")},{fixed:function(){return a(this,"tt","","")}})},ce7e:function(t,e,i){"use strict";var s=i("5530"),a=(i("8ce9"),i("7560"));e["a"]=a["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(s["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(s["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},f820:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"pt-10"},[i("v-row",[i("v-col",{attrs:{cols:"12",md:"8"}},[i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("div",{staticClass:"overline"},[t._v("About Me")]),i("div",{staticClass:"body-1"},[t._v(" I'm Sebastian Curtis T. Lavarias, 20 years of age. A student and web developer from Manila, Philippines. Currently, I'm in my junior year at Universidad de Manila taking Bachelor of Science in Information Technology. ")])]),i("v-col",{attrs:{cols:"12"}},[i("div",{staticClass:"overline"},[t._v("Experience")]),i("div",{staticClass:"body-1"},[i("ul",[t._l(t.experiences,(function(e,s){return[i("li",{key:s},[t._v(" "+t._s(e.designation)+" at "+t._s(e.company)+" · "),i("span",{staticClass:"caption"},[t._v(t._s(e.date))])])]}))],2)])]),i("v-col",{attrs:{cols:"12"}},[i("div",{staticClass:"overline"},[t._v("Education")]),i("div",{staticClass:"body-1"},[i("ul",[t._l(t.education,(function(e,s){return[i("li",{key:s},[t._v(" "+t._s(e.course)+" at "+t._s(e.school)+" · "),i("span",{staticClass:"caption"},[t._v(t._s(e.date))])])]}))],2)])])],1)],1),i("v-col",{attrs:{cols:"12",md:"4"}},[i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("div",{staticClass:"overline"},[t._v("Skills")]),t._l(t.skills,(function(e,s){return[i("v-chip",{key:s,staticClass:"ma-1",attrs:{small:""}},[t._v(t._s(e))])]}))],2),i("v-col",{attrs:{cols:"12"}},[i("div",{staticClass:"overline"},[t._v("Contacts")]),t._l(t.contacts,(function(e,s){return[i("div",{staticClass:"d-flex align-center mb-1"},[i("span",{staticClass:"caption mr-1"},[t._v(t._s(e.type)+":")]),i("span",{staticClass:"body-1"},[t._v(t._s(e.value))])])]}))],2),i("v-col",{attrs:{cols:"12"}},[i("div",{staticClass:"overline"},[t._v("Socials")]),t._l(t.socials,(function(e,s){return[i("a",{key:s,staticClass:"body-1 ma-1",attrs:{href:e.link,target:"_blank"}},[t._v(" "+t._s(e.type)+" ")])]}))],2),i("v-col",{attrs:{cols:"12"}},[i("div",{staticClass:"overline"},[t._v("Latest Blogs")]),t.isGetLatestBlogsStart?i("div",[t._l(3,(function(t){return[i("v-skeleton-loader",{key:t,attrs:{type:"list-item-two-line"}})]}))],2):t._e(),t.isGetLatestBlogsStart?t._e():i("div",[t._l(t.latestBlogs,(function(e,s){return[i("v-list-item",{attrs:{"two-line":""}},[i("v-list-item-content",[i("v-list-item-title",[i("router-link",{staticClass:"text--primary",attrs:{to:{name:"Blog Item Page",params:{slug:e.slug.current}}}},[i("span",{staticClass:"font-weight-bold text--primary body-1"},[t._v(t._s(e.title))])])],1),i("v-list-item-subtitle",[t._v(t._s(t.formatDate(e.createdAt)))])],1)],1),s!==t.latestBlogs.length-1?i("v-divider"):t._e()]})),i("div",{staticClass:"d-flex justify-space-between align-center"},[i("div",{staticClass:"flex-grow-1"}),i("v-btn",{attrs:{small:"",text:"",to:{name:"Blogs Page"}}},[i("span",{staticClass:"text-capitalize text-decoration-underline"},[t._v("Read More")])])],1)],2)])],1)],1)],1)],1)},a=[],n=(i("96cf"),i("1da1")),o=i("92e5"),r=i("ad14"),l={mixins:[r["a"]],data:function(){return{experiences:[{designation:"Web Developer",company:"Fourello",date:"Present"}],education:[{course:"Information Technology",school:"Universidad de Manila",date:"Present"},{course:"Senior High School",school:"MMC CAST",date:"2016 - 2018"},{course:"Junior High School",school:"Tondo High School",date:"2012 - 2016"},{course:"Elementary",school:"Magat Salamat",date:"2006 - 2012"}],skills:["HTML","CSS","JavaScript","TypeScript","NodeJS","SQL"],contacts:[{type:"Email",value:"sebastiancurtislavarias@gmail.com"},{type:"Mobile Number",value:"09972217704"}],socials:[{type:"YouTube",link:"https://www.youtube.com/channel/UCpBQkRsDXJZNm-wPoyXHBDg"},{type:"LinkedIn",link:"https://www.linkedin.com/in/sebastian-curtis-lavarias-b20a57175/"}],latestBlogs:[],isGetLatestBlogsStart:!1}},methods:{getLatestBlogs:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,i="*[_type == 'post'] | order(_createdAt desc) {title, slug, _createdAt}[0...3]",t.isGetLatestBlogsStart=!0,e.next=5,o["a"].fetch(i);case 5:t.latestBlogs=e.sent,t.isGetLatestBlogsStart=!1,e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),t.latestBlogs=[];case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}},created:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getLatestBlogs();case 2:case"end":return e.stop()}}),e)})))()}},c=l,u=i("2877"),h=i("6544"),d=i.n(h),v=i("8336"),p=(i("4de4"),i("4160"),i("3835")),b=i("5530"),f=(i("8adc"),i("58df")),g=i("0789"),m=i("9d26"),C=i("a9ad"),y=i("4e82"),B=i("7560"),_=i("f2e7"),x=i("1c87"),k=i("af2b"),S=i("d9bd"),w=Object(f["a"])(C["a"],k["a"],x["a"],B["a"],Object(y["a"])("chipGroup"),Object(_["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return Object(b["a"])(Object(b["a"])(Object(b["a"])(Object(b["a"])({"v-chip":!0},x["a"].options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(x["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this,e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((function(e){var i=Object(p["a"])(e,2),s=i[0],a=i[1];t.$attrs.hasOwnProperty(s)&&Object(S["a"])(s,a,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(m["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(g["b"],t)},genClose:function(){var t=this;return this.$createElement(m["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],i=this.generateRouteLink(),s=i.tag,a=i.data;a.attrs=Object(b["a"])(Object(b["a"])({},a.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:a.attrs.tabindex}),a.directives.push({name:"show",value:this.active}),a=this.setBackgroundColor(this.color,a);var n=this.textColor||this.outlined&&this.color;return t(s,this.setTextColor(n,a),e)}}),O=i("62ad"),j=i("ce7e"),$=i("da13"),z=i("5d23"),L=i("0fd9"),E=i("3129"),I=Object(u["a"])(c,s,a,!1,null,null,null);e["default"]=I.exports;d()(I,{VBtn:v["a"],VChip:w,VCol:O["a"],VDivider:j["a"],VListItem:$["a"],VListItemContent:z["a"],VListItemSubtitle:z["b"],VListItemTitle:z["c"],VRow:L["a"],VSkeletonLoader:E["a"]})},fe6c:function(t,e,i){"use strict";i.d(e,"b",(function(){return o}));var s=i("2b0e"),a=i("80d2"),n={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean};function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return s["a"].extend({name:"positionable",props:t.length?Object(a["f"])(n,t):n})}e["a"]=o()}}]);
//# sourceMappingURL=chunk-3f7b20ba.5842c04d.js.map