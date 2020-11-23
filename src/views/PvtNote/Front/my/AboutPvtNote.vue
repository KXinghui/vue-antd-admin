<template>
  <div class="chat-about-im-wrap">
    <chat-header showBackIcon></chat-header>

    <chat-main style="margin-bottom:3.25rem;">
      <div slot="main">
        <div class="identity-wrap">
          <identity-avatar
            :identity="{ name: 'PVTNOTE' }"
            :avatarSize="60"
            avatarShape="square"
          ></identity-avatar>
        </div>
        <chat-cell
          text="介绍"
          label="基于SpringBoot和Vue实现私人便签"
        ></chat-cell>
      </div>
    </chat-main>
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
.chat-about-im-wrap {
  height: 100%;
  width: 100%;
  background-color: #f5f5f5;
  background-color: white;
}

.chat-main-wrap {
  display: flex;
  justify-content: center;
}

.chat-main-wrap .identity-wrap {
  display: flex;
  justify-content: center;
}

.chat-cell-wrap:first-of-type {
  margin-bottom: 1rem;
}

.chat-cell-wrap {
  margin-bottom: 0.5rem;
}
</style>
