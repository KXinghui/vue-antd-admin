<template>
  <div class="editor">
    <a-button type="primary" @click="consoleLog">
      Console
    </a-button>
    <tui-editor :able-editing="true" :value.sync="html"></tui-editor>
    <tui-editor :able-editing="false" :value.sync="html2"></tui-editor>
  </div>
</template>

<script>
import TuiEditor from "@components/Editor/Markdown/TuiEditor";

export default {
  name: "TuiEditorView",
  components: {
    TuiEditor
  },
  data() {
    return {
      html: ``,
      html2: `<pre><code>console.log('foo')
</code></pre><pre><code>console.log('bar')
</code></pre><pre><code>&lt;div id="editor"&gt;&lt;span&gt;baz&lt;/span&gt;&lt;/div&gt;
</code></pre><pre><code>[1 2 3]
</code></pre><pre><code>[1 2 3]
</code></pre>
<p>--registry=https://registry.npm.taobao.org</p>
<ol>
<li>用到的 UI 框架和工具类库都要记录 名称、github 地址、官网 按模块、功能分类</li>
<li>在工具类库中添加对应名称的md文件记录笔记</li>
</ol>
<p>https://npms.io/</p>
<p>常用 UI 框架</p>
<p>ant-design-vue<br>
npm install ant-design-vue --save</p>
<p>http://www.fly63.com/nav</p>
<h1>常用安装包</h1>
<h2>样式</h2>
<p>normalize<br>
npm install normalize.css<br>
import "normalize.css";</p>
<p>animate.css<br>
npm install animate.css --save</p>
<h2>文本</h2>
<p>clipboard.js<br>
npm install clipboard --save</p>
<h2>编辑器</h2>
<p>CodeMirror<br>
npm install codemirror<br>
【https://codemirror.net/doc/manual.html】</p>
<p>TinyMCE<br>
markdown-it<br>
vue2-editor</p>
<h3>轻量级富文本</h3>
<p>wangEditor<br>
npm install wangeditor<br>
【http://www.wangeditor.com/】</p>
<p>quill<br>
npm install quill<br>
【https://github.com/quilljs/quill】</p>
<p>Vue-Quill-Editor</p>
<h3>Markdown</h3>
<p>markdown-it<br>
npm install markdown-it --save<br>
【https://github.com/markdown-it/markdown-it】</p>
<p>mavonEditor<br>
npm install mavon-editor --save<br>
【https://github.com/hinesboy/mavonEditor】</p>
<p>TOAST UI<br>
tui.editor<br>
npm install --save @toast-ui/vue-editor<br>
【https://github.com/nhn/tui.editor/tree/master/apps/vue-editor】<br>
npm install @toast-ui/editor-plugin-code-syntax-highlight</p>
<h2>阅读器</h2>
<p>epub</p>
<p>vue-epub-reader<br>
vue-ebook</p>
<h2>视频</h2>
<p>video.js<br>
npm install --save-dev video.js<br>
【https://videojs.com/】</p>
<h2>编码</h2>
<p>js-base64<br>
npm install --save js-base64</p>
<p>import { Base64 } from 'js-base64';<br>
// or if you prefer no Base64 namespace<br>
import { encode, decode } from 'js-base64';</p>
<h2>图表</h2>
<p>viser-vue 基于G2的数据可视化工程师的工具包<br>
npm install --save viser-vue<br>
【https://github.com/viserjs/viser/tree/master/packages/viser-vue/】<br>
【https://viserjs.github.io/】<br>
【https://www.yuque.com/rs385i】<br>
【https://viserjs.github.io/demo.html#/viser/】<br>
需要安装 @antv/data-set</p>
<h2>HTTP 请求</h2>
<p>axios<br>
npm install axios</p>
<h2>加载</h2>
<p>NProgress<br>
npm install nprogress --save</p>
<h2>日期</h2>
<p>Moment.js<br>
npm install moment --save</p>
<h2>单元测试</h2>
<p>Jest<br>
https://jestjs.io/</p>
<h2>拖拽</h2>
<p>Vue.Draggable<br>
npm i -S vuedraggable</p>
<p>vue-draggable-resizable<br>
npm install --save vue-draggable-resizable</p>
<h2>国际化</h2>
<p>vue-i18n<br>
npm install vue-i18n</p>
<h2>滚动</h2>
<p>better-scroll<br>
npm install better-scroll@next -S  2.x</p>
<h2>图片处理</h2>
<p>vue-image-crop-upload<br>
npm install vue-image-crop-upload</p>
<h2>图片查看</h2>
<p>viewerjs 使用JavaScript<br>
npm install viewerjs<br>
【https://github.com/fengyuanchen/viewerjs】</p>
<p>v-viewer 使用Vue指令 基于viewerjs<br>
npm install v-viewer<br>
【https://github.com/mirari/v-viewer】</p>
<p>vue-preview</p>
<h2>md5</h2>
<p>spark-md5<br>
npm install --save spark-md5</p>
<h2>OCR识别引擎</h2>
<p>tesseract.js<br>
npm install tesseract.js</p>
<p>ocrad.js</p>
<h2>工具类库</h2>
<p>lodash<br>
npm i --save lodash<br>
https://www.lodashjs.com/</p>
<p>js-xss<br>
npm install xss<br>
【https://jsxss.com/zh/index.html】</p>
<h2>插件</h2>
<p>svgo 精简svg<br>
npm install -g svgo</p>
<h3>Loader</h3>
<p>svg-sprite-loader<br>
npm install svg-sprite-loader -D</p>
<h1>常见错误</h1>
<h2>Props with type Object/Array must use a factory function to return the default value</h2>
<p>【https://segmentfault.com/q/1010000009467326/a-1020000009470736】</p>
<pre><code>propE: {
  type: Object,
  default: function () {
    return { message: 'hello' }
  }
}
</code></pre>
<h3>Invalid prop: type check failed for prop "element". Expected Object, got HTMLDocument</h3>
<h2>ReferenceError: h is not defined</h2>
<h2>Maximum call stack size exceeded</h2>
<p>超出最大调用堆栈大小</p>
<ol>
<li>components 组件循环注册</li>
<li>路由注册</li>
</ol>
<h2>Invalid attempt to iterate non-iterable instance.In order to be iterable, non-array objects must have a <a href>Symbol.iterator</a> method</h2>
<p>1 使用 of 遍历对象属性 解决：使用 in 遍历对象属性；使用 of 遍历数组元素</p>
<h2>Cannot convert undefined or null to object at Function.assign</h2>
<ol>
<li>Object.keys()中传错了参数</li>
<li>由于undefined和null无法转成对象，所以如果它们做为Object.assign()的参数（只有一个参数），也会报错</li>
</ol>
<h2>You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.</h2>
<p>1、直接在Vue声明组件变量引入组件 函数式组件</p>
<h2>This relative module was not found</h2>
<p>文件路径引用错误<br>
仔细检查</p>
<h2>URIError: Failed to decode param '/%3C%=%20BASE_URL%20%%3Efavicon.ico'</h2>
<h3>DOTO Div 自适应高度</h3>
<p>min-height: 100%;<br>
height: auto;</p>
<h2>DOTO</h2>
<h3>1. 路径引用使用 @ 解析</h3>
<p>原因：有些引用的路径很长，有很多上层的引用路径时使用，只有 ./ 一层可以不用</p>
<p>@ 的作用是在引入模块时，可以使用 @ 代替 /src 目录，避免易错的相对路径。 (注意@不要用在引入css文件路径，有的项目规范不支持)</p>
<p>解决：在 vue.config.js</p>
<pre><code>const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
configureWebpack: {
  resolve: {
    alias: {
      "@": resolve("src"),
      "@views": resolve("src/views"),
      "@layouts": resolve("src/layouts"),
      "@assets": resolve("src/assets"),
      "@utils": resolve("src/utils"),
      "@components": resolve("src/components")
    }
  }
}
</code></pre>
<h3>Ant-Design-Vue Table 封装</h3>
<p>基本用法<br>
单元格自动省略<br>
列排序筛选<br>
远程加载数据<br>
自定义筛选表单<br>
可编辑单元格、行【等数据权限完成后添加】</p>
<p>单元格自动省略</p>
<pre><code>columns = [{
	{
		ellipsis: true,
	}
}]
</code></pre>
<p>列 排序筛选<br>
filter<br>
sorter</p>
<h3>Pagination 分页</h3>
<p>Vuex检测屏幕尺寸像素大小，根据像素判断尺寸</p>
<p>xs	&lt;576px<br>
sm	≥576px<br>
md	≥768px<br>
lg	≥992px<br>
xl	≥1200px<br>
xxl	≥1600px</p>
<p>component</p>`
    };
  },
  methods: {
    consoleLog() {
      // console.log(JSON.stringify(this.wangEditor));
      // console.log(JSON.stringify(this.wangEditor2));
      console.log(this.html);
    }
  }
};
</script>

<style></style>
