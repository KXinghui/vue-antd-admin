<template>
  <a-layout-sider
    v-model="collapsedSider"
    :trigger="null"
    collapsible
    :class="floatSider ? 'layout-sider-wrap-mobile' : 'layout-sider-wrap'"
    :ref="layoutSiderRef"
    :style="{
      left: this.floatSider ? (this.showSider ? '0px' : '-200ox') : ''
    }"
  >
    <!-- :style="layoutSiderWrapStyle" -->
    <div class="layout-sider">
      <layout-sider-logo v-show="showSiderLogo" :collapsed="collapsedSider" />
      <div
        v-show="isMobile"
        :class="
          collapsedSider
            ? 'layout-sider-btn-wrap-collapsed'
            : 'layout-sider-btn-wrap'
        "
      >
        <a-button type="primary" @click="toggleCollapsedSider">
          <a-icon :type="collapsedSider ? 'menu-unfold' : 'menu-fold'" />
        </a-button>
        <a-button v-show="floatSider" type="primary" @click="toggleShowSider">
          <a-icon :type="showSider ? 'close' : 'menu'" />
        </a-button>
      </div>
      <!-- theme="dark"  -->
      <a-menu
        class="layout-sider-menu"
        mode="inline"
        :inline-collapsed="collapsedSider"
        :inline-indent="10"
      >
        <template v-for="item in menus">
          <a-menu-item
            class="layout-sider-menu-item"
            v-if="!item.children"
            :key="item.name"
            @openChange="onOpenChange"
          >
            <router-link :to="item.path">
              <icon :icon="item.icon ? item.icon : 'Antd_menu'" />
              <span>{{ item.name }}</span></router-link
            >
          </a-menu-item>
          <layout-sider-sub-menu v-else :key="item.name" :menu="item" />
        </template>
      </a-menu>
    </div>
  </a-layout-sider>
</template>

<script>
// 该组件可从Vuex获取身份Token，请求后台获取LogoUrl和LogoTile
import LayoutSiderLogo from "./LayoutSiderLogo";
import LayoutSiderSubMenu from "./LayoutSiderSubMenu";
import { BASE_MENUS, BASE_LAYOUT_MENUS } from "@router/admin-menu";
// import { EDITOR_ROUTES, FORM_ROUTES } from "@router/admin-routes";
// TODO
/* 
height: 100%;
position: absolute; // 隐藏
z-index: 1; // 为0则往右挤压，大于0则往右像抽屉拉出
transition: .6s; 

*/
export default {
  name: "LayoutSider",
  components: {
    LayoutSiderLogo,
    LayoutSiderSubMenu
  },
  data() {
    return {
      layoutSiderRef:
        "layoutSider-" +
        Math.random()
          .toString()
          .substr(2),
      // menus: [...EDITOR_ROUTES, ...FORM_ROUTES],
      menus: [...BASE_LAYOUT_MENUS, ...BASE_MENUS],
      isRefresh: false
      /* colla.psed: false */
    };
  },
  props: {
    isMobile: {
      type: [Boolean],
      default: false,
      required: false
    },
    floatSider: {
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
    },
    showSiderLogo: {
      type: [Boolean],
      default: true,
      required: false
    }
  },
  computed: {
    // layoutSiderWrapStyle() {
    //   // computed 元素还未渲染
    //   this.$nextTick(() => {
    //     if (this.isMobile) {
    //       console.log(this.$refs[this.layoutSiderRef]);
    //       let layoutSiderEle = this.$refs[this.layoutSiderRef].$el;
    //       return {
    //         left: this.showSider ? "0px" : -layoutSiderEle.offsetWidth + "px"
    //       };
    //     }
    //   });
    //   return {};
    // }
  },
  methods: {
    toggleCollapsedSider() {
      this.$emit("update:collapsedSider", !this.collapsedSider);
    },
    toggleShowSider() {
      this.$emit("update:showSider", !this.showSider);
    },
    showAndHideSider() {
      if (this.showSider) {
        window.addEventListener("click", this.showAndHideSider);
      } else {
        window.removeEventListener("click", this.showAndHideSider);
      }
    },
    onOpenChange(openKeys) {
      console.log("openKeys      " + openKeys);
      // const latestOpenKey = openKeys.find(
      //   key => this.openKeys.indexOf(key) === -1
      // );
      // if (this.menus.indexOf(latestOpenKey) === -1) {
      //   this.openKeys = openKeys;
      // } else {
      //   this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      // }
    }
    /* watch: {
      showSider() {
        this.showAndHideSider();
      }
    } */
  }
};
</script>

<style lang="less" src="../../styles/layout.less"></style>

<style>
/* aside.layout-sider-wrap {
  transition: 0.6s;
  height: 100%;
}
aside.layout-sider-wrap-mobile {
  height: 100%;
  position: absolute;
  z-index: 10;
  transition: 0.6s;
}
.layout-sider {
  height: 100%;
}

.layout-sider .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: 0.3s;
}

.layout-sider-btn-wrap {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}
.layout-sider-btn-wrap-collapsed {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.layout-sider-menu {
  height: 100%;
  overflow: auto;
}

.layout-sider-menu li,
.layout-sider-menu a {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.65);
}
.layout-sider-menu li:hover a,
.layout-sider-menu a:hover {
  text-decoration: none;
  color: white;
} */
/* .layout-sider-menu
  .ant-menu-submenu
  .ant-menu-submenu-title
  .layout-sider-menu-item:hover,
.layout-sider-menu .layout-sider-menu-item:hover,
.layout-sider-menu
  .layout-sider-menu-item:hover
  .layout-sider-menu
  .layout-sider-menu-item
  a {
  text-decoration: none;
  color: #ca11b8;
} */
</style>
