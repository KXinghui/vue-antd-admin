(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["table"],{"068d":function(e,t,n){"use strict";n("0961")},"0961":function(e,t,n){var a=n("1c6a");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("499e").default;i("a8f57ddc",a,!0,{sourceMap:!1,shadowMode:!1})},"1c6a":function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,"",""]),e.exports=t},cf34:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("a-table",{attrs:{bordered:"",columns:e.columns,components:e.tableComponents,"data-source":e.data,"custom-row":e.customRow}}),e.contextmenuVisible?n("a-menu",{staticClass:"contextmenustyle",style:e.contextmenuStyle,attrs:{id:e.contextmenuId}},[n("a-menu-item",{key:"1"},[e._v(" 1st menu item ")]),n("a-menu-item",{key:"2"},[e._v(" 2nd menu item ")]),n("a-menu-item",{key:"3"},[e._v(" 3rd menu item ")]),e._t("contextmenu")],2):e._e()],1)},i=[],o=n("f5c8"),d=[{title:"Date",dataIndex:"date",width:200,isResize:!0,minWidth:100,maxWidth:300},{title:"Amount",dataIndex:"amount",width:100,isResize:!1,minWidth:100,maxWidth:300},{title:"Type",dataIndex:"type",width:100,isResize:!0,minWidth:100,maxWidth:300},{title:"Note",dataIndex:"note",width:100,isResize:!0,minWidth:100,maxWidth:300}],s=[{key:0,date:"2018-02-11",amount:120,type:"income",note:"transfer"},{key:1,date:"2018-03-11",amount:243,type:"income",note:"transfer"},{key:2,date:"2018-04-11",amount:98,type:"income",note:"transfer"}],c={name:"ResizeTable",mixins:[o["a"]],data:function(){return{data:s,columns:d}}},m=c,u=(n("068d"),n("2877")),l=Object(u["a"])(m,a,i,!1,null,null,null);t["default"]=l.exports},ef59:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("base-table",{attrs:{selectedRowKeys:e.selectedRowKeys,"row-selection-type":e.rowSelectionType,data:e.data,columns:e.columns},on:{"update:selectedRowKeys":function(t){e.selectedRowKeys=t},"update:selected-row-keys":function(t){e.selectedRowKeys=t}},scopedSlots:e._u([{key:"title",fn:function(){return[e._v(" 我是表格标题 ")]},proxy:!0},{key:"footer",fn:function(){return[e._v(" 我是表格尾部 ")]},proxy:!0}])})},i=[],o=n("e934"),d={name:"TableTest",components:{BaseTable:o["default"]},data:function(){return{rowSelectionType:"checkbox",selectedRowKeys:[],columns:[{title:"Date",dataIndex:"date",width:200,isResize:!0,minWidth:50,maxWidth:300,ellipsis:!0,fixed:"",align:"center"},{title:"Amount",dataIndex:"amount",width:100,isResize:!1,minWidth:100,maxWidth:300},{title:"Type",dataIndex:"type",width:100,isResize:!0,minWidth:100,maxWidth:300},{title:"Note",dataIndex:"note",width:100,isResize:!0,minWidth:100,maxWidth:300},{title:"Action",dataIndex:"action",key:"action",width:200,isResize:!0,minWidth:100,maxWidth:300}],data:[{id:"001",key:0,date:"2018-02-11",amount:120,type:"income",note:"transfer"},{id:"002",key:1,date:"2018-03-11",amount:243,type:"income",note:"transfer"},{id:"003",key:2,date:"2018-04-11",amount:98,type:"income",note:"transfer"},{id:"004",key:3,date:"2018-04-11",amount:98,type:"income",note:"transfer"},{id:"005",key:4,date:"2018-04-11",amount:98,type:"income",note:"transfer"},{id:"006",key:5,date:"2018-04-11",amount:98,type:"income",note:"transfer"},{id:"007",key:6,date:"2018-04-11",amount:98,type:"income",note:"transfer"},{id:"008",key:7,date:"2018-04-11",amount:98,type:"income",note:"transfer"}]}},updated:function(){console.log("table 页面选中的     "+this.selectedRowKeys)}},s=d,c=n("2877"),m=Object(c["a"])(s,a,i,!1,null,null,null);t["default"]=m.exports}}]);