import CodeMirror from "codemirror/lib/codemirror";
require("codemirror/mode/javascript/javascript");

export function initEditor(vm) {
  let codeMirrorEditor = CodeMirror.fromTextArea(
    vm.$refs.codemirror,
    !vm.option ? CodeMirror.defaults : vm.option
  );
  CodeMirror.defaults;
  CodeMirror.modes;
  vm.editor = codeMirrorEditor;
  vm.editor.setValue(vm.value);
  return codeMirrorEditor;
}
