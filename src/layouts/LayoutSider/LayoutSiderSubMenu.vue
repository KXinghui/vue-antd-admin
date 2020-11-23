<template>
  <a-sub-menu
    class="layout-sider-menu-item"
    :key="menu.name"
    v-bind="$props"
    v-on="$listeners"
  >
    <span slot="title">
      <router-link :to="menu.path">
        <icon :icon="menu.icon ? menu.icon : 'Antd_menu'" />
        <span>{{ menu.name }}</span></router-link
      >
    </span>

    <template v-for="item in menu.children">
      <a-menu-item
        class="layout-sider-menu-item"
        v-if="!item.children || item.children.size == 0"
        :key="item.name"
      >
        <router-link :to="item.path">
          <icon :icon="menu.icon ? menu.icon : 'Antd_menu'" />
          <span>{{ item.name }}</span></router-link
        >
      </a-menu-item>
      <layout-sider-sub-menu v-else :key="item.name" :menu="item" />
    </template>
  </a-sub-menu>
</template>

<script>
// import { ROUTES } from "../router/routes";
import { Menu } from "ant-design-vue";

export default {
  name: "LayoutSiderSubMenu",
  // must add isSubMenu: true
  isSubMenu: true,
  props: {
    ...Menu.SubMenu.props,
    // Cannot overlap with properties within Menu.SubMenu.props
    menu: {
      type: [Object],
      default: () => {
        return {};
      },
      required: false
    }
  },
  methods: {}
};
</script>

<style lang="less" src="../../styles/layout.less"></style>

<style></style>
