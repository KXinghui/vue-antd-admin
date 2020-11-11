<template>
  <div class="identity-avatar img">
    <a-avatar
      :style="{
        backgroundColor: avatarBackGroundColor,
        color: 'rgba(0,0,0,.85)'
      }"
      v-if="identity.avatarUrl"
      :src="identity.avatarUrl"
      :shape="avatarShape"
      :size="avatarSize"
    />
    <a-avatar
      :style="{
        backgroundColor: avatarBackGroundColor,
        color: 'rgba(0,0,0,.85)'
      }"
      v-else-if="identity.name"
      v-text="identity.name"
      :shape="avatarShape"
      :size="avatarSize"
    ></a-avatar>
    <a-avatar
      :style="{
        backgroundColor: avatarBackGroundColor,
        color: 'rgba(0,0,0,.85)'
      }"
      v-else
      icon="user"
      :shape="avatarShape"
      :size="avatarSize"
    />
  </div>
</template>

<script>
export default {
  name: "IdentityAvatar",
  data() {
    return {
      //   identity: {
      //     name: null,
      //     avatarUrl: null,
      //     userStateEnum: "Normal"
      //   }
    };
  },
  props: {
    avatarSize: {
      type: [String, Number],
      default: "default",
      required: false
    },
    avatarShape: {
      type: [String],
      default: "circle",
      required: false
    },
    identity: {
      type: [Object],
      default: null,
      required: true
    }
  },
  computed: {
    avatarBackGroundColor() {
      let bgColor = "#87d068";
      let userStateEnum = this.identity.userStateEnum;
      switch (userStateEnum) {
        case "Normal":
          bgColor = "#b7eb8f";
          break;
        case "Locked":
          bgColor = "#fff1f0";
          break;
        case "Disabled":
          bgColor = "#ccc";
          break;
        default:
          break;
      }
      return bgColor;
    }
  }
};
</script>

<style>
.identity-avatar {
  overflow: hidden;
  /* padding: 0.2rem; */
}

.identity-avatar img {
  border: 1px solid gray;
  transition: ease-in-out 0.3s;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
}
.identity-avatar:hover img {
  border: 1px solid gray;
  transform: scale(1.2);
  transition: ease-in-out 0.3s;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
}

.identity-avatar-normal img {
  filter: grayscale(100%);
}
.identity-avatar-locked img {
  filter: grayscale(100%);
}
.identity-avatar-disabled img {
  filter: grayscale(100%);
}
</style>
