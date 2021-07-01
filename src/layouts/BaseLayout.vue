<template>
  <div class="base-layout-container">
    <div
      v-show="layoutSetting.floatSider && showSider"
      class="layout-sider-mask"
      @click="showSider = !showSider"
    ></div>
    <a-layout class="base-layout">
      <splitpanes class="default-theme">
        <!-- 'min-width': layoutSiderWidth, -->
        <pane :style="{ 'max-width': layoutSiderWidth }">
          <layout-sider
            @clickMenu="clickMenu"
            :menus="layoutMenus"
            :id="layoutSiderRef"
            :ref="layoutSiderRef"
            :theme="layoutSetting.layoutTheme"
            :is-mobile.sync="isMobile"
            :float-sider="layoutSetting.floatSider"
            :collapsed-sider.sync="collapsedSider"
            :show-sider.sync="showSider"
            :show-sider-logo="layoutSetting.showSiderLogo"
            :style="{
              left: layoutSiderLeft
            }"
          ></layout-sider>
        </pane>
        <pane style="width: 100%;">
          <a-layout class="base-layout-main">
            <splitpanes horizontal>
              <pane :id="layoutHeaderRef" style="max-height: 64px;">
                <!-- style="background: #fff; padding: 0;" -->
                <a-layout-header
                  :theme="layoutSetting.layoutTheme"
                  style="background: #fff; padding: 0;"
                >
                  <layout-header
                    :theme="layoutSetting.layoutTheme"
                    :is-mobile.sync="isMobile"
                    :collapsed-sider.sync="collapsedSider"
                    :showHeaderLogo="layoutSetting.showHeaderLogo"
                    :show-sider.sync="showSider"
                    @guide="handleGuide"
                  ></layout-header>
                </a-layout-header>
              </pane>
              <!-- <a-layout-content> -->
              <pane
                v-if="layoutSetting.showTagBar"
                :id="layoutTagBarRef"
                style="max-height: 40px;"
              >
                <layout-tag-bar
                  @activeTag="activeTag"
                  :tags.sync="layoutTags"
                  :activeTagIndex.sync="activeTagIndex"
                  :theme="layoutSetting.layoutTheme"
                  v-if="layoutSetting.showTagBar"
                ></layout-tag-bar>
              </pane>
              <pane :id="layoutMainRef" style="overflow: auto; height: 100%">
                <a-spin
                  class="base-layout-spin-container"
                  :spinning="loading.isLoad"
                  :tip="loading.text"
                  size="large"
                >
                  <layout-main
                    :menu="menu"
                    :theme="layoutSetting.layoutTheme"
                    :showMainBreadcrumbBar="layoutSetting.showMainBreadcrumbBar"
                  ></layout-main>
                </a-spin>
              </pane>
              <!-- </a-layout-content> -->
              <pane style="max-height: 64px;">
                <a-layout-footer
                  :id="layoutFooterRef"
                  :style="{
                    fontSize: isMobile ? '' : '1rem'
                  }"
                >
                  <!-- margin: isMobile ? '0 -3rem' : '' -->
                  <layout-footer :theme="layoutSetting.layoutTheme" />
                </a-layout-footer>
              </pane>
            </splitpanes>
            <layout-setting
              :id="layoutSettingRef"
              :theme="layoutSetting.layoutTheme"
            ></layout-setting>
          </a-layout>
        </pane>
      </splitpanes>
    </a-layout>
  </div>
</template>

<script>
var elementResizeDetectorMaker = require("element-resize-detector");
import { Splitpanes, Pane } from "splitpanes";
import "splitpanes/dist/splitpanes.css";
import {
  LayoutSider,
  LayoutHeader,
  LayoutTagBar,
  LayoutMain,
  LayoutSetting,
  LayoutFooter
} from "@layouts/layout";
import { mapState, mapMutations } from "vuex";
import { driverGuide } from "../utils/utils";
import { ADMIN_MUTATION_TYPE } from "../store/mutation-type";
import { transferRoute, matchRoute, pushRoute } from "../utils/router-utils";
// import Driver from "driver.js";
// import "driver.js/dist/driver.min.css";

export default {
  /* name: "BaseLayout", */
  components: {
    LayoutHeader,
    LayoutTagBar,
    LayoutFooter,
    LayoutSider,
    LayoutSetting,
    LayoutMain,
    Splitpanes,
    Pane
  },
  data() {
    return {
      collapsedSider: false,
      showSider: true,
      layoutMainRef:
        "layoutMain-" +
        Math.random()
          .toString()
          .substr(2),
      layoutFooterRef:
        "layoutFooter-" +
        Math.random()
          .toString()
          .substr(2),
      layoutSettingRef:
        "layoutSetting-" +
        Math.random()
          .toString()
          .substr(2),
      layoutSiderRef:
        "layoutSider-" +
        Math.random()
          .toString()
          .substr(2),
      layoutHeaderRef:
        "layoutHeader-" +
        Math.random()
          .toString()
          .substr(2),
      layoutTagBarRef:
        "layoutTagBar-" +
        Math.random()
          .toString()
          .substr(2),
      imgUrl: require("../assets/logo.png"),
      collapsed: false,
      layoutSiderWidth: "200px",
      layoutSiderLeft: "",
      menu: {
        parentMenus: [
          {
            id: "0",
            name: "账户中心",
            url: "/404"
          },
          {
            id: "1",
            name: "安全中心",
            url: "/404"
          },
          {
            id: "2",
            name: "绑定手机",
            url: "/404"
          }
        ]
      },
      activeTagIndex: -1
    };
  },
  computed: {
    /* isMobile() {
      return this.$store.state.admin.isMobile;
    },
    layoutSetting() {
      return this.$store.state.admin.layoutSetting;
    } */
    ...mapState({
      isMobile: state => state.admin.isMobile,
      // 传字符串参数 'count' 等同于 `state => state.count`
      layoutSetting: state => state.admin.layoutSetting,
      layoutMenus: state => state.admin.layoutMenus,
      // layoutActiveTagIndex: state => state.admin.layoutActiveTagIndex,
      loading: state => state.admin.loading
    }),
    // layoutSetting: {
    //   // getter
    //   get: function() {
    //     // Do not mutate vuex store state outside mutation handlers
    //     return Object.assign({}, this.$store.state.admin.layoutSetting);
    //   },
    //   // setter
    //   set: function(newValue) {
    //     this[ADMIN_MUTATION_TYPE.SET_LAYOUT_SETTING](newValue);
    //   }
    // },
    layoutMenus: {
      // getter
      get: function() {
        // Do not mutate vuex store state outside mutation handlers
        return this.$store.state.admin.layoutMenus;
      },
      // setter
      set: function(newValue) {
        this[ADMIN_MUTATION_TYPE.SET_LAYOUT_MENUS](newValue);
      }
    },
    layoutTags: {
      // getter
      get: function() {
        // Do not mutate vuex store state outside mutation handlers
        return this.$store.state.admin.layoutTags;
      },
      // setter
      set: function(newValue) {
        let oldLayoutTags = [...this.layoutTags];
        this[ADMIN_MUTATION_TYPE.SET_LAYOUT_TAGS](newValue);
        // 拖拽排序的激活标签索引
        let activeTagIndex = matchRoute(
          this.layoutTags,
          oldLayoutTags[this.activeTagIndex]
        );
        if (activeTagIndex != -1) {
          this.activeTagIndex = activeTagIndex;
        }
      }
    },
    mobileLayoutSiderWidth() {
      // computed 元素还未渲染
      let layoutSiderRef = this.$refs[this.layoutSiderRef];
      let layoutSiderEle =
        layoutSiderRef && "$el" in layoutSiderRef ? layoutSiderRef.$el : null;
      let floatSider = this.layoutSetting.floatSider;
      if (layoutSiderEle) {
        return !floatSider && this.showSider
          ? layoutSiderEle.offsetWidth + "px"
          : "0px";
      }
      return !floatSider && this.showSider ? "200px" : "0px";
    },
    mobileLayoutSiderLeft() {
      // computed 元素还未渲染
      let layoutSiderRef = this.$refs[this.layoutSiderRef];
      let layoutSiderEle =
        layoutSiderRef && "$el" in layoutSiderRef ? layoutSiderRef.$el : null;
      let floatSider = this.layoutSetting.floatSider;
      if (layoutSiderEle) {
        // layoutSiderEle.style.position  = floatSider ? "absolute" : "";
        return floatSider
          ? this.showSider
            ? ""
            : -layoutSiderEle.offsetWidth + "px"
          : "";
      }
      return floatSider ? (this.showSider ? "" : "-200px") : "";
    }
    /* computedLayoutSiderWidth: {
      // getter
      get: function() {
        // Do not mutate vuex store state outside mutation handlers
        this.layoutSiderWidth =
          this.isMobile && !this.showSider ? "0px" : "200px";
        return this.layoutSiderWidth;
      }
      // setter
      set: function(newValue) {
        this.layoutSiderWidth = newValue;
      }
    }*/
  },
  beforeRouteEnter(to, from, next) {
    // 在组件导航守卫路中需要 Menu 转换 Tag
    next(vm => {
      vm.clickMenu(to);
    });
  },
  methods: {
    pushRoute,
    activeTag(activeTagIndex) {
      this.clickMenu(this.layoutTags[activeTagIndex]);
    },
    /**
     * Menu 转换 Tag 在组件导航守卫路中(根据path匹配路由)需要该方法
     */
    clickMenu(menu) {
      if (!menu) {
        // TODO 当layoutTags为空时，需要查找没有标签时的激活路由作为参数调用自身
        this.clickMenu({
          path: "/",
          name: "BaseLayout"
        });
        return;
      }
      let tag = transferRoute(menu);
      let layoutTags = [...this.layoutTags];
      let activeTagIndex = matchRoute(layoutTags, menu);
      let isNotExist = activeTagIndex == -1;
      // 不存在且当点击菜单时可推到标签栏
      let isIncludePushToTagBarWhenClickMenu =
        "isPushToTagBarWhenClickMenu" in tag.meta;
      let isPushToTagBarWhenClickMenu =
        !isIncludePushToTagBarWhenClickMenu ||
        (isIncludePushToTagBarWhenClickMenu &&
          tag.meta.isPushToTagBarWhenClickMenu);
      if (isNotExist && isPushToTagBarWhenClickMenu) {
        layoutTags.push(
          tag
          /* Object.assign({}, menu, {
            children: null,
            path: "fullPath" in menu ? menu.fullPath : menu.path
          }) */
        );
        this.layoutTags = layoutTags;
        activeTagIndex =
          this.layoutTags.length - 1 >= 0 ? this.layoutTags.length - 1 : 0;
      }
      this.activeTagIndex = activeTagIndex;
      this.pushRoute(
        isPushToTagBarWhenClickMenu
          ? this.layoutTags[this.activeTagIndex].route
            ? this.layoutTags[this.activeTagIndex].route
            : this.layoutTags[this.activeTagIndex].path
          : menu
      );
    },
    resizeLayoutSiderWidth(element) {
      var width = element.offsetWidth;
      this.layoutSiderWidth = this.layoutSetting.floatSider
        ? "0px"
        : width + "px";
    },
    handleGuide() {
      this.driver = driverGuide(this.driverOption, this.stepDefinitions);
    },
    ...mapMutations(ADMIN_MUTATION_TYPE.NAMESPACE, [
      // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
      // ADMIN_MUTATION_TYPE.SET_LAYOUT_SETTING,
      ADMIN_MUTATION_TYPE.SET_LAYOUT_TAGS
    ]) /* ,
    changeLayoutSetting(prop) {
      let value = this.layoutSetting[prop];
      this.layoutSetting = Object.assign(this.layoutSetting, {
        [prop]: !value
      });
    } */
  },
  watch: {
    // Unexpected side effect in "" computed
    mobileLayoutSiderWidth() {
      this.layoutSiderWidth = this.mobileLayoutSiderWidth;
      this.layoutSiderLeft = this.mobileLayoutSiderLeft;
    },
    mobileLayoutSiderLeft() {
      this.layoutSiderWidth = this.mobileLayoutSiderWidth;
      this.layoutSiderLeft = this.mobileLayoutSiderLeft;
    }
  },
  mounted() {
    // TODO 绑定resize事件处理isMobile
    let layoutSiderRef = this.$refs[this.layoutSiderRef];
    let layoutSiderEle = "$el" in layoutSiderRef ? layoutSiderRef.$el : null;
    if (layoutSiderEle) {
      this.erd = elementResizeDetectorMaker({
        strategy: "scroll",
        callOnAdd: true
      });
      this.erd.listenTo(layoutSiderEle, this.resizeLayoutSiderWidth);
    }
    this.layoutSiderWidth = this.mobileLayoutSiderWidth;
    this.layoutSiderLeft = this.mobileLayoutSiderLeft;

    console.log(
      this.layoutSiderWidth + "  =========   " + this.layoutSiderLeft
    );
    this.driverOption = {};
    this.stepDefinitions = [
      {
        element: `#${this.layoutSiderRef}`,
        popover: {
          // className: 'first-step-popover-class',
          title: "LayoutSider",
          description: "LayoutSider",
          position: "right-center"
        }
      },
      {
        element: `#${this.layoutHeaderRef}`,
        popover: {
          // className: 'first-step-popover-class',
          title: "LayoutHeader",
          description: "LayoutHeader",
          position: "bottom-center"
        }
      },
      {
        element: `#${this.layoutMainRef}`,
        popover: {
          // className: 'first-step-popover-class',
          title: "LayoutMain",
          description: "LayoutMain",
          position: "mid-center"
        }
      },
      {
        element: `#${this.layoutFooterRef}`,
        popover: {
          // className: 'first-step-popover-class',
          title: "LayoutFooter",
          description: "LayoutFooter",
          position: "top-center"
        }
      },
      {
        element: `#${this.layoutSettingRef}`,
        popover: {
          // className: 'first-step-popover-class',
          title: "LayoutSetting",
          description: "LayoutSetting",
          position: "left-center"
        }
      }
    ];
    if (this.layoutSetting.driverGuide) {
      this.handleGuide();
    }
  },
  destroyed() {
    let layoutSiderRef = this.$refs[this.layoutSiderRef];
    let layoutSiderEle =
      layoutSiderRef && "$el" in layoutSiderRef ? layoutSiderRef.$el : null;
    if (layoutSiderEle) {
      this.erd.uninstall(layoutSiderEle);
    }
  }
};
/* <style lang="less" src="../styles/layout.less"></style> */
</script>

<style lang="less" src="../styles/layout.less"></style>
