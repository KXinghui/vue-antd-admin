<template>
  <a-form-model-item label="formItem.label">
    <component
      ref="cmptId"
      :is="formItem.cmptName"
      v-bind="formItem.props"
    ></component>
  </a-form-model-item>
</template>

<script>
import { FORM_MODEL_ITEMS } from "./form-utils";

export default {
  name: "FormModelItem",
  components: {},
  data() {
    return {
      cmptId: this._uid,
      initFormModel: null
    };
  },
  props: {
    formItem: {
      type: [Object],
      default: function() {
        return {
          label: "标签",
          cmptName: "",
          props: {},
          slots: [{ slotName: "", cmptName: "" }]
        };
      },
      required: false,
      validator: function(value) {
        console.log(value);
        let cmptName = value.cmptName;
        return true || (cmptName && FORM_MODEL_ITEMS.indexOf(cmptName) !== -1);
        // ["textarea", "default", "password", "number"].indexOf(value) !== -1
      }
    }
  },
  computed: {
    /* realCmptId() {
      return `${this.formItem.cmptName}_cmptId`;
    } */
  },
  methods: {
    init() {
      console.log(this.cmptId);
      console.log("props    ", this.$props);
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style></style>
