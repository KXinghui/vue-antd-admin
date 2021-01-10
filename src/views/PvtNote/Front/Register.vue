<template>
  <identity-register-view
    ms="pvtnote"
    msAlias="PVTNOTE"
    identity-role="user"
  ></identity-register-view>
</template>

<script>
import IdentityRegisterView from "../../../views/Base/Front/IdentityRegisterView";

export default {
  name: "Register",
  components: { IdentityRegisterView },
  data() {
    return {};
  }
};
</script>

<style></style>
