<template>
  <a-dropdown v-model="visible" :placement="placement" :trigger="trigger">
    <slot name="picker"
      ><div
        class="color-picker"
        :style="{ 'background-color': pickerColor }"
      ></div
    ></slot>
    <a-menu slot="overlay">
      <chrome-picker :value="colors" @input="inputColors"></chrome-picker>
    </a-menu>
  </a-dropdown>
</template>

<script>
import { Chrome } from "vue-color";
import { isString } from "../../utils/utils";

export default {
  name: "ColorPicker",
  components: { "chrome-picker": Chrome },
  data() {
    return {
      visible: false
    };
  },
  props: {
    colors: {
      type: [String, Object],
      default: "white",
      required: false
    },
    trigger: {
      type: [Array],
      default() {
        return ["click", "hover", "contextmenu"];
      },
      required: false
    },
    placement: {
      type: [String],
      default: "bottomLeft",
      required: false,
      validator(value) {
        return [
          "bottomLeft",
          "bottomCenter",
          "bottomRight",
          "topLeft",
          "topCenter",
          "topRight"
        ].includes(value);
      }
    },
    isInputVisible: {
      type: [Boolean],
      default: false,
      required: false
    }
  },
  computed: {
    pickerColor() {
      let colors = this.colors;
      if (isString(this.colors) && colors.charAt(0) == "#") {
        return colors;
      }
      return colors.hex;
    }
  },
  methods: {
    inputColors(colors) {
      debugger;
      // this.$emit("update:colors", colors);
      this.$emit("input", colors);
      if (this.isInputVisible) {
        this.visible = false;
      }
    }
  }
};
</script>

<style scoped>
.color-picker {
  width: 1.2rem;
  height: 1.2rem;
  padding: 0.8rem;
  border: 1px solid black;
}
</style>
