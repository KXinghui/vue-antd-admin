<template>
  <div class="chat-my-wrap">
    <!-- <base-header
      style="height: 10rem; max-height: 10rem; background-color: white;"
    >
      <div slot="left">
        <identity-avatar
          :identity="identity"
          avatar-shape="square"
        ></identity-avatar>
        <div class="">{{ identity.nickname }}</div>
        <div class="">聊天号：{{ identity.chatNo }}</div>
      </div>
      <div slot="right"></div>
    </base-header> -->
    <!-- <base-cell
      text="图"
      :icon="icon"
      :size="10"
      label="图图"
      rightText="图"
      :rightIcon="icon"
      rightLabel="图图"
    ></base-cell> -->
    <base-main :baseMainTop="0" baseMainHeight="92.75%">
      <template slot="main">
        <base-cell
          arrow
          :size="9"
          @click="pushRoute({ path: '/my/identity/info' })"
        >
          <div slot="left">
            <div class="identity-wrap">
              <identity-avatar
                :identity="identity"
                :avatarSize="58"
                avatarShape="square"
              ></identity-avatar>
              <div class="identity-info">
                <span class="identity-nickname">{{ identity.nickname }}</span>
                <span class="identity-chatno"
                  >聊天号：{{ identity.chatNo }}</span
                >
              </div>
            </div>
          </div>
        </base-cell>
        <base-cell
          text="账号安全"
          arrow
          @click="pushRoute({ path: '/my/identity/security' })"
        ></base-cell>
        <base-cell
          text="隐私"
          arrow
          @click="pushRoute({ path: '/my/aboutim' })"
        ></base-cell>
        <base-cell
          text="关于IM"
          arrow
          @click="pushRoute({ path: '/my/aboutim' })"
        ></base-cell>
      </template>
    </base-main>
    <!-- <base-main></base-main> -->
    <base-tab-bar
      :base-tab-bars="baseTabBars"
      :active-item-key="activeKey"
      :color="color"
      :active-color="activeColor"
    ></base-tab-bar>
  </div>
</template>

<script>
// import IdentityAvatar from "../../../components/Identity/IdentityAvatar";
import { BASE_LAYOUT_MIXIN } from "../../../../components/Mobile/mixins/BaseLayout";
import IdentityAvatar from "../../../../components/Identity/IdentityAvatar";
import { mapState } from "vuex";

export default {
  name: "ChatGroupMember",
  mixins: [BASE_LAYOUT_MIXIN],
  components: { IdentityAvatar },
  data() {
    return {
      msName: "pvtnote",
      activeTabIndex: 2
    };
  },
  computed: {
    ...mapState({
      identity: state => state.identity.identity
    })
  }
};
</script>

<style>
.chat-my-wrap {
  height: 100%;
  width: 100%;
  background-color: #f5f5f5;
}

.identity-wrap {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.identity-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.identity-nickname {
  font-size: 1.3rem;
  color: black;
  font-weight: bold;
}

.base-cell-wrap:first-of-type {
  margin-bottom: 1rem;
}

.base-cell-wrap {
  margin-bottom: 0.5rem;
}
.chat-drawer-wrap .ant-drawer-content {
  display: flex;
  justify-content: center;
}
</style>
