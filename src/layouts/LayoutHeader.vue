<template>
  <div class="layout-header">
    <a-col :xs="8" :sm="0" :md="0" :lg="0" :xl="0">
      <a-icon
        v-show="isMobile"
        class="btn"
        :type="showSider ? 'close' : 'menu'"
        @click="toggleShowSider"
      />
    </a-col>
    <a-col :xs="0" :sm="1" :md="1" :lg="1" :xl="1">
      <div class="layout-header-left">
        <a-icon
          v-show="!isMobile"
          class="btn"
          :type="collapsedSider ? 'menu-unfold' : 'menu-fold'"
          @click="toggleCollapsedSider"
        />
        <a-icon
          v-show="isMobile"
          class="btn"
          :type="showSider ? 'close' : 'menu'"
          @click="toggleShowSider"
        />
      </div>
    </a-col>
    <a-col :xs="8" :sm="0" :md="0" :lg="0" :xl="0">
      <layout-sider-logo :collapsed="true" />
    </a-col>
    <!-- <a-col :xs="8" :sm="0" :md="0" :lg="0" :xl="0">
      <identity-avatar :identity="identity" avatar-shape="square" />
    </a-col> -->
    <a-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
      <div class="layout-header-right">
        <full-screen />
        <identity-avatar :identity="identity" avatar-shape="square" />
      </div>
    </a-col>
  </div>
</template>

<script>
import FullScreen from "../components/FullScreen";
import IdentityAvatar from "@components/Identity/IdentityAvatar";
import LayoutSiderLogo from "./LayoutSider/LayoutSiderLogo";

export default {
  name: "LayoutHeader",
  components: { FullScreen, IdentityAvatar, LayoutSiderLogo },
  data() {
    return {
      siderClosed: false,
      identity: {
        name: "kxh",
        /* avatarUrl:
          "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" */
        userStateEnum: "Disabled"
      }
    };
  },
  props: {
    isMobile: {
      type: [Boolean],
      default: false,
      required: false
    },
    collapsedSider: {
      type: [Boolean],
      default: false,
      required: false
    },
    showSider: {
      type: [Boolean],
      default: false,
      required: false
    }
  },
  methods: {
    toggleCollapsedSider() {
      this.$emit("update:collapsedSider", !this.collapsedSider);
    },
    toggleShowSider() {
      this.$emit("update:showSider", !this.showSider);
    }
  }
};
</script>

<style>
.layout-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0rem;
}

.layout-header-left {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
}
.layout-header-right {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
}
</style>
