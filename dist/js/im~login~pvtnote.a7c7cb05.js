(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["im~login~pvtnote"],{"0538":function(t,e,a){"use strict";var n=a("1c0b"),o=a("861d"),i=[].slice,r={},c=function(t,e,a){if(!(e in r)){for(var n=[],o=0;o<e;o++)n[o]="a["+o+"]";r[e]=Function("C,a","return new C("+n.join(",")+")")}return r[e](t,a)};t.exports=Function.bind||function(t){var e=n(this),a=i.call(arguments,1),r=function(){var n=a.concat(i.call(arguments));return this instanceof r?c(e,n.length,n):e.apply(t,n)};return o(e.prototype)&&(r.prototype=e.prototype),r}},"05b0":function(t,e,a){var n=a("07c6");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=a("499e").default;o("46f1139b",n,!0,{sourceMap:!1,shadowMode:!1})},"07c6":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".identity-login{width:100%;margin:0 auto}.ant-tabs-nav-scroll{display:flex}.login-scan-code-wrap,.login-wrap{display:flex;flex-direction:column;justify-content:center;align-items:center}.login-scan-code-wrap .login-scan-code{width:200px;height:200px}.identity-login-footer,.identity-login-header{border:1px solid red;margin:-1.5rem 0 0}",""]),t.exports=e},"15c4":function(t,e,a){"use strict";a("99af");var n=a("d4ec"),o=a("bee2"),i=a("ade3"),r=a("3d83"),c=function(){function t(e){Object(n["a"])(this,t),Object(i["a"])(this,"namespace",void 0),this.namespace=e}return Object(o["a"])(t,[{key:"buildUrl",value:function(t){return"".concat(this.namespace).concat(t)}},{key:"insert",value:function(t,e){return r["a"].post(this.buildUrl(""),t,e)}},{key:"update",value:function(t,e){return r["a"].post(this.buildUrl(""),t,e)}},{key:"delete",value:function(t,e){return r["a"].delete(this.buildUrl(""),t,e)}},{key:"get",value:function(t,e){return r["a"].get(this.buildUrl(""),t,e)}},{key:"list",value:function(t,e){return r["a"].post(this.buildUrl("/list"),t,e)}},{key:"listAccurate",value:function(t,e){return this.list(Object.assign(t,{listMode:"accurate"}),e)}},{key:"listFuzzy",value:function(t,e){return this.list(Object.assign(t,{listMode:"fuzzy"}),e)}},{key:"pageList",value:function(t,e){return r["a"].post(this.buildUrl("/pageList"),t,e)}},{key:"pageListAccurate",value:function(t,e){return this.pageList(Object.assign(t,{listMode:"accurate"}),e)}},{key:"pageListFuzzy",value:function(t,e){return this.pageList(Object.assign(t,{listMode:"fuzzy"}),e)}},{key:"tableList",value:function(t,e){return r["a"].post(this.buildUrl("/tableList"),t,e)}},{key:"tableListAccurate",value:function(t,e){return this.tableList(Object.assign(t,{listMode:"accurate"}),e)}},{key:"tableListFuzzy",value:function(t,e){return this.tableList(Object.assign(t,{listMode:"fuzzy"}),e)}}]),t}();e["a"]=c},"257e":function(t,e,a){"use strict";function n(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}a.d(e,"a",(function(){return n}))},"262e":function(t,e,a){"use strict";function n(t,e){return n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}a.d(e,"a",(function(){return o}))},2938:function(t,e,a){"use strict";a.d(e,"a",(function(){return l})),a.d(e,"b",(function(){return f}));a("caad"),a("b0c0"),a("2532");var n=a("257e"),o=a("262e"),i=a("2caf"),r=a("d4ec"),c=a("bee2"),s=a("ade3"),l=function(){function t(e,a,n,o){Object(r["a"])(this,t),Object(s["a"])(this,"id",void 0),Object(s["a"])(this,"name",void 0),Object(s["a"])(this,"value",void 0),Object(s["a"])(this,"desc",void 0),this.id=e,this.name=a,this.value=n,this.desc=o}return Object(c["a"])(t,[{key:"equals",value:function(t){return this.id==t|this.value==t|this.name==t}}],[{key:"enums",value:function(e,a,n,o){return new t(e,a,n,o)}},{key:"of",value:function(e){var a=new t;for(var n in this){var o=[this[n]["id"],this[n]["name"],this[n]["value"]];o.includes(e)&&(a=this[n])}return a}},{key:"selectOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"desc",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"id",a=[];for(var n in this)a.push({enum:this[n],name:this[n][t],value:this[n][e]});return a}}]),t}(),u=function(t){Object(o["a"])(a,t);var e=Object(i["a"])(a);function a(){return Object(r["a"])(this,a),e.apply(this,arguments)}return a}(l);Object(s["a"])(u,"USERNAME",u.enums(0,"USERNAME","UserName")),Object(s["a"])(u,"PASSWORD",u.enums(1,"PASSWORD","Password")),Object(s["a"])(u,"MAIL",u.enums(2,"MAIL","Mail")),Object(s["a"])(u,"MOBILE",u.enums(3,"MOBILE","Mobile")),Object(s["a"])(u,"SCAN_CODE",u.enums(4,"SCAN_CODE","ScanCode")),Object(s["a"])(u,"GITHUB",u.enums(5,"GITHUB","Github")),Object(s["a"])(u,"WECHAT",u.enums(6,"WECHAT","WeChat")),Object(s["a"])(u,"QQ",u.enums(7,"QQ","QQ")),Object(s["a"])(u,"MICRO_BLOG",u.enums(8,"MICRO_BLOG","MicroBlog"));var f=function(t){Object(o["a"])(a,t);var e=Object(i["a"])(a);function a(t,o,i,c,l){var u;return Object(r["a"])(this,a),u=e.call(this,t,o,i,c),Object(s["a"])(Object(n["a"])(u),"mapping",void 0),u.mapping=l,u}return a}(l);Object(s["a"])(f,"USER",f.enums(0,"USER","user","用户","user")),Object(s["a"])(f,"SYS_USER",f.enums(1,"SYS_USER","sysuser","系统用户","sysUser")),Object(s["a"])(f,"CHAT_USER",f.enums(2,"CHAT_USER","chatuser","聊天用户","chatUser"))},"2caf":function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));a("4ae1"),a("3410");function n(t){return n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(t)}a("d3b7"),a("25f0");function o(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var i=a("53ca"),r=a("257e");function c(t,e){return!e||"object"!==Object(i["a"])(e)&&"function"!==typeof e?Object(r["a"])(t):e}function s(t){var e=o();return function(){var a,o=n(t);if(e){var i=n(this).constructor;a=Reflect.construct(o,arguments,i)}else a=o.apply(this,arguments);return c(this,a)}}},3410:function(t,e,a){var n=a("23e7"),o=a("d039"),i=a("7b0b"),r=a("e163"),c=a("e177"),s=o((function(){r(1)}));n({target:"Object",stat:!0,forced:s,sham:!c},{getPrototypeOf:function(t){return r(i(t))}})},"373d":function(t,e,a){"use strict";a.d(e,"a",(function(){return v}));var n=a("2938"),o=a("d4ec"),i=a("262e"),r=a("2caf"),c=a("bee2"),s=a("15c4"),l=a("3d83"),u=function(t){Object(i["a"])(a,t);var e=Object(r["a"])(a);function a(){return Object(o["a"])(this,a),e.apply(this,arguments)}return Object(c["a"])(a,[{key:"loginByLocalAccount",value:function(t,e){var a="/login/localaccount";return l["a"].post(this.buildUrl(a),t,e)}},{key:"loginByMail",value:function(t,e){var a="/login/mail";return l["a"].post(this.buildUrl(a),t,e)}},{key:"confirmLoginByScanCode",value:function(t,e){var a="/login/scancode/confirm";return l["a"].post(this.buildUrl(a),t,e)}},{key:"register",value:function(t,e){var a="/register";return l["a"].post(this.buildUrl(a),t,e)}},{key:"updatePassword",value:function(t,e){var a="/password/update";return l["a"].post(this.buildUrl(a),t,e)}},{key:"bindMail",value:function(t,e){var a="/mail/bind";return l["a"].post(this.buildUrl(a),t,e)}},{key:"bindMobile",value:function(t,e){var a="/mobile/bind";return l["a"].post(this.buildUrl(a),t,e)}},{key:"upLoadAvatar",value:function(t,e){var a="/avatar/upload";return l["a"].post(this.buildUrl(a),t,e)}}]),a}(s["a"]),f=u,d=function(t){Object(i["a"])(a,t);var e=Object(r["a"])(a);function a(){return Object(o["a"])(this,a),e.apply(this,arguments)}return a}(f),p=new d("/user"),b=p,m=function(t){Object(i["a"])(a,t);var e=Object(r["a"])(a);function a(){return Object(o["a"])(this,a),e.apply(this,arguments)}return a}(s["a"]),y=new m("/sysUser"),h=y;function v(t){return n["b"].USER.equals(t)?b:n["b"].SYS_USER.equals(t)?h:b}},"4ae1":function(t,e,a){var n=a("23e7"),o=a("d066"),i=a("1c0b"),r=a("825a"),c=a("861d"),s=a("7c73"),l=a("0538"),u=a("d039"),f=o("Reflect","construct"),d=u((function(){function t(){}return!(f((function(){}),[],t)instanceof t)})),p=!u((function(){f((function(){}))})),b=d||p;n({target:"Reflect",stat:!0,forced:b,sham:b},{construct:function(t,e){i(t),r(e);var a=arguments.length<3?t:i(arguments[2]);if(p&&!d)return f(t,e,a);if(t==a){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var n=[null];return n.push.apply(n,e),new(l.apply(t,n))}var o=a.prototype,u=s(c(o)?o:Object.prototype),b=Function.apply.call(t,u,e);return c(b)?b:u}})},"7d01":function(t,e,a){"use strict";a("05b0")},e2a8:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"identity-login"},[a("div",{staticClass:"identity-login-header"},[t._t("header")],2),a("a-tabs",{staticClass:"identity-login-tabs",attrs:{"default-active-key":"1","tab-position":t.tabOption.position,"tab-bar-style":t.tabOption.tabBarStyle,size:t.tabOption.size,"tab-bar-gutter":t.tabOption.tabBarGutter},on:{change:t.changeTabs}},[a("a-tab-pane",{key:"1"},[a("span",{attrs:{slot:"tab"},slot:"tab"},[a("a-icon",{attrs:{type:"user"}}),t._v(" 本地账号登录 ")],1),a("a-form-model",t._b({attrs:{model:t.form,layout:t.formOption.layout}},"a-form-model",t.formItemLayout,!1),[a("a-form-model-item",{attrs:{label:"本地账号"}},[a("a-input",{attrs:{placeholder:"用户名/手机/邮箱","allow-clear":""},model:{value:t.form.localAccount,callback:function(e){t.$set(t.form,"localAccount",e)},expression:"form.localAccount"}})],1),a("a-form-model-item",{attrs:{label:"密码"}},[a("a-input-password",{attrs:{placeholder:"密码","allow-clear":""},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),a("a-form-model-item",{attrs:{"wrapper-col":t.buttonItemLayout.wrapperCol}},[a("a-button",{attrs:{type:"primary",block:""},on:{click:t.loginByLocalAccount}},[t._v(" 登录 ")])],1)],1)],1),a("a-tab-pane",{key:"2"},[a("span",{attrs:{slot:"tab"},slot:"tab"},[a("a-icon",{attrs:{type:"mail"}}),t._v(" 邮箱登录 ")],1),a("a-form-model",t._b({attrs:{model:t.form,layout:t.formOption.layout}},"a-form-model",t.formItemLayout,!1),[a("a-form-model-item",{attrs:{label:"邮箱"}},[a("a-input",{attrs:{placeholder:"邮箱","allow-clear":""},model:{value:t.form.mail,callback:function(e){t.$set(t.form,"mail",e)},expression:"form.mail"}})],1),a("a-form-model-item",{attrs:{label:"邮箱验证码"}},[a("a-input-group",{attrs:{compact:""}},[a("a-input",{staticStyle:{width:"70%"},attrs:{placeholder:"邮箱验证码","allow-clear":""},model:{value:t.form.svCode,callback:function(e){t.$set(t.form,"svCode",e)},expression:"form.svCode"}}),a("a-button",{staticStyle:{width:"30%"},attrs:{type:"primary"}},[a("icon",{attrs:{icon:"IconFont_send"}}),t._v(" 发送 ")],1)],1)],1),a("a-form-model-item",{attrs:{"wrapper-col":t.buttonItemLayout.wrapperCol}},[a("a-button",{attrs:{type:"primary",block:""},on:{click:t.loginByMail}},[t._v(" 登录 ")])],1)],1)],1),a("a-tab-pane",{key:"3"},[a("span",{attrs:{slot:"tab"},slot:"tab"},[a("a-icon",{attrs:{type:"mobile"}}),t._v(" 手机登录 ")],1),a("a-form-model",t._b({attrs:{model:t.form,layout:t.formOption.layout}},"a-form-model",t.formItemLayout,!1),[a("a-form-model-item",{attrs:{label:"手机"}},[a("a-input",{attrs:{placeholder:"手机","allow-clear":""},model:{value:t.form.mobile,callback:function(e){t.$set(t.form,"mobile",e)},expression:"form.mobile"}})],1),a("a-form-model-item",{attrs:{label:"手机验证码"}},[a("a-input-group",{attrs:{compact:""}},[a("a-input",{staticStyle:{width:"70%"},attrs:{placeholder:"手机验证码","allow-clear":""},model:{value:t.form.svCode,callback:function(e){t.$set(t.form,"svCode",e)},expression:"form.svCode"}}),a("a-button",{staticStyle:{width:"30%"},attrs:{type:"primary"}},[a("icon",{attrs:{icon:"IconFont_send"}}),t._v(" 发送 ")],1)],1)],1),a("a-form-model-item",{attrs:{"wrapper-col":t.buttonItemLayout.wrapperCol}},[a("a-button",{attrs:{type:"primary",block:"",disabled:""},on:{click:t.loginByMobile}},[t._v(" 登录(暂不支持) ")])],1)],1)],1),a("a-tab-pane",{key:"4"},[a("span",{attrs:{slot:"tab"},slot:"tab"},[a("a-icon",{attrs:{type:"qrcode"}}),t._v(" 扫码登录 ")],1),a("div",{staticClass:"login-wrap login-scan-code-wrap"},[a("img",{staticClass:"login-scan-code",attrs:{src:t.loginScanCodeSrc}}),a("div",{staticClass:"login-scan-code-tips"},[a("a-alert",{attrs:{message:t.loginScanCodeAlert.message,type:t.loginScanCodeAlert.type,"show-icon":""}})],1)])])],1),a("div",{staticClass:"identity-login-footer"},[t._t("footer")],2)],1)},o=[],i=(a("d81d"),a("5530")),r=a("c8d0"),c=a("373d"),s=a("2f62"),l=a("ae88"),u={name:"IdentityLogin",mixins:[r["a"]],data:function(){return{identity:{name:"kxh"},loginCancleTokenSource:{localAccount:null,mail:null,mobile:null,scanCode:null},loginScanCodeBase64:"",tabOption:{position:"top",tabBarStyle:{},size:"default"},formOption:{layout:"vertical"},form:{name:"",region:void 0,date1:void 0,delivery:!1,type:[],resource:"",desc:""},loginScanCodeAlert:{message:"请扫描二维码登录",type:"warning"}}},props:{identityRole:{type:[String],default:"",required:!0}},computed:{loginScanCodeSrc:function(){return"data:image/png;base64,".concat(this.loginScanCodeBase64)}},methods:Object(i["a"])(Object(i["a"])({},Object(s["c"])("identity",[l["b"].SET_TOKEN,l["b"].SET_IDENTITY])),{},{changeTabs:function(t){4==t&&(this.loginScanCodeBase64||console.log(t,this.loginScanCodeBase64))},loginByLocalAccount:function(){var t=this;console.log("localaccount login",this.form),Object(c["a"])(this.identityRole).loginByLocalAccount({localAccount:this.form.localAccount,password:this.form.password},{}).then((function(e){e.data.map&&t[l["b"].SET_TOKEN]({token:e.data.map["Authorization"],tokenCode:e.data.map["AuthorizationCode"]}),console.log(e.data.map)}))},loginByMail:function(){console.log("mail login",this.form)},loginByMobile:function(){console.log("mobile login",this.form)},getLoginCancleTokenSource:function(t){switch(t){case"LOCALACCOUNT":break;default:break}}})},f=u,d=(a("7d01"),a("2877")),p=Object(d["a"])(f,n,o,!1,null,null,null);e["a"]=p.exports}}]);