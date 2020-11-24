import BaseHeader from "../layouts/BaseHeader";
import BaseTabBar from "../layouts/BaseTabBar";
import BaseMain from "../layouts/BaseMain.vue";
import BaseDrawer from "../layouts/BaseDrawer.vue";
import BaseDrawerBar from "../layouts/BaseDrawerBar.vue";
import BaseCell from "../BaseCell.vue";

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
  }
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
      baseTabBars: []
    };
  },
  computed: {
    activeTabActiveKey() {
      return `${this.msName}-${BASE_ACTIVE_TAB_STORE_KEY}`;
    }
  },
  methods: {
    pushRoute,
    changeActiveTab(key) {
      if (key | (key == 0)) {
        StoreJsAPI.set(this.activeTabActiveKey, key);
        this.activeKey = StoreJsAPI.get(this.activeTabActiveKey);
      } /* else {
        this.activeKey = StoreJsAPI.get(this.activeTabActiveKey);
      } */
    }
  },
  beforeMount() {
    this.changeActiveTab(this.activeTabIndex);
    // 根据msName获取并设置相应数据
    this.baseTabBars = MS_TABBARS.get(this.msName);
  }
};
