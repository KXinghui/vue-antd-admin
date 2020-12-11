<template>
  <div class="pvtnote-about-wrap">
    <base-header showBackIcon></base-header>

    <base-main baseMainTop="7.25%" baseMainHeight="92.5%">
      <div slot="main">
        <div class="identity-wrap">
          <identity-avatar
            :identity="{ name: 'PVTNOTE' }"
            :avatarSize="90"
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
import IdentityAvatar from "../../../../components/Identity/IdentityAvatar";
import { mapState } from "vuex";

export default {
  name: "ChatGroupMember",
  mixins: [BASE_LAYOUT_MIXIN],
  components: { IdentityAvatar },
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
.pvtnote-about-wrap {
  height: 100%;
  width: 100%;
  background-color: #f5f5f5;
  background-color: white;
}

.pvtnote-about-wrap {
  display: flex;
  justify-content: center;
}

.pvtnote-about-wrap .identity-wrap {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.base-cell-wrap {
  margin-bottom: 0.5rem;
}
</style>
