<template>
  <div class="identity-third-party-login">
    <!-- 本地账号登录 -->
    <!-- 手机登录 -->
    <!-- 邮箱登录 -->
    <!-- 扫码登录 -->
    <a-result :status="isSupport ? 'success' : 'error'">
      <template #title>
        第三方登录 <icon :icon="thirdPartyIcon"></icon>
      </template>
      <template #icon>
        <a-icon :type="isSupport ? 'loading' : 'close-circle'" />
      </template>
      <template #extra>
        登录即注册
        <span style="color: red;">{{
          isSupport ? thirdParty.toLocaleUpperCase() : "暂不支持"
        }}</span>
        登录。。。
      </template>
    </a-result>
  </div>
</template>

<script>
// https://blog.csdn.net/qq_34136709/article/details/107087053?utm_medium=distribute.pc_relevant.none-task-blog-baidujs_title-3&spm=1001.2101.3001.4242
// https://blog.csdn.net/li3455277925/article/details/102499536?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-3.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-3.control
import { FORM_MIXIN } from "@mixins/form-mixin";
import { mapState, mapMutations } from "vuex";
import { IDENTITY_MUTATION_TYPE } from "../../store/mutation-type";
import { msg } from "../../utils/antd-utils";
import thirdPartyOAuth2Api from "../../api/integral/ThirdPartyOAuth2Api";
import { IdentityRoleEnum } from "../../consts/base-enum";

export default {
  name: "IdentityOauth2Login",
  mixins: [FORM_MIXIN],
  data() {
    return {
      identity: { name: "kxh" },
      isSupport: false,
      loginCancleTokenSource: {
        localAccount: null,
        mail: null,
        mobile: null,
        scanCode: null
      },
      tabOption: {
        position: "top",
        tabBarStyle: {
          /*  display: "flex" */
        },
        size: "default"
        /* tabBarGutter: 5 */
      },
      formOption: {
        // vertical horizontal inline
        layout: "vertical"
      },
      form: {
        name: "",
        region: undefined,
        date1: undefined,
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  props: {
    thirdParty: {
      type: [String],
      default: "",
      required: true
      // validator(value) {
      //   return this.thirdPartySupport.includes(value);
      // }
    },
    identityRole: {
      type: [String],
      default: "",
      required: true
    }
  },
  computed: {
    ...mapState({
      thirdPartySupport: state => state.admin.thirdPartySupport
    }),
    thirdPartyIcon() {
      return `IconFont_${this.thirdParty}`;
    }
  },
  methods: {
    async authorize() {
      let { code, state } = this.$route.query;
      let thirdParty = this.thirdParty;
      await thirdPartyOAuth2Api
        .authorize(thirdParty, { code, state })
        .then(res => {
          let thirdPartyOAuth2Authorize =
            res.data.map.thirdPartyOAuth2Authorize;
          if (thirdPartyOAuth2Authorize) {
            this[IDENTITY_MUTATION_TYPE.SET_OAUTH2_THIRDPARTY]({
              thirdParty,
              thirdPartyOAuth2Authorize
            });
          }
        });
    },
    async loginIsRegister() {
      await this.authorize();
      let thirdParty = this.thirdParty;
      let accessTokenName = `${thirdParty}_access_token`;
      let accessToken = this.$store.getters.oauth2[thirdParty]["accessToken"];
      thirdPartyOAuth2Api
        .loginIsRegister(
          thirdParty,
          {
            identityRole:
              IdentityRoleEnum.of(this.identityRole).mapping ||
              IdentityRoleEnum.USER.mapping
          },
          {
            headers: {
              [accessTokenName]: accessToken
            }
          }
        )
        .then(res => {
          if (res.data.code == 1) {
            let { Authorization, AuthorizationCode, identity } = res.data.map;
            this[IDENTITY_MUTATION_TYPE.SET_TOKEN]({
              token: Authorization,
              tokenCode: AuthorizationCode
            });
            this[IDENTITY_MUTATION_TYPE.SET_IDENTITY](identity);
          }
        });
    },
    ...mapMutations("identity", [
      // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
      IDENTITY_MUTATION_TYPE.SET_OAUTH2_THIRDPARTY,
      IDENTITY_MUTATION_TYPE.SET_TOKEN,
      IDENTITY_MUTATION_TYPE.SET_IDENTITY
    ])
  },
  mounted() {
    // 根据第三方平台分别请求处理
    this.isSupport = this.thirdPartySupport.includes(this.thirdParty);
    if (!this.isSupport) {
      msg("暂不支持");
      return;
    }
    this.loginIsRegister();
  }
};
</script>

<style>
.identity-third-party-login {
  width: 100%;
  margin: 0 auto;
}

.ant-tabs-nav-scroll {
  display: flex;
}

.login-wrap,
.login-scan-code-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.login-scan-code-wrap .login-scan-code {
  width: 200px;
  height: 200px;
}
</style>
