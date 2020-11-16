<template>
  <div class="chat-wrap">
    <chat-header showDrawerIcon>
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
    <chat-drawer
      width="300px"
      :visible.sync="showDrawer"
      :placement="drawerPlacement"
    >
      <identity-avatar
        :identity="identity"
        :avatarSize="58"
        avatarShape="square"
      ></identity-avatar>
    </chat-drawer>
  </div>
</template>

<script>
import { CHAT_LAYOUT_MIXIN } from "../../../../components/IM/mixins/ChatLayout";
import ChatDrawer from "../../../../components/IM/layouts/ChatDrawer";
import IdentityAvatar from "../../../../components/Identity/IdentityAvatar";
import { mapState, mapMutations } from "vuex";
import { ADMIN_MUTATION_TYPE } from "../../../../store/mutation-type";

export default {
  name: "ChatGroupMember",
  mixins: [CHAT_LAYOUT_MIXIN],
  components: { ChatDrawer, IdentityAvatar },
  data() {
    return {
      chatActiveTabIndex: 0
    };
  },
  computed: {
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
      identity: state => state.identity.identity,
      drawerPlacement: state => state.admin.layoutSetting.drawerPlacement
    })
  },
  methods: {
    ...mapMutations("admin", [
      // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
      ADMIN_MUTATION_TYPE.SHOW_DRAWER
    ])
  }
};
</script>

<style>
.chat-wrap {
  height: 100%;
  background-color: #f5f5f5;
}
</style>
