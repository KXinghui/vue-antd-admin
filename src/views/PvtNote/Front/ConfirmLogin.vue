<template>
  <identity-confirm-login-view
    ms="pvtnote"
    identity-role="user"
  ></identity-confirm-login-view>
</template>

<script>
import IdentityConfirmLoginView from "../../../views/Base/Front/IdentityConfirmLoginView";

export default {
  name: "ConfirmLogin",
  components: { IdentityConfirmLoginView },
  data() {
    return {};
  }
};
</script>

<style></style>
