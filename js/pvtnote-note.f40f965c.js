(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pvtnote-note"],{"0538":function(t,e,r){"use strict";var a=r("1c0b"),o=r("861d"),n=[].slice,i={},s=function(t,e,r){if(!(e in i)){for(var a=[],o=0;o<e;o++)a[o]="a["+o+"]";i[e]=Function("C,a","return new C("+a.join(",")+")")}return i[e](t,r)};t.exports=Function.bind||function(t){var e=a(this),r=n.call(arguments,1),i=function(){var a=r.concat(n.call(arguments));return this instanceof i?s(e,a.length,a):e.apply(t,a)};return o(e.prototype)&&(i.prototype=e.prototype),i}},"271f":function(t,e,r){var a=r("24fb");e=a(!1),e.push([t.i,".base-drawer-bar-wrap .ant-drawer-wrapper-body{height:100%}.base-drawer-bar-bottom-wrap .ant-drawer-content .ant-drawer-wrapper-body .ant-drawer-body,.base-drawer-bar-top-wrap .ant-drawer-content .ant-drawer-wrapper-body .ant-drawer-body{height:100%;padding:0 1rem;display:flex;justify-content:space-between;align-items:center}.base-drawer-bar-wrap .top-close-text{cursor:pointer}.base-drawer-bar-bottom-wrap .identity-avatar,.base-drawer-bar-top-wrap .identity-avatar{padding:0}",""]),t.exports=e},"2db8":function(t,e,r){var a=r("a608");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=r("499e").default;o("283705ea",a,!0,{sourceMap:!1,shadowMode:!1})},3410:function(t,e,r){var a=r("23e7"),o=r("d039"),n=r("7b0b"),i=r("e163"),s=r("e177"),c=o((function(){i(1)}));a({target:"Object",stat:!0,forced:c,sham:!s},{getPrototypeOf:function(t){return i(n(t))}})},"4ae1":function(t,e,r){var a=r("23e7"),o=r("d066"),n=r("1c0b"),i=r("825a"),s=r("861d"),c=r("7c73"),u=r("0538"),l=r("d039"),p=o("Reflect","construct"),d=l((function(){function t(){}return!(p((function(){}),[],t)instanceof t)})),h=!l((function(){p((function(){}))})),b=d||h;a({target:"Reflect",stat:!0,forced:b,sham:b},{construct:function(t,e){n(t),i(e);var r=arguments.length<3?t:n(arguments[2]);if(h&&!d)return p(t,e,r);if(t==r){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var a=[null];return a.push.apply(a,e),new(u.apply(t,a))}var o=r.prototype,l=c(s(o)?o:Object.prototype),b=Function.apply.call(t,l,e);return s(b)?b:l}})},"5bb5":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"note-wrap"},[r("base-header",{attrs:{showDrawerIcon:""}},[r("div",{attrs:{slot:"left"},slot:"left"},[t._v("便签")]),r("div",{attrs:{slot:"right"},slot:"right"},[r("icon",{attrs:{icon:"IconFont_batch-op"},on:{click:t.openBatchDrawerBar}}),r("icon",{attrs:{icon:"Antd_search"},on:{click:function(e){return t.pushRoute("/search")}}})],1)]),r("base-tab-bar",{attrs:{"base-tab-bars":t.baseTabBars,"active-item-key":t.activeKey,color:t.color,"active-color":t.activeColor}}),r("base-drawer",{attrs:{width:"300px",visible:t.showDrawer,placement:t.drawerPlacement},on:{"update:visible":function(e){t.showDrawer=e}}},[r("identity-avatar",{attrs:{identity:t.identity,avatarSize:58,avatarShape:"square"}})],1),r("base-drawer-bar",{attrs:{topVisible:t.topDrawerBarVisible,bottomVisible:t.bottomDrawerBarVisible,topHeightPercent:t.topDrawerBarHeightPercent,bottomHeightPercent:t.bottomDrawerBarHeightPercent},on:{"update:topVisible":function(e){t.topDrawerBarVisible=e},"update:top-visible":function(e){t.topDrawerBarVisible=e},"update:bottomVisible":function(e){t.bottomDrawerBarVisible=e},"update:bottom-visible":function(e){t.bottomDrawerBarVisible=e}}},[r("template",{slot:"top"},[t.management.batch?[r("span",{on:{click:t.closeDrawerBar}},[t._v("取消")]),r("span",[t._v("已选择"),r("span",{staticClass:"selected-num",domProps:{textContent:t._s(t.selectedNoteIds.length)}}),t._v("项")]),r("span",{on:{click:t.closeDrawerBar}},[t._v("全选")])]:t._e()],2),r("template",{slot:"bottom"},[t.management.batch&&!t.operation.currentOp?[r("base-tab-bar-item",{attrs:{item:{index:"move",icon:"Antd_drag",text:"移动",route:!1}},on:{click:t.moveNote}}),r("base-tab-bar-item",{attrs:{item:{index:"top",icon:t.isTopOnBatch?"Antd_vertical-align-top":"Antd_vertical-align-bottom",text:t.isTopOnBatch?"置顶":"取消置顶",route:!1}},on:{click:t.topNote}}),r("base-tab-bar-item",{attrs:{item:{index:"delete",icon:"Antd_delete",text:"删除",route:!1}},on:{click:t.deleteNote}})]:t._e(),"batch-move"==t.operation.currentOp?[r("div",{staticClass:"operaton-btn-wrap"}),"batch-move"==t.operation.currentOp?[t._v(" 移动便签 ")]:t._e()]:t._e()],2)],2)],1)},o=[],n=(r("4160"),r("159b"),r("5530")),i=r("b5d2"),s=r("9185"),c=r("39a9"),u=r("2f62"),l=r("ae88"),p=r("eb77"),d=r("05c3"),h=r("d4ec"),b=r("bee2");function f(t,e){return f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},f(t,e)}function w(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}r("4ae1"),r("3410");function m(t){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},m(t)}r("d3b7"),r("25f0");function v(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var g=r("53ca");function B(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(t,e){return!e||"object"!==Object(g["a"])(e)&&"function"!==typeof e?B(t):e}function D(t){var e=v();return function(){var r,a=m(t);if(e){var o=m(this).constructor;r=Reflect.construct(a,arguments,o)}else r=a.apply(this,arguments);return y(this,r)}}r("99af");var O=r("ade3"),H=r("3d83"),_=function(){function t(e){Object(h["a"])(this,t),Object(O["a"])(this,"namespace",void 0),this.namespace=e}return Object(b["a"])(t,[{key:"buildUrl",value:function(t){return"".concat(this.namespace).concat(t)}},{key:"insert",value:function(t,e){return H["a"].post(this.buildUrl(""),t,e)}}]),t}(),T=_,x=function(t){w(r,t);var e=D(r);function r(){return Object(h["a"])(this,r),e.apply(this,arguments)}return Object(b["a"])(r,[{key:"listAll",value:function(){var t="/notes";return H["a"].post(t)}},{key:"listByNoteGroup",value:function(t){var e="/noteGroup/".concat(t,"/note");return H["a"].post(e)}},{key:"topNotes",value:function(t,e){var r="/top";return H["a"].post(r,{noteIds:t,isTop:e?1:0})}}]),r}(T),j=new x("/note"),k=j,P=function(t){w(r,t);var e=D(r);function r(){return Object(h["a"])(this,r),e.apply(this,arguments)}return Object(b["a"])(r,[{key:"listAll",value:function(){var t="/noteGroups";return H["a"].post(t)}}]),r}(T),C=new P("/noteGroup"),N=C,V={name:"Note",mixins:[i["a"],s["a"]],components:{IdentityAvatar:c["a"],BaseTabBarItem:p["a"]},data:function(){return{msName:"pvtnote",activeTabIndex:0,management:{batch:!1},operation:{currentOp:"",batch:["delete","move","top","cancelTop","selectAll"]},notes:[],selectedNoteIds:[]}},computed:Object(n["a"])(Object(n["a"])({},Object(u["d"])({identity:function(t){return t.identity.identity}})),{},{isTopOnBatch:function(){var t=!0;if(this.management.batch){var e=0,r=this.selectedNoteIds;this.notes.forEach((function(t){r.inclued(t.id)&&1==t.isTop&&e++}));var a=r.length;0!=a&&e==a&&(t=!1)}return t}}),methods:Object(n["a"])(Object(n["a"])({getSelectedNotes:function(){var t=[],e=this.selectedNoteIds;return this.notes.forEach((function(r){e.inclued(r.id)&&t.push(Object.assign({},r))})),t}},Object(u["c"])("admin",[l["a"].SHOW_DRAWER])),{},{closeDrawerBar:function(){var t=this.management.batch;t&&(this.management.batch=!this.management.batch,this.hideDrawerBar())},openBatchDrawerBar:function(){this.hideDrawerBar(),this.management.batch=!0,this.operation.currentOp="",this.showDrawerBar()},listNotes:function(){var t=this;this.noteGroupId?k.listByNoteGroup(this.noteGroupId).then((function(e){t.notes=e.data})):k.listAll().then((function(e){t.notes=e.data}))},moveNote:function(){var t=this;this.operation.currentOp="batch-move",this.hideDrawerBar(),N.listAll().then((function(e){t.noteGroups=e.data,t.showBottomDrawerBar("80%")}))},topNote:function(){this.isTopOnBatch;var t=this.isTopOnBatch,e=t?"置顶":"取消置顶";Object(d["a"])({title:e,content:function(t){return t("div",{style:{color:"red"},text:"确定要".concat(e,"所选便签？")})},cancelText:"取消",okText:e,onOk:function(){console.log("OK"),k.topNotes(this.selectedNoteIds,t)},onCancel:function(){}})},deleteNote:function(){var t=this.$createElement;Object(d["a"])({title:"删除便签",content:function(){return t("div",{style:"color:red;"},["确定要删除所选便签？"])},cancelText:"取消",okText:"删除",okType:"danger",onOk:function(){console.log("OK")},onCancel:function(){}})}}),mounted:function(){this.listNotes()}},q=V,S=(r("e053"),r("2877")),I=Object(S["a"])(q,a,o,!1,null,null,null);e["default"]=I.exports},9185:function(t,e,r){"use strict";r.d(e,"a",(function(){return p}));var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"base-drawer-bar-wrap"},[r("a-drawer",t._b({staticClass:"base-drawer-bar-top-wrap",attrs:{width:t.topWidth,height:t.topHeight,title:t.topTitle,placement:"top",closable:!1,visible:t.topVisible,wrapClassName:t.topWrapClassName,mask:t.topMask},on:{close:t.onClose}},"a-drawer",t.$props,!1),[r("span",{directives:[{name:"show",rawName:"v-show",value:t.showClose,expression:"showClose"}],staticClass:"top-close-text",domProps:{textContent:t._s(t.closeText)},on:{click:t.onClose}}),t._t("top")],2),r("a-drawer",t._b({staticClass:"base-drawer-bar-bottom-wrap",attrs:{width:t.bottomWidth,height:t.bottomHeight,title:t.bottomTitle,placement:"bottom",closable:!1,visible:t.bottomVisible,wrapClassName:t.bottomWrapClassName,mask:t.bottomMask},on:{close:t.onClose}},"a-drawer",t.$props,!1),[t._t("bottom")],2)],1)},o=[],n={name:"BaseDrawer",data:function(){return{topHeight:"3.5rem",bottomHeight:"3.5rem"}},props:{showClose:{type:[Boolean],default:!1,required:!1},closeText:{type:[String],default:"取消",required:!1},topWrapClassName:{type:[String],default:"left",required:!1},bottomWrapClassName:{type:[String],default:"left",required:!1},topHeightPercent:{type:[String],default:"7.25%",required:!1},bottomHeightPercent:{type:[String],default:"7.25%",required:!1},topWidth:{type:[String],default:"",required:!1},bottomWidth:{type:[String],default:"",required:!1},topTitle:{type:[String],default:"",required:!1},bottomTitle:{type:[String],default:"",required:!1},topVisible:{type:[Boolean],default:!0,required:!1},bottomVisible:{type:[Boolean],default:!0,required:!1},topMask:{type:[Boolean],default:!1,required:!1},bottomMask:{type:[Boolean],default:!1,required:!1}},methods:{onClose:function(){this.$emit("update:topVisible",!this.topVisible),this.$emit("update:bottomVisible",!this.bottomVisible)},resizeBaseDrawerBarHeight:function(){var t=window.innerHeight||document.documentElement.clientHeight;this.topHeight=t*parseFloat(this.topHeightPercent)*.01,this.bottomHeight=t*parseFloat(this.bottomHeightPercent)*.01}},watch:{topHeightPercent:function(){this.resizeBaseDrawerBarHeight()},bottomHeightPercent:function(){this.resizeBaseDrawerBarHeight()}},mounted:function(){this.resizeBaseDrawerBarHeight(),window.addEventListener("resize",this.resizeBaseDrawerBarHeight)},destroyed:function(){window.removeEventListener("resize",this.resizeBaseDrawerBarHeight)}},i=n,s=(r("ea18"),r("2877")),c=Object(s["a"])(i,a,o,!1,null,null,null),u=c.exports,l=180,p={components:{BaseDrawerBar:u},data:function(){return{topDrawerBarVisible:!1,bottomDrawerBarVisible:!1,resetTopDrawerBarHeightPercent:"7.25%",resetBottomDrawerBarHeightPercent:"7.25%",topDrawerBarHeightPercent:"7.25%",bottomDrawerBarHeightPercent:"7.25%"}},computed:{},methods:{resetDrawerBar:function(){this.topDrawerBarHeightPercent=this.resetTopDrawerBarHeightPercent,this.bottomDrawerBarHeightPercent=this.resetBottomDrawerBarHeightPercent},showDrawerBar:function(){var t=this;this.hideDrawerBar();var e=setTimeout((function(){t.topDrawerBarVisible=!0,t.bottomDrawerBarVisible=!0,clearTimeout(e)}),l)},hideDrawerBar:function(){this.topDrawerBarVisible=!1,this.bottomDrawerBarVisible=!1,this.resetDrawerBar()},showTopDrawerBar:function(t){var e=this;this.hideDrawerBar();var r=setTimeout((function(){e.topDrawerBarHeightPercent=t,e.topDrawerBarVisible=!0,clearTimeout(r)}),l)},showBottomDrawerBar:function(t){var e=this;this.hideDrawerBar();var r=setTimeout((function(){e.bottomDrawerBarHeightPercent=t,e.bottomDrawerBarVisible=!0,clearTimeout(r)}),l)}}}},a608:function(t,e,r){var a=r("24fb");e=a(!1),e.push([t.i,".note-wrap{height:100%;background-color:#f5f5f5}.selected-num{font-size:1rem;padding:0 .3rem}",""]),t.exports=e},e053:function(t,e,r){"use strict";r("2db8")},ea18:function(t,e,r){"use strict";r("ecf6")},ecf6:function(t,e,r){var a=r("271f");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=r("499e").default;o("a66c1812",a,!0,{sourceMap:!1,shadowMode:!1})}}]);