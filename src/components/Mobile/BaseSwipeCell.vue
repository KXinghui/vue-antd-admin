<template>
  <bs-pull :scrollY="false" :scrollX="true" :options="{ scrollbar: false }">
    <div slot="afterPullDown"></div>
    <div
      class="base-swipe-cell-wrap"
      :style="{ minHeight: cellSize }"
      v-on="$listeners"
    >
      <div class="base-swipe-cell-left-wrap">
        <slot name="left">
          <div class="base-swipe-cell-left-content">
            <icon
              v-if="icon"
              class="base-swipe-cell-left-icon"
              :icon="icon"
            ></icon>
            <span class="base-swipe-cell-text" v-text="text"></span>
          </div>
          <span class="base-swipe-cell-label" v-text="label"></span>
        </slot>
      </div>
      <div class="base-swipe-cell-right-wrap">
        <slot name="right">
          <div class="base-swipe-cell-right-content">
            <span class="base-swipe-cell-text" v-text="rightText"></span>
            <a-icon v-if="arrow" type="right" />
            <icon
              v-if="!arrow && icon"
              class="base-swipe-cell-right-icon"
              :icon="rightIcon"
            ></icon>
          </div>
          <span class="base-swipe-cell-label" v-text="rightLabel"></span>
        </slot>
      </div>
    </div>
    <div slot="afterPullUp"></div>
  </bs-pull>
</template>

<script>
import BsPull from "../BetterScroll/BsPull.vue";
const SIZES = ["small", "default", "large"];

export default {
  components: { BsPull },
  name: "BaseSwipeCell",
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
.base-swipe-cell-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: white;
  cursor: pointer;
  transition: 0.4s;
  /* margin: 0.5rem 0; */
}

.base-swipe-cell-left-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.base-swipe-cell-left-icon {
  margin-right: 0.6rem;
}
.base-swipe-cell-label {
  color: #969799;
  font-size: 0.5rem;
}

.base-swipe-cell-right-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}

.base-swipe-cell-right-icon {
  margin-left: 0.6rem;
}
</style>
