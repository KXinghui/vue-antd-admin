(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["im-chat"],{"00e1":function(t,e,a){var r=a("2126");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=a("499e").default;i("8ead2416",r,!0,{sourceMap:!1,shadowMode:!1})},"0b6e":function(t,e,a){var r=a("24fb");e=r(!1),e.push([t.i,".chat-wrap{height:100%;background-color:#f5f5f5}",""]),t.exports=e},2126:function(t,e,a){var r=a("24fb");e=r(!1),e.push([t.i,".chat-drawer-left,.chat-drawer-middle,.chat-drawer-right{display:flex;flex-direction:row;align-items:center;height:100%;border:1px solid red}.chat-drawer-left{justify-content:flex-start}.chat-drawer-middle{justify-content:space-between}.chat-drawer-right{justify-content:flex-end;align-content:flex-end}.icon{cursor:pointer}.chat-drawer-left .icon{padding:0 1.2rem 0 0}.chat-drawer-right .icon{padding-right:1.2rem}.chat-drawer-right .icon:last-of-type{padding-right:0}",""]),t.exports=e},"3b62":function(t,e,a){"use strict";a("9758")},"45d1":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"chat-wrap"},[a("chat-header",{attrs:{showDrawerIcon:""}},[a("div",{attrs:{slot:"left"},slot:"left"},[t._v("聊天")]),a("div",{attrs:{slot:"right"},slot:"right"},[a("icon",{attrs:{icon:"Antd_search"},on:{click:function(e){return t.pushRoute("/search")}}}),a("a-popover",{attrs:{placement:"bottomRight"}},[a("template",{slot:"content"},[a("a-menu",[a("a-menu-item",[a("a",{attrs:{href:"javascript:;"}},[t._v("1st menu item")])]),a("a-menu-item",[a("a",{attrs:{href:"javascript:;"}},[t._v("2nd menu item")])]),a("a-menu-item",[a("a",{attrs:{href:"javascript:;"}},[t._v("3rd menu item")])])],1)],1),a("icon",{attrs:{icon:"Antd_plus-circle"}})],2)],1)]),a("chat-tab-bar",{attrs:{"chat-tab-bars":t.chatTabBars,"active-item-key":t.activeKey,color:t.color,"active-color":t.activeColor}}),a("chat-drawer",{attrs:{width:"300px",visible:t.showDrawer,placement:t.drawerPlacement},on:{"update:visible":function(e){t.showDrawer=e}}},[a("identity-avatar",{attrs:{identity:t.identity,avatarSize:58,avatarShape:"square"}})],1)],1)},i=[],n=a("5530"),c=a("a7fac"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-drawer",t._b({staticClass:"chat-drawer-wrap",attrs:{width:t.width,title:t.title,placement:t.placement,closable:!1,visible:t.visible,wrapClassName:t.wrapClassName,mask:t.mask},on:{close:t.onClose}},"a-drawer",t.$props,!1),[t._t("default")],2)},l=[],s=(a("caad"),{name:"ChatDrawer",data:function(){return{}},props:{wrapClassName:{type:[String],default:"left",required:!1},width:{type:[String],default:"",required:!1},title:{type:[String],default:"",required:!1},visible:{type:[Boolean],default:!0,required:!1},mask:{type:[Boolean],default:!0,required:!1},placement:{type:[String],default:"left",required:!1,validator:function(t){return["left","right"].includes(t)}},defaultBack:{type:[Boolean],default:!0,required:!1},backRoute:{type:[Object],default:function(){return null},required:!1}},methods:{onClose:function(){this.$emit("update:visible",!this.visible)},changeChatRecord:function(t){t&&t.target&&this.$emit("changeChatRecord",t.target.value,t.target.checked)},handleButtonClick:function(t){console.log("click left button",t)},handleMenuClick:function(t){console.log("click",t)}},mounted:function(){}}),d=s,u=(a("7fd0"),a("2877")),f=Object(u["a"])(d,o,l,!1,null,null,null),h=f.exports,p=a("39a9"),m=a("2f62"),w=a("ae88"),v={name:"ChatGroupMember",mixins:[c["a"]],components:{ChatDrawer:h,IdentityAvatar:p["a"]},data:function(){return{chatActiveTabIndex:0}},computed:Object(n["a"])({showDrawer:{get:function(){return this.$store.state.admin.layoutSetting.showDrawer},set:function(t){this[w["a"].SHOW_DRAWER](t)}}},Object(m["d"])({identity:function(t){return t.identity.identity},drawerPlacement:function(t){return t.admin.layoutSetting.drawerPlacement}})),methods:Object(n["a"])({},Object(m["c"])("admin",[w["a"].SHOW_DRAWER]))},b=v,g=(a("3b62"),Object(u["a"])(b,r,i,!1,null,null,null));e["default"]=g.exports},"7fd0":function(t,e,a){"use strict";a("00e1")},9758:function(t,e,a){var r=a("0b6e");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=a("499e").default;i("08fffaa4",r,!0,{sourceMap:!1,shadowMode:!1})}}]);