<template>
  <div class="input-wrp">
    <a-input
      v-if="inputType === 'default'"
      v-model="value"
      :default-value="defaultValue"
      :max-lenght="maxLength"
      :placeholder="placeholder"
      :allow-clear="allowClear"
    ></a-input>
    <div class="textarea" v-if="inputType === 'textarea'">
      <a-textarea
        v-model="value"
        :default-value="defaultValue"
        :auto-size="autoSize"
        :max-lenght="maxLength"
        :placeholder="placeholder"
        :allow-clear="allowClear"
      />
      <span v-if="showWordLimit" class="text-count"
        >{{ textCount }}/{{ maxLength }}</span
      >
    </div>
    <a-input-password
      v-if="inputType === 'password'"
      v-model="value"
      :default-value="defaultValue"
      :max-lenght="maxLength"
      :placeholder="placeholder"
      :allow-clear="allowClear"
    />
    <a-input-number
      v-if="inputType === 'number'"
      v-model="value"
      :default-value="defaultValue"
      :min="0"
      :max="100"
      :formatter="value => `${value}%`"
      :parser="value => value.replace('%', '')"
    />
  </div>
</template>

<script>
const INPUT_TYPES = ["textarea", "default", "password", "number"];

export default {
  name: "AntdInput",
  data() {
    return {};
  },
  props: {
    inputType: {
      type: [String],
      default: "default",
      required: false,
      validator: function(value) {
        return INPUT_TYPES.indexOf(value) !== -1;
      }
    },
    value: {
      type: [String],
      default: "",
      required: false
    },
    defaultValue: {
      type: [String],
      default: "",
      required: false
    },
    size: {
      type: [String],
      default: "default",
      required: false,
      validator: function(value) {
        return ["large", "default", "small"].indexOf(value) !== -1;
      }
    },
    maxLength: {
      type: [Number],
      default: null,
      required: false
    },
    showWordLimit: {
      type: [Boolean],
      default: true,
      required: false
    },
    allowClear: {
      type: [Boolean],
      default: true,
      required: false
    },
    disabled: {
      type: [Boolean],
      default: false,
      required: false
    },
    placeholder: {
      type: [String],
      default: "",
      required: false
    },
    autoSize: {
      type: [Object, Boolean],
      default: function() {
        return null;
      },
      required: false
    }
  },
  computed: {
    textCount() {
      return this.value.length;
    }
  }
};
</script>

<style>
div.textarea {
  position: relative;
}
div.textarea .text-count {
  position: absolute;
  right: 0.4rem;
  bottom: 0.4rem;
}
</style>
