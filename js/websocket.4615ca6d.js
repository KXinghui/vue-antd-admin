(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["websocket"],{"407f":function(e,n,t){"use strict";t.r(n);var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"websocket"},[t("a-space",{attrs:{align:"center"}},[t("a-textarea",{attrs:{placeholder:"Send Msg","auto-size":{minRows:3,maxRows:5}},model:{value:e.sendMsg,callback:function(n){e.sendMsg=n},expression:"sendMsg"}}),t("a-button",{attrs:{type:"primary"},on:{click:e.send}},[e._v(e._s(e.actionType))]),t("a-select",{staticStyle:{width:"120px"},on:{change:e.handleChange}},e._l(e.actionTypes,(function(n){return t("a-select-option",{key:n},[e._v(" "+e._s(n)+" ")])})),1),t("a-input",{model:{value:e.destination,callback:function(n){e.destination=n},expression:"destination"}}),t("a-input",{model:{value:e.token,callback:function(n){e.token=n},expression:"token"}}),t("a-input",{model:{value:e.tokenCode,callback:function(n){e.tokenCode=n},expression:"tokenCode"}}),t("a-button",{attrs:{type:"primary"},on:{click:e.reconnect}},[e._v("重连")]),t("a-textarea",{attrs:{placeholder:"System Msg","auto-size":{minRows:3,maxRows:5}},model:{value:e.receiveMsg,callback:function(n){e.receiveMsg=n},expression:"receiveMsg"}})],1)],1)},c=[],i=(t("ac1f"),t("1276"),t("b85c")),s=t("b2eb"),a=t("05c3"),r=t("414a"),l={name:"WebSocket",mixins:[r["a"]],data:function(){return{tokenCode:"TokenCode",token:"Token",actionTypes:["send","connect","disconnect","subscribe","unsubscribe"],destination:"",actionType:"send",stompClient:null,sendMsg:"",receiveMsg:""}},methods:{createClient:function(){var e=this;this.stompClient=Object(s["b"])({binary:!1},s["a"],e.connect,e.error)},reconnect:function(){var e=this;Object(s["c"])(this.stompClient),this.stompClient=Object(s["b"])({binary:!1},Object(s["d"])(),e.connect,e.error)},send:function(){var e=this,n=this.destination,t=this.sendMsg,o=this.stompClient,c=this.actionType;try{if("send"===c){var a,r=Object(i["a"])(n.split(","));try{for(r.s();!(a=r.n()).done;){var l=a.value;o.send(l,t,Object(s["d"])(this))}}catch(f){r.e(f)}finally{r.f()}}else if("subscribe"===c){var u,d=Object(i["a"])(n.split(","));try{var b=function(){var n=u.value;o.subscribe(n,(function(e){console.log(n,"==============",e)}),Object(s["d"])(e))};for(d.s();!(u=d.n()).done;)b()}catch(f){d.e(f)}finally{d.f()}}}catch(p){console.log(p)}},succFrame:function(e){console.log("succFrame   ",e)},errFrame:function(e){console.log("errFrame   ",e)},connect:function(e){Object(a["c"])({code:"1",msg:"连接成功======="}),console.log("connectFrame ",e),this.stompClient.subscribe("/topic/send.msg",(function(e){console.log("/topic/send.msg     ",e)}),s["a"])},error:function(e){Object(a["c"])({code:"-1",msg:"连接失败======="}),console.log("errorFrame ",e)},handleChange:function(e){this.actionType=e,console.log("改变值 ",this.actionType)}},created:function(){this.createClient()},mounted:function(){},beforeDestroy:function(){Object(s["c"])(this.stompClient)}},u=l,d=t("2877"),b=Object(d["a"])(u,o,c,!1,null,null,null);n["default"]=b.exports},b85c:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));t("a4d3"),t("e01a"),t("d28b"),t("d3b7"),t("3ca3"),t("ddb0");var o=t("06c5");function c(e,n){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=Object(o["a"])(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var c=0,i=function(){};return{s:i,n:function(){return c>=e.length?{done:!0}:{done:!1,value:e[c++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,r=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return a=e.done,e},e:function(e){r=!0,s=e},f:function(){try{a||null==t["return"]||t["return"]()}finally{if(r)throw s}}}}}}]);