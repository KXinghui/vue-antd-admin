<template>
  <div class="editor">
    <a-button type="primary" @click="consoleLog">
      Console
    </a-button>
    <quill-editor></quill-editor>
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
