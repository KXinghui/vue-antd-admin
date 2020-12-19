<template>
  <div class="pvtnote-my-wrap">
    <base-header showBackIcon title="账户安全">
      <div slot="right">
        <icon
          icon="Antd_history"
          @click="pushRoute('/pvtnote/my/loginhistory')"
        />
      </div>
    </base-header>
    <!-- <base-cell
      text="图"
      :icon="icon"
      :size="10"
      label="图图"
      rightText="图"
      :rightIcon="icon"
      rightLabel="图图"
    ></base-cell> -->
    <base-main>
      <template slot="main">
        <!-- <base-cell arrow :size="9" @click="pushRoute({ path: '/aboutim' })">
          <div slot="left">
            <div class="identity-wrap">
              <identity-avatar
                :identity="identity"
                :avatarSize="60"
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
        </base-cell> -->
        <base-cell
          icon="Antd_lock"
          text="密码"
          arrow
          @click="pushRoute({ path: '/my/identity/security' })"
        ></base-cell>
        <base-cell
          icon="Antd_mobile"
          text="手机"
          arrow
          @click="pushRoute({ path: '/my/identity/security' })"
        ></base-cell>
        <base-cell
          icon="Antd_mail"
          text="邮箱"
          arrow
          @click="pushRoute({ path: '/my/identity/security' })"
        ></base-cell>
      </template>
    </base-main>
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
// import IdentityAvatar from "../../../../components/Identity/IdentityAvatar";
import { mapState } from "vuex";

export default {
  name: "ChatGroupMember",
  mixins: [BASE_LAYOUT_MIXIN],
  components: {
    /* , IdentityAvatar */
  },
  data() {
    return {
      msName: "pvtnote"
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
.pvtnote-my-wrap {
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
  font-size: 1.5rem;
  color: black;
  font-weight: bold;
}

.base-cell-wrap {
  margin-bottom: 0.5rem;
}
</style>
