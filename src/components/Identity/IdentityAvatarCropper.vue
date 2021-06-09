<template>
  <div class="identity-avatar-cropper img" v-on="$listeners">
    <cropper :cropperData.sync="cropperData">
      <template v-slot:loader> </template>
      <template v-slot:viewer="{ previewUrl }">
        <identity-avatar
          :identity="previewUrl ? { avatarUrl: previewUrl } : identity"
        ></identity-avatar>
      </template>
    </cropper>
  </div>
</template>

<script>
import Cropper from "../Cropper";

export default {
  name: "IdentityAvatarCropper",
  components: { Cropper },
  data() {
    return {
      cropperData: {}
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
    // avatarLoader() {
    //   return previewUrl ? { avatarUrl: previewUrl } : identity;
    // },
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
.identity-avatar-cropper {
  max-width: 100%;
  max-height: 100%;
  /* padding: 0.2rem; */
}

.identity-avatar-cropper img {
  border: 1px solid gray;
  transition: ease-in-out 0.3s;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
}
.identity-avatar-cropper:hover img {
  border: 1px solid gray;
  transform: scale(1.2);
  transition: ease-in-out 0.3s;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
}

.identity-avatar-cropper-normal img {
  filter: grayscale(100%);
}
.identity-avatar-cropper-locked img {
  filter: grayscale(100%);
}
.identity-avatar-cropper-disabled img {
  filter: grayscale(100%);
}
</style>
