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
            :ref="layoutSiderRef"
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
              <pane style="max-height: 64px;">
                <a-layout-header style="background: #fff; padding: 0;">
                  <layout-header
                    :is-mobile.sync="isMobile"
                    :collapsed-sider.sync="collapsedSider"
                    :show-sider.sync="showSider"
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
              <pane style="overflow: auto; height: 100%">
                <layout-main :menu="menu"></layout-main>
              </pane>
              <!-- </a-layout-content> -->
              <pane style="max-height: 64px;">
                <a-layout-footer
                  :style="{
                    fontSize: isMobile ? '' : '1rem',
                    margin: isMobile ? '0 -3rem' : ''
                  }"
                >
                  <layout-footer />
                </a-layout-footer>
              </pane>
            </splitpanes>
            <layout-setting></layout-setting>
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
      layoutSiderRef:
        "layoutSider-" +
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
      layoutSetting: state => state.admin.layoutSetting
    }),
    mobileLayoutSiderWidth() {
      // computed 元素还未渲染
      let layoutSiderRef = this.$refs[this.layoutSiderRef];
      let layoutSiderEle =
        layoutSiderRef && "$el" in layoutSiderRef ? layoutSiderRef.$el : null;
      let floatSider = this.layoutSetting.floatSider;
      if (layoutSiderEle) {
        console.log(!floatSider && this.showSider);
        return !floatSider && this.showSider
          ? layoutSiderEle.offsetWidth + "px"
          : "0px";
      }
      console.log(!floatSider && this.showSider);
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
</script>

<style>
.ant-layout {
  height: 100%;
}
.base-layout-container {
  height: 100%;
  min-height: 100%;
}

.base-layout {
  height: 100%;
}

.base-layout-main {
  height: 100%;
  /* position: relative; */
}

.layout-sider-mask {
  float: right;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9;
  background-color: rgba(0, 0, 0, 0.45);
}

.splitpanes {
  background-color: #f8f8f8;
}

.splitpanes__splitter {
  background-color: #ccc;
  position: relative;
}
.splitpanes__splitter:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  transition: opacity 0.4s;
  background-color: rgba(255, 0, 0, 0.3);
  opacity: 0;
  z-index: 1;
}
.splitpanes__splitter:hover:before {
  opacity: 1;
}
.splitpanes--vertical > .splitpanes__splitter:before {
  left: -30px;
  right: -30px;
  height: 100%;
}
.splitpanes--horizontal > .splitpanes__splitter:before {
  top: -30px;
  bottom: -30px;
  width: 100%;
}
</style>
