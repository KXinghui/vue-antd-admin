// import E from "wangeditor";
import xss from "xss";

export const EDITOR_NAME = "WangEditor";
export const EDITOR_MENU_NAME = "WangEditorMenu";

/**
 * TODO 编辑器自定义配置(Identity可自定义)
 * identity_editor_config
 * menus lang pasteFilterStyle colors fontNames
 * isXss pasteAppendTexts
 */

/**
 * 默认编辑器组件配置
 */
export const DEFAULT_EDITOR_COMPONENT_CONFIG = {
  // 启用|禁用编辑功能
  ableEditing: true,
  // 启用|禁用加载功能
  ableLoading: false,
  html: "请输入编辑内容"
};
/**
 * 默认身份编辑器组件配置
 */
export const DEFAULT_IDENTITY_EDITOR_CONFIG = {
  // 是否XSS
  isXss: true,
  // 粘贴连接文字
  pasteAppendTexts: [{ value: "Vue Antd Admin" }],
  menus: [],
  lang: [],
  pasteFilterStyle: [],
  colors: [],
  fontNames: []
};

/**
 * 默认编辑器样式配置
 */
export const DEFAULT_EDITOR_STYLE_CONFIG = {
  height: "auto",
  "min-height": "300px"
};

/**
 * 默认编辑器配置
 */
export const DEFAULT_EDITOR_CONFIG = {
  zIndex: 0,
  // 菜单配置
  menus: [
    "head", // 标题
    "bold", // 粗体
    "fontSize", // 字号
    "fontName", // 字体
    "italic", // 斜体
    "underline", // 下划线
    "strikeThrough", // 删除线
    "foreColor", // 文字颜色
    "backColor", // 背景颜色
    "link", // 插入链接
    "list", // 列表
    "justify", // 对齐方式
    "quote", // 引用
    "emoticon", // 表情
    "image", // 插入图片
    "table", // 表格
    // "video", // 插入视频
    "code", // 插入代码
    "undo", // 撤销
    "redo" // 重复
  ],
  // 语言配置
  lang: {
    设置标题: "title",
    正文: "p",
    链接文字: "link text",
    链接: "link",
    上传图片: "upload image",
    上传: "upload",
    创建: "init"
  },
  // 关闭粘贴样式的过滤
  pasteFilterStyle: false,
  // 粘贴连接字符串【类型为对象的数组 属性为name和value】
  pasteAppendTexts: [{ value: "Vue Antd Admin" }],
  pasteIgnoreImg: false,
  pasteTextHandle: function(content) {
    // content 即粘贴过来的内容（html 或 纯文本），可进行自定义处理然后返回
    debugger;
    return (
      content + makePasteAppend(this.pasteAppendTexts, true) + "<p>粘贴后的</p>"
    );
  },
  // 配置字体颜色、背景色
  colors: [
    "#000000",
    "#eeece0",
    "#1c487f",
    "#4d80bf",
    "#c24f4a",
    "#8baa4a",
    "#7b5ba1",
    "#46acc8",
    "#f9963b",
    "#ffffff"
  ],
  // 自定义字体
  fontNames: ["宋体", "微软雅黑", "Arial", "Tahoma", "Verdana"],
  // 使用其中一个即可显示“上传图片”的tab。但是两者(uploadImgShowBase64 uploadImgServer)不要同时使用
  // 使用 base64 保存图片
  uploadImgShowBase64: true,
  // 上传图片到服务器
  uploadImgServer: "/upload"
};

/**
 * 制作粘贴连接字符串
 * @param {*} pasteAppendTexts 类型为对象的数组 对象的属性 name value
 * @param {*} isHtml 是否html 是加上<p></p>
 */
export function makePasteAppend(pasteAppendTexts, isHtml) {
  let pasteAppend = "";
  for (let text of pasteAppendTexts) {
    let pasteAppendText = Object.keys(text).includes("name")
      ? `${text.name}：${text.value}`
      : `${text.value}`;
    pasteAppend += isHtml ? `<P>${pasteAppendText}<P>` : pasteAppendText;
  }
  return pasteAppend;
}

/**
 * 初始化编辑器
 * @param {*} vm
 * @param {*} wangEditor
 */
export function initEditor(vm, wangEditor) {
  // 创建编辑器
  let editor = wangEditor.editor;
  // 编辑器配置
  let editorConfig = wangEditor.editorConfig;
  if (!editorConfig) {
    let temp = {};
    Object.assign(temp, DEFAULT_EDITOR_CONFIG);
    editorConfig = temp;
  }
  // 编辑器组件配置
  let editorComponentConfig = wangEditor.editorComponentConfig;
  if (!editorComponentConfig) {
    let temp = {};
    Object.assign(temp, DEFAULT_EDITOR_COMPONENT_CONFIG);
    editorComponentConfig = temp;
  }
  // 身份编辑器配置
  let identityEditorConfig = wangEditor.identityEditorConfig;
  if (!identityEditorConfig) {
    let temp = {};
    Object.assign(temp, DEFAULT_IDENTITY_EDITOR_CONFIG);
    identityEditorConfig = temp;
  }
  // 处理身份编辑器配置与编辑器配置
  for (let identityEditorConfigName in identityEditorConfig) {
    let identityEditorConfgValue =
      identityEditorConfig[identityEditorConfigName];
    if (
      editorConfig[identityEditorConfigName] != undefined &&
      identityEditorConfgValue
    ) {
      editorConfig[identityEditorConfgValue] = identityEditorConfgValue;
    }
  }
  // 编辑器样式配置
  let editorStyleConfig = wangEditor.editorStyleConfig;
  if (!editorStyleConfig) {
    let temp = {};
    Object.assign(temp, DEFAULT_EDITOR_STYLE_CONFIG);
    editorStyleConfig = temp;
  }
  let isNotCreate = !editor;
  if (isNotCreate) {
    // editor = new E(vm.$refs[vm.realEditroId]);
    editor = editorComponentConfig.ableEditing;
    /* ? new E(`#${vm.realEditroId}`)
      : new E(`#${vm.realEditorMenuId}`, `#${vm.realEditroId}`) */
  }
  let configNames = [
    "zIndex",
    "menus",
    "lang",
    "pasteFilterStyle",
    "pasteIgnoreImg",
    "pasteTextHandle",
    "colors",
    "fontNames",
    "uploadImgShowBase64"
  ];
  configNames.forEach(configName => {
    debugger;
    editor.customConfig[configName] = editorConfig[configName]
      ? editorConfig[configName]
      : DEFAULT_EDITOR_CONFIG[configName];
  });
  vm.editor = editor;
  vm.editor.customConfig.onchange = function(html) {
    let content = html; /* + makePasteAppend(this.pasteAppendTexts, true) */
    let textContent = vm.editor.txt.text(); /* + makePasteAppend(this.pasteAppendTexts, false) */
    vm.$emit("input", xss(content));
    vm.$emit("change", xss(content));
    vm.$emit("update:html", xss(content));
    vm.$emit("update:text", textContent);
    vm.$emit("update:json", JSON.stringify(vm.editor.txt.getJSON()));
    vm.$emit("update:editor", vm.editor);
  };
  if (isNotCreate) {
    vm.editor.create();
  }
  vm.editor.$textElem.attr(
    "contenteditable",
    editorComponentConfig.ableEditing
  );
  for (let styleName in editorStyleConfig) {
    let styleValue = editorStyleConfig[styleName];
    if (editorStyleConfig[styleName] != undefined && styleValue) {
      vm.editor.$textElem[0].parentNode.style[styleName] = styleValue;
    }
  }
  // 设置内容
  let html = vm.html;
  if (!html) {
    html = editorComponentConfig.html;
  }
  vm.editor.txt.html(xss(html));
  return vm.editor;
}

/**
 * 销毁编辑器
 * @param {*} vm
 */
export function destroyEditor(vm) {
  if (vm.editor) {
    debugger;
    "destroy" in vm.editor && vm.editor.destroy();
    vm.editor = null;
  }
}
