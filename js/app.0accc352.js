(function(t){function e(e){for(var a,o,s=e[0],u=e[1],c=e[2],d=0,f=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&f.push(r[o][0]),r[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var u=n[s];0!==r[u]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},i=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/Work-plan-app/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},2627:function(t,e,n){"use strict";n("ba91")},"56d7":function(t,e,n){"use strict";n.r(e);n("4de4"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app"},[n("div",{staticClass:"app__container"},[n("navigation"),n("router-view")],1)])},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav"},[n("router-link",{attrs:{to:"/"}},[t._v("Календарь")]),t._v(" | "),n("router-link",{class:{disabled:!t.day},attrs:{to:"/day/"+t.day}},[t._v("Распорядок дня")])],1)},s=[],u=n("5530"),c=n("2f62"),l={name:"Navigation",computed:Object(u["a"])({},Object(c["b"])(["day"]))},d=l,f=(n("ebfa"),n("2877")),p=Object(f["a"])(d,o,s,!1,null,"95e28d9c",null),y=p.exports,m={name:"App",components:{Navigation:y}},v=m,h=(n("5f50"),Object(f["a"])(v,r,i,!1,null,"669400bc",null)),_=h.exports,b=(n("4160"),n("159b"),n("d81d"),n("2909")),g=function(){var t=new Date;t.setDate(1);var e=t.getDay();return e||7},k=function(){var t=new Date,e=t.getMonth(),n=t.getFullYear();return new Date(n,e+1,0).getDate()},D=function(){return Math.ceil((k()+g()-1)/7)},O=function(t){for(var e={},n=k(),a=1;a<=n;a++){var r=Object(b["a"])(new Array(t)).map((function(){return{isImportant:!1,isRoutine:!1}}));e[a]=r}return e},x=24,I=["ПН","ВТ","СР","ЧТ","ПТ","СБ","ВС"],j=7,w=[{text:"Вид работы",value:0},{text:"Важная",value:1},{text:"Обычная",value:2}];a["a"].use(c["a"]);var C=new c["a"].Store({state:{day:null,days:null},mutations:{initialiseStore:function(t){if(localStorage.getItem("data"))try{var e=JSON.parse(localStorage.getItem("data"));t.day=e.day,t.days=e.days}catch(n){localStorage.removeItem("data")}else t.days=O(x)},setDay:function(t,e){t.day=e,localStorage.setItem("data",JSON.stringify(t))},updateDays:function(t,e){var n=e.start,a=e.end,r=e.type;t.days[t.day].forEach((function(t,e){var i=e+1;if(i>=n&&i<a){var o=1===r?"isImportant":"isRoutine";t[o]=!0}})),localStorage.setItem("data",JSON.stringify(t))}},getters:{day:function(t){return t.day}},actions:{},modules:{}}),T=n("8c4f"),S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("day-picker"),n("hr"),t.day?n("p",[t._v(t._s(t.day)+"e")]):n("p",[t._v("Выберите день в календаре")])],1)},W=[],$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"day-picker"},[n("thead",[n("tr",t._l(t.namesDaysWeek,(function(e){return n("th",{key:e},[t._v(t._s(e))])})),0)]),n("tbody",t._l(t.quentityWeek,(function(e){return n("tr",{key:"week_"+e,staticClass:"day-picker__week"},t._l(t.daysInWeek,(function(a){return n("td",{key:"day_"+e+"_"+a,class:{"day-picker__day":t.isDay(e,a),"day-picker__day-selected":t.currentDay===t.getDay(e,a)},on:{click:function(n){t.isDay(e,a)&&t.onClick(t.getDay(e,a))}}},[t._v(" "+t._s(t.getContent(e,a))+" ")])})),0)})),0)])},P=[],N={name:"DayPicker",computed:Object(u["a"])({},Object(c["b"])({currentDay:"day"})),methods:{getContent:function(t,e){return this.isDay(t,e)?this.getDay(t,e):null},isDay:function(t,e){var n=this.getCurrentIndex(t,e);return!(n<this.startIndex||n>this.endIndex)},getDay:function(t,e){return this.getCurrentIndex(t,e)-this.startIndex+1},getCurrentIndex:function(t,e){return(t-1)*this.daysInWeek+e},onClick:function(t){this.$store.commit("setDay",t)}},beforeCreate:function(){this.quentityWeek=D(),this.startIndex=g(),this.endIndex=k()+this.startIndex-1,this.namesDaysWeek=I,this.daysInWeek=j}},E=N,A=(n("2627"),Object(f["a"])(E,$,P,!1,null,"2fbd0ce8",null)),M=A.exports,J={name:"Home",components:{DayPicker:M},computed:Object(u["a"])({},Object(c["b"])(["day"]))},R=J,F=Object(f["a"])(R,S,W,!1,null,null,null),q=F.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("day-time"),t.day?n("day-form"):t._e()],1)},Y=[],z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"day-time"},[n("div",{staticClass:"day-time__header"},t._l(t.hoursInDay+1,(function(e){return n("div",{key:"header_"+e},[n("span",[t._v(" "+t._s(t._f("format")(e-1))+" ")])])})),0),n("div",{staticClass:"day-time__body-routine"},t._l(t.hoursInDay,(function(e){return n("div",{key:"routine_"+e,class:{routine:t.getClass(e,2)}})})),0),n("div",{staticClass:"day-time__body-important"},t._l(t.hoursInDay,(function(e){return n("div",{key:"important_"+e,class:{important:t.getClass(e,1)}})})),0)])},B=[],G={name:"DayTime",computed:{hours:function(){var t=this.$store.state,e=t.day,n=t.days;return e&&e in n?n[e]:[]}},methods:{getClass:function(t,e){if(this.hours.length){var n=1===e?"isImportant":"isRoutine";return this.hours[t-1][n]}return!1}},beforeCreate:function(){this.hoursInDay=x}},K=G,L=(n("89a4"),Object(f["a"])(K,z,B,!1,null,"2b7604f2",null)),Q=L.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"day-form",on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.startTime,expression:"startTime"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.startTime=e.target.multiple?n:n[0]}}},[n("option",{key:"start_0",attrs:{value:"0",disabled:""}},[t._v("Начало работы")]),t._l(t.hoursInDay+1,(function(e){return n("option",{key:"start_"+e,domProps:{value:e}},[t._v(" "+t._s(t._f("format")(e-1))+" ")])}))],2),n("select",{directives:[{name:"model",rawName:"v-model",value:t.endTime,expression:"endTime"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.endTime=e.target.multiple?n:n[0]}}},[n("option",{key:"end_0",attrs:{value:"0",disabled:""}},[t._v("Кoнец работы")]),t._l(t.hoursInDay+1,(function(e){return n("option",{key:"end_"+e,domProps:{value:e}},[t._v(" "+t._s(t._f("format")(e-1))+" ")])}))],2),n("select",{directives:[{name:"model",rawName:"v-model",value:t.typeWork,expression:"typeWork"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.typeWork=e.target.multiple?n:n[0]}}},t._l(t.typesWork,(function(e){var a=e.value,r=e.text;return n("option",{key:"type_"+a,attrs:{disabled:!a},domProps:{value:a}},[t._v(" "+t._s(r)+" ")])})),0),n("input",{attrs:{type:"submit",value:"Сохранить",disabled:t.isDisabled}})])},V=[],X={name:"DayForm",data:function(){return{startTime:0,endTime:0,typeWork:0}},computed:{isDisabled:function(){return!(this.startTime&&this.endTime&&this.startTime<this.endTime&&this.typeWork)}},methods:{onSubmit:function(){var t={start:this.startTime,end:this.endTime,type:this.typeWork};this.$store.commit("updateDays",t),this.startTime=0,this.endTime=0,this.typeWork=0}},beforeCreate:function(){this.hoursInDay=x,this.typesWork=w}},Z=X,tt=(n("db0f"),Object(f["a"])(Z,U,V,!1,null,"5c4f55e3",null)),et=tt.exports,nt={components:{DayTime:Q,DayForm:et},computed:Object(u["a"])({},Object(c["b"])(["day"])),watch:{$route:function(t,e){var n=e.params.id,a=t.params.id;n!==a&&this.$store.commit("setDay",a)}},beforeRouteEnter:function(t,e,n){n((function(e){var n=+t.params.id,a=e.day;isNaN(n)||n===a||e.$store.commit("setDay",n)}))}},at=nt,rt=Object(f["a"])(at,H,Y,!1,null,null,null),it=rt.exports;a["a"].use(T["a"]);var ot=[{path:"/",name:"Home",component:q},{path:"/day/:id",name:"About",component:it}],st=new T["a"]({mode:"history",base:"/Work-plan-app/",routes:ot}),ut=st;a["a"].filter("format",(function(t){var e="";return t<10&&(e+=0),e+="".concat(t,":00"),e})),a["a"].config.productionTip=!1,new a["a"]({store:C,router:ut,beforeCreate:function(){this.$store.commit("initialiseStore")},render:function(t){return t(_)}}).$mount("#app")},"5c33":function(t,e,n){},"5f50":function(t,e,n){"use strict";n("5c33")},"89a4":function(t,e,n){"use strict";n("ecc7")},"925d":function(t,e,n){},"95e8":function(t,e,n){},ba91:function(t,e,n){},db0f:function(t,e,n){"use strict";n("925d")},ebfa:function(t,e,n){"use strict";n("95e8")},ecc7:function(t,e,n){}});
//# sourceMappingURL=app.0accc352.js.map