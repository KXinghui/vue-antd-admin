(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pvtnote"],{"05c1":function(t,e,a){var o=a("362dd");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=a("499e").default;i("019ef948",o,!0,{sourceMap:!1,shadowMode:!1})},"07df":function(t,e,a){"use strict";var o=a("ade3"),i=a("5530"),r=a("d4ec"),n=a("bee2"),l=a("262e"),s=a("2caf"),c=a("15c4"),d=a("3d83"),u=a("4360"),h=function(t){Object(l["a"])(a,t);var e=Object(s["a"])(a);function a(){return Object(r["a"])(this,a),e.apply(this,arguments)}return Object(n["a"])(a,[{key:"authorizeUrl",value:function(t,e,a){var o="/".concat(t,"/authorizeurl");return d["a"].post(this.buildUrl(o),e,a)}},{key:"authorize",value:function(t,e,a){var o="/".concat(t,"/authorize");return d["a"].post(this.buildUrl(o),e,a)}},{key:"bind",value:function(t,e,a){var r="/".concat(t,"/bind"),n="".concat(t,"_access_token");return a.header=Object(i["a"])(Object(o["a"])({},n,u["a"].getters.oauth2[t]),a.header),d["a"].post(this.buildUrl(r),e,a)}},{key:"unBind",value:function(t,e,a){var r="/".concat(t,"/unBind"),n="".concat(t,"_access_token");return a.header=Object(i["a"])(Object(o["a"])({},n,u["a"].getters.oauth2[t]),a.header),d["a"].post(this.buildUrl(r),e,a)}},{key:"loginIsRegister",value:function(t,e,a){var o="/".concat(t,"/loginIsRegister");return d["a"].post(this.buildUrl(o),e,a)}}]),a}(c["a"]),p=new h("/thirdparty/oauth2");e["a"]=p},"0fe1":function(t,e,a){var o=a("2713");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=a("499e").default;i("373a0127",o,!0,{sourceMap:!1,shadowMode:!1})},"17ce":function(t,e,a){"use strict";a("6489")},"1c3e":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"identity-login-wrap"},[a("base-header",{attrs:{showBackIcon:""}}),a("base-main",{staticStyle:{"background-color":"#f5f5f5"},attrs:{isScroll:!0,isScrollPull:!1,baseMainTop:"7.25%",baseMainHeight:"92.5%"}},[a("template",{slot:"main"},[a("a-row",{attrs:{type:"flex",justify:"center"}},[a("a-col",{attrs:{xs:22,sm:18,md:10,lg:6,xl:6}},[a("h1",{attrs:{align:"center"}},[t._v(t._s(t.msAlias))])])],1),a("a-row",{attrs:{type:"flex",justify:"center"}},[a("a-col",{attrs:{xs:22,sm:18,md:10,lg:6,xl:6}},[a("identity-login",{attrs:{"identity-role":"user"},scopedSlots:t._u([{key:"footer",fn:function(){return[a("div",{staticClass:"identity-login-footer-op"},[a("a-button",{attrs:{type:"link"},on:{click:function(e){return t.pushRoute({path:t.registerUrl})}}},[a("span",[t._v("注册")])]),a("a-button",{attrs:{type:"link"},on:{click:function(e){return t.pushRoute({path:t.forgetPasswordUrl})}}},[a("span",[t._v("忘记密码")])])],1),a("div",{staticClass:"thirdparty-wrap"},[a("a-button",{attrs:{size:"large",shape:"circle",title:"GitHub"},on:{click:function(e){return t.authorizeUrl("github")}}},[a("icon",{attrs:{icon:"IconFont_github"}})],1),a("a-button",{attrs:{size:"large",shape:"circle",title:"GitHub"},on:{click:function(e){return t.authorizeUrl("gitee")}}},[a("icon",{attrs:{icon:"IconFont_gitee"}})],1),a("a-button",{attrs:{size:"large",shape:"circle",title:"开源中国"},on:{click:function(e){return t.authorizeUrl("oschina")}}},[a("icon",{attrs:{icon:"IconFont_oschina"}})],1),a("a-button",{attrs:{size:"large",shape:"circle",title:"支付宝"},on:{click:function(e){return t.authorizeUrl("alipay")}}},[a("icon",{attrs:{icon:"IconFont_alipay"}})],1),a("a-button",{attrs:{disabled:"",size:"large",shape:"circle",title:"微博"},on:{click:function(e){return t.authorizeUrl("weibo")}}},[a("icon",{attrs:{icon:"IconFont_weibo"}})],1),a("a-button",{attrs:{disabled:"",size:"large",shape:"circle",title:"微信"},on:{click:function(e){return t.authorizeUrl("wechat")}}},[a("icon",{attrs:{icon:"IconFont_wechat"}})],1),a("a-button",{attrs:{disabled:"",size:"large",shape:"circle",title:"QQ"},on:{click:function(e){return t.authorizeUrl("qq")}}},[a("icon",{attrs:{icon:"IconFont_qq"}})],1)],1)]},proxy:!0}])})],1)],1)],1)],2),a("base-modal",{attrs:{modalTitle:t.modalTitle,modalVisible:t.modalVisible},on:{"update:modalVisible":function(e){t.modalVisible=e},"update:modal-visible":function(e){t.modalVisible=e}}},[[a("iframe",{staticClass:"thirdparty-iframe",attrs:{id:"githubIframe",src:"https://github.com/login/oauth/authorize?client_id=Iv1.f804df1563d19bbc&redirect_uri=http://localhost:8080/vue-antd-admin/oauth2/github/login"}})]],2)],1)},i=[],r=(a("caad"),a("d81d"),a("5530")),n=a("b5d2"),l=a("e2a8"),s=a("362d"),c=a("2f62"),d=a("07df"),u={name:"IdentityLoginView",mixins:[n["a"]],components:{IdentityLogin:l["a"],BaseModal:s["a"]},data:function(){return{modalTitle:"",modalVisible:!1,oauthLogin:"github"}},props:{ms:{type:[String],default:"",required:!0},msAlias:{type:[String],default:"",required:!0},identityRole:{type:[String],default:"",required:!0}},computed:Object(r["a"])({registerUrl:function(){return["cloud","vue-antd-admin"].includes(this.ms)?"/register":"/".concat(this.ms,"/register")},forgetPasswordUrl:function(){return["cloud","vue-antd-admin"].includes(this.ms)?"/password/forget":"/".concat(this.ms,"/password/forget")}},Object(c["d"])({github:function(t){return t.oauth2.github},layoutSetting:function(t){return t.admin.layoutSetting},loading:function(t){return t.admin.loading}})),methods:{authorizeUrl:function(t){d["a"].authorizeUrl(t).then((function(t){var e=t.data.map.authorizeUrl;console.log(e),e&&(window.location.href=e)}))}}},h=u,p=(a("17ce"),a("2877")),f=Object(p["a"])(h,o,i,!1,null,null,null);e["a"]=f.exports},2713:function(t,e,a){var o=a("24fb");e=o(!1),e.push([t.i,".identity-register{width:100%;margin:0 auto}.ant-tabs-nav-scroll{display:flex}.identity-register-footer,.identity-register-header{border:1px solid red;margin:-1.5rem 0 0}",""]),t.exports=e},"362d":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-modal",t._b({attrs:{bodyStyle:{height:t.modalHeight},title:t.modalTitle,centered:t.modalCentered,"ok-text":"确认","cancel-text":"取消"},on:{cancel:t.cancelModal},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},"a-modal",t.$props,!1),[a("a-spin",{staticClass:"modal-body",attrs:{spinning:t.modalLoading}},[a("a-anchor",{directives:[{name:"show",rawName:"v-show",value:t.showAnchor,expression:"showAnchor"}],staticStyle:{position:"absolute","z-index":"10",left:"5rem"},attrs:{affix:!0},on:{click:t.handleAnchorClick,change:t.handleAnchorChange}},t._l(t.anchors,(function(t){return a("a-anchor-link",{key:t.href,attrs:{href:t.href,title:t.title}})})),1),a("div",[a("span",{staticClass:"modal-btn-span"},[a("icon",{directives:[{name:"show",rawName:"v-show",value:t.showAnchor,expression:"showAnchor"}],staticClass:"modal-btn",attrs:{icon:t.showAnchor?"Antd_close":"IconFont_anchor"},on:{click:t.toggleAnchor}})],1)]),a("div",{ref:t.modalRef,staticClass:"modal-body"},[t._t("default")],2)],1),a("template",{slot:"footer"},[a("a-spin",{attrs:{spinning:t.modalLoading}},[t._t("footer")],2)],1)],2)},i=[],r={components:{},name:"BaseModal",data:function(){var t=this;return{modalRef:"base-modal-".concat(this._uid),anchorContainer:function(){return t.$refs[t.modalRef]||t.$refs[t.modalRef].$el},showAnchor:!1,modalHeight:0,visible:!1}},props:{modalRefresh:{type:[Boolean],default:!1,require:!1},modalLoading:{type:[Boolean],default:!1,require:!1},modalHeightPercent:{type:[String],default:"80%",require:!1},anchors:{type:[Array],default:function(){return[]},require:!1},modalTitle:{type:[String],default:"",require:!1},modalVisible:{type:[Boolean],default:!1,require:!1},modalCentered:{type:[Boolean],default:!0,require:!1},destroyOnClose:{type:[Boolean],default:!1,require:!1}},methods:{handleAnchorClick:function(t,e){t.preventDefault()},handleAnchorChange:function(t){this.$emit("changeAnchor",t)},toggleAnchor:function(){this.showAnchor=!this.showAnchor},resizeModalHeight:function(){var t=window.innerHeight||document.documentElement.clientHeight;this.modalHeight=t*parseFloat(this.modalHeightPercent)*.01+"px"},cancelModal:function(){this.$emit("update:modalVisible",!1)}},watch:{modalHeightPercent:function(){this.resizeModalHeight()},modalVisible:function(){this.visible=this.modalVisible}},mounted:function(){this.resizeModalHeight(),window.addEventListener("resize",this.resizeModalHeight)},destroyed:function(){window.removeEventListener("resize",this.resizeModalHeight)}},n=r,l=(a("5d5e"),a("2877")),s=Object(l["a"])(n,o,i,!1,null,null,null);e["a"]=s.exports},"362dd":function(t,e,a){var o=a("24fb");e=o(!1),e.push([t.i,".identity-register-wrap{height:100%;width:100%;background-color:#f5f5f5}.identity-register-wrap .identity-register{margin-top:3.2rem}.identity-register-wrap h1{color:#eaa254;transition:.5s}.identity-register-wrap h1:hover{color:#eaa254;text-shadow:0 0 .1em,0 0 .3em}.identity-register-footer-op,.thirdParty-wrap{display:flex;justify-content:space-between}.thirdParty-wrap{padding:.5rem 15px}",""]),t.exports=e},"4cc6":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("identity-register-view",{attrs:{ms:"pvtnote",msAlias:"PVTNOTE","identity-role":"user"}})},i=[],r=a("7f1b"),n={name:"Register",components:{IdentityRegisterView:r["a"]},data:function(){return{}}},l=n,s=a("2877"),c=Object(s["a"])(l,o,i,!1,null,null,null);e["default"]=c.exports},"4db5":function(t,e,a){var o=a("24fb");e=o(!1),e.push([t.i,".modal-btn-span{display:block;width:56px;height:56px;font-size:16px;font-style:normal;line-height:56px;text-align:center;text-transform:none;text-rendering:auto;position:absolute;top:0;left:0}.modal-btn{padding:0;color:rgba(0,0,0,.45);font-weight:700;line-height:1;text-decoration:none;background:transparent;border:0;outline:0;cursor:pointer;transition:color .3s}.modal-body,.modal-body .ant-spin-container{width:100%;height:100%}",""]),t.exports=e},"52fa":function(t,e,a){"use strict";a("0fe1")},"5d5e":function(t,e,a){"use strict";a("d9a0")},6489:function(t,e,a){var o=a("c8ea");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=a("499e").default;i("eef92208",o,!0,{sourceMap:!1,shadowMode:!1})},"7f1b":function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"identity-register-wrap"},[a("base-header",{attrs:{showBackIcon:""}}),a("base-main",{staticStyle:{"background-color":"#f5f5f5"},attrs:{isScroll:!0,isScrollPull:!1,baseMainTop:"7.25%",baseMainHeight:"92.5%"}},[a("template",{slot:"main"},[a("a-row",{attrs:{type:"flex",justify:"center"}},[a("a-col",{attrs:{xs:22,sm:18,md:10,lg:6,xl:6}},[a("h1",{attrs:{align:"center"}},[t._v(t._s(t.msAlias))])])],1),a("a-row",{attrs:{type:"flex",justify:"center"}},[a("a-col",{attrs:{xs:22,sm:18,md:10,lg:6,xl:6}},[a("identity-register",{attrs:{"identity-role":t.identityRole},scopedSlots:t._u([{key:"footer",fn:function(){return[a("div",{staticClass:"identity-register-footer-op"},[a("a-button",{attrs:{type:"link"},on:{click:function(e){return t.pushRoute({path:t.loginUrl})}}},[a("span",[t._v("已有账号 登陆")])]),a("a-button",{attrs:{type:"link"},on:{click:function(e){return t.pushRoute({path:t.forgetPasswordUrl})}}},[a("span",[t._v("忘记密码")])])],1),a("div",{staticClass:"thirdParty-wrap"},[a("a-button",{attrs:{size:"large",shape:"circle",title:"GitHub"},on:{click:function(e){return t.thirdPartyLogin("github")}}},[a("icon",{attrs:{icon:"IconFont_github"}})],1),a("a-button",{attrs:{size:"large",shape:"circle",title:"GitHub"},on:{click:function(e){return t.thirdPartyLogin("gitee")}}},[a("icon",{attrs:{icon:"IconFont_gitee"}})],1),a("a-button",{attrs:{size:"large",shape:"circle",title:"开源中国"},on:{click:function(e){return t.thirdPartyLogin("oschina")}}},[a("icon",{attrs:{icon:"IconFont_oschina"}})],1),a("a-button",{attrs:{size:"large",shape:"circle",title:"支付宝"},on:{click:function(e){return t.thirdPartyLogin("alipay")}}},[a("icon",{attrs:{icon:"IconFont_alipay"}})],1),a("a-button",{attrs:{disabled:"",size:"large",shape:"circle",title:"微博"},on:{click:function(e){return t.thirdPartyLogin("weibo")}}},[a("icon",{attrs:{icon:"IconFont_weibo"}})],1),a("a-button",{attrs:{disabled:"",size:"large",shape:"circle",title:"微信"},on:{click:function(e){return t.thirdPartyLogin("wechat")}}},[a("icon",{attrs:{icon:"IconFont_wechat"}})],1),a("a-button",{attrs:{disabled:"",size:"large",shape:"circle",title:"QQ"},on:{click:function(e){return t.thirdPartyLogin("qq")}}},[a("icon",{attrs:{icon:"IconFont_qq"}})],1)],1)]},proxy:!0}])})],1)],1)],1)],2)],1)},i=[],r=(a("caad"),a("b5d2")),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"identity-register"},[a("div",{staticClass:"identity-register-header"},[t._t("header")],2),a("a-tabs",{attrs:{"default-active-key":"1","tab-position":t.tabOption.position,"tab-bar-style":t.tabOption.tabBarStyle,size:t.tabOption.size,"tab-bar-gutter":t.tabOption.tabBarGutter},on:{change:t.changeTabs}},[a("a-tab-pane",{key:"1"},[a("span",{attrs:{slot:"tab"},slot:"tab"},[a("a-icon",{attrs:{type:"user"}}),t._v(" 本地账号注册 ")],1),a("a-form-model",t._b({attrs:{model:t.form,layout:t.formOption.layout}},"a-form-model",t.formItemLayout,!1),[a("a-form-model-item",{attrs:{label:"本地账号"}},[a("a-input",{attrs:{placeholder:"用户名/手机/邮箱","allow-clear":""},model:{value:t.form.localAccount,callback:function(e){t.$set(t.form,"localAccount",e)},expression:"form.localAccount"}})],1),a("a-form-model-item",{attrs:{label:"密码"}},[a("a-input-password",{attrs:{placeholder:"密码","allow-clear":""},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),a("a-form-model-item",{attrs:{"wrapper-col":t.buttonItemLayout.wrapperCol}},[a("a-button",{attrs:{type:"primary",block:""},on:{click:t.registerByLocalAccount}},[t._v(" 注册 ")])],1)],1)],1),a("a-tab-pane",{key:"2"},[a("span",{attrs:{slot:"tab"},slot:"tab"},[a("a-icon",{attrs:{type:"mail"}}),t._v(" 邮箱注册 ")],1),a("a-form-model",t._b({attrs:{model:t.form,layout:t.formOption.layout}},"a-form-model",t.formItemLayout,!1),[a("a-form-model-item",{attrs:{label:"邮箱"}},[a("a-input",{attrs:{placeholder:"邮箱","allow-clear":""},model:{value:t.form.mail,callback:function(e){t.$set(t.form,"mail",e)},expression:"form.mail"}})],1),a("a-form-model-item",{attrs:{label:"邮箱验证码"}},[a("a-input-group",{attrs:{compact:""}},[a("a-input",{staticStyle:{width:"70%"},attrs:{placeholder:"邮箱验证码","allow-clear":""},model:{value:t.form.svCode,callback:function(e){t.$set(t.form,"svCode",e)},expression:"form.svCode"}}),a("a-button",{staticStyle:{width:"30%"},attrs:{type:"primary"}},[a("icon",{attrs:{icon:"IconFont_send"}}),t._v(" 发送 ")],1)],1)],1),a("a-form-model-item",{attrs:{"wrapper-col":t.buttonItemLayout.wrapperCol}},[a("a-button",{attrs:{type:"primary",block:""},on:{click:t.registerByMail}},[t._v(" 注册 ")])],1)],1)],1),a("a-tab-pane",{key:"3"},[a("span",{attrs:{slot:"tab"},slot:"tab"},[a("a-icon",{attrs:{type:"mobile"}}),t._v(" 手机注册 ")],1),a("a-form-model",t._b({attrs:{model:t.form,layout:t.formOption.layout}},"a-form-model",t.formItemLayout,!1),[a("a-form-model-item",{attrs:{label:"手机"}},[a("a-input",{attrs:{placeholder:"手机","allow-clear":""},model:{value:t.form.mobile,callback:function(e){t.$set(t.form,"mobile",e)},expression:"form.mobile"}})],1),a("a-form-model-item",{attrs:{label:"手机验证码"}},[a("a-input-group",{attrs:{compact:""}},[a("a-input",{staticStyle:{width:"70%"},attrs:{placeholder:"手机验证码","allow-clear":""},model:{value:t.form.svCode,callback:function(e){t.$set(t.form,"svCode",e)},expression:"form.svCode"}}),a("a-button",{staticStyle:{width:"30%"},attrs:{type:"primary"}},[a("icon",{attrs:{icon:"IconFont_send"}}),t._v(" 发送 ")],1)],1)],1),a("a-form-model-item",{attrs:{"wrapper-col":t.buttonItemLayout.wrapperCol}},[a("a-button",{attrs:{type:"primary",block:"",disabled:""},on:{click:t.registerByMobile}},[t._v(" 注册(暂不支持) ")])],1)],1)],1)],1),a("div",{staticClass:"identity-register-footer"},[t._t("footer")],2)],1)},l=[],s=a("c8d0"),c={name:"IdentityLogin",mixins:[s["a"]],data:function(){return{identity:{name:"kxh"},registerCancleTokenSource:{localAccount:null,mail:null,mobile:null,scanCode:null},registerScanCodeBase64:"",tabOption:{position:"top",tabBarStyle:{},size:"default"},formOption:{layout:"vertical"},form:{name:"",region:void 0,date1:void 0,delivery:!1,type:[],resource:"",desc:""},registerScanCodeAlert:{message:"请扫描二维码注册",type:"warning"}}},props:{identityRole:{type:[String],default:"",required:!0}},computed:{},methods:{changeTabs:function(t){console.log(t)},registerByLocalAccount:function(){console.log("localaccount register",this.form)},registerByMail:function(){console.log("mail register",this.form)},registerByMobile:function(){console.log("mobile register",this.form)},getLoginCancleTokenSource:function(t){switch(t){case"LOCALACCOUNT":break;default:break}}}},d=c,u=(a("52fa"),a("2877")),h=Object(u["a"])(d,n,l,!1,null,null,null),p=h.exports,f=a("05c3"),m={name:"IdentityRegisterView",mixins:[r["a"]],components:{IdentityRegister:p},data:function(){return{}},props:{ms:{type:[String],default:"",required:!0},msAlias:{type:[String],default:"",required:!0},identityRole:{type:[String],default:"",required:!0}},computed:{loginUrl:function(){return["cloud","vue-antd-admin"].includes(this.ms)?"/login":"/".concat(this.ms,"/login")},forgetPasswordUrl:function(){return["cloud","vue-antd-admin"].includes(this.ms)?"/password/forget":"/".concat(this.ms,"/password/forget")}},methods:{thirdPartyLogin:function(t){var e="";switch(t){case"github":e="https://github.com/login/oauth/authorize?client_id=Iv1.f804df1563d19bbc&redirect_uri=http://localhost:8080/vue-antd-admin/thirdParty/oauth2/github/login";break;case"gitee":e="https://gitee.com/oauth/authorize?client_id=c793a3534c904c288b0eee13de35f36044a521631575a15222b114e66630736d&redirect_uri=http://localhost:8080/vue-antd-admin/thirdParty/oauth2/gitee/login&response_type=code";break;case"oschina":e="https://www.oschina.net/action/oauth2/authorize?response_type=code&client_id=3J1nieR2SomKwSPKTFuA&redirect_uri=http://localhost:8080/vue-antd-admin/thirdParty/oauth2/oschina/login";break;default:break}e?window.location.href=e:Object(f["c"])({code:-1,msg:"暂不支持"})}}},g=m,b=(a("f6e4"),Object(u["a"])(g,o,i,!1,null,null,null));e["a"]=b.exports},c8ea:function(t,e,a){var o=a("24fb");e=o(!1),e.push([t.i,".identity-login-wrap{height:100%;width:100%;background-color:#f5f5f5}.identity-login-wrap .identity-login{margin-top:3.2rem}.identity-login-wrap h1{color:#eaa254;transition:.5s}.identity-login-wrap h1:hover{color:#eaa254;text-shadow:0 0 .1em,0 0 .3em}.identity-login-footer-op,.thirdparty-wrap{display:flex;justify-content:space-between}.thirdparty-wrap{padding:.5rem 15px}.thirdparty-iframe{width:100%;height:100%}",""]),t.exports=e},d9a0:function(t,e,a){var o=a("4db5");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=a("499e").default;i("aefd4fd4",o,!0,{sourceMap:!1,shadowMode:!1})},dce4:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("identity-login-view",{attrs:{ms:"pvtnote",msAlias:"PVTNOTE","identity-role":"user"}})},i=[],r=a("1c3e"),n={name:"Login",components:{IdentityLoginView:r["a"]},data:function(){return{}}},l=n,s=a("2877"),c=Object(s["a"])(l,o,i,!1,null,null,null);e["default"]=c.exports},f6e4:function(t,e,a){"use strict";a("05c1")}}]);