<template>
  <!-- Create the editor container -->
  <div class="quill-editor-wrap">
    <div :id="toolbarWrap" :ref="toolbarWrap">
      <slot name="toolbar"></slot>
    </div>
    <div id="editor" :ref="quillWrap">
      <p>Hello World!</p>
      <p>Some initial <strong>bold</strong> text</p>
      <p><br /></p>
    </div>
  </div>
</template>

<script>
import Quill from "quill";
import { isString } from "../../../../utils/utils";
import "quill/dist/quill.bubble.css";
import "quill/dist/quill.snow.css";

const SUPPORT_THEMES = ["bubble", "snow"];
const SUPPORT_DEBUGS = ["error", "warn", "log", "info"];

export default {
  name: "QuillEditor",
  data() {
    return {
      quillWrap: "quill-" + this._uid,
      toolbarWrap: "toolbar-" + this._uid
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
          debug: this.debug,
          /* toolbar: {
            container: `#${this.toolbarWrap}` // Selector for toolbar container
          } */
          modules: {
            toolbar: [
              ["bold", "italic", "underline", "strike"],
              ["blockquote", "code-block"],
              [{ header: 1 }, { header: 2 }],
              [{ list: "ordered" }, { list: "bullet" }],
              [{ script: "sub" }, { script: "super" }],
              [{ indent: "-1" }, { indent: "+1" }],
              [{ direction: "rtl" }],
              [{ size: ["small", false, "large", "huge"] }],
              [{ header: [1, 2, 3, 4, 5, 6, false] }],
              [{ color: [] }, { background: [] }],
              [{ font: [] }],
              [{ align: [] }],
              ["clean"],
              ["link", "image", "video"]
            ]
          }
        },
        this.options
      );
    }
  },
  methods: {
    init() {
      let quillEle = this.$refs[this.quillWrap];
      let quill = new Quill(quillEle, this.quillOptions);
      let vm = this;
      quill.on("text-change", function(delta, oldDelta, source) {
        console.log(
          "delta   " +
            delta +
            "   oldDelta   " +
            oldDelta +
            "   source   " +
            source
        );
        vm.$emit("update:content", quill.getContents());
        vm.$emit("update:text", quill.getText());
        console.log(quill.getContents());
        console.log(quill.getText());
        if (source == "api") {
          console.log("An API call triggered this change.");
        } else if (source == "user") {
          console.log("A user action triggered this change.");
        }
      });
      this.quill = quill;
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
