import ChatHeader from "../layouts/ChatHeader";
import ChatTabBar from "../layouts/ChatTabBar";
import ChatMain from "../layouts/ChatMain";
import StoreJsAPI from "../../../utils/store";
import { pushRoute } from "@utils/router-utils";

export const COLOR = "black";
export const ACTIVE_COLOR = "#eaa254";

const CHAT_TABBARS = [
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
    badge: JSON.stringify({ count: 10 })
  },
  {
    index: 2,
    icon: "Antd_user",
    text: "我",
    route: { path: "/my" },
    badge: JSON.stringify({ count: 10 })
  }
];

export const CHAT_ACTIVE_TAB_STORE_KEY = "ChatActiveTab";

export const CHAT_LAYOUT_MIXIN = {
  components: {
    ChatHeader,
    ChatMain,
    ChatTabBar
  },
  data() {
    return {
      color: COLOR,
      activeColor: ACTIVE_COLOR,
      activeKey: "",
      chatTabBars: CHAT_TABBARS
    };
  },
  methods: {
    pushRoute,
    changeActiveTab(key) {
      if (key | (key == 0)) {
        StoreJsAPI.set(CHAT_ACTIVE_TAB_STORE_KEY, key);
        this.activeKey = StoreJsAPI.get(CHAT_ACTIVE_TAB_STORE_KEY);
      } else {
        this.activeKey = StoreJsAPI.get(CHAT_ACTIVE_TAB_STORE_KEY);
      }
    }
  },
  beforeMount() {
    this.changeActiveTab(this.chatActiveTabIndex);
  }
};
