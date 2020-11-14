<template>
  <div class="chat-tabbar-wrap">
    <slot name="chatTabBarItem">
      <chat-tab-bar-item
        v-for="(chatTabBar, index) in chatTabBars"
        :item="chatTabBar"
        :key="index"
        :item-key="index"
        :active-item-key="realActiveItemKey"
        @click="clickTabBar"
        @change="changeTabBar(index)"
        v-bind="$props"
      ></chat-tab-bar-item>
    </slot>
  </div>
</template>

<script>
import ChatTabBarItem from "./ChatTabBarItem";

export default {
  name: "ChatTabBar",
  components: { ChatTabBarItem },
  data() {
    return {
      inActiveItemKey: ""
    };
  },
  props: {
    color: { type: [String], default: "", required: false },
    activeColor: { type: [String], default: "", required: false },
    activeItemKey: {
      type: [String, Number],
      default: "",
      required: false
    },
    chatTabBars: {
      type: [Array],
      default: function() {
        return [
          {
            icon: "Antd_home",
            text: "首页",
            route: {},
            badge: JSON.stringify({
              color: "red",
              count: 12,
              overflowCount: 99,
              dot: false
            })
          }
        ];
      },
      required: false
    }
  },
  computed: {
    realActiveItemKey() {
      let activeItemKey = this.activeItemKey;
      let isNotNull = activeItemKey | (activeItemKey == 0);
      return isNotNull ? activeItemKey : this.inActiveItemKey;
    }
  },
  methods: {
    changeTabBar(key) {
      this.inActiveItemKey = key;
      this.$emit("change", key);
    },
    clickTabBar() {
      this.$emit("click");
    }
  },
  mounted() {
    let activeItemKey = this.activeItemKey;
    let isNotNull = activeItemKey | (activeItemKey == 0);
    return isNotNull ? activeItemKey : this.inActiveItemKey;
  }
};
</script>

<style>
.chat-tabbar-wrap {
  height: 3.25rem;
  max-height: 3.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  /* background-color: #e1dfde; */
  background-color: white;
  position: fixed;
  width: 100%;
  bottom: 0;
}
</style>
