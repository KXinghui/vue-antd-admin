<template>
  <div class="identity-register-wrap">
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
            <identity-register :identity-role="identityRole">
              <template v-slot:footer>
                <div class="identity-register-footer-op">
                  <a-button type="link" @click="pushRoute({ path: loginUrl })">
                    <span>已有账号 登陆</span>
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
            </identity-register> </a-col
        ></a-row>
      </template>
    </base-main>
  </div>
</template>

<script>
import { BASE_LAYOUT_MIXIN } from "../../../components/Mobile/mixins/BaseLayout";
import IdentityRegister from "../../../components/Identity/IdentityRegister";
import { msg } from "../../../utils/antd-utils";

export default {
  name: "IdentityRegisterView",
  mixins: [BASE_LAYOUT_MIXIN],
  components: { IdentityRegister },
  data() {
    return {};
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
    loginUrl() {
      if (["cloud", "vue-antd-admin"].includes(this.ms)) {
        return "/login";
      }
      return `/${this.ms}/login`;
    },
    forgetPasswordUrl() {
      if (["cloud", "vue-antd-admin"].includes(this.ms)) {
        return "/password/forget";
      }
      return `/${this.ms}/password/forget`;
    }
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
.identity-register-wrap {
  height: 100%;
  width: 100%;
  background-color: #f5f5f5;
  /* display: flex;
  justify-content: center; */
}

.identity-register-wrap .identity-register {
  margin-top: 3.2rem;
}

.identity-register-wrap h1 {
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
.identity-register-wrap h1:hover {
  /* color: transparent; */
  color: #eaa254;
  text-shadow: 0 0 0.1em, 0 0 0.3em;
}
.identity-register-footer-op,
.thirdparty-wrap {
  display: flex;
  justify-content: space-between;
}
.thirdparty-wrap {
  padding: 0.5rem 15px;
}
</style>
