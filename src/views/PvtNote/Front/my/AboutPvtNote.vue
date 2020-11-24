<template>
  <div class="pvtnote-about-wrap">
    <base-header showBackIcon></base-header>

    <base-main style="margin-bottom:3.25rem;">
      <div slot="main">
        <div class="identity-wrap">
          <identity-avatar
            :identity="{ name: 'IM' }"
            :avatarSize="60"
            avatarShape="square"
          ></identity-avatar>
        </div>
        <base-cell text="介绍" label="基于SpringBoot和Vue实现便签"></base-cell>
      </div>
    </base-main>
  </div>
</template>

<script>
// import IdentityAvatar from "../../../components/Identity/IdentityAvatar";
import { BASE_LAYOUT_MIXIN } from "../../../../components/Mobile/mixins/BaseLayout";
import BaseCell from "../../../../components/Mobile/BaseCell";
import IdentityAvatar from "../../../../components/Identity/IdentityAvatar";
import { mapState } from "vuex";

export default {
  name: "ChatGroupMember",
  mixins: [BASE_LAYOUT_MIXIN],
  components: { BaseCell, IdentityAvatar },
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
.pvtnote-about-wrap {
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

.base-cell-wrap:first-of-type {
  margin-bottom: 1rem;
}

.base-cell-wrap {
  margin-bottom: 0.5rem;
}
</style>
