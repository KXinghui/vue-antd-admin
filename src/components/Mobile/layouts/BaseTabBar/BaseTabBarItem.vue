<template>
  <!-- <router-link tag="div" :to="item.route"> -->
  <a-badge
    v-if="true"
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
  <!-- </router-link> -->
</template>

<script>
import { pushRoute } from "../../../../utils/router-utils";

export default {
  name: "BaseTabBarItem",
  data() {
    return {};
  },
  props: {
    // 中间是否隐藏 是则不是中间的样式
    centerVisible: {
      type: [Boolean],
      default: true,
      required: false
    },
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
      required: false
    },
    activeItemKey: {
      type: [String, Number],
      default: "",
      required: false
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
      let badge = this.item.badge;
      return badge ? JSON.parse(badge) : { count: 0 };
    },
    isActive() {
      let activeItemKey = this.activeItemKey;
      return activeItemKey && activeItemKey == this.itemKey;
    },
    isCenter() {
      return this.item.isCenter && this.centerVisible;
    }
  },
  methods: {
    pushRoute,
    clickTabBar() {
      this.$emit("click", this.itemKey);
      this.$emit("change", this.itemKey);
      let route = this.item.route;
      if (route) {
        this.pushRoute(this.item.route);
      }
    }
  }
};
</script>

<style>
.base-tabbar-item-badge-wrap {
  cursor: pointer;
  width: 3.3rem;
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
  transform: translate(30%, 20%);
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
  margin: 0.3rem 0;
}

.base-tabbar-center-item-wrap .icon,
.base-tabbar-center-item-wrap .icon svg {
  width: 1.2rem;
  height: 1.2rem;
}

.base-tabbar-item-wrap .icon,
.base-tabbar-item-wrap .icon svg {
  width: 1.1rem;
  height: 1.1rem;
}

.base-tabbar-center-item-wrap .base-tabbar-item-text,
.base-tabbar-item-wrap .base-tabbar-item-text {
  font-size: 0.5rem;
  color: black;
}

.base-tabbar-center-item-wrap .base-tabbar-item-text {
  font-size: 0.7rem;
  margin-top: 0.4rem;
}

.base-tabbar-center-item-wrap .base-tabbar-item-text-unactive,
.base-tabbar-item-wrap .base-tabbar-item-text-unactive {
  display: none;
}

/* Center */
.base-tabbar-center-item-badge-wrap {
  cursor: pointer;
  width: 4rem;
  position: relative;
  top: -1.1rem;
}

/* .base-tabbar-center-item-badge-wrap .ant-badge-count,
.base-tabbar-center-item-badge-wrap .ant-badge-dot,
.base-tabbar-center-item-badge-wrap
  .ant-badge
  .ant-scroll-number-custom-component {
  transform: translate(15%, 60%);
} */

.base-tabbar-center-item-wrap .base-tabbar-item-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  /* border-radius: 20%; */
  border: 0.5rem solid #ffffff;
  box-shadow: 0 0 0.35rem 0 #e2e1e1;
  box-shadow: 0 0 6px rgba(180, 160, 120, 0.8);
}
</style>
