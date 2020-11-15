<template>
  <div
    class="chat-cell-wrap"
    :style="{ minHeight: cellSize }"
    v-on="$listeners"
  >
    <div class="chat-cell-left-wrap">
      <slot name="left">
        <div class="chat-cell-left-content">
          <icon v-if="icon" class="chat-cell-left-icon" :icon="icon"></icon>
          <span class="chat-cell-text" v-text="text"></span>
        </div>
        <span class="chat-cell-label" v-text="label"></span>
      </slot>
    </div>
    <div class="chat-cell-right-wrap">
      <slot name="right">
        <div class="chat-cell-right-content">
          <span class="chat-cell-text" v-text="rightText"></span>
          <a-icon v-if="arrow" type="right" />
          <icon
            v-if="!arrow && icon"
            class="chat-cell-right-icon"
            :icon="rightIcon"
          ></icon>
        </div>
        <span class="chat-cell-label" v-text="rightLabel"></span>
      </slot>
    </div>
  </div>
</template>

<script>
const SIZES = ["small", "default", "large"];

export default {
  name: "ChatCell",
  data() {
    return {};
  },
  props: {
    size: {
      type: [String, Number],
      default: "default",
      required: false,
      validator(value) {
        if (parseFloat(value) == value) {
          return true;
        }
        return SIZES.includes(value);
      }
    },
    title: {
      type: [String],
      default: "",
      required: false
    },
    icon: {
      type: [String],
      default: "",
      required: false
    },
    text: {
      type: [String],
      default: "",
      required: false
    },
    label: {
      type: [String],
      default: "",
      required: false
    },
    arrow: {
      type: [Boolean],
      default: false,
      required: false
    },
    rightIcon: {
      type: [String],
      default: "",
      required: false
    },
    rightText: {
      type: [String],
      default: "",
      required: false
    },
    rightLabel: {
      type: [String],
      default: "",
      required: false
    }
  },
  computed: {
    cellSize() {
      let size = this.size;
      if (SIZES.includes(size)) {
        // if("default"== value)
        switch (size) {
          case "small":
            return "1.63rem";
          case "default":
            return "3.25rem";
          case "large":
            return "6.5rem";
          default:
            break;
        }
      }
      return `${size}rem`;
    }
  },
  methods: {},
  mounted() {}
};
</script>

<style>
.chat-cell-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: white;
  cursor: pointer;
  transition: 0.4s;
  /* margin: 0.5rem 0; */
}

.chat-cell-left-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.chat-cell-left-icon {
  margin-right: 0.6rem;
}
.chat-cell-label {
  color: #969799;
  font-size: 0.5rem;
}

.chat-cell-right-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}

.chat-cell-right-icon {
  margin-left: 0.6rem;
}
</style>
