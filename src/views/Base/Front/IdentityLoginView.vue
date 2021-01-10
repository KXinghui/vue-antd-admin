<template>
  <div class="identity-login-wrap">
    <base-header showBackIcon></base-header>
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
            <identity-login identity-role="user">
              <template v-slot:footer>
                <div class="identity-login-footer-op">
                  <a-button
                    type="link"
                    @click="pushRoute({ path: registerUrl })"
                  >
                    <span>注册</span>
                  </a-button>
                  <a-button
                    type="link"
                    @click="pushRoute({ path: forgetPasswordUrl })"
                  >
                    <span>忘记密码</span>
                  </a-button>
                </div>
                <div class="thirdparty-wrap">
                  <a-button
                    size="large"
                    shape="circle"
                    title="GitHub"
                    @click="thirdPartyLogin('github')"
                  >
                    <icon icon="IconFont_github"></icon>
                  </a-button>
                  <a-button
                    size="large"
                    shape="circle"
                    title="GitHub"
                    @click="thirdPartyLogin('gitee')"
                  >
                    <icon icon="IconFont_gitee"></icon>
                  </a-button>
                  <a-button
                    size="large"
                    shape="circle"
                    title="支付宝"
                    @click="thirdPartyLogin('alipay')"
                  >
                    <icon icon="IconFont_alipay"></icon>
                  </a-button>
                  <a-button
                    disabled
                    size="large"
                    shape="circle"
                    title="微博"
                    @click="thirdPartyLogin('weibo')"
                  >
                    <icon icon="IconFont_weibo"></icon>
                  </a-button>
                  <a-button
                    disabled
                    size="large"
                    shape="circle"
                    title="微信"
                    @click="thirdPartyLogin('wechat')"
                  >
                    <icon icon="IconFont_wechat"></icon>
                  </a-button>
                  <a-button
                    disabled
                    size="large"
                    shape="circle"
                    title="QQ"
                    @click="thirdPartyLogin('qq')"
                  >
                    <icon icon="IconFont_qq"></icon>
                  </a-button>
                </div>
              </template>
            </identity-login>
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
import IdentityLogin from "../../../components/Identity/IdentityLogin.vue";
import BaseModal from "../../../components/Antd/Modal/BaseModal.vue";
import { mapState } from "vuex";
import { msg } from "../../../utils/antd-utils";

export default {
  name: "IdentityLoginView",
  mixins: [BASE_LAYOUT_MIXIN],
  components: { IdentityLogin, BaseModal },
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
      github: state => state.oauth2.github,
      // 传字符串参数 'count' 等同于 `state => state.count`
      layoutSetting: state => state.admin.layoutSetting,
      loading: state => state.admin.loading
    })
  },
  methods: {
    thirdPartyLogin(thirdPartyPlatform) {
      let authorizeUrl = "";
      switch (thirdPartyPlatform) {
        case "github":
          authorizeUrl =
            "https://github.com/login/oauth/authorize?client_id=Iv1.f804df1563d19bbc&redirect_uri=http://localhost:8080/vue-antd-admin/oauth2/github/login";
          break;
        case "gitee":
          authorizeUrl =
            "https://gitee.com/oauth/authorize?client_id=c793a3534c904c288b0eee13de35f36044a521631575a15222b114e66630736d&redirect_uri=http://localhost:8080/vue-antd-admin/oauth2/gitee/login&response_type=code";
          break;
        default:
          break;
      }
      if (authorizeUrl) {
        window.location.href = authorizeUrl;
      } else {
        msg({ code: -1, msg: "暂不支持" });
      }
    }
  }
};
</script>

<style>
.identity-login-wrap {
  height: 100%;
  width: 100%;
  background-color: #f5f5f5;
  /* display: flex;
  justify-content: center; */
}

.identity-login-wrap .identity-login {
  margin-top: 3.2rem;
}

.identity-login-wrap h1 {
  /* background: #203; */
  color: #eaa254;
  /* text-shadow: 0 0 0.1em, 0 0 0.3em; */
  /* text-shadow: 0 1px hsl(0, 0%, 85%), 0 2px hsl(0, 0%, 80%),
    0 3px hsl(0, 0%, 75%), 0 4px hsl(0, 0%, 70%), 0 5px hsl(0, 0%, 65%),
    0 5px 10px black;
  text-shadow: 1px 1px black, 2px 2px black, 3px 3px black, 4px 4px black,
    5px 5px black, 6px 6px black, 7px 7px black, 8px 8px black; */
  transition: 0.5s;
}
.identity-login-wrap h1:hover {
  /* color: transparent; */
  color: #eaa254;
  text-shadow: 0 0 0.1em, 0 0 0.3em;
}
.identity-login-footer-op,
.thirdparty-wrap {
  display: flex;
  justify-content: space-between;
}
.thirdparty-wrap {
  padding: 0.5rem 15px;
}

.thirdparty-iframe {
  width: 100%;
  height: 100%;
}
</style>
