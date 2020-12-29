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
                    :is-mobile.sync="isMobile"
                    :collapsed-sider.sync="collapsedSider"
                    :show-sider.sync="showSider"
                    @guide="handleGuide"
                  ></layout-header>
                </a-layout-header>
              </pane>
              <!-- <a-layout-content> -->
              <pane v-if="false">
                <layout-tag-bar
                  v-if="false"
                  style="background: #fff; margin: .3rem 0 0; height: 40px;"
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
                  <layout-footer />
                </a-layout-footer>
              </pane>
            </splitpanes>
            <layout-setting :id="layoutSettingRef"></layout-setting>
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
import { mapState } from "vuex";
import { driverGuide } from "../utils/utils";
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
      }
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
      loading: state => state.admin.loading
    }),
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
  methods: {
    resizeLayoutSiderWidth(element) {
      var width = element.offsetWidth;
      this.layoutSiderWidth = this.layoutSetting.floatSider
        ? "0px"
        : width + "px";
    },
    handleGuide() {
      this.driver = driverGuide(this.driverOption, this.stepDefinitions);
    }
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
