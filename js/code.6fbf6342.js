(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["code"],{ab03:function(t,o,n){"use strict";n.r(o);var e=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"code-editors"},t._l(t.codeEditors,(function(o){return n("a-card",{key:o.name,staticStyle:{width:"300px"},attrs:{hoverable:""}},[n("template",{staticClass:"ant-card-actions",slot:"actions"},[n("a-tooltip",{attrs:{placement:"bottom",title:"Github","get-popup-container":t.getPopupContainer}},[n("a-icon",{attrs:{type:"github"},on:{click:function(n){return t.openWindow(o.githubUrl)}}})],1),n("a-tooltip",{attrs:{placement:"bottom",title:"OfficialSite","get-popup-container":t.getPopupContainer}},[n("a-icon",{attrs:{type:"home"},on:{click:function(n){return t.openWindow(o.officialSiteUrl)}}})],1),n("a-tooltip",{attrs:{placement:"bottom",title:"Document","get-popup-container":t.getPopupContainer}},[n("a-icon",{attrs:{type:"file"},on:{click:function(n){return t.openWindow(o.documentUrl)}}})],1)],1),n("a-card-meta",{attrs:{title:o.name,description:o.description},on:{click:function(n){return t.pushRouter(o.routePath)}}})],2)})),1)},i=[],a=n("a18c"),r={name:"CodeView",data:function(){return{codeEditors:[{name:"MonacoEditor",description:"MonacoEditor",author:"nhn",githubUrl:"https://github.com/nhn/tui.editor",officialSiteUrl:"https://ui.toast.com/tui-editor/",documentUrl:"https://github.com/nhn/tui.editor",routePath:"/editor/markdown/tuiEditor"}]}},methods:{openWindow:function(t){window.open(t)},pushRouter:function(t){a["a"].push(t)},getPopupContainer:function(t){return t.parentElement}}},c=r,u=n("2877"),p=Object(u["a"])(c,e,i,!1,null,null,null);o["default"]=p.exports}}]);