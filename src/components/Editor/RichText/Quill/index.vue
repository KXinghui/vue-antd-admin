<template>
  <!-- Create the editor container -->
  <div id="editor" :ref="quillRef">
    <p>Hello World!</p>
    <p>Some initial <strong>bold</strong> text</p>
    <p><br /></p>
  </div>
</template>

<script>
import Quill from "quill";

const SUPPORT_THEMES = ["bubble", "snow"];
const SUPPORT_DEBUGS = ["error", "warn", "log", "info"];

export default {
  data() {
    return {
      quillRef:
        "quill-" +
        Math.random()
          .toString()
          .substr(2)
    };
  },
  props: {
    theme: {
      type: [String],
      default: "vs-dark",
      required: false,
      validator(vlaue) {
        return SUPPORT_THEMES.includes(vlaue);
      }
    },
    readOnly: {
      type: [Boolean],
      default: false,
      required: false
    },
    debug: {
      type: [String, Boolean],
      default: false,
      required: false,
      validator(vlaue) {
        return SUPPORT_DEBUGS.includes(vlaue);
      }
    },
    options: {
      type: [Object],
      default() {
        return {};
      },
      required: false
    }
  },
  computed: {
    quillOptions() {
      return Object.assign({}, this.options);
    }
  },
  methods: {
    init() {
      let quillEle = this.$refs[this.quillRef];
      this.quill = new Quill(quillEle, this.quillOptions);
    }
  }
};
</script>

<style></style>
