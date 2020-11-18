<template>
  <router-link :to="item.route">
    <a-badge
      :class="[
        'base-tabbar-item-badge-wrap',
        'animate__animated',
        isActive ? 'animate__zoomIn' : ''
      ]"
      :style="{
        '--animate-duration': '.35s',
        'animation-fill-mode': 'forwards'
      }"
      :color="badge.color"
      :count="badge.count"
      :overflow-count="badge.overflowCount"
      :dot="badge.dot"
      @click="clickTabBar"
    >
      <div
        :class="[
          'base-tabbar-item-wrap',
          isActive
            ? 'base-tabbar-item-wrap-active'
            : 'base-tabbar-item-wrap-unactive'
        ]"
      >
        <div class="base-tabbar-item-icon">
          <slot name="icon"
            ><icon
              :icon="item.icon"
              :color="isActive ? activeColor : color"
            ></icon
          ></slot>
        </div>
        <div class="base-tabbar-item-text">
          <slot name="text"
            ><span
              v-text="item.text"
              :style="{ color: isActive ? activeColor : color }"
            ></span
          ></slot>
        </div>
      </div>
    </a-badge>
  </router-link>
</template>

<script>
export default {
  name: "BaseTabBarItem",
  data() {
    return {};
  },
  props: {
    color: { type: [String], default: "", required: false },
    activeColor: { type: [String], default: "", required: false },
    itemKey: {
      type: [String, Number],
      default: "",
      required: true
    },
    activeItemKey: {
      type: [String, Number],
      default: "",
      required: true
    },
    item: {
      type: [Object],
      default() {
        return {};
      },
      required: false
    }
  },
  computed: {
    badge() {
      return JSON.parse(this.item.badge);
    },
    isActive() {
      let activeItemKey = this.activeItemKey;
      return activeItemKey && activeItemKey == this.itemKey;
    }
  },
  methods: {
    clickTabBar() {
      console.log("点击tabbar " + this.itemKey);
      this.$emit("click", this.itemKey);
      this.$emit("change", this.itemKey);
    }
  },
  mounted() {}
};
</script>

<style>
.base-tabbar-item-badge-wrap {
  width: 3.4rem;
  padding: 0 0 0.4rem;
  /* border: 1px solid blue; */
}
.base-tabbar-item-badge-wrap sup {
  animation: none;
  position: absolute;
}

.base-tabbar-item-wrap {
  /* padding: 0.8rem 0.5rem; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
/* .base-tabbar-item-wrap-active {
  border: 1px solid red;
} */
/* .base-tabbar-item-wrap.base-tabbar-item-wrap-active > .base-tabbar-item-text {
  color: #eaa254;
}
.div.base-tabbar-item-wrap-active > .icon svg {
  color: #eaa254;
} */
/* .base-tabbar-item-wrap-unactive {
  border: 1px solid black;
} */

.base-tabbar-item-wrap .icon {
  margin: 0.5rem 0;
}
.base-tabbar-item-wrap .icon svg {
  width: 1.2rem;
  height: 1.2rem;
}

.base-tabbar-item-wrap .base-tabbar-item-text {
  font-size: 0.5rem;
  color: black;
}
</style>
