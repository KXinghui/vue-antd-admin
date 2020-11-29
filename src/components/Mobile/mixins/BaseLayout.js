import BaseHeader from "../layouts/BaseHeader";
import BaseTabBar from "../layouts/BaseTabBar";
import BaseMain from "../layouts/BaseMain.vue";
import BaseDrawer from "../layouts/BaseDrawer.vue";
import BaseDrawerBar from "../layouts/BaseDrawerBar.vue";
import BaseCell from "../BaseCell.vue";

import { mapState, mapMutations } from "vuex";
import { ADMIN_MUTATION_TYPE } from "../../../store/mutation-type";

import StoreJsAPI from "@utils/store";
import { pushRoute } from "@utils/router-utils";

export const COLOR = "black";
export const ACTIVE_COLOR = "#eaa254";
export const BASE_ACTIVE_TAB_STORE_KEY = "BaseActiveTab";

const MS_TABBARS = new Map();
const IM_TABBARS = [
  {
    index: 0,
    icon: "Antd_message",
    text: "聊天",
    route: { path: "/chat" },
    badge: JSON.stringify({ count: 0 })
  },
  {
    index: 1,
    icon: "Antd_team",
    text: "通讯录",
    route: { path: "/addressbook" },
    badge: JSON.stringify({ count: 10 }),
    isCenter: true
  },
  {
    index: 2,
    icon: "Antd_user",
    text: "我",
    route: { path: "/my" },
    badge: JSON.stringify({ count: 10 })
  } /* ,
  {
    index: 3,
    icon: "Antd_team",
    text: "通讯录",
    route: { path: "/addressbook" },
    badge: JSON.stringify({ count: 10 })
  },
  {
    index: 4,
    icon: "Antd_user",
    text: "我",
    route: { path: "/my" },
    badge: JSON.stringify({ count: 10 })
  },
  {
    index: 5,
    icon: "Antd_user",
    text: "我",
    route: { path: "/my" },
    badge: JSON.stringify({ count: 10 })
  },
  {
    index: 6,
    icon: "Antd_user",
    text: "我",
    route: { path: "/my" },
    badge: JSON.stringify({ count: 10 })
  },
  {
    index: 7,
    icon: "Antd_user",
    text: "我",
    route: { path: "/my" },
    badge: JSON.stringify({ count: 10 })
  },
  {
    index: 8,
    icon: "Antd_user",
    text: "我",
    route: { path: "/my" },
    badge: JSON.stringify({ count: 10 })
  },
  {
    index: 9,
    icon: "Antd_user",
    text: "我",
    route: { path: "/my" },
    badge: JSON.stringify({ count: 10 })
  } */
];
MS_TABBARS.set("im", IM_TABBARS);

const PVTNOTE_TABBARS = [
  {
    index: 0,
    icon: "IconFont_note",
    text: "便签",
    route: { path: "/pvtnote/note" },
    badge: JSON.stringify({ count: 0 })
  },
  {
    index: 1,
    icon: "Antd_home",
    text: "首页",
    route: { path: "/pvtnote/home" },
    badge: JSON.stringify({ count: 0 }),
    isCenter: true,
    // circle square
    centerShape: "square"
  },
  {
    index: 2,
    icon: "Antd_user",
    text: "我",
    route: { path: "/pvtnote/my" },
    badge: JSON.stringify({ count: 10 })
  }
];
MS_TABBARS.set("pvtnote", PVTNOTE_TABBARS);

export const BASE_LAYOUT_MIXIN = {
  // 刷新
  inject: ["reload"],
  components: {
    BaseHeader,
    BaseTabBar,
    BaseMain,
    BaseDrawer,
    BaseDrawerBar,
    BaseCell
  },
  data() {
    return {
      // 微服务名称
      msName: "",
      color: COLOR,
      activeColor: ACTIVE_COLOR,
      activeKey: "",
      baseTabBars: [],
      topDrawerBarVisible: false,
      bottomDrawerBarVisible: false,
      resetTopDrawerBarHeightPercent: "7.25%",
      resetBottomDrawerBarHeightPercent: "7.25%",
      topDrawerBarHeightPercent: "7.25%",
      bottomDrawerBarHeightPercent: "7.25%"
    };
  },
  computed: {
    activeTabActiveKey() {
      return `${this.msName}-${BASE_ACTIVE_TAB_STORE_KEY}`;
    },
    showDrawer: {
      // getter
      get: function() {
        // Do not mutate vuex store state outside mutation handlers
        return this.$store.state.admin.layoutSetting.showDrawer;
      },
      // setter
      set: function(newValue) {
        this[ADMIN_MUTATION_TYPE.SHOW_DRAWER](newValue);
      }
    },
    ...mapState({
      // showDrawer: state => state.admin.layoutSetting.showDrawer,
      drawerPlacement: state => state.admin.layoutSetting.drawerPlacement
    })
  },
  methods: {
    ...mapMutations("admin", [
      // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
      ADMIN_MUTATION_TYPE.SHOW_DRAWER
    ]),
    pushRoute,
    changeActiveTab(key) {
      if (key | (key == 0)) {
        StoreJsAPI.set(this.activeTabActiveKey, key);
        this.activeKey = StoreJsAPI.get(this.activeTabActiveKey);
      } /* else {
        this.activeKey = StoreJsAPI.get(this.activeTabActiveKey);
      } */
    },
    resetDrawerBar() {
      this.topDrawerBarHeightPercent = this.resetTopDrawerBarHeightPercent;
      this.bottomDrawerBarHeightPercent = this.resetBottomDrawerBarHeightPercent;
    },
    showDrawerBar() {
      this.topDrawerBarVisible = true;
      this.bottomDrawerBarVisible = true;
    },
    hideDrawerBar() {
      this.topDrawerBarVisible = false;
      this.bottomDrawerBarVisible = false;
      this.resetDrawerBar();
    },
    showTopDrawerBar(heightPercent) {
      this.hideDrawerBar();
      let timer = setTimeout(() => {
        this.topDrawerBarHeightPercent = heightPercent;
        this.topDrawerBarVisible = true;
        clearTimeout(timer);
      }, 150);
    },
    showBottomDrawerBar(heightPercent) {
      this.hideDrawerBar();
      let timer = setTimeout(() => {
        this.bottomDrawerBarHeightPercent = heightPercent;
        this.bottomDrawerBarVisible = true;
        clearTimeout(timer);
      }, 150);
    }
  },
  beforeMount() {
    this.changeActiveTab(this.activeTabIndex);
    // 根据msName获取并设置相应数据
    this.baseTabBars = MS_TABBARS.get(this.msName);
  }
};
