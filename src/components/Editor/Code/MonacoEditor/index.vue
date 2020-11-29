<template>
  <div class="monaco-editor-wrap" :ref="editorRef"></div>
</template>
<script>
// [https://blog.csdn.net/breavo_raw/article/details/88080451]
import {
  EDITOR_NAME,
  SUPPORT_LANGUAGES,
  SUPPORT_THEMES,
  init,
  format,
  destroy
} from "./monacoeditor-utils";

export default {
  name: "MonacoEditor",
  data() {
    return {
      editorRef:
        EDITOR_NAME +
        Math.random()
          .toString()
          .substr(2)
    };
  },
  props: {
    isFormatOnChange: {
      type: [Boolean],
      default: false,
      required: false
    },
    formatDelay: {
      type: [Number],
      default: 3000,
      required: false
    },
    isFormat: {
      type: [Boolean],
      default: false,
      required: false
    },
    isDiff: {
      type: [Boolean],
      default: false,
      required: false
    },
    value: {
      type: [String],
      default: "",
      required: false
    },
    originValue: {
      type: [String],
      default: "",
      required: false
    },
    readOnly: {
      type: [Boolean],
      default: false,
      required: false
    },
    language: {
      type: [String],
      default: "javascript",
      required: false,
      validator(vlaue) {
        return SUPPORT_LANGUAGES.includes(vlaue);
      }
    },
    theme: {
      type: [String],
      default: "vs-dark",
      required: false,
      validator(vlaue) {
        return SUPPORT_THEMES.includes(vlaue);
      }
    },
    options: {
      type: [Object],
      default: function() {
        return {};
      },
      required: false
    }
  },
  computed: {
    editorOptions() {
      return Object.assign(this.options, {
        value: this.value,
        language: this.language,
        theme: this.theme,
        readOnly: this.readOnly,
        contextmenu: true,
        automaticLayout: true
      });
    }
  },
  watch: {
    editorOptions: {
      handler() {
        init(this);
      },
      deep: true
    },
    isFormat: {
      handler() {
        format(this);
      }
    },
    isDiff: {
      handler() {
        init(this);
      }
    },
    isFormatOnChange: {
      handler() {
        init(this);
      }
    }
  },
  mounted() {
    init(this);
  },
  destroyed() {
    destroy(this);
  }
};
</script>

<style scoped>
div.monaco-editor-wrap {
  margin: 1rem 0;
  width: 100%;
  height: 2000px;
}
/* .monaco-editor-wrap > div.monaco-editor,
.monaco-editor-wrap > div.monaco-diff-editor {
  width: 100%;
  height: 100%;
} */
</style>
