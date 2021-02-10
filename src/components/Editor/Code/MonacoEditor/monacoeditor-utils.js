import * as monaco from "monaco-editor";
import { msg } from "../../../../utils/antd-utils";

/*
You must define a function MonacoEnvironment.getWorkerUrl or MonacoEnvironment.getWorker


*/

export const EDITOR_NAME = "MonacoEditor";
export const EDITOR_MENU_NAME = "MonacoEditorMenu";

export const SUPPORT_LANGUAGES = [];
monaco.languages.getLanguages().forEach(ilanguageExtensionPoint => {
  let language = ilanguageExtensionPoint.id;
  if (!SUPPORT_LANGUAGES.includes(language)) {
    SUPPORT_LANGUAGES.push(language);
  }
});

export const SUPPORT_THEMES = ["vs-dark", "vs", "hc-black"];

export function init(vm) {
  let language = vm.language;
  let theme = vm.theme;
  let isDiff = vm.isDiff;
  let value = vm.value;
  let originValue = vm.originValue;
  let isDiffEditor = vm.editor && "getModifiedEditor" in vm.editor;

  let editorOptions = Object.assign(vm.editorOptions, { theme });
  let editorEle = vm.$refs[vm.editorRef];
  if (!vm.editor || isDiffEditor != isDiff) {
    // 编辑器未创建或编辑器模式修改 需要先销毁后创建
    destroy(vm);
    vm.editor = isDiff
      ? monaco.editor.createDiffEditor(editorEle, editorOptions)
      : monaco.editor.create(editorEle, editorOptions);
    // 设置样式
    // monacoEditorEle = .monaco-editor-wrap .monaco-editor
    // monacoEditorEle.firstChild = .monaco-editor-wrap .monaco-editor .overflow-guard
    let monacoEditorEle = editorEle.querySelector(".monaco-editor");
    if (monacoEditorEle) {
      monacoEditorEle.style.width = "100%";
      monacoEditorEle.style.height = "100%";
      let monacoEditorEleFirstChild =
        editorEle.querySelector(".overflow-guard") ||
        monacoEditorEle.firstChild;
      if (monacoEditorEleFirstChild) {
        monacoEditorEleFirstChild.style.width = "100%";
        monacoEditorEleFirstChild.style.height = "100%";
      }
    }
  } else {
    // 动态更新编辑器选项
    vm.editor.updateOptions(editorOptions);
    if (!isDiff) {
      monaco.editor.setModelLanguage(vm.editor.getModel(), language);
    }
    monaco.editor.setTheme(theme);
  }

  if (isDiff) {
    vm.editor.setModel({
      original: monaco.editor.createModel(originValue, language),
      modified: monaco.editor.createModel(value, language)
    });
    monaco.editor.createDiffNavigator(vm.editor);
    vm.editor.getModifiedEditor().onDidChangeModelContent(function() {
      handleContentOnChange(vm);
    });
  } else {
    vm.editor.onDidChangeModelContent(function() {
      handleContentOnChange(vm);
    });
  }
}

function handleContentOnChange(vm) {
  /* let editor = monaco.editor.createDiffEditor(
    vm.$refs[vm.editorRef],
    vm.editorOptions
  ); */
  // monaco.editor.create(vm.$refs[vm.editorRef], vm.editorOptions);
  // editor.getModifiedEditor().getAction(string)
  let content = vm.isDiff
    ? vm.editor.getModifiedEditor().getValue()
    : vm.editor.getValue();
  vm.$emit("update:value", content);
  // let editor = vm.editor;
  if (vm.isFormatOnChange) {
    vm.formatTimer = setTimeout(() => {
      vm.isFormat = true;
      format(this);
    }, vm.formatDelay);
  }
}

export function format(vm) {
  if (vm.isFormat) {
    if (!vm.editor) {
      return;
    }
    if (vm.isDiff) {
      vm.editor
        .getOriginalEditor()
        .getAction(["editor.action.formatDocument"])
        .run();
      vm.editor
        .getModifiedEditor()
        .getAction(["editor.action.formatDocument"])
        .run();
    } else {
      vm.editor.getAction(["editor.action.formatDocument"]).run();
    }
    msg({ code: "1", msg: "格式化成功" });
    vm.$emit("update:isFormat", false);
  }
}

export function destroy(vm) {
  if (vm.editor) {
    vm.editor.dispose();
  }
  clearTimeout(vm.formatTimer);
}
