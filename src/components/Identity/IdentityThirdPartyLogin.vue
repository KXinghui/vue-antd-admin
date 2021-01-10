<template>
  <div class="identity-third-party-login">
    <!-- 本地账号登录 -->
    <!-- 手机登录 -->
    <!-- 邮箱登录 -->
    <!-- 扫码登录 -->
    <a-result title="第三方登陆">
      <template #icon>
        <icon icon="Antd_loading" />
      </template>
      <template #extra>
        登陆即注册 {{ thirdPartyPlatform.toLocaleUpperCase() }} 登陆。。。
      </template>
    </a-result>
  </div>
</template>

<script>
// https://blog.csdn.net/qq_34136709/article/details/107087053?utm_medium=distribute.pc_relevant.none-task-blog-baidujs_title-3&spm=1001.2101.3001.4242
// https://blog.csdn.net/li3455277925/article/details/102499536?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-3.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-3.control
import { FORM_MIXIN } from "@mixins/form-mixin";
import { baseIdentityApi } from "../../api/base/ApiFactory";
import { mapMutations } from "vuex";
import { IDENTITY_MUTATION_TYPE } from "../../store/mutation-type";
import { axiosInstance } from "../../api/axios-config";

export default {
  name: "IdentityOauth2Login",
  mixins: [FORM_MIXIN],
  data() {
    return {
      identity: { name: "kxh" },
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
    thirdPartyPlatform: {
      type: [String],
      default: "",
      required: true,
      validator(value) {
        return ["github", "gitee", "qq"].includes(value);
      }
    },
    identityRole: {
      type: [String],
      default: "",
      required: true
    }
  },
  methods: {
    ...mapMutations("identity", [
      // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
      IDENTITY_MUTATION_TYPE.SET_TOKEN,
      IDENTITY_MUTATION_TYPE.SET_IDENTITY
    ]),
    changeTabs(activeKey) {
      if (4 == activeKey) {
        if (!this.loginScanCodeBase64) {
          // TODO 后台请求 this.identityRole
          console.log(activeKey, this.loginScanCodeBase64);
        }
      }
    },
    loginByLocalAccount() {
      console.log("localaccount login", this.form);
      baseIdentityApi(this.identityRole)
        .loginByLocalAccount(
          {
            localAccount: this.form.localAccount,
            password: this.form.password
            // userQuery: {
            //   localAccount: this.form.localAccount,
            //   password: this.form.password
            // }
          },
          {}
        )
        .then(res => {
          if (res.data.map) {
            this[IDENTITY_MUTATION_TYPE.SET_TOKEN]({
              token: res.data.map["Authorization"],
              tokenCode: res.data.map["AuthorizationCode"]
            });
          }
          console.log(res.data.map);
        });
    },
    loginByMail() {
      console.log("mail login", this.form);
    },
    loginByMobile() {
      console.log("mobile login", this.form);
    },
    getLoginCancleTokenSource(identityType) {
      switch (identityType) {
        case "LOCALACCOUNT":
          break;

        default:
          break;
      }
    }
  },
  created() {
    console.log(this.$route.query.code);
    console.log(this.$route.params);
  },
  mounted() {
    // 根据第三方平台分别请求处理
    if (this.thirdPartyPlatform === "github") {
      // No 'Access-Control-Allow-Origin' header is present on the requested resource
      // 获取code
      // 将code和state传到后台 后台根据code和state获取token 在header设置token后，请求用户信息 根据用户信息找第三方表 若有，则不增加记录；没有，增加两条记录([用户|系统用户|聊天用户]表和第三方表) 然后是登陆
      let code = this.$route.query.code;
      let url = "https://github.com/login/oauth/access_token";
      axiosInstance
        .post(url, {
          client_id: "Iv1.f804df1563d19bbc",
          client_secret: "7b6013324277839f55dff21f8c644028db6195d0",
          redirect_uri:
            "http://localhost:8080/vue-antd-admin/oauth2/github/login",
          code
        })
        .then(res => {
          console.log(res);
        });
      console.log("github");
    } else if (this.thirdPartyPlatform === "gitee") {
      console.log("gitee");
    } else if (this.thirdPartyPlatform === "wechat") {
      console.log("wechat");
    }
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
