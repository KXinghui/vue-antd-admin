(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["register"],{"0fe1":function(t,e,o){var a=o("2713");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=o("499e").default;r("373a0127",a,!0,{sourceMap:!1,shadowMode:!1})},2713:function(t,e,o){var a=o("24fb");e=a(!1),e.push([t.i,".identity-register{width:100%;margin:0 auto}.ant-tabs-nav-scroll{display:flex}",""]),t.exports=e},"2cfd":function(t,e,o){"use strict";o("9254")},"52fa":function(t,e,o){"use strict";o("0fe1")},"6b6d":function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"identity-register"},[o("a-row",{attrs:{type:"flex",justify:"center"}},[o("a-col",{attrs:{xs:22,sm:18,md:10,lg:6,xl:6}},[o("a-tabs",{attrs:{"default-active-key":"1","tab-position":t.tabOption.position,"tab-bar-style":t.tabOption.tabBarStyle,size:t.tabOption.size,"tab-bar-gutter":t.tabOption.tabBarGutter},on:{change:t.changeTabs}},[o("a-tab-pane",{key:"1"},[o("span",{attrs:{slot:"tab"},slot:"tab"},[o("a-icon",{attrs:{type:"user"}}),t._v(" 本地账号注册 ")],1),o("a-form-model",t._b({attrs:{model:t.form,layout:t.formOption.layout}},"a-form-model",t.formItemLayout,!1),[o("a-form-model-item",{attrs:{label:"本地账号"}},[o("a-input",{attrs:{placeholder:"用户名/手机/邮箱","allow-clear":""},model:{value:t.form.localAccount,callback:function(e){t.$set(t.form,"localAccount",e)},expression:"form.localAccount"}})],1),o("a-form-model-item",{attrs:{label:"密码"}},[o("a-input-password",{attrs:{placeholder:"密码","allow-clear":""},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),o("a-form-model-item",{attrs:{"wrapper-col":t.buttonItemLayout.wrapperCol}},[o("a-button",{attrs:{type:"primary",block:""},on:{click:t.registerByLocalAccount}},[t._v(" 注册 ")])],1)],1)],1),o("a-tab-pane",{key:"2"},[o("span",{attrs:{slot:"tab"},slot:"tab"},[o("a-icon",{attrs:{type:"mail"}}),t._v(" 邮箱注册 ")],1),o("a-form-model",t._b({attrs:{model:t.form,layout:t.formOption.layout}},"a-form-model",t.formItemLayout,!1),[o("a-form-model-item",{attrs:{label:"邮箱"}},[o("a-input",{attrs:{placeholder:"邮箱","allow-clear":""},model:{value:t.form.mail,callback:function(e){t.$set(t.form,"mail",e)},expression:"form.mail"}})],1),o("a-form-model-item",{attrs:{label:"邮箱验证码"}},[o("a-input-group",{attrs:{compact:""}},[o("a-input",{staticStyle:{width:"70%"},attrs:{placeholder:"邮箱验证码","allow-clear":""},model:{value:t.form.svCode,callback:function(e){t.$set(t.form,"svCode",e)},expression:"form.svCode"}}),o("a-button",{staticStyle:{width:"30%"},attrs:{type:"primary"}},[o("icon",{attrs:{icon:"IconFont_send"}}),t._v(" 发送 ")],1)],1)],1),o("a-form-model-item",{attrs:{"wrapper-col":t.buttonItemLayout.wrapperCol}},[o("a-button",{attrs:{type:"primary",block:""},on:{click:t.registerByMail}},[t._v(" 注册 ")])],1)],1)],1),o("a-tab-pane",{key:"3"},[o("span",{attrs:{slot:"tab"},slot:"tab"},[o("a-icon",{attrs:{type:"mobile"}}),t._v(" 手机注册 ")],1),o("a-form-model",t._b({attrs:{model:t.form,layout:t.formOption.layout}},"a-form-model",t.formItemLayout,!1),[o("a-form-model-item",{attrs:{label:"手机"}},[o("a-input",{attrs:{placeholder:"手机","allow-clear":""},model:{value:t.form.mobile,callback:function(e){t.$set(t.form,"mobile",e)},expression:"form.mobile"}})],1),o("a-form-model-item",{attrs:{label:"手机验证码"}},[o("a-input-group",{attrs:{compact:""}},[o("a-input",{staticStyle:{width:"70%"},attrs:{placeholder:"手机验证码","allow-clear":""},model:{value:t.form.svCode,callback:function(e){t.$set(t.form,"svCode",e)},expression:"form.svCode"}}),o("a-button",{staticStyle:{width:"30%"},attrs:{type:"primary"}},[o("icon",{attrs:{icon:"IconFont_send"}}),t._v(" 发送 ")],1)],1)],1),o("a-form-model-item",{attrs:{"wrapper-col":t.buttonItemLayout.wrapperCol}},[o("a-button",{attrs:{type:"primary",block:"",disabled:""},on:{click:t.registerByMobile}},[t._v(" 注册(暂不支持) ")])],1)],1)],1)],1)],1)],1)],1)},r=[],l=o("c8d0"),s={name:"IdentityLogin",mixins:[l["a"]],data:function(){return{identity:{name:"kxh"},registerCancleTokenSource:{localAccount:null,mail:null,mobile:null,scanCode:null},registerScanCodeBase64:"",tabOption:{position:"top",tabBarStyle:{},size:"default"},form:{name:"",region:void 0,date1:void 0,delivery:!1,type:[],resource:"",desc:""},registerScanCodeAlert:{message:"请扫描二维码注册",type:"warning"}}},props:{identityRole:{type:[String],default:"",required:!0}},computed:{},methods:{changeTabs:function(t){console.log(t)},registerByLocalAccount:function(){console.log("localaccount register",this.form)},registerByMail:function(){console.log("mail register",this.form)},registerByMobile:function(){console.log("mobile register",this.form)},getLoginCancleTokenSource:function(t){switch(t){case"LOCALACCOUNT":break;default:break}}}},i=s,n=(o("52fa"),o("2877")),c=Object(n["a"])(i,a,r,!1,null,null,null);e["a"]=c.exports},"73cf":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"register"},[o("a-row",{attrs:{type:"flex",justify:"center"}},[o("a-col",{attrs:{xs:22,sm:18,md:10,lg:6,xl:6}},[o("h1",{staticStyle:{"margin-top":"2rem"},attrs:{align:"center"}},[t._v("Vue Antd Admin")])])],1),o("identity-register",{attrs:{"identity-role":"user"}})],1)},r=[],l=o("6b6d"),s={name:"Login",components:{IdentityRegister:l["a"]}},i=s,n=(o("2cfd"),o("2877")),c=Object(n["a"])(i,a,r,!1,null,null,null);e["default"]=c.exports},9254:function(t,e,o){var a=o("e26f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=o("499e").default;r("2de234dc",a,!0,{sourceMap:!1,shadowMode:!1})},e26f:function(t,e,o){var a=o("24fb");e=a(!1),e.push([t.i,".register .identity-register{margin-top:3.2rem}.register h1{color:#000;transition:.5s}.register h1:hover{color:#000;text-shadow:0 0 .1em,0 0 .3em}",""]),t.exports=e}}]);