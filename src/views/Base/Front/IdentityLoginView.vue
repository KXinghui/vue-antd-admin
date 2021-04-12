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
            <identity-login :identity-role="identityRole">
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
                <!-- <a-divider>登录即注册</a-divider> -->
                <div class="thirdparty-wrap">
                  <a-button
                    v-for="supportThirdParty in supportThirdPartys"
                    :key="supportThirdParty.thirdParty"
                    :disabled="!isSupport(supportThirdParty.thirdParty)"
                    size="large"
                    shape="circle"
                    :title="supportThirdParty.title"
                    @click="authorizeUrl(supportThirdParty.thirdParty)"
                  >
                    <icon
                      :icon="'IconFont_' + supportThirdParty.thirdParty"
                    ></icon>
                  </a-button>
                  <!-- <a-button
                    size="large"
                    shape="circle"
                    title="码云"
                    @click="authorizeUrl('gitee')"
                  >
                    <icon icon="IconFont_gitee"></icon>
                  </a-button>
                  <a-button
                    size="large"
                    shape="circle"
                    title="开源中国"
                    @click="authorizeUrl('oschina')"
                  >
                    <icon icon="IconFont_oschina"></icon>
                  </a-button>
                  <a-button
                    size="large"
                    shape="circle"
                    title="支付宝"
                    @click="authorizeUrl('alipay')"
                  >
                    <icon icon="IconFont_alipay"></icon>
                  </a-button>
                  <a-button
                    disabled
                    size="large"
                    shape="circle"
                    title="微博"
                    @click="authorizeUrl('weibo')"
                  >
                    <icon icon="IconFont_weibo"></icon>
                  </a-button>
                  <a-button
                    disabled
                    size="large"
                    shape="circle"
                    title="微信"
                    @click="authorizeUrl('wechat')"
                  >
                    <icon icon="IconFont_wechat"></icon>
                  </a-button>
                  <a-button
                    disabled
                    size="large"
                    shape="circle"
                    title="QQ"
                    @click="authorizeUrl('qq')"
                  >
                    <icon icon="IconFont_qq"></icon>
                  </a-button> -->
                </div>
              </template>
            </identity-login>
          </a-col>
        </a-row>
      </template>
    </base-main>
    <!-- <base-modal :modalTitle="modalTitle" :modalVisible.sync="modalVisible">
      <template v-show="oauthLogin === 'github'">
        <iframe
          class="thirdparty-iframe"
          id="githubIframe"
          src="https://github.com/login/oauth/authorize?client_id=Iv1.f804df1563d19bbc&redirect_uri=http://localhost:8080/vue-antd-admin/oauth2/github/login"
        ></iframe>
      </template>
    </base-modal> -->
  </div>
</template>

<script>
import { BASE_LAYOUT_MIXIN } from "../../../components/Mobile/mixins/BaseLayout";
import IdentityLogin from "../../../components/Identity/IdentityLogin.vue";
// import BaseModal from "../../../components/Antd/Modal/BaseModal.vue";
import { mapState } from "vuex";
import thirdPartyOAuth2Api from "../../../api/integral/ThirdPartyOAuth2Api";
import { IdentityRoleEnum } from "../../../consts/base-enum";

export default {
  name: "IdentityLoginView",
  mixins: [BASE_LAYOUT_MIXIN],
  components: { IdentityLogin },
  data() {
    return {
      modalTitle: "",
      modalVisible: false
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
      // 传字符串参数 'count' 等同于 `state => state.count`
      supportThirdPartys: state => state.admin.supportThirdPartys,
      thirdPartySupport: state => state.admin.thirdPartySupport
    })
  },
  methods: {
    isSupport(thirdParty) {
      return this.thirdPartySupport.includes(thirdParty);
    },
    authorizeUrl(thirdParty) {
      thirdPartyOAuth2Api
        .authorizeUrl(thirdParty, {
          identityRole:
            IdentityRoleEnum.of(this.identityRole).mapping ||
            IdentityRoleEnum.USER.mapping
        })
        .then(res => {
          let authorizeUrl = res.data.map.authorizeUrl;
          if (authorizeUrl) {
            window.location.href = authorizeUrl;
          }
        });
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
