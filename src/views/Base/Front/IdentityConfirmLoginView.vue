<template>
  <div class="identity-confirm-login-wrap">
    <base-header showBackIcon></base-header>
    <base-main
      baseMainTop="7.25%"
      baseMainHeight="92.5%"
      style="background-color: #f5f5f5;"
    >
      <template slot="main">
        <a-row type="flex" justify="center">
          <a-col :xs="22" :sm="18" :md="10" :lg="6" :xl="6">
            <h1 align="center">{{ ms }}</h1>
          </a-col>
        </a-row>
        <a-row type="flex" justify="center">
          <a-col :xs="22" :sm="18" :md="10" :lg="6" :xl="6">
            <identity-avatar
              :avatarSize="20"
              :identity="identity"
            ></identity-avatar>
          </a-col>
        </a-row>
        <a-row type="flex" justify="center">
          <a-col :xs="22" :sm="18" :md="10" :lg="6" :xl="6">
            <a-button type="primary" block @click="confirmLogin">
              确认登录
            </a-button>
          </a-col>
        </a-row>
      </template>
    </base-main>
  </div>
</template>

<script>
import { BASE_LAYOUT_MIXIN } from "../../../components/Mobile/mixins/BaseLayout";
import IdentityAvatar from "../../../components/Identity/IdentityAvatar";
import scanCodeLoginApi from "../../../api/integral/ScanCodeLoginApi";
import { mapState } from "vuex";

export default {
  name: "IdentityConfirmLoginView",
  mixins: [BASE_LAYOUT_MIXIN],
  components: { IdentityAvatar },
  data() {
    return {};
  },
  props: {
    ms: {
      type: [String],
      default: "",
      required: true
    },
    identityRole: {
      type: [String],
      default: "",
      required: true
    }
  },
  computed: {
    ...mapState({
      identity: state => state.identity.identity
    })
  },
  methods: {
    enterView() {
      let scanCode = this.$route.query.scancode;
      scanCodeLoginApi.enterView({ scanCode }).then(res => {
        console.log(res.data);
      });
    },
    confirmLogin() {
      let scanCode = this.$route.query.scancode;
      scanCodeLoginApi.confirmLogin({ scanCode }).then(res => {
        console.log(res.data);
      });
    }
  },
  created() {
    this.enterView();
  },
  mounted() {
    this.confirmLogin();
  }
};
</script>

<style>
.identity-confirm-login-wrap {
  height: 100%;
  width: 100%;
  background-color: #f5f5f5;
  /* display: flex;
  justify-content: center; */
}

.identity-confirm-login-wrap .identity-login {
  margin-top: 3.2rem;
}

.identity-confirm-login-wrap h1 {
  /* background: #203; */
  color: #eaa254;
  /* text-shadow: 0 0 0.1em, 0 0 0.3em; */
  /* text-shadow: 0 1px hsl(0, 0%, 85%), 0 2px hsl(0, 0%, 80%),
    0 3px hsl(0, 0%, 75%), 0 4px hsl(0, 0%, 70%), 0 5px hsl(0, 0%, 65%),
    0 5px 10px black;
  text-shadow: 1px 1px black, 2px 2px black, 3px 3px black, 4px 4px black,
    5px 5px black, 6px 6px black, 7px 7px black, 8px 8px black; */
  transition: 0.5s;
  margin-top: 2%;
}
.identity-confirm-login-wrap h1:hover {
  /* color: transparent; */
  color: #eaa254;
  text-shadow: 0 0 0.1em, 0 0 0.3em;
}
</style>
