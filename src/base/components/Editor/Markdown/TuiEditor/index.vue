<template>
  <div class="toast-ui-editor-wrp">
    <div v-if="ableEditing" class="tui-editor-wrp">
      <editor
        ref="tuiEditor"
        :initial-value="value"
        :options="options"
        @change="onEditorChange"
      ></editor>
    </div>
    <div v-else class="tui-viewer-wrp">
      <viewer :initial-value="value" :options="options" />
    </div>
  </div>
</template>

<script>
import xss from "xss";

import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/vue-editor";

import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import { Viewer } from "@toast-ui/vue-editor";

import "highlight.js/styles/github.css";

// import Editor from '@toast-ui/editor';
import { DEFAULT_OPTIONS } from "./tui-editor";

export default {
  name: "TuiEditor",
  components: {
    Editor,
    Viewer
  },
  props: {
    ableEditing: {
      type: [Boolean],
      default: false,
      required: false
    },
    value: {
      type: [String],
      default: function() {
        return "请输入编辑内容";
      },
      required: false
    },
    options: {
      type: [Object],
      default: function() {
        return DEFAULT_OPTIONS;
      },
      required: false
    }
  },
  methods: {
    onEditorChange() {
      let html = this.$refs.tuiEditor.invoke("getHtml");
      this.$emit("update:value", xss(html));
    }
  }
};
</script>

<style>
.tui-editor-wrp {
}
</style>
