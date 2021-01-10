<template>
  <div class="identity-third-party-login-wrap">
    <!-- <base-header showBackIcon></base-header> -->
    <base-main
      :isScroll="true"
      :isScrollPull="false"
      baseMainTop="7.25%"
      baseMainHeight="92.5%"
      style="background-color: #f5f5f5;"
    >
      <template slot="main">
        <a-row type="flex" justify="center">
          <a-col :xs="22" :sm="18" :md="10" :lg="6" :xl="6">
            <h1 align="center">{{ msAlias }}</h1>
          </a-col>
        </a-row>
        <a-row type="flex" justify="center">
          <a-col :xs="22" :sm="18" :md="10" :lg="6" :xl="6">
            <identity-third-party-login
              identity-role="user"
              :thirdPartyPlatform="thirdPartyPlatform"
            >
            </identity-third-party-login>
          </a-col>
        </a-row>
      </template>
    </base-main>
    <base-modal :modalTitle="modalTitle" :modalVisible.sync="modalVisible">
      <template v-show="oauthLogin === 'github'">
        <iframe
          class="thirdparty-iframe"
          id="githubIframe"
          src="https://github.com/login/oauth/authorize?client_id=Iv1.f804df1563d19bbc&redirect_uri=http://localhost:8080/vue-antd-admin/oauth2/github/login"
        ></iframe>
      </template>
    </base-modal>
  </div>
</template>

<script>
import { BASE_LAYOUT_MIXIN } from "../../../components/Mobile/mixins/BaseLayout";
import IdentityThirdPartyLogin from "../../../components/Identity/IdentityThirdPartyLogin.vue";
import BaseModal from "../../../components/Antd/Modal/BaseModal.vue";
import { mapState } from "vuex";

export default {
  name: "IdentityThirdPartyLoginView",
  mixins: [BASE_LAYOUT_MIXIN],
  components: { IdentityThirdPartyLogin, BaseModal },
  data() {
    return {
      modalTitle: "",
      modalVisible: false,
      oauthLogin: "github"
    };
  },
  props: {
    ms: {
      type: [String],
      default: "",
      required: true
    },
    msAlias: {
      type: [String],
      default: "",
      required: true
    },
    identityRole: {
      type: [String],
      default: "",
      required: true
    },
    thirdPartyPlatform: {
      type: [String],
      default: "",
      required: true,
      validator(value) {
        return ["github", "gitee", "alipay", "weibo", "wechat", "qq"].includes(
          value
        );
      }
    }
  },
  computed: {
    registerUrl() {
      if (["cloud", "vue-antd-admin"].includes(this.ms)) {
        return "/register";
      }
      return `/${this.ms}/register`;
    },
    forgetPasswordUrl() {
      if (["cloud", "vue-antd-admin"].includes(this.ms)) {
        return "/password/forget";
      }
      return `/${this.ms}/password/forget`;
    },
    ...mapState({
      github: state => state.oauth2.github
    })
  },
  methods: {}
};
</script>

<style>
.identity-third-party-login-wrap {
  height: 100%;
  width: 100%;
  background-color: #f5f5f5;
  /* display: flex;
  justify-content: center; */
}

.identity-third-party-login-wrap .identity-login {
  margin-top: 3.2rem;
}

.identity-third-party-login-wrap h1,
.identity-third-party-login-wrap h2 {
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
.identity-third-party-login-wrap h1:hover {
  /* color: transparent; */
  color: #eaa254;
  text-shadow: 0 0 0.1em, 0 0 0.3em;
}
.identity-third-party-login-footer-op,
.thirdparty-wrap {
  display: flex;
  justify-content: space-between;
}
.thirdparty-wrap {
  padding: 0 15px;
}
.thirdparty-wrap {
  margin: 0.5rem 0 0;
}
.thirdparty-iframe {
  width: 100%;
  height: 100%;
}
</style>
