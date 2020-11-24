<template>
  <div class="chat-about-im-wrap">
    <base-header showBackIcon></base-header>

    <base-main baseMainTop="7.25%" baseMainHeight="92.75%">
      <div slot="main">
        <div class="identity-wrap">
          <identity-avatar
            :identity="{ name: 'IM' }"
            :avatarSize="60"
            avatarShape="square"
          ></identity-avatar>
        </div>
        <base-cell text="介绍" label="基于SpringBoot和Vue实现IM"></base-cell>
      </div>
    </base-main>
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
      msName: "im"
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

.chat-about-im-wrap .identity-wrap {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.base-cell-wrap:first-of-type {
  margin-bottom: 1rem;
}

.base-cell-wrap {
  margin-bottom: 0.5rem;
}

.chat-about-im-wrap .mouse-wheel-content {
  display: flex;
  justify-content: center;
}
</style>
