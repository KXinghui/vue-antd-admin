(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["note-group"],{"572b":function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"note-group-table"},[o("base-table",{attrs:{selectedRowKeys:e.selectedRowKeys,"row-selection-type":e.rowSelectionType,data:e.data,columns:e.columns,isBatch:!0},on:{"update:selectedRowKeys":function(t){e.selectedRowKeys=t},"update:selected-row-keys":function(t){e.selectedRowKeys=t},changePage:e.changePage},scopedSlots:e._u([{key:"baseTableTitle",fn:function(){return[e._v(" 我是表格标题 ")]},proxy:!0},{key:"baseTableFooter",fn:function(){return[e._v(" 我是表格尾部 ")]},proxy:!0}])},[o("div",{staticClass:"operation-bar",attrs:{slot:"header"},slot:"header"},[o("a-button",{directives:[{name:"has-pmsn",rawName:"v-has-pmsn",value:{key:"enCode",pmsns:["List"]},expression:"{ key: 'enCode', pmsns: ['List'] }"}],attrs:{type:"primary"}},[o("icon",{attrs:{icon:"Antd_search"}}),e._v("搜索")],1),o("a-button",{directives:[{name:"has-pmsn",rawName:"v-has-pmsn",value:{key:"enCode",pmsns:["Insert"]},expression:"{ key: 'enCode', pmsns: ['Insert'] }"}],attrs:{type:"primary"},on:{click:function(t){return e.openModal("Insert")}}},[o("icon",{attrs:{icon:"Antd_plus"}}),e._v("增加")],1),o("a-button",{directives:[{name:"has-pmsn",rawName:"v-has-pmsn",value:{key:"enCode",pmsns:["Update"]},expression:"{ key: 'enCode', pmsns: ['Update'] }"}],attrs:{type:"primary"},on:{click:function(t){return e.openModal("Update")}}},[o("icon",{attrs:{icon:"Antd_edit"}}),e._v("更新")],1),o("a-button",{directives:[{name:"has-pmsn",rawName:"v-has-pmsn",value:{key:"enCode",pmsns:["Delete"]},expression:"{ key: 'enCode', pmsns: ['Delete'] }"}],attrs:{type:"danger"}},[o("icon",{attrs:{icon:"Antd_delete"}}),e._v("删除")],1),o("a-button",{directives:[{name:"has-pmsn",rawName:"v-has-pmsn",value:{key:"enCode",pmsns:["Import"]},expression:"{ key: 'enCode', pmsns: ['Import'] }"}],attrs:{type:"primary"}},[o("icon",{attrs:{icon:"Antd_import"}}),e._v("导入")],1),o("a-button",{directives:[{name:"has-pmsn",rawName:"v-has-pmsn",value:{key:"enCode",pmsns:["Export"]},expression:"{ key: 'enCode', pmsns: ['Export'] }"}],attrs:{type:"primary"}},[o("icon",{attrs:{icon:"Antd_export"}}),e._v("导出")],1),o("a-button",{attrs:{type:"primary"}},[o("icon",{attrs:{icon:"Antd_setting"}}),e._v("设置")],1),o("a-button",{attrs:{type:"primary"},on:{click:e.reload}},[o("icon",{attrs:{icon:"Antd_reload"}}),e._v("刷新")],1)],1)]),o("base-modal",{attrs:{modalRefresh:e.modalRefresh,modalVisible:e.modalVisible,modalTitle:e.modalTitle,modalLoading:e.modalLoading},on:{"update:modalRefresh":function(t){e.modalRefresh=t},"update:modal-refresh":function(t){e.modalRefresh=t},"update:modalVisible":function(t){e.modalVisible=t},"update:modal-visible":function(t){e.modalVisible=t},"update:modalLoading":function(t){e.modalLoading=t},"update:modal-loading":function(t){e.modalLoading=t}}},["Insert"===e.form?[e._v(" 增加 "),o("a-form-model",e._b({attrs:{model:e.formModel,layout:e.formOption.layout}},"a-form-model",e.formItemLayout,!1),[o("a-form-model-item",{attrs:{label:"本地账号"}},[o("a-input",{attrs:{placeholder:"用户名/手机/邮箱","allow-clear":""},model:{value:e.formModel.localAccount,callback:function(t){e.$set(e.formModel,"localAccount",t)},expression:"formModel.localAccount"}})],1),o("a-form-model-item",{attrs:{label:"密码"}},[o("a-input-password",{attrs:{placeholder:"密码","allow-clear":""},model:{value:e.formModel.password,callback:function(t){e.$set(e.formModel,"password",t)},expression:"formModel.password"}})],1),o("a-form-model-item",[o("a-button",{attrs:{type:"primary"},on:{click:e.registerByLocalAccount}},[e._v(" 注册 ")])],1)],1)]:e._e(),"Update"===e.form?[e._v("更新")]:e._e(),o("template",{slot:"footer"})],2)],1)},n=[],s=o("e934"),i=o("362d"),r=o("c8d0"),d={name:"NoteTableView",mixins:[r["a"]],components:{BaseTable:s["default"],BaseModal:i["a"]},data:function(){return{form:"",formModel:{localAccount:"sentinel",password:"12321654"},rowSelectionType:"checkbox",selectedRowKeys:[],columns:[{title:"便签分组名称",dataIndex:"date",width:200,isResize:!0,minWidth:50,maxWidth:300,ellipsis:!0,fixed:"",align:"center"},{title:"便签分组创建时间",dataIndex:"createDate",width:100,isResize:!0,minWidth:100,maxWidth:300},{title:"Action",dataIndex:"action",key:"action",width:200,isResize:!0,minWidth:100,maxWidth:300}],data:[{id:"001",key:0,date:"2018-02-11",amount:120,type:"income",note:"transfer"},{id:"002",key:1,date:"2018-03-11",amount:243,type:"income",note:"transfer"},{id:"003",key:2,date:"2018-04-11",amount:98,type:"income",note:"transfer"},{id:"004",key:3,date:"2018-04-11",amount:98,type:"income",note:"transfer"},{id:"005",key:4,date:"2018-04-11",amount:98,type:"income",note:"transfer"},{id:"006",key:5,date:"2018-04-11",amount:98,type:"income",note:"transfer"},{id:"007",key:6,date:"2018-04-11",amount:98,type:"income",note:"transfer"},{id:"008",key:7,date:"2018-04-11",amount:98,type:"income",note:"transfer"}],modalRefresh:!1,modalVisible:!1,modalTitle:"",modalLoading:!0}},methods:{registerByLocalAccount:function(){},reload:function(){this.reload()},openModal:function(e){console.log("打开表单："+e),this.form=e,this.modalLoading=!1,this.modalVisible=!0,this.modalRefresh=!0,"Insert"===e?this.modalTitle="增加便签":"Update"===e&&(this.modalTitle="更新便签")},changePage:function(e,t){console.log("当前页码为： "+e+"当前每页条数为： "+t)}}},l=d,m=o("2877"),c=Object(m["a"])(l,a,n,!1,null,null,null);t["default"]=c.exports}}]);