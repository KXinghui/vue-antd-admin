(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["im-chat"],{"0b6e":function(t,e,a){var r=a("24fb");e=r(!1),e.push([t.i,".chat-wrap{height:100%;background-color:#f5f5f5}",""]),t.exports=e},"271f":function(t,e,a){var r=a("24fb");e=r(!1),e.push([t.i,".base-drawer-bar-wrap .ant-drawer-wrapper-body{height:100%}.base-drawer-bar-bottom-wrap .ant-drawer-content .ant-drawer-wrapper-body .ant-drawer-body,.base-drawer-bar-top-wrap .ant-drawer-content .ant-drawer-wrapper-body .ant-drawer-body{height:100%;padding:0 1rem;display:flex;justify-content:space-between;align-items:center}.base-drawer-bar-wrap .top-close-text{cursor:pointer}.base-drawer-bar-bottom-wrap .identity-avatar,.base-drawer-bar-top-wrap .identity-avatar{padding:0}",""]),t.exports=e},"3b62":function(t,e,a){"use strict";a("9758")},"45d1":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"chat-wrap"},[a("base-header",{attrs:{showDrawerIcon:""}},[a("div",{attrs:{slot:"left"},slot:"left"},[t._v("聊天")]),a("div",{attrs:{slot:"right"},slot:"right"},[a("icon",{attrs:{icon:"Antd_menu"},on:{click:t.showDrawerBar}}),a("icon",{attrs:{icon:"Antd_search"},on:{click:function(e){return t.pushRoute("/search")}}}),a("a-popover",{attrs:{placement:"bottomRight"}},[a("template",{slot:"content"},[a("a-menu",[a("a-menu-item",[a("a",{attrs:{href:"javascript:;"}},[t._v("1st menu item")])]),a("a-menu-item",[a("a",{attrs:{href:"javascript:;"}},[t._v("2nd menu item")])]),a("a-menu-item",[a("a",{attrs:{href:"javascript:;"}},[t._v("3rd menu item")])])],1)],1),a("icon",{attrs:{icon:"Antd_plus-circle"}})],2)],1)]),a("base-main",[a("div",{attrs:{slot:"main"},slot:"main"},t._l(t.chatingIdentities,(function(e){return a("base-cell",{key:e.id,attrs:{arrow:""},on:{click:function(e){return t.pushRoute({path:"/my/identity/info"})}}},[a("div",{attrs:{slot:"left"},slot:"left"},[a("div",{staticClass:"identity-wrap"},[a("identity-avatar",{attrs:{identity:e,avatarShape:"square"}}),a("div",{staticClass:"identity-info"},[a("span",{staticClass:"identity-nickname"},[t._v(t._s(e.nickname))]),a("span",{staticClass:"identity-record"},[a("span",{directives:[{name:"show",rawName:"v-show",value:e.isAtMe,expression:"chatingIdentity.isAtMe"}],staticClass:"identity-at-record"},[t._v("[有人@我]")]),t._v(" "+t._s(e.record))])])],1)]),a("div",{attrs:{slot:"right"},slot:"right"},[a("span",{domProps:{textContent:t._s(e.createDate)}})])])})),1)]),a("base-tab-bar",{attrs:{"base-tab-bars":t.baseTabBars,"active-item-key":t.activeKey,color:t.color,"active-color":t.activeColor}}),a("base-drawer",{attrs:{width:"300px",visible:t.showDrawer,placement:t.drawerPlacement},on:{"update:visible":function(e){t.showDrawer=e}}},[a("identity-avatar",{attrs:{identity:t.identity,avatarShape:"square"}})],1),a("base-drawer-bar",{attrs:{showClose:!0,topVisible:t.topDrawerBarVisible,bottomVisible:t.bottomDrawerBarVisible,topHeightPercent:t.topDrawerBarHeightPercent,bottomHeightPercent:t.bottomDrawerBarHeightPercent},on:{"update:topVisible":function(e){t.topDrawerBarVisible=e},"update:top-visible":function(e){t.topDrawerBarVisible=e},"update:bottomVisible":function(e){t.bottomDrawerBarVisible=e},"update:bottom-visible":function(e){t.bottomDrawerBarVisible=e}}},[a("identity-avatar",{attrs:{slot:"top",identity:t.identity,avatarShape:"square"},slot:"top"}),a("identity-avatar",{attrs:{slot:"bottom",identity:{name:"asdfasdf"},avatarShape:"square"},slot:"bottom"})],1)],1)},i=[],o=a("5530"),s=a("b5d2"),n=a("9185"),l=a("39a9"),c=a("2f62"),d={name:"ChatGroupMember",mixins:[s["a"],n["a"]],components:{IdentityAvatar:l["a"]},data:function(){return{msName:"im",activeTabIndex:0,chatingIdentities:[{id:"4545",chatSubjectTypeEnum:""}]}},computed:Object(o["a"])({},Object(c["d"])({identity:function(t){return t.identity.identity}})),methods:{}},p=d,u=(a("3b62"),a("2877")),h=Object(u["a"])(p,r,i,!1,null,null,null);e["default"]=h.exports},9185:function(t,e,a){"use strict";a.d(e,"a",(function(){return u}));var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"base-drawer-bar-wrap"},[a("a-drawer",t._b({staticClass:"base-drawer-bar-top-wrap",attrs:{width:t.topWidth,height:t.topHeight,title:t.topTitle,placement:"top",closable:!1,visible:t.topVisible,wrapClassName:t.topWrapClassName,mask:t.topMask},on:{close:t.onClose}},"a-drawer",t.$props,!1),[a("span",{directives:[{name:"show",rawName:"v-show",value:t.showClose,expression:"showClose"}],staticClass:"top-close-text",domProps:{textContent:t._s(t.closeText)},on:{click:t.onClose}}),t._t("top")],2),a("a-drawer",t._b({staticClass:"base-drawer-bar-bottom-wrap",attrs:{width:t.bottomWidth,height:t.bottomHeight,title:t.bottomTitle,placement:"bottom",closable:!1,visible:t.bottomVisible,wrapClassName:t.bottomWrapClassName,mask:t.bottomMask},on:{close:t.onClose}},"a-drawer",t.$props,!1),[t._t("bottom")],2)],1)},i=[],o={name:"BaseDrawer",data:function(){return{topHeight:"3.5rem",bottomHeight:"3.5rem"}},props:{showClose:{type:[Boolean],default:!1,required:!1},closeText:{type:[String],default:"取消",required:!1},topWrapClassName:{type:[String],default:"left",required:!1},bottomWrapClassName:{type:[String],default:"left",required:!1},topHeightPercent:{type:[String],default:"7.25%",required:!1},bottomHeightPercent:{type:[String],default:"7.25%",required:!1},topWidth:{type:[String],default:"",required:!1},bottomWidth:{type:[String],default:"",required:!1},topTitle:{type:[String],default:"",required:!1},bottomTitle:{type:[String],default:"",required:!1},topVisible:{type:[Boolean],default:!0,required:!1},bottomVisible:{type:[Boolean],default:!0,required:!1},topMask:{type:[Boolean],default:!1,required:!1},bottomMask:{type:[Boolean],default:!1,required:!1}},methods:{onClose:function(){this.$emit("update:topVisible",!this.topVisible),this.$emit("update:bottomVisible",!this.bottomVisible)},resizeBaseDrawerBarHeight:function(){var t=window.innerHeight||document.documentElement.clientHeight;this.topHeight=t*parseFloat(this.topHeightPercent)*.01,this.bottomHeight=t*parseFloat(this.bottomHeightPercent)*.01}},watch:{topHeightPercent:function(){this.resizeBaseDrawerBarHeight()},bottomHeightPercent:function(){this.resizeBaseDrawerBarHeight()}},mounted:function(){this.resizeBaseDrawerBarHeight(),window.addEventListener("resize",this.resizeBaseDrawerBarHeight)},destroyed:function(){window.removeEventListener("resize",this.resizeBaseDrawerBarHeight)}},s=o,n=(a("ea18"),a("2877")),l=Object(n["a"])(s,r,i,!1,null,null,null),c=l.exports,d=a("b5d2"),p=180,u={mixins:[d["a"]],components:{BaseDrawerBar:c},data:function(){return{topDrawerBarVisible:!1,bottomDrawerBarVisible:!1,resetTopDrawerBarHeightPercent:"7.25%",resetBottomDrawerBarHeightPercent:"7.25%",topDrawerBarHeightPercent:"7.25%",bottomDrawerBarHeightPercent:"7.25%"}},computed:{},methods:{resetDrawerBar:function(){this.topDrawerBarHeightPercent=this.resetTopDrawerBarHeightPercent,this.bottomDrawerBarHeightPercent=this.resetBottomDrawerBarHeightPercent},showDrawerBar:function(){var t=this;this.hideDrawerBar();var e=setTimeout((function(){t.topDrawerBarVisible=!0,t.bottomDrawerBarVisible=!0,clearTimeout(e)}),p),a=setTimeout((function(){t.hideTabBarCenter(),clearTimeout(a)}),p+200)},hideDrawerBar:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.topDrawerBarVisible=!1,this.bottomDrawerBarVisible=!1,this.resetDrawerBar(),t&&this.showTabBarCenter()},showTopDrawerBar:function(t){var e=this;this.hideDrawerBar();var a=setTimeout((function(){e.topDrawerBarHeightPercent=t,e.topDrawerBarVisible=!0,clearTimeout(a)}),p)},showBottomDrawerBar:function(t){var e=this;this.hideDrawerBar();var a=setTimeout((function(){e.bottomDrawerBarHeightPercent=t,e.bottomDrawerBarVisible=!0,e.hideTabBarCenter(),clearTimeout(a)}),p)}}}},9758:function(t,e,a){var r=a("0b6e");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=a("499e").default;i("08fffaa4",r,!0,{sourceMap:!1,shadowMode:!1})},ea18:function(t,e,a){"use strict";a("ecf6")},ecf6:function(t,e,a){var r=a("271f");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=a("499e").default;i("a66c1812",r,!0,{sourceMap:!1,shadowMode:!1})}}]);