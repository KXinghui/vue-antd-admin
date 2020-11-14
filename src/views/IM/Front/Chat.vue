<template>
  <div class="chat-wrap">
    <chat-header>
      <div slot="left">聊天</div>
      <div slot="right">
        <icon icon="Antd_search" @click="pushRoute('/search')" />
        <a-popover placement="bottomRight">
          <template slot="content">
            <a-menu>
              <a-menu-item>
                <a href="javascript:;">1st menu item</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;">2nd menu item</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;">3rd menu item</a>
              </a-menu-item>
            </a-menu>
          </template>
          <icon icon="Antd_plus-circle" />
        </a-popover>
      </div>
      <!-- <div slot="right"><a-icon type="ellipsis" /></div> -->
    </chat-header>
    <chat-tab-bar
      :chat-tab-bars="chatTabBars"
      :active-item-key="activeKey"
      :color="color"
      :active-color="activeColor"
    ></chat-tab-bar>
  </div>
</template>

<script>
import { CHAT_LAYOUT_MIXIN } from "../../../components/IM/mixins/ChatLayout";

export default {
  name: "ChatGroupMember",
  mixins: [CHAT_LAYOUT_MIXIN],
  data() {
    return {
      chatActiveTabIndex: 0
    };
  }
};
</script>

<style>
.chat-wrap {
  height: 100%;
  background-color: #f5f5f5;
}
</style>
