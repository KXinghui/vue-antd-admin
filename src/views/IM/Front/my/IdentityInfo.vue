<template>
  <div class="chat-identity-info-wrap">
    <chat-header showBackIcon title="个人信息"> </chat-header>
    <!-- <chat-cell
      text="图"
      :icon="icon"
      :size="10"
      label="图图"
      rightText="图"
      :rightIcon="icon"
      rightLabel="图图"
    ></chat-cell> -->
    <chat-main style="">
      <div slot="main" style="width: 100%">
        <chat-cell arrow :size="9" @click="pushRoute({ path: '/my/aboutim' })">
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
        </chat-cell>
        <chat-cell
          text="账号与安全"
          arrow
          @click="pushRoute({ path: '/my/aboutim' })"
        ></chat-cell>
        <chat-cell
          text="隐私"
          arrow
          @click="pushRoute({ path: '/my/aboutim' })"
        ></chat-cell>
        <chat-cell
          text="关于IM"
          arrow
          @click="pushRoute({ path: '/my/aboutim' })"
        ></chat-cell>
      </div>
    </chat-main>
    <chat-tab-bar
      :chat-tab-bars="chatTabBars"
      :active-item-key="activeKey"
      :color="color"
      :active-color="activeColor"
    ></chat-tab-bar>
  </div>
</template>

<script>
// import IdentityAvatar from "../../../components/Identity/IdentityAvatar";
import { CHAT_LAYOUT_MIXIN } from "../../../../components/IM/mixins/ChatLayout";
import ChatCell from "../../../../components/IM/ChatCell";
import IdentityAvatar from "../../../../components/Identity/IdentityAvatar";
import { mapState } from "vuex";

export default {
  name: "ChatGroupMember",
  mixins: [CHAT_LAYOUT_MIXIN],
  components: { ChatCell, IdentityAvatar },
  data() {
    return {
      icon: "Antd_fund"
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
.chat-identity-info-wrap {
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

.chat-cell-wrap:first-of-type {
  margin-bottom: 1rem;
}

.chat-cell-wrap {
  margin-bottom: 0.5rem;
}
</style>
