<template>
  <identity-login-view
    ms="pvtnote"
    msAlias="PVTNOTE"
    identity-role="user"
  ></identity-login-view>
</template>

<script>
import IdentityLoginView from "../../../views/Base/Front/IdentityLoginView";

export default {
  name: "Login",
  components: { IdentityLoginView },
  data() {
    return {};
  }
};
</script>

<style></style>
