(function(e){function n(n){for(var s,c,i=n[0],o=n[1],f=n[2],d=0,j=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&j.push(a[c][0]),a[c]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);l&&l(n);while(j.length)j.shift()();return r.push.apply(r,f||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],s=!0,i=1;i<t.length;i++){var o=t[i];0!==a[o]&&(s=!1)}s&&(r.splice(n--,1),e=c(c.s=t[0]))}return e}var s={},a={app:0},r=[];function c(n){if(s[n])return s[n].exports;var t=s[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=e,c.c=s,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var s in e)c.d(t,s,function(n){return e[n]}.bind(null,s));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/follower-widget/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=n,i=i.slice();for(var f=0;f<i.length;f++)n(i[f]);var l=o;r.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},4678:function(e,n,t){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var n=r(e);return t(n)}function r(e){if(!t.o(s,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return s[e]}a.keys=function(){return Object.keys(s)},a.resolve=r,e.exports=a,a.id="4678"},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var s=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("div",{staticClass:"bar-wrap"},[t("div",{staticClass:"bar",style:"width: "+e.percentage+"%"},[t("div",{staticClass:"left"},[t("span",{staticClass:"number"},[e._v(e._s(e.current))]),t("span",[e._v("Followers")])]),t("span",{staticClass:"right number",class:{over:e.percentage>85&&e.percentage<=92,almost:e.percentage>=92&&e.percentage<100,done:e.percent>=100}},[e._v(e._s(e.ticker_percentage)+"%")])]),t("div",{staticClass:"remaining",class:{over:e.percentage_remaining<32,fadeIn:e.percentage_remaining<50,fadeOuts:100==e.percentage_remaining},style:"width: "+e.percentage_remaining+"%"},[t("span",{directives:[{name:"show",rawName:"v-show",value:e.percentage_remaining>0,expression:"percentage_remaining > 0"}],staticClass:"number"},[e._v(e._s(e.remaining))]),t("span",{directives:[{name:"show",rawName:"v-show",value:e.percentage_remaining>0,expression:"percentage_remaining > 0"}]},[e._v("to go!")]),t("span",{directives:[{name:"show",rawName:"v-show",value:e.percentage_remaining<=0,expression:"percentage_remaining <= 0"}]},[e._v("Thank You!")])]),t("div",{staticClass:"goal",class:{fadeIn:e.percentage_remaining>0,fadeOut:e.percentage_remaining<=0}},[t("span",[e._v("Goal")]),e._v(" "),t("span",{staticClass:"number"},[e._v(e._s(e.goal))])])])])},r=[],c=(t("b680"),t("9129"),t("a9e3"),t("bc3a")),i=t.n(c),o=t("c1df"),f={name:"App",data:function(){return{end_date:null,current:0,goal:0,percentage:0,remaining:0,percentage_remaining:100,ticker_percentage:0,url:"https://192.168.100.91:9088/follower/goal/data"}},mounted:function(){var e=this,n="MMM D, YY",t=o("tuesday").format(n);console.log(t),this.getData(),setInterval((function(){e.getData()}),9e3),this.ws()},methods:{getData:function(){var e=this;this.tickerDown(this.percentage,20),this.percentage_remaining=80,this.percentage=20,i.a.get(this.url).then((function(n){var t=e;console.log(n),setTimeout((function(){var e=n.data;t.current=e.current,t.goal=e.goal,t.update_percentage()}),2e3)}))},tickerUp:function(e,n){var t=this,s=setInterval((function(){e<=n?t.ticker_percentage=e++:clearTimeout(s)}),20)},tickerDown:function(e,n){var t=this;e=e.toFixed(0);var s=setInterval((function(){e>=n?t.ticker_percentage=e--:clearTimeout(s)}),20)},ws:function(){var e=this;console.log("Connecting to monty WebSocket Server"),this.connection=new WebSocket("ws://localhost:1880/follow_event"),setInterval((function(){3==e.connection.readyState&&(console.log("reloading"),location.reload())}),5e3),this.connection.onmessage=function(n){var t=JSON.parse(n.data);e.current=t.current,e.goal=t.goal,console.log(t)},this.connection.onopen=function(){console.log("Successfully connected to monty websocket server...")}},update_percentage:function(){var e=this.current/this.goal*100;Number.isNaN(e)?(this.percentage=20,this.percentage_remaining=80,this.ticker_percentage=0):(this.percentage=e,this.remaining=this.goal-this.current,this.percentage_remaining=100-this.percentage-4,this.tickerUp(0,this.percentage))}},watch:{current:function(){this.update_percentage()},goal:function(){this.update_percentage()}}},l=f,d=(t("5c0b"),t("2877")),j=Object(d["a"])(l,a,r,!1,null,null,null),u=j.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";t("9c0c")},"9c0c":function(e,n,t){}});
//# sourceMappingURL=app.0ce5ed3d.js.map