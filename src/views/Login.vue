<template>
  <div class="login">
    <h1>This is an login page</h1>
    <identity-login identity-role="user"></identity-login>
  </div>
</template>

<script>
import IdentityLogin from "../components/Identity/IdentityLogin";

export default {
  name: "Login",
  components: {
    IdentityLogin
  }
};
</script>

<style></style>
