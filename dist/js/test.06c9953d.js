(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["test"],{2643:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-tree",{attrs:{checkable:"","show-line":t.showLine,"show-icon":t.showIcon,"expanded-keys":t.expandedKeys,"auto-expand-parent":t.autoExpandParent,"selected-keys":t.selectedKeys,"tree-data":t.treeData},on:{expand:t.onExpand,select:t.onSelect},model:{value:t.checkedKeys,callback:function(e){t.checkedKeys=e},expression:"checkedKeys"}},[n("a-icon",{attrs:{slot:"smile",type:"smile-o"},slot:"smile"}),n("a-icon",{attrs:{slot:"meh",type:"smile-o"},slot:"meh"})],1)},o=[],i=[{title:"0-0",key:"0-0",children:[{title:"0-0-0",key:"0-0-0",children:[{title:"0-0-0-0",key:"0-0-0-0"},{title:"0-0-0-1",key:"0-0-0-1"},{title:"0-0-0-2",key:"0-0-0-2"}]},{title:"0-0-1",key:"0-0-1",children:[{title:"0-0-1-0",key:"0-0-1-0"},{title:"0-0-1-1",key:"0-0-1-1"},{title:"0-0-1-2",key:"0-0-1-2"}]},{title:"0-0-2",key:"0-0-2"}]},{title:"0-1",key:"0-1",children:[{title:"0-1-0-0",key:"0-1-0-0"},{title:"0-1-0-1",key:"0-1-0-1"},{title:"0-1-0-2",key:"0-1-0-2"}]},{title:"0-2",key:"0-2"}],a={data:function(){return{expandedKeys:["0-0-0","0-0-1"],checkedKeys:["0-0-0"],selectedKeys:["0-0-0","0-0-1"],treeData:i,autoExpandParent:!0,showLine:!0,showIcon:!0}},watch:{checkedKeys:function(t){console.log("onCheck",t)}},methods:{onExpand:function(t){console.log("onExpand",t),this.expandedKeys=t,this.autoExpandParent=!1},onCheck:function(t){console.log("onCheck",t),this.checkedKeys=t},onSelect:function(t,e){console.log("onSelect",e),this.selectedKeys=t}}},s=a,f=n("2877"),h=Object(f["a"])(s,r,o,!1,null,null,null);e["default"]=h.exports},"69a0":function(t,e,n){(function(e){t.exports=e()})((function(t){"use strict";var e=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];function n(t,e){var n=t[0],r=t[1],o=t[2],i=t[3];n+=(r&o|~r&i)+e[0]-680876936|0,n=(n<<7|n>>>25)+r|0,i+=(n&r|~n&o)+e[1]-389564586|0,i=(i<<12|i>>>20)+n|0,o+=(i&n|~i&r)+e[2]+606105819|0,o=(o<<17|o>>>15)+i|0,r+=(o&i|~o&n)+e[3]-1044525330|0,r=(r<<22|r>>>10)+o|0,n+=(r&o|~r&i)+e[4]-176418897|0,n=(n<<7|n>>>25)+r|0,i+=(n&r|~n&o)+e[5]+1200080426|0,i=(i<<12|i>>>20)+n|0,o+=(i&n|~i&r)+e[6]-1473231341|0,o=(o<<17|o>>>15)+i|0,r+=(o&i|~o&n)+e[7]-45705983|0,r=(r<<22|r>>>10)+o|0,n+=(r&o|~r&i)+e[8]+1770035416|0,n=(n<<7|n>>>25)+r|0,i+=(n&r|~n&o)+e[9]-1958414417|0,i=(i<<12|i>>>20)+n|0,o+=(i&n|~i&r)+e[10]-42063|0,o=(o<<17|o>>>15)+i|0,r+=(o&i|~o&n)+e[11]-1990404162|0,r=(r<<22|r>>>10)+o|0,n+=(r&o|~r&i)+e[12]+1804603682|0,n=(n<<7|n>>>25)+r|0,i+=(n&r|~n&o)+e[13]-40341101|0,i=(i<<12|i>>>20)+n|0,o+=(i&n|~i&r)+e[14]-1502002290|0,o=(o<<17|o>>>15)+i|0,r+=(o&i|~o&n)+e[15]+1236535329|0,r=(r<<22|r>>>10)+o|0,n+=(r&i|o&~i)+e[1]-165796510|0,n=(n<<5|n>>>27)+r|0,i+=(n&o|r&~o)+e[6]-1069501632|0,i=(i<<9|i>>>23)+n|0,o+=(i&r|n&~r)+e[11]+643717713|0,o=(o<<14|o>>>18)+i|0,r+=(o&n|i&~n)+e[0]-373897302|0,r=(r<<20|r>>>12)+o|0,n+=(r&i|o&~i)+e[5]-701558691|0,n=(n<<5|n>>>27)+r|0,i+=(n&o|r&~o)+e[10]+38016083|0,i=(i<<9|i>>>23)+n|0,o+=(i&r|n&~r)+e[15]-660478335|0,o=(o<<14|o>>>18)+i|0,r+=(o&n|i&~n)+e[4]-405537848|0,r=(r<<20|r>>>12)+o|0,n+=(r&i|o&~i)+e[9]+568446438|0,n=(n<<5|n>>>27)+r|0,i+=(n&o|r&~o)+e[14]-1019803690|0,i=(i<<9|i>>>23)+n|0,o+=(i&r|n&~r)+e[3]-187363961|0,o=(o<<14|o>>>18)+i|0,r+=(o&n|i&~n)+e[8]+1163531501|0,r=(r<<20|r>>>12)+o|0,n+=(r&i|o&~i)+e[13]-1444681467|0,n=(n<<5|n>>>27)+r|0,i+=(n&o|r&~o)+e[2]-51403784|0,i=(i<<9|i>>>23)+n|0,o+=(i&r|n&~r)+e[7]+1735328473|0,o=(o<<14|o>>>18)+i|0,r+=(o&n|i&~n)+e[12]-1926607734|0,r=(r<<20|r>>>12)+o|0,n+=(r^o^i)+e[5]-378558|0,n=(n<<4|n>>>28)+r|0,i+=(n^r^o)+e[8]-2022574463|0,i=(i<<11|i>>>21)+n|0,o+=(i^n^r)+e[11]+1839030562|0,o=(o<<16|o>>>16)+i|0,r+=(o^i^n)+e[14]-35309556|0,r=(r<<23|r>>>9)+o|0,n+=(r^o^i)+e[1]-1530992060|0,n=(n<<4|n>>>28)+r|0,i+=(n^r^o)+e[4]+1272893353|0,i=(i<<11|i>>>21)+n|0,o+=(i^n^r)+e[7]-155497632|0,o=(o<<16|o>>>16)+i|0,r+=(o^i^n)+e[10]-1094730640|0,r=(r<<23|r>>>9)+o|0,n+=(r^o^i)+e[13]+681279174|0,n=(n<<4|n>>>28)+r|0,i+=(n^r^o)+e[0]-358537222|0,i=(i<<11|i>>>21)+n|0,o+=(i^n^r)+e[3]-722521979|0,o=(o<<16|o>>>16)+i|0,r+=(o^i^n)+e[6]+76029189|0,r=(r<<23|r>>>9)+o|0,n+=(r^o^i)+e[9]-640364487|0,n=(n<<4|n>>>28)+r|0,i+=(n^r^o)+e[12]-421815835|0,i=(i<<11|i>>>21)+n|0,o+=(i^n^r)+e[15]+530742520|0,o=(o<<16|o>>>16)+i|0,r+=(o^i^n)+e[2]-995338651|0,r=(r<<23|r>>>9)+o|0,n+=(o^(r|~i))+e[0]-198630844|0,n=(n<<6|n>>>26)+r|0,i+=(r^(n|~o))+e[7]+1126891415|0,i=(i<<10|i>>>22)+n|0,o+=(n^(i|~r))+e[14]-1416354905|0,o=(o<<15|o>>>17)+i|0,r+=(i^(o|~n))+e[5]-57434055|0,r=(r<<21|r>>>11)+o|0,n+=(o^(r|~i))+e[12]+1700485571|0,n=(n<<6|n>>>26)+r|0,i+=(r^(n|~o))+e[3]-1894986606|0,i=(i<<10|i>>>22)+n|0,o+=(n^(i|~r))+e[10]-1051523|0,o=(o<<15|o>>>17)+i|0,r+=(i^(o|~n))+e[1]-2054922799|0,r=(r<<21|r>>>11)+o|0,n+=(o^(r|~i))+e[8]+1873313359|0,n=(n<<6|n>>>26)+r|0,i+=(r^(n|~o))+e[15]-30611744|0,i=(i<<10|i>>>22)+n|0,o+=(n^(i|~r))+e[6]-1560198380|0,o=(o<<15|o>>>17)+i|0,r+=(i^(o|~n))+e[13]+1309151649|0,r=(r<<21|r>>>11)+o|0,n+=(o^(r|~i))+e[4]-145523070|0,n=(n<<6|n>>>26)+r|0,i+=(r^(n|~o))+e[11]-1120210379|0,i=(i<<10|i>>>22)+n|0,o+=(n^(i|~r))+e[2]+718787259|0,o=(o<<15|o>>>17)+i|0,r+=(i^(o|~n))+e[9]-343485551|0,r=(r<<21|r>>>11)+o|0,t[0]=n+t[0]|0,t[1]=r+t[1]|0,t[2]=o+t[2]|0,t[3]=i+t[3]|0}function r(t){var e,n=[];for(e=0;e<64;e+=4)n[e>>2]=t.charCodeAt(e)+(t.charCodeAt(e+1)<<8)+(t.charCodeAt(e+2)<<16)+(t.charCodeAt(e+3)<<24);return n}function o(t){var e,n=[];for(e=0;e<64;e+=4)n[e>>2]=t[e]+(t[e+1]<<8)+(t[e+2]<<16)+(t[e+3]<<24);return n}function i(t){var e,o,i,a,s,f,h=t.length,u=[1732584193,-271733879,-1732584194,271733878];for(e=64;e<=h;e+=64)n(u,r(t.substring(e-64,e)));for(t=t.substring(e-64),o=t.length,i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e=0;e<o;e+=1)i[e>>2]|=t.charCodeAt(e)<<(e%4<<3);if(i[e>>2]|=128<<(e%4<<3),e>55)for(n(u,i),e=0;e<16;e+=1)i[e]=0;return a=8*h,a=a.toString(16).match(/(.*?)(.{0,8})$/),s=parseInt(a[2],16),f=parseInt(a[1],16)||0,i[14]=s,i[15]=f,n(u,i),u}function a(t){var e,r,i,a,s,f,h=t.length,u=[1732584193,-271733879,-1732584194,271733878];for(e=64;e<=h;e+=64)n(u,o(t.subarray(e-64,e)));for(t=e-64<h?t.subarray(e-64):new Uint8Array(0),r=t.length,i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],e=0;e<r;e+=1)i[e>>2]|=t[e]<<(e%4<<3);if(i[e>>2]|=128<<(e%4<<3),e>55)for(n(u,i),e=0;e<16;e+=1)i[e]=0;return a=8*h,a=a.toString(16).match(/(.*?)(.{0,8})$/),s=parseInt(a[2],16),f=parseInt(a[1],16)||0,i[14]=s,i[15]=f,n(u,i),u}function s(t){var n,r="";for(n=0;n<4;n+=1)r+=e[t>>8*n+4&15]+e[t>>8*n&15];return r}function f(t){var e;for(e=0;e<t.length;e+=1)t[e]=s(t[e]);return t.join("")}function h(t){return/[\u0080-\uFFFF]/.test(t)&&(t=unescape(encodeURIComponent(t))),t}function u(t,e){var n,r=t.length,o=new ArrayBuffer(r),i=new Uint8Array(o);for(n=0;n<r;n+=1)i[n]=t.charCodeAt(n);return e?i:o}function l(t){return String.fromCharCode.apply(null,new Uint8Array(t))}function c(t,e,n){var r=new Uint8Array(t.byteLength+e.byteLength);return r.set(new Uint8Array(t)),r.set(new Uint8Array(e),t.byteLength),n?r:r.buffer}function p(t){var e,n=[],r=t.length;for(e=0;e<r-1;e+=2)n.push(parseInt(t.substr(e,2),16));return String.fromCharCode.apply(String,n)}function y(){this.reset()}return"5d41402abc4b2a76b9719d911017c592"!==f(i("hello"))&&function(t,e){var n=(65535&t)+(65535&e),r=(t>>16)+(e>>16)+(n>>16);return r<<16|65535&n},"undefined"===typeof ArrayBuffer||ArrayBuffer.prototype.slice||function(){function e(t,e){return t=0|t||0,t<0?Math.max(t+e,0):Math.min(t,e)}ArrayBuffer.prototype.slice=function(n,r){var o,i,a,s,f=this.byteLength,h=e(n,f),u=f;return r!==t&&(u=e(r,f)),h>u?new ArrayBuffer(0):(o=u-h,i=new ArrayBuffer(o),a=new Uint8Array(i),s=new Uint8Array(this,h,o),a.set(s),i)}}(),y.prototype.append=function(t){return this.appendBinary(h(t)),this},y.prototype.appendBinary=function(t){this._buff+=t,this._length+=t.length;var e,o=this._buff.length;for(e=64;e<=o;e+=64)n(this._hash,r(this._buff.substring(e-64,e)));return this._buff=this._buff.substring(e-64),this},y.prototype.end=function(t){var e,n,r=this._buff,o=r.length,i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(e=0;e<o;e+=1)i[e>>2]|=r.charCodeAt(e)<<(e%4<<3);return this._finish(i,o),n=f(this._hash),t&&(n=p(n)),this.reset(),n},y.prototype.reset=function(){return this._buff="",this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},y.prototype.getState=function(){return{buff:this._buff,length:this._length,hash:this._hash.slice()}},y.prototype.setState=function(t){return this._buff=t.buff,this._length=t.length,this._hash=t.hash,this},y.prototype.destroy=function(){delete this._hash,delete this._buff,delete this._length},y.prototype._finish=function(t,e){var r,o,i,a=e;if(t[a>>2]|=128<<(a%4<<3),a>55)for(n(this._hash,t),a=0;a<16;a+=1)t[a]=0;r=8*this._length,r=r.toString(16).match(/(.*?)(.{0,8})$/),o=parseInt(r[2],16),i=parseInt(r[1],16)||0,t[14]=o,t[15]=i,n(this._hash,t)},y.hash=function(t,e){return y.hashBinary(h(t),e)},y.hashBinary=function(t,e){var n=i(t),r=f(n);return e?p(r):r},y.ArrayBuffer=function(){this.reset()},y.ArrayBuffer.prototype.append=function(t){var e,r=c(this._buff.buffer,t,!0),i=r.length;for(this._length+=t.byteLength,e=64;e<=i;e+=64)n(this._hash,o(r.subarray(e-64,e)));return this._buff=e-64<i?new Uint8Array(r.buffer.slice(e-64)):new Uint8Array(0),this},y.ArrayBuffer.prototype.end=function(t){var e,n,r=this._buff,o=r.length,i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(e=0;e<o;e+=1)i[e>>2]|=r[e]<<(e%4<<3);return this._finish(i,o),n=f(this._hash),t&&(n=p(n)),this.reset(),n},y.ArrayBuffer.prototype.reset=function(){return this._buff=new Uint8Array(0),this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},y.ArrayBuffer.prototype.getState=function(){var t=y.prototype.getState.call(this);return t.buff=l(t.buff),t},y.ArrayBuffer.prototype.setState=function(t){return t.buff=u(t.buff,!0),y.prototype.setState.call(this,t)},y.ArrayBuffer.prototype.destroy=y.prototype.destroy,y.ArrayBuffer.prototype._finish=y.prototype._finish,y.ArrayBuffer.hash=function(t,e){var n=a(new Uint8Array(t)),r=f(n);return e?p(r):r},y}))},"7d00":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"test"},[n("a-button",{staticClass:"btn",on:{click:t.test}},[t._v(" 测试 ")]),n("a-upload-dragger",{attrs:{name:"file",multiple:!0,action:"https://www.mocky.io/v2/5cc8019d300000980a055e76"},on:{change:t.handleChange}},[n("p",{staticClass:"ant-upload-drag-icon"},[n("a-icon",{attrs:{type:"inbox"}})],1),n("p",{staticClass:"ant-upload-text"},[t._v(" Click or drag file to this area to upload ")]),n("p",{staticClass:"ant-upload-hint"},[t._v(" Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files ")])])],1)},o=[],i=(n("b0c0"),n("fa7d")),a=(n("99af"),n("fb6a"),n("69a0")),s=n.n(a);function f(t){var e=s.a.hash(t),n=s.a.hash(t,!0);console.log("".concat(e,"=========").concat(n))}function h(t){var e=File.prototype.slice||File.prototype.mozSlice||File.prototype.webkitSlice,n=2097152,r=Math.ceil(t.size/n),o=0,i=new s.a.ArrayBuffer,a=new FileReader;function f(){var r=o*n,i=r+n>=t.size?t.size:r+n;a.readAsArrayBuffer(e.call(t,r,i))}f(),a.onload=function(t){console.log("read chunk nr",o+1,"of",r),i.append(t.target.result),o++,o<r?f():(console.log("finished loading"),console.info("computed hash",i.end()))},a.onerror=function(){console.warn("oops, something went wrong.")}}var u={name:"Test",methods:{handleChange:function(t){var e=t.file.status;console.log(t.file.originFileObj),console.log(Object(i["a"])(t.file.originFileObj)),h(t.file.originFileObj),"uploading"!==e&&console.log(t.file,t.fileList),"done"===e?this.$message.success("".concat(t.file.name," file uploaded successfully.")):"error"===e&&this.$message.error("".concat(t.file.name," file upload failed."))},test:function(){f("asdasdf")}}},l=u,c=n("2877"),p=Object(c["a"])(l,r,o,!1,null,null,null);e["default"]=p.exports}}]);