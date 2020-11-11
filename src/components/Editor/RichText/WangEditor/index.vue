<template>
  <div class="wang-editor" v-viewer="{ movable: true }">
    <div v-if="ableEditing" :id="realEditroId" class="wang-editor"></div>
    <div v-if="!ableEditing" :id="realEditroMenuId" class="toolbar"></div>
    <div v-if="!ableEditing" :id="realEditroId" class="show-text"></div>
  </div>
</template>

<script>
import {
  initEditor,
  destoryEditor,
  EDITOR_NAME,
  EDITOR_MENU_NAME,
  DEFAULT_EDITOR_CONFIG,
  DEFAULT_EDITOR_COMPONENT_CONFIG,
  DEFAULT_IDENTITY_EDITOR_CONFIG,
  DEFAULT_EDITOR_STYLE_CONFIG
} from "./wangeditor-utils";

export default {
  name: "WangEditor",
  data() {
    return {
      editor: null
    };
  },
  props: {
    html: {
      type: [String],
      default: "",
      required: true
    },
    wangEditor: {
      type: [Object],
      default: function() {
        return {
          editorId: Math.random()
            .toString()
            .substr(2),
          editor: null,
          editorComponentConfig: DEFAULT_EDITOR_COMPONENT_CONFIG,
          editorConfig: DEFAULT_EDITOR_CONFIG,
          identityEditorConfig: DEFAULT_IDENTITY_EDITOR_CONFIG,
          editorStyleConfig: DEFAULT_EDITOR_STYLE_CONFIG
        };
      },
      required: false
    },
    text: {
      type: [String],
      default: "",
      required: false
    },
    json: {
      type: [String],
      default: "",
      required: false
    }
  },
  computed: {
    ableEditing() {
      return this.wangEditor.editorComponentConfig.ableEditing;
    },
    realEditroId() {
      let editorId = this.wangEditor.editorId;
      if (!editorId) {
        editorId = Math.random()
          .toString()
          .substr(2);
      }
      return `${EDITOR_NAME}${editorId}`;
    },
    realEditroMenuId() {
      let editorMenuId = this.wangEditor.editorMenuId;
      if (!editorMenuId) {
        editorMenuId = Math.random()
          .toString()
          .substr(2);
      }
      return `${EDITOR_MENU_NAME}${editorMenuId}`;
    }
  },
  methods: {
    createEditor() {
      // 创建编辑器
      this.editor = initEditor(this, this.wangEditor);
    },
    getJson() {
      let json = this.editor.txt.getJSON();
      console.log(json);
      console.log(JSON.stringify(json));
      return JSON.stringify(json);
    },
    appendContent(content) {
      this.editor.txt.append(content);
    },
    clearContent() {
      this.editor.txt.clear();
    },
    readHtml() {
      return this.editor.txt.html();
    },
    readText() {
      return this.editor.txt.text();
    }
  },
  mounted() {
    this.createEditor();
  },
  destroyed() {
    destoryEditor(this);
  }
};
</script>

<style>
/* table 样式 */
.wang-editor table {
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
}
.wang-editor table td,
.wang-editor table th {
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
  padding: 3px 5px;
}
.wang-editor table th {
  border-bottom: 2px solid #ccc;
  text-align: center;
}

.wang-editor img {
  width: 100%;
}

/* blockquote 样式 */
.wang-editor blockquote {
  display: block;
  border-left: 8px solid #d0e5f2;
  padding: 5px 10px;
  margin: 10px 0;
  line-height: 1.4;
  font-size: 100%;
  background-color: #f1f1f1;
}

/* code 样式 */
.wang-editor code {
  display: inline-block;
  *display: inline;
  *zoom: 1;
  background-color: #f1f1f1;
  border-radius: 3px;
  padding: 3px 5px;
  margin: 0 3px;
}
.wang-editor pre code {
  display: block;
}

/* ul ol 样式 */
.wang-editor ul,
.wang-editor ol {
  margin: 10px 0 10px 20px;
}

.show-text .w-e-text {
  overflow-y: visible;
}
</style>
