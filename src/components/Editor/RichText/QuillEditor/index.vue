<template>
  <!-- Create the editor container -->
  <div class="quill-editor-wrap">
    <slot name="toolbar"></slot>
    <div id="editor" :ref="quillRef">
      <p>Hello World!</p>
      <p>Some initial <strong>bold</strong> text</p>
      <p><br /></p>
    </div>
  </div>
</template>

<script>
import Quill from "quill";
import { isString } from "../../../../utils/utils";

const SUPPORT_THEMES = ["bubble", "snow"];
const SUPPORT_DEBUGS = ["error", "warn", "log", "info"];

export default {
  name: "QuillEditor",
  data() {
    return {
      quillRef: "quill-" + this._uid
    };
  },
  props: {
    theme: {
      type: [String],
      default: "snow",
      required: false,
      validator(vlaue) {
        return SUPPORT_THEMES.includes(vlaue);
      }
    },
    placeholder: {
      type: [String],
      default: "",
      required: false
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
        if (isString(vlaue)) {
          return SUPPORT_DEBUGS.includes(vlaue);
        }
        return true;
      }
    },
    options: {
      type: [Object],
      default() {
        return {};
      },
      required: false
    },
    modules: {
      type: [Array],
      default() {
        return [];
      },
      required: false
    }
  },
  computed: {
    quillOptions() {
      return Object.assign(
        {
          theme: this.theme,
          placeholder: this.placeholder,
          readOnly: this.readOnly,
          debug: this.debug
        },
        this.options
      );
    }
  },
  methods: {
    init() {
      let quillEle = this.$refs[this.quillRef];
      this.quill = new Quill(quillEle, this.quillOptions);

      this.quill.on("text-change", function(delta, oldDelta, source) {
        console.log(
          "delta   " +
            delta +
            "   oldDelta   " +
            oldDelta +
            "   source   " +
            source
        );
        this.$emit("update:", this.quill.getContents());
        if (source == "api") {
          console.log("An API call triggered this change.");
        } else if (source == "user") {
          console.log("A user action triggered this change.");
        }
      });
    },
    destory() {}
  },
  mounted() {
    this.init();
  },
  destroyed() {}
};
</script>

<style></style>
