<template>
  <div class="confirm-login">
    <identity-confirm-login-view
      ms="vue-antd-admin"
      msAlias="Vue Antd Admin"
      identity-role="user"
      :thirdParty="thirdParty"
    >
    </identity-confirm-login-view>
  </div>
</template>

<script>
import IdentityConfirmLoginView from "./Base/Front/IdentityConfirmLoginView";
import { mapState } from "vuex";

export default {
  name: "ConfirmLogin",
  components: {
    IdentityConfirmLoginView
  },
  props: {
    thirdParty: {
      type: [String],
      default: "",
      required: true
      // validator(value) {
      //   return this.thirdPartySupport.includes(value);
      // }
    }
  },
  computed: {
    ...mapState({
      thirdPartySupport: state => state.admin.thirdPartySupport
    })
  },
  mounted() {
    console.log(this.thirdPartySupport);
    if (this.thirdPartySupport.includes(this.thirdParty)) {
      console.log("支持");
    }
  }
};
</script>

<style>
.confirm-login .identity-login {
  margin-top: 3.2rem;
}

.confirm-login h1 {
  /* background: #203; */
  color: black;
  /* text-shadow: 0 0 0.1em, 0 0 0.3em; */
  /* text-shadow: 0 1px hsl(0, 0%, 85%), 0 2px hsl(0, 0%, 80%),
    0 3px hsl(0, 0%, 75%), 0 4px hsl(0, 0%, 70%), 0 5px hsl(0, 0%, 65%),
    0 5px 10px black;
  text-shadow: 1px 1px black, 2px 2px black, 3px 3px black, 4px 4px black,
    5px 5px black, 6px 6px black, 7px 7px black, 8px 8px black; */
  transition: 0.5s;
}
.confirm-login h1:hover {
  /* color: transparent; */
  color: black;
  text-shadow: 0 0 0.1em, 0 0 0.3em;
}
</style>
