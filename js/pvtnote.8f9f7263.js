(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pvtnote"],{"0538":function(t,e,a){"use strict";var n=a("1c0b"),o=a("861d"),i=[].slice,r={},c=function(t,e,a){if(!(e in r)){for(var n=[],o=0;o<e;o++)n[o]="a["+o+"]";r[e]=Function("C,a","return new C("+n.join(",")+")")}return r[e](t,a)};t.exports=Function.bind||function(t){var e=n(this),a=i.call(arguments,1),r=function(){var n=a.concat(i.call(arguments));return this instanceof r?c(e,n.length,n):e.apply(t,n)};return o(e.prototype)&&(r.prototype=e.prototype),r}},"05b0":function(t,e,a){var n=a("07c6");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=a("499e").default;o("46f1139b",n,!0,{sourceMap:!1,shadowMode:!1})},"05c1":function(t,e,a){var n=a("362dd");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=a("499e").default;o("019ef948",n,!0,{sourceMap:!1,shadowMode:!1})},"07c6":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".identity-login{width:100%;margin:0 auto}.ant-tabs-nav-scroll{display:flex}.login-scan-code-wrap,.login-wrap{display:flex;flex-direction:column;justify-content:center;align-items:center}.login-scan-code-wrap .login-scan-code{width:160px;height:160px}.login-scan-code-wrap{margin:.4rem 0 1.3rem}.login-scan-code-wrap .login-scan-code-expiration{display:flex;justify-content:center;align-items:center;position:absolute;width:170px;height:170px;background-color:rgba(177,180,182,.4)}.identity-login-footer,.identity-login-header{margin:-1rem 0 0}",""]),t.exports=e},"0fe1":function(t,e,a){var n=a("2713");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=a("499e").default;o("373a0127",n,!0,{sourceMap:!1,shadowMode:!1})},"15c4":function(t,e,a){"use strict";var n=a("d4ec"),o=a("bee2"),i=a("262e"),r=a("2caf"),c=a("3d83"),s=a("9390"),l=function(t){Object(i["a"])(a,t);var e=Object(r["a"])(a);function a(){return Object(n["a"])(this,a),e.apply(this,arguments)}return Object(o["a"])(a,[{key:"insert",value:function(t,e){return c["b"].post(this.buildUrl(""),t,e)}},{key:"update",value:function(t,e){return c["b"].post(this.buildUrl(""),t,e)}},{key:"delete",value:function(t,e){return c["b"].delete(this.buildUrl(""),t,e)}},{key:"get",value:function(t,e){return c["b"].get(this.buildUrl(""),t,e)}},{key:"list",value:function(t,e){return c["b"].post(this.buildUrl("/list"),t,e)}},{key:"listAccurate",value:function(t,e){return this.list(Object.assign(t,{listMode:"accurate"}),e)}},{key:"listFuzzy",value:function(t,e){return this.list(Object.assign(t,{listMode:"fuzzy"}),e)}},{key:"pageList",value:function(t,e){return c["b"].post(this.buildUrl("/pageList"),t,e)}},{key:"pageListAccurate",value:function(t,e){return this.pageList(Object.assign(t,{listMode:"accurate"}),e)}},{key:"pageListFuzzy",value:function(t,e){return this.pageList(Object.assign(t,{listMode:"fuzzy"}),e)}},{key:"tableList",value:function(t,e){return c["b"].post(this.buildUrl("/tableList"),t,e)}},{key:"tableListAccurate",value:function(t,e){return this.tableList(Object.assign(t,{listMode:"accurate"}),e)}},{key:"tableListFuzzy",value:function(t,e){return this.tableList(Object.assign(t,{listMode:"fuzzy"}),e)}}]),a}(s["a"]);e["a"]=l},"17ce":function(t,e,a){"use strict";a("6489")},"1c3e":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"identity-login-wrap"},[a("base-header",{attrs:{showBackIcon:""}}),a("base-main",{staticStyle:{"background-color":"#f5f5f5"},attrs:{isScroll:!0,isScrollPull:!1,baseMainTop:"7.25%",baseMainHeight:"92.5%"}},[a("template",{slot:"main"},[a("a-row",{attrs:{type:"flex",justify:"center"}},[a("a-col",{attrs:{xs:22,sm:18,md:10,lg:6,xl:6}},[a("h1",{attrs:{align:"center"}},[t._v(t._s(t.msAlias))])])],1),a("a-row",{attrs:{type:"flex",justify:"center"}},[a("a-col",{attrs:{xs:22,sm:18,md:10,lg:6,xl:6}},[a("identity-login",{attrs:{"identity-role":t.identityRole},scopedSlots:t._u([{key:"footer",fn:function(){return[a("div",{staticClass:"identity-login-footer-op"},[a("a-button",{attrs:{type:"link"},on:{click:function(e){return t.pushRoute({path:t.registerUrl})}}},[a("span",[t._v("注册")])]),a("a-button",{attrs:{type:"link"},on:{click:function(e){return t.pushRoute({path:t.forgetPasswordUrl})}}},[a("span",[t._v("忘记密码")])])],1),a("div",{staticClass:"thirdparty-wrap"},t._l(t.supportThirdPartys,(function(e){return a("a-button",{key:e.thirdParty,attrs:{disabled:!t.isSupport(e.thirdParty),size:"large",shape:"circle",title:e.title},on:{click:function(a){return t.authorizeUrl(e.thirdParty)}}},[a("icon",{attrs:{icon:"IconFont_"+e.thirdParty}})],1)})),1)]},proxy:!0}])})],1)],1)],1)],2)],1)},o=[],i=(a("caad"),a("d81d"),a("2532"),a("5530")),r=a("b5d2"),c=a("e2a8"),s=a("2f62"),l=a("7902"),u=a("2938"),d={name:"IdentityLoginView",mixins:[r["a"]],components:{IdentityLogin:c["a"]},data:function(){return{modalTitle:"",modalVisible:!1}},props:{ms:{type:[String],default:"",required:!0},msAlias:{type:[String],default:"",required:!0},identityRole:{type:[String],default:"",required:!0}},computed:Object(i["a"])({registerUrl:function(){return["cloud","vue-antd-admin"].includes(this.ms)?"/register":"/".concat(this.ms,"/register")},forgetPasswordUrl:function(){return["cloud","vue-antd-admin"].includes(this.ms)?"/password/forget":"/".concat(this.ms,"/password/forget")}},Object(s["d"])({supportThirdPartys:function(t){return t.admin.supportThirdPartys},thirdPartySupport:function(t){return t.admin.thirdPartySupport}})),methods:{isSupport:function(t){return this.thirdPartySupport.includes(t)},authorizeUrl:function(t){l["a"].authorizeUrl(t,{identityRole:u["c"].of(this.identityRole).mapping||u["c"].USER.mapping}).then((function(t){var e=t.data.map.authorizeUrl;e&&(window.location.href=e)}))}}},p=d,f=(a("17ce"),a("2877")),m=Object(f["a"])(p,n,o,!1,null,null,null);e["a"]=m.exports},"257e":function(t,e,a){"use strict";function n(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}a.d(e,"a",(function(){return n}))},"262e":function(t,e,a){"use strict";function n(t,e){return n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(t,e)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}a.d(e,"a",(function(){return o}))},2713:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".identity-register{width:100%;margin:0 auto}.ant-tabs-nav-scroll{display:flex}.identity-register-footer,.identity-register-header{margin:-1rem 0 0}",""]),t.exports=e},2938:function(t,e,a){"use strict";a.d(e,"a",(function(){return l})),a.d(e,"c",(function(){return f})),a.d(e,"b",(function(){return m}));a("caad"),a("b0c0"),a("2532");var n=a("257e"),o=a("262e"),i=a("2caf"),r=a("d4ec"),c=a("bee2"),s=a("ade3"),l=function(){function t(e,a,n,o){Object(r["a"])(this,t),Object(s["a"])(this,"id",void 0),Object(s["a"])(this,"name",void 0),Object(s["a"])(this,"value",void 0),Object(s["a"])(this,"desc",void 0),this.id=e,this.name=a,this.value=n,this.desc=o}return Object(c["a"])(t,[{key:"equals",value:function(t){return this.id==t|this.value==t|this.name==t}}],[{key:"enums",value:function(e,a,n,o){return new t(e,a,n,o)}},{key:"of",value:function(e){var a=new t;if(e||0==e)for(var n in this){var o=[this[n]["id"],this[n]["name"],this[n]["value"]];o.includes(e)&&(a=this[n])}return a}},{key:"selectOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"desc",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"id",a=[];for(var n in this)a.push({enum:this[n],name:this[n][t],value:this[n][e]});return a}}]),t}(),u=function(t){Object(o["a"])(a,t);var e=Object(i["a"])(a);function a(t,o,i,c,l){var u;return Object(r["a"])(this,a),u=e.call(this,t,o,i,c),Object(s["a"])(Object(n["a"])(u),"mapping",void 0),u.mapping=l,u}return Object(c["a"])(a,null,[{key:"enums",value:function(t,e,n,o,i){return new a(t,e,n,o,i)}},{key:"of",value:function(t){var e=new a;if(t||0==t)for(var n in this){var o=[this[n]["id"],this[n]["name"],this[n]["value"],this[n]["mapping"]];o.includes(t)&&(e=this[n])}return e}}]),a}(l),d=function(t){Object(o["a"])(a,t);var e=Object(i["a"])(a);function a(){return Object(r["a"])(this,a),e.apply(this,arguments)}return a}(l);Object(s["a"])(d,"FEMALE",d.enums(0,"FEMALE","FeMale","女")),Object(s["a"])(d,"MALE",d.enums(1,"MALE","Male","男"));var p=function(t){Object(o["a"])(a,t);var e=Object(i["a"])(a);function a(){return Object(r["a"])(this,a),e.apply(this,arguments)}return a}(u);Object(s["a"])(p,"USERNAME",p.enums(0,"USERNAME","UserName","用户名","username")),Object(s["a"])(p,"PASSWORD",p.enums(1,"PASSWORD","Password","密码","password")),Object(s["a"])(p,"MAIL",p.enums(2,"MAIL","Mail","邮箱","mail")),Object(s["a"])(p,"MOBILE",p.enums(3,"MOBILE","Mobile","手机","mobile")),Object(s["a"])(p,"SCAN_CODE",p.enums(4,"SCAN_CODE","ScanCode","扫码","scanCode")),Object(s["a"])(p,"GITHUB",p.enums(5,"GITHUB","GitHub","GitHub","github")),Object(s["a"])(p,"GITEE",p.enums(6,"GITEE","Gitee","Gitee","gitee")),Object(s["a"])(p,"OSCHINA",p.enums(7,"OSCHINA","OSChina","开源中国","oschina")),Object(s["a"])(p,"DINGTALK",p.enums(8,"DINGTALK","DingTalk","钉钉","dingtalk")),Object(s["a"])(p,"ALIPAY",p.enums(9,"ALIPAY","Alipay","支付宝","alipay")),Object(s["a"])(p,"WECHAT",p.enums(10,"WECHAT","WeChat","微信","wechat")),Object(s["a"])(p,"QQ",p.enums(11,"QQ","QQ","qq","qq")),Object(s["a"])(p,"MICRO_BLOG",p.enums(12,"MICRO_BLOG","MicroBlog","微博","microblog")),Object(s["a"])(p,"BAIDU",p.enums(13,"BAIDU","Baidu","百度","baidu")),Object(s["a"])(p,"WECHAT_MP",p.enums(14,"WeChatMP","微信小程序","wechatmp"));var f=function(t){Object(o["a"])(a,t);var e=Object(i["a"])(a);function a(){return Object(r["a"])(this,a),e.apply(this,arguments)}return a}(u);Object(s["a"])(f,"USER",f.enums(0,"USER","user","用户","user")),Object(s["a"])(f,"SYS_USER",f.enums(1,"SYS_USER","sysuser","系统用户","sysUser")),Object(s["a"])(f,"CHAT_USER",f.enums(2,"CHAT_USER","chatuser","聊天用户","chatUser"));var m=function(t){Object(o["a"])(a,t);var e=Object(i["a"])(a);function a(){return Object(r["a"])(this,a),e.apply(this,arguments)}return a}(l);Object(s["a"])(m,"NON",m.enums(0,"NON","Non","非加解密模式")),Object(s["a"])(m,"SYMMETRIC",m.enums(1,"SYMMETRIC","Symmetric","对称加解密模式")),Object(s["a"])(m,"ASYMMETRIC",m.enums(2,"ASYMMETRIC","Asymmetric","非对称加解密模式")),Object(s["a"])(m,"MIX",m.enums(3,"MIX","Mix","混合加解密模式"))},"2caf":function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));a("4ae1"),a("3410");function n(t){return n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(t)}a("d3b7"),a("25f0");function o(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var i=a("53ca"),r=a("257e");function c(t,e){return!e||"object"!==Object(i["a"])(e)&&"function"!==typeof e?Object(r["a"])(t):e}function s(t){var e=o();return function(){var a,o=n(t);if(e){var i=n(this).constructor;a=Reflect.construct(o,arguments,i)}else a=o.apply(this,arguments);return c(this,a)}}},3410:function(t,e,a){var n=a("23e7"),o=a("d039"),i=a("7b0b"),r=a("e163"),c=a("e177"),s=o((function(){r(1)}));n({target:"Object",stat:!0,forced:s,sham:!c},{getPrototypeOf:function(t){return r(i(t))}})},"362dd":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".identity-register-wrap{height:100%;width:100%;background-color:#f5f5f5}.identity-register-wrap .identity-register{margin-top:3.2rem}.identity-register-wrap h1{color:#eaa254;transition:.5s}.identity-register-wrap h1:hover{color:#eaa254;text-shadow:0 0 .1em,0 0 .3em}.identity-register-footer-op,.thirdParty-wrap{display:flex;justify-content:space-between}.thirdParty-wrap{padding:.5rem 15px}",""]),t.exports=e},"4ae1":function(t,e,a){var n=a("23e7"),o=a("d066"),i=a("1c0b"),r=a("825a"),c=a("861d"),s=a("7c73"),l=a("0538"),u=a("d039"),d=o("Reflect","construct"),p=u((function(){function t(){}return!(d((function(){}),[],t)instanceof t)})),f=!u((function(){d((function(){}))})),m=p||f;n({target:"Reflect",stat:!0,forced:m,sham:m},{construct:function(t,e){i(t),r(e);var a=arguments.length<3?t:i(arguments[2]);if(f&&!p)return d(t,e,a);if(t==a){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var n=[null];return n.push.apply(n,e),new(l.apply(t,n))}var o=a.prototype,u=s(c(o)?o:Object.prototype),m=Function.apply.call(t,u,e);return c(m)?m:u}})},"4cc6":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("identity-register-view",{attrs:{ms:"pvtnote",msAlias:"PVTNOTE","identity-role":"user"}})},o=[],i=a("7f1b"),r={name:"Register",components:{IdentityRegisterView:i["a"]},data:function(){return{}}},c=r,s=a("2877"),l=Object(s["a"])(c,n,o,!1,null,null,null);e["default"]=l.exports},"52fa":function(t,e,a){"use strict";a("0fe1")},6489:function(t,e,a){var n=a("c8ea");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=a("499e").default;o("eef92208",n,!0,{sourceMap:!1,shadowMode:!1})},7902:function(t,e,a){"use strict";var n=a("ade3"),o=a("5530"),i=a("d4ec"),r=a("bee2"),c=a("262e"),s=a("2caf"),l=a("3d83"),u=a("4360"),d=a("9390"),p=function(t){Object(c["a"])(a,t);var e=Object(s["a"])(a);function a(){return Object(i["a"])(this,a),e.apply(this,arguments)}return Object(r["a"])(a,[{key:"authorizeUrl",value:function(t,e,a){var n="/".concat(t,"/authorizeurl");return l["b"].post(this.buildUrl(n),e,a)}},{key:"authorize",value:function(t,e,a){var n="/".concat(t,"/authorize");return l["b"].post(this.buildUrl(n),e,a)}},{key:"bind",value:function(t,e,a){var i="/".concat(t,"/bind"),r="".concat(t,"_access_token");return a.header=Object(o["a"])(Object(n["a"])({},r,u["a"].getters.oauth2[t]),a.header),l["b"].post(this.buildUrl(i),e,a)}},{key:"unBind",value:function(t,e,a){var i="/".concat(t,"/unBind"),r="".concat(t,"_access_token");return a.header=Object(o["a"])(Object(n["a"])({},r,u["a"].getters.oauth2[t]),a.header),l["b"].post(this.buildUrl(i),e,a)}},{key:"loginIsRegister",value:function(t,e,a){var n="/".concat(t,"/loginIsRegister");return l["b"].post(this.buildUrl(n),e,a)}}]),a}(d["a"]),f=new p("/thirdparty/oauth2");e["a"]=f},"7d01":function(t,e,a){"use strict";a("05b0")},"7f1b":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"identity-register-wrap"},[a("base-header",{attrs:{showBackIcon:""}}),a("base-main",{staticStyle:{"background-color":"#f5f5f5"},attrs:{isScroll:!0,isScrollPull:!1,baseMainTop:"7.25%",baseMainHeight:"92.5%"}},[a("template",{slot:"main"},[a("a-row",{attrs:{type:"flex",justify:"center"}},[a("a-col",{attrs:{xs:22,sm:18,md:10,lg:6,xl:6}},[a("h1",{attrs:{align:"center"}},[t._v(t._s(t.msAlias))])])],1),a("a-row",{attrs:{type:"flex",justify:"center"}},[a("a-col",{attrs:{xs:22,sm:18,md:10,lg:6,xl:6}},[a("identity-register",{attrs:{"identity-role":t.identityRole},scopedSlots:t._u([{key:"footer",fn:function(){return[a("div",{staticClass:"identity-register-footer-op"},[a("a-button",{attrs:{type:"link"},on:{click:function(e){return t.pushRoute({path:t.loginUrl})}}},[a("span",[t._v("已有账号 登录")])]),a("a-button",{attrs:{type:"link"},on:{click:function(e){return t.pushRoute({path:t.forgetPasswordUrl})}}},[a("span",[t._v("忘记密码")])])],1),a("div",{staticClass:"thirdParty-wrap"},t._l(t.supportThirdPartys,(function(e){return a("a-button",{key:e.thirdParty,attrs:{disabled:!t.isSupport(e.thirdParty),size:"large",shape:"circle",title:e.title},on:{click:function(a){return t.authorizeUrl(e.thirdParty)}}},[a("icon",{attrs:{icon:"IconFont_"+e.thirdParty}})],1)})),1)]},proxy:!0}])})],1)],1)],1)],2)],1)},o=[],i=(a("caad"),a("2532"),a("5530")),r=a("b5d2"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"identity-register"},[a("div",{staticClass:"identity-register-header"},[t._t("header")],2),a("a-tabs",{attrs:{"default-active-key":"1","tab-position":t.tabOption.position,"tab-bar-style":t.tabOption.tabBarStyle,size:t.tabOption.size,"tab-bar-gutter":t.tabOption.tabBarGutter},on:{change:t.changeTabs}},[a("a-tab-pane",{key:"1"},[a("span",{attrs:{slot:"tab"},slot:"tab"},[a("a-icon",{attrs:{type:"user"}}),t._v(" 本地账号注册 ")],1),a("a-form-model",t._b({attrs:{model:t.form,layout:t.formOption.layout}},"a-form-model",t.formItemLayout,!1),[a("a-form-model-item",{attrs:{label:"本地账号"}},[a("a-input",{attrs:{placeholder:"用户名/手机/邮箱","allow-clear":""},model:{value:t.form.localAccount,callback:function(e){t.$set(t.form,"localAccount",e)},expression:"form.localAccount"}})],1),a("a-form-model-item",{attrs:{label:"密码"}},[a("a-input-password",{attrs:{placeholder:"密码","allow-clear":""},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),a("a-form-model-item",{attrs:{"wrapper-col":t.buttonItemLayout.wrapperCol}},[a("a-button",{attrs:{type:"primary",block:""},on:{click:t.registerByLocalAccount}},[t._v(" 注册 ")])],1)],1)],1),a("a-tab-pane",{key:"2"},[a("span",{attrs:{slot:"tab"},slot:"tab"},[a("a-icon",{attrs:{type:"mail"}}),t._v(" 邮箱注册 ")],1),a("a-form-model",t._b({attrs:{model:t.form,layout:t.formOption.layout}},"a-form-model",t.formItemLayout,!1),[a("a-form-model-item",{attrs:{label:"邮箱"}},[a("a-input",{attrs:{placeholder:"邮箱","allow-clear":""},model:{value:t.form.mail,callback:function(e){t.$set(t.form,"mail",e)},expression:"form.mail"}})],1),a("a-form-model-item",{attrs:{label:"邮箱验证码"}},[a("a-input-group",{attrs:{compact:""}},[a("a-input",{staticStyle:{width:"70%"},attrs:{placeholder:"邮箱验证码","allow-clear":""},model:{value:t.form.svCode,callback:function(e){t.$set(t.form,"svCode",e)},expression:"form.svCode"}}),a("a-button",{staticStyle:{width:"30%"},attrs:{type:"primary"}},[a("icon",{attrs:{icon:"IconFont_send"}}),t._v(" 发送 ")],1)],1)],1),a("a-form-model-item",{attrs:{"wrapper-col":t.buttonItemLayout.wrapperCol}},[a("a-button",{attrs:{type:"primary",block:""},on:{click:t.registerByMail}},[t._v(" 注册 ")])],1)],1)],1),a("a-tab-pane",{key:"3"},[a("span",{attrs:{slot:"tab"},slot:"tab"},[a("a-icon",{attrs:{type:"mobile"}}),t._v(" 手机注册 ")],1),a("a-form-model",t._b({attrs:{model:t.form,layout:t.formOption.layout}},"a-form-model",t.formItemLayout,!1),[a("a-form-model-item",{attrs:{label:"手机"}},[a("a-input",{attrs:{placeholder:"手机","allow-clear":""},model:{value:t.form.mobile,callback:function(e){t.$set(t.form,"mobile",e)},expression:"form.mobile"}})],1),a("a-form-model-item",{attrs:{label:"手机验证码"}},[a("a-input-group",{attrs:{compact:""}},[a("a-input",{staticStyle:{width:"70%"},attrs:{placeholder:"手机验证码","allow-clear":""},model:{value:t.form.svCode,callback:function(e){t.$set(t.form,"svCode",e)},expression:"form.svCode"}}),a("a-button",{staticStyle:{width:"30%"},attrs:{type:"primary"}},[a("icon",{attrs:{icon:"IconFont_send"}}),t._v(" 发送 ")],1)],1)],1),a("a-form-model-item",{attrs:{"wrapper-col":t.buttonItemLayout.wrapperCol}},[a("a-button",{attrs:{type:"primary",block:"",disabled:""},on:{click:t.registerByMobile}},[t._v(" 注册(暂不支持) ")])],1)],1)],1)],1),a("div",{staticClass:"identity-register-footer"},[t._t("footer")],2)],1)},s=[],l=a("c8d0"),u=a("2f62"),d={name:"IdentityLogin",mixins:[l["a"]],data:function(){return{registerCancleTokenSource:{localAccount:null,mail:null,mobile:null,scanCode:null},registerScanCodeBase64:"",tabOption:{position:"top",tabBarStyle:{},size:"default"},formOption:{layout:"vertical"},form:{name:"",region:void 0,date1:void 0,delivery:!1,type:[],resource:"",desc:""},registerScanCodeAlert:{message:"请扫描二维码注册",type:"warning"}}},props:{identityRole:{type:[String],default:"",required:!0}},computed:Object(i["a"])({},Object(u["d"])({identity:function(t){return t.identity.identity}})),methods:{changeTabs:function(t){console.log(t)},registerByLocalAccount:function(){console.log("localaccount register",this.form)},registerByMail:function(){console.log("mail register",this.form)},registerByMobile:function(){console.log("mobile register",this.form)},getLoginCancleTokenSource:function(t){switch(t){case"LOCALACCOUNT":break;default:break}}}},p=d,f=(a("52fa"),a("2877")),m=Object(f["a"])(p,c,s,!1,null,null,null),b=m.exports,h=a("05c3"),g={name:"IdentityRegisterView",mixins:[r["a"]],components:{IdentityRegister:b},data:function(){return{}},props:{ms:{type:[String],default:"",required:!0},msAlias:{type:[String],default:"",required:!0},identityRole:{type:[String],default:"",required:!0}},computed:Object(i["a"])({loginUrl:function(){return["cloud","vue-antd-admin"].includes(this.ms)?"/login":"/".concat(this.ms,"/login")},forgetPasswordUrl:function(){return["cloud","vue-antd-admin"].includes(this.ms)?"/password/forget":"/".concat(this.ms,"/password/forget")}},Object(u["d"])({supportThirdPartys:function(t){return t.admin.supportThirdPartys},thirdPartySupport:function(t){return t.admin.thirdPartySupport}})),methods:{isSupport:function(t){return this.thirdPartySupport.includes(t)},thirdPartyLogin:function(t){var e="";switch(t){case"github":e="https://github.com/login/oauth/authorize?client_id=Iv1.f804df1563d19bbc&redirect_uri=http://localhost:8080/vue-antd-admin/thirdParty/oauth2/github/login";break;case"gitee":e="https://gitee.com/oauth/authorize?client_id=c793a3534c904c288b0eee13de35f36044a521631575a15222b114e66630736d&redirect_uri=http://localhost:8080/vue-antd-admin/thirdParty/oauth2/gitee/login&response_type=code";break;case"oschina":e="https://www.oschina.net/action/oauth2/authorize?response_type=code&client_id=3J1nieR2SomKwSPKTFuA&redirect_uri=http://localhost:8080/vue-antd-admin/thirdParty/oauth2/oschina/login";break;default:break}e?window.location.href=e:Object(h["c"])({code:-1,msg:"暂不支持"})}}},y=g,v=(a("f6e4"),Object(f["a"])(y,n,o,!1,null,null,null));e["a"]=v.exports},9390:function(t,e,a){"use strict";a("99af"),a("b0c0");var n=a("d4ec"),o=a("bee2"),i=a("ade3"),r=(a("d81d"),function(){function t(e){Object(n["a"])(this,t),Object(i["a"])(this,"httpStatusCode",void 0),Object(i["a"])(this,"httpStatusMsg",void 0),Object(i["a"])(this,"code",void 0),Object(i["a"])(this,"msg",void 0),Object(i["a"])(this,"entity",void 0),Object(i["a"])(this,"list",void 0),Object(i["a"])(this,"map",void 0),Object(i["a"])(this,"edcSign",void 0),Object(i["a"])(this,"localeLangMsg",void 0);var a=e.httpStatusCode,o=e.httpStatusMsg,r=e.code,c=e.msg,s=e.entity,l=e.list,u=e.map,d=e.edcSign,p=e.localeLangMsg;this.httpStatusCode=a,this.httpStatusMsg=o,this.code=r,this.msg=c,this.entity=s,this.list=l,this.map=u,this.edcSign=d,this.localeLangMsg=p}return Object(o["a"])(t,[{key:"isIng",value:function(){return t.ING==this.code||202==this.httpStatusCode}},{key:"isSucc",value:function(){return t.SUCC==this.code}},{key:"isFail",value:function(){return t.FAIL==this.code}},{key:"isError",value:function(){return t.ERROR==this.code}},{key:"isRepeat",value:function(){return t.REPEAT==this.code}},{key:"isFrequent",value:function(){return t.FREQUENT==this.code}}]),Object(o["a"])(t,[{key:"unSign",value:function(){return Object.assign({},this,{edcSign:""})}},{key:"getInMap",value:function(t){return this.map[t]}}]),t}());Object(i["a"])(r,"ING","0-1"),Object(i["a"])(r,"SUCC","1"),Object(i["a"])(r,"FAIL","0"),Object(i["a"])(r,"ERROR","-1"),Object(i["a"])(r,"REPEAT","2"),Object(i["a"])(r,"FREQUENT","3");var c=r,s=a("4360"),l=a("2938"),u=function(){function t(e){Object(n["a"])(this,t),Object(i["a"])(this,"namespace",void 0),this.namespace=e}return Object(o["a"])(t,[{key:"buildUrl",value:function(t){return"".concat(this.namespace).concat(t)}},{key:"respResult",value:function(t){var e=new c(t.data),a=s["a"].getters.identity.tokenMap.pmsnEnDeCryptMode;if(l["b"].NON.equals(a))return e;switch(a){case l["b"].SYMMETRIC.name:break;case l["b"].ASYMMETRIC.name:break;case l["b"].MIX.name:break;default:break}return e}}]),t}();e["a"]=u},"9cc4":function(t,e,a){"use strict";var n=a("d4ec"),o=a("bee2"),i=a("262e"),r=a("2caf"),c=a("3d83"),s=a("9390"),l=function(t){Object(i["a"])(a,t);var e=Object(r["a"])(a);function a(){return Object(n["a"])(this,a),e.apply(this,arguments)}return Object(o["a"])(a,[{key:"drawScanCode",value:function(t,e,a){var n="/draw";return t&&(n="/".concat(t,"/draw")),c["b"].post(this.buildUrl(n),e,a)}},{key:"enterView",value:function(t,e){var a="/enterview";return c["b"].post(this.buildUrl(a),t,e)}},{key:"confirmLogin",value:function(t,e){var a="/confirm";return c["b"].post(this.buildUrl(a),t,e)}}]),a}(s["a"]),u=new l("/scancode/login");e["a"]=u},c8ea:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".identity-login-wrap{height:100%;width:100%;background-color:#f5f5f5}.identity-login-wrap .identity-login{margin-top:3.2rem}.identity-login-wrap h1{color:#eaa254;transition:.5s}.identity-login-wrap h1:hover{color:#eaa254;text-shadow:0 0 .1em,0 0 .3em}.identity-login-footer-op,.thirdparty-wrap{display:flex;justify-content:space-between}.thirdparty-wrap{padding:.5rem 15px}.thirdparty-iframe{width:100%;height:100%}",""]),t.exports=e},dce4:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("identity-login-view",{attrs:{ms:"pvtnote",msAlias:"PVTNOTE","identity-role":"user"}})},o=[],i=a("1c3e"),r={name:"Login",components:{IdentityLoginView:i["a"]},data:function(){return{}}},c=r,s=a("2877"),l=Object(s["a"])(c,n,o,!1,null,null,null);e["default"]=l.exports},e2a8:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"identity-login"},[a("div",{staticClass:"identity-login-header"},[t._t("header")],2),a("a-tabs",{staticClass:"identity-login-tabs",attrs:{"default-active-key":"localAccount","tab-position":t.tabOption.position,"tab-bar-style":t.tabOption.tabBarStyle,size:t.tabOption.size,"tab-bar-gutter":t.tabOption.tabBarGutter},on:{change:t.changeTabs}},[a("a-tab-pane",{key:"localAccount"},[a("span",{attrs:{slot:"tab"},slot:"tab"},[a("a-icon",{attrs:{type:"user"}}),t._v(" 本地账号登录 ")],1),a("a-form-model",t._b({attrs:{model:t.form,layout:t.formOption.layout}},"a-form-model",t.formItemLayout,!1),[a("a-form-model-item",{attrs:{label:"本地账号"}},[a("a-input",{attrs:{autocomplete:"username",placeholder:"用户名/手机/邮箱","allow-clear":""},model:{value:t.form.localAccount,callback:function(e){t.$set(t.form,"localAccount",e)},expression:"form.localAccount"}})],1),a("a-form-model-item",{attrs:{label:"密码"}},[a("a-input-password",{attrs:{autocomplete:"current-password",placeholder:"密码","allow-clear":""},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),a("a-form-model-item",{attrs:{"wrapper-col":t.buttonItemLayout.wrapperCol}},[a("a-button",{attrs:{type:"primary",loading:t.loginLoading.localAccount,block:""},on:{click:t.loginByLocalAccount}},[t._v(" "+t._s(t.loginLoading.localAccount?"取消登录":"登录")+" ")])],1)],1)],1),a("a-tab-pane",{key:"mail"},[a("span",{attrs:{slot:"tab"},slot:"tab"},[a("a-icon",{attrs:{type:"mail"}}),t._v(" 邮箱登录 ")],1),a("a-form-model",t._b({attrs:{model:t.form,layout:t.formOption.layout}},"a-form-model",t.formItemLayout,!1),[a("a-form-model-item",{attrs:{label:"邮箱"}},[a("a-input",{attrs:{placeholder:"邮箱","allow-clear":""},model:{value:t.form.mail,callback:function(e){t.$set(t.form,"mail",e)},expression:"form.mail"}})],1),a("a-form-model-item",{attrs:{label:"邮箱验证码"}},[a("a-input-group",{attrs:{compact:""}},[a("a-input",{staticStyle:{width:"70%"},attrs:{placeholder:"邮箱验证码","allow-clear":""},model:{value:t.form.svCode,callback:function(e){t.$set(t.form,"svCode",e)},expression:"form.svCode"}}),a("a-button",{staticStyle:{width:"30%"},attrs:{type:"primary"}},[a("icon",{attrs:{icon:"IconFont_send"}}),t._v(" 发送 ")],1)],1)],1),a("a-form-model-item",{attrs:{"wrapper-col":t.buttonItemLayout.wrapperCol}},[a("a-button",{attrs:{type:"primary",loading:t.loginLoading.mail,block:""},on:{click:t.loginByMail}},[t._v(" "+t._s(t.loginLoading.mail?"取消登录":"登录")+" ")])],1)],1)],1),a("a-tab-pane",{key:"mobile"},[a("span",{attrs:{slot:"tab"},slot:"tab"},[a("a-icon",{attrs:{type:"mobile"}}),t._v(" 手机登录 ")],1),a("a-form-model",t._b({attrs:{model:t.form,layout:t.formOption.layout}},"a-form-model",t.formItemLayout,!1),[a("a-form-model-item",{attrs:{label:"手机"}},[a("a-input",{attrs:{placeholder:"手机","allow-clear":""},model:{value:t.form.mobile,callback:function(e){t.$set(t.form,"mobile",e)},expression:"form.mobile"}})],1),a("a-form-model-item",{attrs:{label:"手机验证码"}},[a("a-input-group",{attrs:{compact:""}},[a("a-input",{staticStyle:{width:"70%"},attrs:{placeholder:"手机验证码","allow-clear":""},model:{value:t.form.svCode,callback:function(e){t.$set(t.form,"svCode",e)},expression:"form.svCode"}}),a("a-button",{staticStyle:{width:"30%"},attrs:{type:"primary"}},[a("icon",{attrs:{icon:"IconFont_send"}}),t._v(" 发送 ")],1)],1)],1),a("a-form-model-item",{attrs:{"wrapper-col":t.buttonItemLayout.wrapperCol}},[a("a-button",{attrs:{type:"primary",loading:t.loginLoading.mobile,block:"",disabled:""},on:{click:t.loginByMobile}},[t._v(" "+t._s(t.loginLoading.mobile?"取消登录(暂不支持)":"登录(暂不支持)")+" ")])],1)],1)],1),a("a-tab-pane",{key:"scanCode"},[a("span",{attrs:{slot:"tab"},slot:"tab"},[a("a-icon",{attrs:{type:"qrcode"}}),t._v(" 扫码登录 ")],1),a("div",{staticClass:"login-wrap login-scan-code-wrap"},[a("div",{staticClass:"login-scan-code-wrap"},[a("a-spin",{attrs:{spinning:t.loginLoading.scanCode}},[a("img",{staticClass:"login-scan-code",attrs:{src:t.loginScanCodeSrc}})]),a("div",{directives:[{name:"show",rawName:"v-show",value:0==t.loginScanCodeExpiration,expression:"loginScanCodeExpiration == 0"}],staticClass:"login-scan-code-expiration"},[a("a-button",{attrs:{type:"primary"},on:{click:t.drawLoginScanCode}},[t._v("点击刷新登录二维码")])],1)],1),a("div",{staticClass:"login-scan-code-tips"},[a("a-alert",{attrs:{message:t.loginScanCodeAlert.message,type:t.loginScanCodeAlert.type,"show-icon":""}})],1)])])],1),a("div",{staticClass:"identity-login-footer"},[t._t("footer")],2)],1)},o=[],i=(a("caad"),a("d81d"),a("ade3")),r=a("5530"),c=a("c8d0"),s=a("414a"),l=a("2938"),u=a("d4ec"),d=a("262e"),p=a("2caf"),f=a("bee2"),m=a("15c4"),b=a("3d83"),h=function(t){Object(d["a"])(a,t);var e=Object(p["a"])(a);function a(){return Object(u["a"])(this,a),e.apply(this,arguments)}return Object(f["a"])(a,[{key:"loginByLocalAccount",value:function(t,e){var a="/login/localaccount";return b["b"].post(this.buildUrl(a),t,e)}},{key:"loginByMail",value:function(t,e){var a="/login/mail";return b["b"].post(this.buildUrl(a),t,e)}},{key:"register",value:function(t,e){var a="/register";return b["b"].post(this.buildUrl(a),t,e)}},{key:"updatePassword",value:function(t,e){var a="/password/update";return b["b"].post(this.buildUrl(a),t,e)}},{key:"bindMail",value:function(t,e){var a="/mail/bind";return b["b"].post(this.buildUrl(a),t,e)}},{key:"bindMobile",value:function(t,e){var a="/mobile/bind";return b["b"].post(this.buildUrl(a),t,e)}},{key:"upLoadAvatar",value:function(t,e){var a="/avatar/upload";return b["b"].post(this.buildUrl(a),t,e)}},{key:"getIdentity",value:function(t,e){var a="/identity";return b["b"].get(this.buildUrl(a),t,e)}}]),a}(m["a"]),g=h,y=function(t){Object(d["a"])(a,t);var e=Object(p["a"])(a);function a(){return Object(u["a"])(this,a),e.apply(this,arguments)}return a}(g),v=new y("/user"),O=v,w=function(t){Object(d["a"])(a,t);var e=Object(p["a"])(a);function a(){return Object(u["a"])(this,a),e.apply(this,arguments)}return a}(m["a"]),C=new w("/sysUser"),S=C;function j(t){return l["c"].USER.equals(t)?O:l["c"].SYS_USER.equals(t)?S:O}var k=a("2f62"),L=a("ae88"),A=a("9cc4");function _(t){return"/topic/scancode.login.".concat(t)}var E=a("c82a"),x=["localAccount","mail","mobile","scanCode"],I={name:"IdentityLogin",mixins:[c["a"],s["a"]],data:function(){return{loginCancleTokenSource:{localAccount:null,mail:null,mobile:null,scanCode:null},loginLoading:{localAccount:!1,mail:!1,mobile:!1,scanCode:!1},loginScanCode:"",loginScanCodeBase64:"",loginScanCodeExpiration:-1,loginScanCodeAvatarUrl:"",isConfirmLogin:!1,tabOption:{position:"top",tabBarStyle:{},size:"default"},formOption:{layout:"vertical"},form:{name:""},loginScanCodeAlert:{message:"请扫描二维码登录",type:"warning"}}},props:{identityRole:{type:[String],default:"",required:!0}},computed:Object(r["a"])(Object(r["a"])({},Object(k["d"])({identity:function(t){return t.identity.identity}})),{},{loginScanCodeSrc:function(){var t=this.loginScanCodeBase64;return t?"data:image/png;base64,".concat(t):"/lazy/qrcode.png"}}),methods:Object(r["a"])(Object(r["a"])({},Object(k["c"])(L["b"].NAMESPACE,[L["b"].SET_TOKEN,L["b"].SET_IDENTITY])),{},{changeTabs:function(t){"scanCode"==t&&this.drawLoginScanCode()},loginByLocalAccount:function(){console.log("localAccount login",this.form);var t=this;t.handleCancleWhenLogin("localAccount")||(t.loginLoading["localAccount"]={delay:1500},j(this.identityRole).loginByLocalAccount({localAccount:this.form.localAccount,password:this.form.password},Object(i["a"])({},b["a"],this.getLoginCancleTokenSource("localAccount").token)).then((function(e){t.handleAfterLogin(e.data),t.loginLoading["localAccount"]=!1})).catch((function(){t.loginLoading["localAccount"]=!1})))},loginByMail:function(){console.log("mail login",this.form);var t=this;t.handleCancleWhenLogin("mail")||(t.loginLoading["mail"]={delay:1500},j(this.identityRole).loginByMail({mail:this.form.mail,svCodeKey:this.form.mail,svCode:this.form.svCode},Object(i["a"])({},b["a"],this.getLoginCancleTokenSource("mail").token)).then((function(e){t.handleAfterLogin(e.data),t.loginLoading["mail"]=!1})).catch((function(){t.loginLoading["mail"]=!1})))},loginByMobile:function(){console.log("mobile login",this.form);var t=this;t.handleCancleWhenLogin("mobile")||(t.loginLoading["mobile"]={delay:1500},j(this.identityRole).loginByMobile({mobile:this.form.mobile,svCodeKey:this.form.mobile,svCode:this.form.svCode},Object(i["a"])({},b["a"],this.getLoginCancleTokenSource("mobile").token)).then((function(e){t.handleAfterLogin(e.data),t.loginLoading["mobile"]=!1})).catch((function(){t.loginLoading["mobile"]=!1})))},drawLoginScanCode:function(){var t=this;t.loginScanCodeExpiration&&t.loginScanCodeExpiration>0||(t.loginScanCodeExpiration=-1,t.loginLoading.scanCode=!0,t.loginScanCodeAlert={message:"正在刷新登录二维码",type:"info"},A["a"].drawScanCode(t.identityRole).then((function(e){if(1==e.data.code){t.loginScanCode&&t.wsunsubscribe(_(t.loginScanCode));var a=e.data.map,n=a.scanCode,o=a.scanCodeBase64,i=a.scanCodeExpiration;t.loginScanCode=n,t.loginScanCodeBase64=o,t.loginScanCodeExpiration=i,t.loginLoading.scanCode=!1,t.wssubscribe(_(n),(function(e){var a=JSON.parse(e.body),n=a.code,o=a.msg,i=a.map,r=i.avatarUrl,c=i.scanCodeExpiration;if(1==n){c&&(t.loginScanCodeAvatarUrl=r,t.loginScanCodeAlert={message:o||"扫码成功",type:"success"});var s=a.map,l=s.Authorization,u=s.AuthorizationCode,d=s.identity;l&&u&&d&&(t.loginScanCodeAlert={message:o||"扫码登录中。。。",type:"success"},t.handleAfterLogin(a),t.isConfirmLogin=!0)}else(0==c||c)&&(t.loginScanCodeExpiration=c),t.loginScanCodeAlert={message:o||"扫码失败",type:"error"}}),{}),t.loginScanCodeAlert={message:"请扫描二维码登录",type:"warning"},t.loginScanCodeInterval=setInterval((function(){t.isConfirmLogin||(t.loginScanCode="",t.loginScanCodeExpiration=0,t.loginScanCodeAlert={message:"请点击刷新登录二维码",type:"warning"}),clearInterval(t.loginScanCodeInterval)}),1e3*i)}})).catch((function(e){console.log(e),t.loginLoading.scanCode=!1,t.loginScanCodeBase64="",t.loginScanCodeExpiration=0,t.loginScanCodeAlert={message:"刷新登陆二维码失败",type:"error"}})))},getLoginCancleTokenSource:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(x.includes(t)){var a=this.loginCancleTokenSource[t];return!a&&e&&(a=Object(b["c"])(),this.loginCancleTokenSource[t]=a),a}return null},handleAfterLogin:function(t){var e=this,a=t.map,n=a.Authorization,o=a.AuthorizationCode,i=a.identity;n&&o&&i&&(e[L["b"].SET_TOKEN]({token:n,tokenCode:o}),e[L["b"].SET_IDENTITY](i),Object(E["c"])({path:"/"}))},handleCancleWhenLogin:function(t){if(x.includes(t)){var e=this,a=e.loginLoading[t];if(a){var n=e.getLoginCancleTokenSource(t,!1);n&&n.cancel(),e.loginLoading[t]=!1}return a}}}),destroyed:function(){this.loginScanCode&&this.wsunsubscribe(_(this.loginScanCode)),this.wsdisconnect(),this.loginScanCodeInterval&&clearInterval(this.loginScanCodeInterval)}},M=I,U=(a("7d01"),a("2877")),R=Object(U["a"])(M,n,o,!1,null,null,null);e["a"]=R.exports},f6e4:function(t,e,a){"use strict";a("05c1")}}]);