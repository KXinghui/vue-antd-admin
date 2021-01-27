<template>
  <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
    <!-- <slot name="form-items"></slot> -->
    <form-item
      v-for="(formItem, index) in formModelItems"
      :form-item="formItem"
      :key="index"
    ></form-item>
  </a-form-model>
</template>

<script>
import FormItem from "./FormItem";
export default {
  name: "Form",
  components: { FormItem },
  data() {
    return {
      initForm: null
    };
  },
  props: {
    formModelItems: {
      type: [Array],
      default: function() {
        return [];
      },
      required: false
    },
    inputType: {
      type: [String],
      default: "default",
      required: false,
      validator: function(value) {
        return (
          ["textarea", "default", "password", "number"].indexOf(value) !== -1
        );
      }
    }
  },
  mounted() {}
};
</script>

<style></style>
