(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{259:function(t,e,n){var content=n(343);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("01d0240a",content,!0,{sourceMap:!1})},267:function(t,e,n){var content=n(430);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("712be6c3",content,!0,{sourceMap:!1})},272:function(t,e,n){"use strict";var o=n(440),r=n(443),c=n(444),l=n(445),d=n(198),f=n(441),v=n(442),m=n(115),h=(n(37),{name:"DefaultLayout",data:function(){return{toggleSelect:!1,current:"about"}},mounted:function(){var t=this.$router.history._startLocation.split("#")[1];t&&(this.current=t)},methods:{setCurrent:function(t){this.current=t},onClickOutside:function(){this.toggleSelect=!1}},computed:{pages:function(){return[{id:"about",name:"Sobre mim"},{id:"skills",name:"Habilidades"},{id:"education",name:"Educação"},{id:"experience",name:"Experiência"}]},isMobile:function(){return this.$vuetify.breakpoint.width<this.$vuetify.breakpoint.mobileBreakpoint}}}),k=(n(429),n(102)),component=Object(k.a)(h,(function(){var t=this,e=t._self._c;return e(o.a,[t.isMobile?e(r.a,{directives:[{def:m.a,name:"click-outside",rawName:"v-click-outside",value:t.onClickOutside,expression:"onClickOutside"}],attrs:{fixed:"",app:"",color:"#663366"}},[e("div",[e(c.a,{staticClass:"mt-14",attrs:{icon:""},on:{click:function(){t.toggleSelect=!t.toggleSelect}}},[e(d.a,[t._v("mdi-menu")])],1),t._v(" "),e(v.a,{staticClass:"d-flex justify-end switch mt-2",attrs:{id:"pages_id",items:t.pages,"menu-props":{value:t.toggleSelect},"item-color":"transparent",dense:"",solo:""},scopedSlots:t._u([{key:"item",fn:function(n){var o=n.item;return[e("span",[e("a",{staticClass:"px-4 py-2 mobile",class:t.current!=o.id||"current_mobile",attrs:{href:"#"+o.id},on:{click:function(e){return t.setCurrent(o.id)}}},[t._v("\n              "+t._s(o.name)+"\n            ")])])]}}],null,!1,1441067540)})],1)]):e(r.a,{attrs:{fixed:"",app:"",color:"#663366"}},[e("div",{staticClass:"d-flex"},[e("a",{staticClass:"px-8 py-2 desktop",class:"about"!=t.current||"current",attrs:{href:"#about"},on:{click:function(e){return t.setCurrent("about")}}},[t._v("\n        Sobre mim\n      ")]),t._v(" "),e("a",{staticClass:"px-8 py-2 desktop",class:"skills"!=t.current||"current",attrs:{href:"#skills"},on:{click:function(e){return t.setCurrent("skills")}}},[t._v("\n        Habilidades\n      ")]),t._v(" "),e("a",{staticClass:"px-8 py-2 desktop",class:"education"!=t.current||"current",attrs:{href:"#education"},on:{click:function(e){return t.setCurrent("education")}}},[t._v("\n        Educação\n      ")]),t._v(" "),e("a",{staticClass:"px-8 py-2 desktop",class:"experience"!=t.current||"current",attrs:{href:"#experience"},on:{click:function(e){return t.setCurrent("experience")}}},[t._v("\n        Experiência\n      ")])])]),t._v(" "),e(f.a,[e(l.a,[e("Nuxt")],1)],1)],1)}),[],!1,null,"698455d3",null);e.a=component.exports},290:function(t,e,n){n(291),t.exports=n(292)},342:function(t,e,n){"use strict";n(259)},343:function(t,e,n){var o=n(18)((function(i){return i[1]}));o.push([t.i,"h1[data-v-5ee9a2f7]{font-size:20px}",""]),o.locals={},t.exports=o},429:function(t,e,n){"use strict";n(267)},430:function(t,e,n){var o=n(18)((function(i){return i[1]}));o.push([t.i,'main[data-v-698455d3]{background-color:#b39980;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI",Oxygen,"Open Sans","Helvetica Neue"}a[data-v-698455d3]{font-weight:600px;-webkit-text-decoration:none;text-decoration:none}a.mobile[data-v-698455d3]{color:#636}a.desktop[data-v-698455d3]{color:#fff!important}a.desktop[data-v-698455d3]:active,a.desktop[data-v-698455d3]:hover{color:#b39980!important;cursor:pointer}a.desktop.current[data-v-698455d3]{color:#b39980!important}.switch[data-v-698455d3]{opacity:0;width:100px!important}',""]),o.locals={},t.exports=o},90:function(t,e,n){"use strict";var o=n(440),r={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},c=(n(342),n(102)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e(o.a,[404===t.error.statusCode?e("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):e("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),e("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"5ee9a2f7",null);e.a=component.exports}},[[290,7,1,8]]]);