<template>
  <div class="editor">
    <a-button type="primary" @click="consoleLog">
      Console
    </a-button>
    <tui-image-editor />
  </div>
</template>

<script>
import TuiImageEditor from "@components/Editor/Image/TuiImageEditor";

export default {
  name: "TuiImageEditorView",
  components: {
    TuiImageEditor
  },
  data() {
    return {};
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
