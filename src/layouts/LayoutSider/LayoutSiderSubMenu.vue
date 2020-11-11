<template>
  <a-sub-menu :key="menu.name" v-bind="$props" v-on="$listeners">
    <span slot="title">
      <a-icon :type="menu.icon ? menu.icon : 'menu'" />
      <span
        ><router-link :to="menu.path">{{ menu.name }} </router-link></span
      >
    </span>

    <template v-for="item in menu.children">
      <a-menu-item
        v-if="!item.children || item.children.size == 0"
        :key="item.name"
      >
        <a-icon :type="item.icon ? item.icon : 'menu'" />
        <span
          ><router-link :to="item.path">{{ item.name }}</router-link></span
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

<style></style>
