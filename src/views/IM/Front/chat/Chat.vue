<template>
  <div class="chat-wrap">
    <base-header showDrawerIcon>
      <div slot="left">聊天</div>
      <div slot="right">
        <icon icon="Antd_menu" @click="showDrawerBar" />
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
    <base-main>
      <div slot="main">
        <base-cell
          v-for="chatingIdentity in chatingIdentities"
          :key="chatingIdentity.id"
          arrow
          @click="pushRoute({ path: '/my/identity/info' })"
        >
          <div slot="left">
            <div class="identity-wrap">
              <identity-avatar
                :identity="chatingIdentity"
                avatarShape="square"
              ></identity-avatar>
              <div class="identity-info">
                <span class="identity-nickname">{{
                  chatingIdentity.nickname
                }}</span>
                <span class="identity-record">
                  <span
                    class="identity-at-record"
                    v-show="chatingIdentity.isAtMe"
                    >[有人@我]</span
                  >
                  {{ chatingIdentity.record }}</span
                >
              </div>
            </div>
          </div>
          <div slot="right">
            <span v-text="chatingIdentity.createDate"></span>
          </div>
        </base-cell>
      </div>
    </base-main>
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
        avatarShape="square"
      ></identity-avatar>
    </base-drawer>
    <base-drawer-bar
      :showClose="true"
      :topVisible.sync="topDrawerBarVisible"
      :bottomVisible.sync="bottomDrawerBarVisible"
      :topHeightPercent="topDrawerBarHeightPercent"
      :bottomHeightPercent="bottomDrawerBarHeightPercent"
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
import { BASE_LAYOUT_DRAWER_BAR_MIXIN } from "../../../../components/Mobile/mixins/BaseLayoutDrawerBar";
import IdentityAvatar from "../../../../components/Identity/IdentityAvatar";
import { mapState /* , mapMutations */ } from "vuex";
// import { ADMIN_MUTATION_TYPE } from "../../../../store/mutation-type";
// import { ChatSubjectTypeEnum } from "../../../../consts/im";

export default {
  name: "ChatGroupMember",
  mixins: [BASE_LAYOUT_MIXIN, BASE_LAYOUT_DRAWER_BAR_MIXIN],
  components: { IdentityAvatar },
  data() {
    return {
      msName: "im",
      activeTabIndex: 0,
      chatingIdentities: [
        {
          id: "4545",
          chatSubjectTypeEnum: ""
        }
      ]
    };
  },
  computed: {
    ...mapState({
      // showDrawer: state => state.admin.layoutSetting.showDrawer,
      identity: state => state.identity.identity
    })
  },
  methods: {
    // ...mapMutations(ADMIN_MUTATION_TYPE.NAMESPACE, [
    //   // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
    //   ADMIN_MUTATION_TYPE.SHOW_DRAWER
    // ])
  }
};
</script>

<style>
.chat-wrap {
  height: 100%;
  background-color: #f5f5f5;
}
</style>
