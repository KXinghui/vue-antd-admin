<template>
  <div class="chat-wrap">
    <base-header showDrawerIcon>
      <div slot="left">聊天</div>
      <div slot="right">
        <icon
          icon="Antd_menu"
          @click="
            () => {
              this.showDrawerBar = !this.showDrawerBar;
            }
          "
        />
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
    </base-header>
    <base-tab-bar
      :base-tab-bars="baseTabBars"
      :active-item-key="activeKey"
      :color="color"
      :active-color="activeColor"
    ></base-tab-bar>
    <base-drawer
      width="300px"
      :visible.sync="showDrawer"
      :placement="drawerPlacement"
    >
      <identity-avatar
        :identity="identity"
        :avatarSize="58"
        avatarShape="square"
      ></identity-avatar>
    </base-drawer>
    <base-drawer-bar
      topWidth="300px"
      bottomWidth="300px"
      :topVisible.sync="showDrawerBar"
      :bottomVisible.sync="showDrawerBar"
    >
      <identity-avatar
        slot="top"
        :identity="identity"
        avatarShape="square"
      ></identity-avatar>
      <identity-avatar
        slot="bottom"
        :identity="{ name: 'asdfasdf' }"
        avatarShape="square"
      ></identity-avatar>
    </base-drawer-bar>
  </div>
</template>

<script>
import { BASE_LAYOUT_MIXIN } from "../../../../components/Mobile/mixins/BaseLayout";
import IdentityAvatar from "../../../../components/Identity/IdentityAvatar";
import { mapState, mapMutations } from "vuex";
import { ADMIN_MUTATION_TYPE } from "../../../../store/mutation-type";

export default {
  name: "ChatGroupMember",
  mixins: [BASE_LAYOUT_MIXIN],
  components: { IdentityAvatar },
  data() {
    return {
      msName: "im",
      activeTabIndex: 0,
      showDrawerBar: false
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
