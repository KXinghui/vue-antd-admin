(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["test"],{2643:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-tree",{attrs:{checkable:"","show-line":e.showLine,"show-icon":e.showIcon,"expanded-keys":e.expandedKeys,"auto-expand-parent":e.autoExpandParent,"selected-keys":e.selectedKeys,"tree-data":e.treeData},on:{expand:e.onExpand,select:e.onSelect},model:{value:e.checkedKeys,callback:function(t){e.checkedKeys=t},expression:"checkedKeys"}},[n("a-icon",{attrs:{slot:"smile",type:"smile-o"},slot:"smile"}),n("a-icon",{attrs:{slot:"meh",type:"smile-o"},slot:"meh"})],1)},l=[],s=[{title:"0-0",key:"0-0",children:[{title:"0-0-0",key:"0-0-0",children:[{title:"0-0-0-0",key:"0-0-0-0"},{title:"0-0-0-1",key:"0-0-0-1"},{title:"0-0-0-2",key:"0-0-0-2"}]},{title:"0-0-1",key:"0-0-1",children:[{title:"0-0-1-0",key:"0-0-1-0"},{title:"0-0-1-1",key:"0-0-1-1"},{title:"0-0-1-2",key:"0-0-1-2"}]},{title:"0-0-2",key:"0-0-2"}]},{title:"0-1",key:"0-1",children:[{title:"0-1-0-0",key:"0-1-0-0"},{title:"0-1-0-1",key:"0-1-0-1"},{title:"0-1-0-2",key:"0-1-0-2"}]},{title:"0-2",key:"0-2"}],c={data:function(){return{expandedKeys:["0-0-0","0-0-1"],checkedKeys:["0-0-0"],selectedKeys:["0-0-0","0-0-1"],treeData:s,autoExpandParent:!0,showLine:!0,showIcon:!0}},watch:{checkedKeys:function(e){console.log("onCheck",e)}},methods:{onExpand:function(e){console.log("onExpand",e),this.expandedKeys=e,this.autoExpandParent=!1},onCheck:function(e){console.log("onCheck",e),this.checkedKeys=e},onSelect:function(e,t){console.log("onSelect",t),this.selectedKeys=e}}},a=c,i=n("2877"),d=Object(i["a"])(a,o,l,!1,null,null,null);t["default"]=d.exports}}]);