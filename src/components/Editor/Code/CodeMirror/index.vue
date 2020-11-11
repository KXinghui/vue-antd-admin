<template>
  <textarea ref="codemirror" class="codemirror" v-model="value"></textarea>
</template>

<script>
import { initEditor } from "./codemirror-utils";
import "codemirror/lib/codemirror.css";

export default {
  name: "CodeMirrorEditor",
  data() {
    return {
      editor: null
    };
  },
  props: {
    option: {
      type: [Object],
      default: function() {
        return null;
      },
      required: true
    },
    value: {
      type: [String],
      default: "",
      required: true
    }
  },
  mounted() {
    initEditor(this);
  },
  watch: {
    value(newValue) {
      console.log();
      const value = this.editor.getValue();
      if (newValue !== value) {
        this.editor.setValue(newValue);
        this.$emit("update:value", newValue);
      }
    },
    option() {
      initEditor(this);
    }
  }
};
</script>

<style>
.codemirror {
  border: 2px solid red;
}
</style>
