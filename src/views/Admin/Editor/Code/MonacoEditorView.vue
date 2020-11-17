<template>
  <div class="monaco-editor-view-wrap">
    <a-button type="primary" @click="consoleLog">
      Console
    </a-button>
    <a-form-model :layout="formOption.layout" v-bind="formItemLayout">
      <a-form-model-item label="差异编辑器">
        <a-checkbox default-value="false" @change="changeDiff"> </a-checkbox>
      </a-form-model-item>
      <!-- <a-form-model-item v-show="isDiff" label="InDiffEditor">
        <a-checkbox default-value="false" @change="changeInDiffEditor">
        </a-checkbox>
      </a-form-model-item> -->
      <a-form-model-item label="只读">
        <a-checkbox default-value="false" @change="changeReadOnly">
        </a-checkbox>
      </a-form-model-item>
      <a-form-model-item label="语言">
        <a-select
          style="width: 15.6rem;"
          default-value="javascript"
          @change="handleChangeLnaguage"
          :value="language"
        >
          <a-select-option
            v-for="supportLanguage in supportLanguages"
            :value="supportLanguage"
            :key="supportLanguage"
          >
            {{ supportLanguage }}
          </a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item label="主题">
        <a-select
          style="width: 15.6rem;"
          default-value="vs-dark"
          @change="handleChangeTheme"
          :value="theme"
        >
          <a-select-option
            v-for="supportTheme in supportThemes"
            :value="supportTheme"
            :key="supportTheme"
          >
            {{ supportTheme }}
          </a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item :wrapper-col="buttonItemLayout.wrapperCol">
        <a-button type="primary" @click="format">
          格式化
        </a-button>
      </a-form-model-item>
    </a-form-model>
    <monaco-editor
      height="500px"
      :is-diff="isDiff"
      :is-format.sync="isFormat"
      :language="language"
      :theme="theme"
      :value.sync="value"
      :options="options"
      :is-format-on-change="false"
    />
  </div>
</template>

<script>
import MonacoEditor from "@components/Editor/Code/MonacoEditor";
import { FORM_MIXIN } from "@mixins/form-mixin";
import {
  SUPPORT_LANGUAGES,
  SUPPORT_THEMES
} from "@components/Editor/Code/MonacoEditor/monacoeditor-utils";

export default {
  name: "CodeMirrorView",
  mixins: [FORM_MIXIN],
  components: {
    MonacoEditor
  },
  data() {
    return {
      formOption: { layout: "inline" },
      supportLanguages: SUPPORT_LANGUAGES,
      supportThemes: SUPPORT_THEMES,
      isFormat: false,
      isDiff: false,
      language: "json",
      theme: "vs-dark",
      originValue: `{"id":"plaintext","extensions":[".txt",".gitignore"]}`,
      value: `{"id":"plaintext","extensions":[".txt",".gitignore"]}`,
      options: {
        readOnly: false,
        inDiffEditor: false
      }
    };
  },
  methods: {
    changeDiff(e) {
      this.isDiff = e.target.checked;
    },
    handleChangeLnaguage(language) {
      this.language = language;
    },
    handleChangeTheme(theme) {
      this.theme = theme;
    },
    /* changeInDiffEditor(e) {
      this.options = Object.assign(this.options, {
        inDiffEditor: e.target.checked
      });
    }, */
    changeReadOnly(e) {
      this.options = Object.assign(this.options, {
        readOnly: e.target.checked
      });
    },
    format() {
      this.isFormat = true;
    },
    consoleLog() {
      console.log(process.env.NODE_ENV);
    }
  }
};
</script>

<style>
.monaco-editor-view-wrap {
  border: 1px solid green;
  padding: 1rem;
  height: 100%;
}

/* .monaco-editor-view-wrap .monaco-editor-wrap {
  margin: 1rem 0;
} */

/* .monaco-editor-view-wrap .monaco-editor,
.monaco-editor-view-wrap .monaco-editor .overflow-guard {
  width: 100%;
} */
</style>
