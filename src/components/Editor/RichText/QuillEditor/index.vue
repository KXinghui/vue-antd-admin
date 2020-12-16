<template>
  <div class="quill-editor-wrap">
    <div :id="toolbarWrap" :ref="toolbarWrap">
      <slot name="toolbar"></slot>
    </div>
    <div
      v-viewer="{
        movable: true,
        filter: function() {
          return isView;
        }
      }"
      id="editor"
      :ref="quillWrap"
    ></div>
    <!-- v-html="html" -->
  </div>
</template>

<script>
import Quill from "quill";
// https://segmentfault.com/q/1010000012536736/a-1020000012571968
// https://github.com/kensnyder/quill-image-resize-module
// npm i quill-image-resize-module
// https://github.com/kensnyder/quill-image-drop-module

import { isString } from "../../../../utils/utils";
import xss from "xss";
import "quill/dist/quill.bubble.css";
import "quill/dist/quill.snow.css";

const SUPPORT_THEMES = ["bubble", "snow"];
const SUPPORT_DEBUGS = ["error", "warn", "log", "info"];

export default {
  name: "QuillEditor",
  data() {
    return {
      quillWrap: "quill-" + this._uid,
      // quillEditorWrap: "quillEditor-" + this._uid,
      toolbarWrap: "toolbar-" + this._uid
    };
  },
  props: {
    isView: {
      type: [Boolean],
      default: true,
      required: false
    },
    isXss: {
      type: [Boolean],
      default: true,
      required: false
    },
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
    scrollingContainer: {
      type: [String, Object],
      default: "",
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
    },
    html: {
      type: [String],
      default: "",
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
          // scrollingContainer:
          //   this.scrollingContainer || `.${this.quillEditorWrap}`,
          debug: this.debug,
          /* toolbar: {
            container: `#${this.toolbarWrap}` // Selector for toolbar container
          } */
          modules: {
            toolbar: {
              container: [
                ["bold", "italic", "underline", "strike"],
                ["blockquote", "code-block"],
                // [{ header: 1 }, { header: 2 }],
                [{ list: "ordered" }, { list: "bullet" }],
                [{ script: "sub" }, { script: "super" }],
                [{ indent: "-1" }, { indent: "+1" }],
                [{ direction: "rtl" }],
                [{ size: ["small", false, "large", "huge"] }],
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                [{ color: [] }, { background: [] }],
                [{ font: [] }],
                [{ align: [] }],
                ["link", "image", "video"],
                ["clean"]
              ]
              // handlers: {
              //   image: function(value) {
              //     if (value) {
              //       alert("自定义图片");
              //     } else {
              //       this.quill.format("image", false);
              //     }
              //   }
              // }
            }
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
      quill.on("text-change", function() {
        vm.$emit(
          "update:html",
          this.isXss ? xss(quill.root.innerHTML) : quill.root.innerHTML
        );
        // vm.$emit("update:text", quill.getText());
        // if (source == "api") {
        //   console.log("An API call triggered this change.");
        // } else if (source == "user") {
        //   console.log("A user action triggered this change.");
        // }
      });
      this.quill = quill;
      let html = this.html;
      if (html) {
        this.quill.pasteHTML(html);
      } else {
        this.quill.setText("");
      }
      let isNotReadOnly = !this.readOnly;
      if (isNotReadOnly) {
        this.quill.focus();
      }
      quill.enable(isNotReadOnly);
    },
    destroy() {
      this.quill = null;
    }
  },
  watch: {
    // html(newVal) {
    //   if (!this.quill || !newVal) {
    //     return;
    //   }
    //   if (newVal) {
    //     this.quill.pasteHTML(newVal);
    //   } else {
    //     this.quill.setText("");
    //   }
    //   // this.quill && this.quill.pasteHTML(this.html);
    //   // this.quill && this.quill.update();
    // }
  },
  mounted() {
    this.init();
  },
  destroyed() {
    this.destroy();
  }
};
</script>

<style>
.quill-editor-wrap {
  width: 100%;
  height: 100%;
  max-height: 100%;
  overflow-y: auto;
}

/* .quill-editor-wrap .ql-editor {
  height: 100%;
} */
.ql-editor {
  /* border: 1px solid blue; */
  height: 100%;
  /* max-height: 100%; */
}
</style>
