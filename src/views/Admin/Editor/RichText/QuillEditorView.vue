<template>
  <div class="editor">
    <a-button type="primary" @click="consoleLog">
      Console
    </a-button>
    <quill-editor :html="html"></quill-editor>
  </div>
</template>

<script>
import QuillEditor from "@components/Editor/RichText/QuillEditor";
// import { DEFAULT_EDITOR_STYLE_CONFIG } from "@components/Editor/RichText/WangEditor/wangeditor-utils";

export default {
  name: "QuillEditorView",
  components: {
    QuillEditor
  },
  data() {
    return {
      html: `<p>Hello World!</p><p>Some initial <strong>bold</strong> text</p><p><br></p><p>啊手动阀手动阀a's'd'fa's'd'f</p><p>啊手动阀方法454687465<span style="background-color: rgb(255, 194, 102);">啊手动阀手动阀安抚</span><span style="background-color: rgb(230, 0, 0);">啊手动阀手动阀国际航空归还借款</span><span style="background-color: rgb(0, 0, 0);">函数的反函数风格和</span><span style="background-color: rgb(0, 0, 0); color: rgb(255, 255, 255);">阿斯顿发射点发射点发射点</span></p><p><br></p>`,
      wangEditor: {
        editor: null,
        editorComponentConfig: { ableEditing: true }
      }
    };
  },
  methods: {
    consoleLog() {
      // console.log(JSON.stringify(this.wangEditor));
      // console.log(JSON.stringify(this.wangEditor2));
    }
  }
};
</script>

<style></style>
