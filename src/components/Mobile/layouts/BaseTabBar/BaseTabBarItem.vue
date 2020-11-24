<template>
  <router-link :to="item.route">
    <a-badge
      :class="[
        isCenter
          ? 'base-tabbar-center-item-badge-wrap'
          : 'base-tabbar-item-badge-wrap',
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
          isCenter ? 'base-tabbar-center-item-wrap' : 'base-tabbar-item-wrap',
          isActive
            ? 'base-tabbar-item-wrap-active'
            : 'base-tabbar-item-wrap-unactive'
        ]"
      >
        <div
          class="base-tabbar-item-icon"
          :style="
            isCenter
              ? {
                  'background-color': activeColor,
                  'border-radius':
                    !item.centerShape || item.centerShape == 'circle'
                      ? '50%'
                      : '15%'
                }
              : {}
          "
        >
          <slot name="icon"
            ><icon
              :icon="item.icon"
              :color="isActive && !isCenter ? activeColor : color"
            ></icon
          ></slot>
        </div>
        <div
          :class="[
            'base-tabbar-item-text',
            'animate__animated',
            !isActive && showTextOnActive
              ? 'animate__zoomOut base-tabbar-item-text-unactive'
              : ''
          ]"
        >
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
    // 激活时才显示文字
    showTextOnActive: {
      type: [Boolean],
      default: false,
      required: false
    },
    color: {
      type: [String],
      default: "",
      required: false
    },
    activeColor: {
      type: [String],
      default: "",
      required: false
    },
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
        //   index: 1,
        //   icon: "Antd_home",
        //   text: "首页",
        //   route: { path: "/pvtnote/home" },
        //   badge: JSON.stringify({ count: 0 }),
        //   isCenter: true,
        //   // circle square
        //   centerShape: "circle"
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
    },
    isCenter() {
      return this.item.isCenter;
    }
  },
  methods: {
    clickTabBar() {
      this.$emit("click", this.itemKey);
      this.$emit("change", this.itemKey);
    }
  }
};
</script>

<style>
.base-tabbar-item-badge-wrap {
  width: 3.4rem;
  padding: 0 0 0.4rem;
}
.base-tabbar-item-badge-wrap sup,
.base-tabbar-center-item-badge-wrap sup {
  animation: none;
  position: absolute;
}

.base-tabbar-item-badge-wrap .ant-badge-count,
.base-tabbar-item-badge-wrap .ant-badge-dot,
.base-tabbar-item-badge-wrap .ant-badge .ant-scroll-number-custom-component {
  transform: translate(30%, 5%);
}

.base-tabbar-item-wrap,
.base-tabbar-center-item-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.base-tabbar-center-item-wrap .icon,
.base-tabbar-item-wrap .icon {
  margin: 0.5rem 0;
}

.base-tabbar-center-item-wrap .icon svg,
.base-tabbar-item-wrap .icon svg {
  width: 1.2rem;
  height: 1.2rem;
}

.base-tabbar-center-item-wrap .base-tabbar-item-text,
.base-tabbar-item-wrap .base-tabbar-item-text {
  font-size: 0.5rem;
  color: black;
}

.base-tabbar-center-item-wrap .base-tabbar-item-text {
  font-size: 0.7rem;
  margin-top: 0.3rem;
}

.base-tabbar-center-item-wrap .base-tabbar-item-text-unactive,
.base-tabbar-item-wrap .base-tabbar-item-text-unactive {
  display: none;
}

/* Center */
.base-tabbar-center-item-badge-wrap {
  width: 4rem;
  position: relative;
  top: -1.1rem;
}

.base-tabbar-center-item-badge-wrap .ant-badge-count,
.base-tabbar-center-item-badge-wrap .ant-badge-dot,
.base-tabbar-center-item-badge-wrap
  .ant-badge
  .ant-scroll-number-custom-component {
  transform: translate(15%, 60%);
}

.base-tabbar-center-item-wrap .base-tabbar-item-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  /* border-radius: 20%; */
  border: 0.5rem solid #ffffff;
  box-shadow: 0 0 0.35rem 0 #e2e1e1;
}
</style>
