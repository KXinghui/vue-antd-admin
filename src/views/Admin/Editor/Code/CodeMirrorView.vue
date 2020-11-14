<template>
  <div class="editor">
    <a-button type="primary" @click="consoleLog">
      Console
    </a-button>
    <code-mirror-editor
      :value.sync="value"
      :option="option"
    ></code-mirror-editor>
    <code-mirror-editor
      :value.sync="value2"
      :option="option2"
    ></code-mirror-editor>
  </div>
</template>

<script>
import CodeMirrorEditor from "@components/Editor/Code/CodeMirror";

export default {
  name: "CodeMirrorView",
  components: {
    CodeMirrorEditor
  },
  data() {
    return {
      value: `function test(){
	alert("adsfadsfa");
}
test();`,
      option: {},
      value2: "",
      option2: {}
    };
  },
  methods: {
    consoleLog() {
      console.log(this.value), console.log(this.value2);
    }
  }
};
</script>

<style></style>
