<template>
  <div class="identity-confirm-login">
    <!-- <a-row type="flex" justify="center">
      <a-col :xs="22" :sm="18" :md="10" :lg="6" :xl="6"> -->
    <div class="identity-confirm-login-header">
      <slot name="header"></slot>
    </div>
    <div class="identity-confirm-login-main">
      <identity-avatar :avatarSize="20" :identity="identity"></identity-avatar>
      <a-button type="primary" block @click="confirmLogin(true)">
        确认登录
      </a-button>
      <a-button type="info" block @click="confirmLogin(false)">
        取消
      </a-button>
    </div>
    <div class="identity-confirm-login-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
import { BASE_LAYOUT_MIXIN } from "../Mobile/mixins/BaseLayout";
import IdentityAvatar from "./IdentityAvatar";
import { CANCEL_TOKEN, getCancelTokenSource } from "../../api/axios-config";
import scanCodeLoginApi from "../../api/integral/ScanCodeLoginApi";
import { mapState } from "vuex";

export default {
  name: "IdentityConfirmLogin",
  mixins: [BASE_LAYOUT_MIXIN],
  components: { IdentityAvatar },
  data() {
    return {
      loginCancleTokenSource: {
        scanCode: null
      },
      loginLoading: {
        scanCode: false
      },
      // loginScanCodeLoading: true,
      loginScanCode: "",
      loginScanCodeBase64: `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`,
      loginScanCodeExpiration: -1,
      loginScanCodeAvatarUrl: "",
      isConfirmLogin: false
    };
  },
  props: {
    identityRole: {
      type: [String],
      default: "",
      required: true
    }
  },
  computed: {
    ...mapState({
      identity: state => state.identity.identity
    }),
    loginScanCodeSrc() {
      return `data:image/png;base64,${this.loginScanCodeBase64}`;
    }
  },
  methods: {
    confirmLogin(isConfirm) {
      let vm = this;
      let loginCancleTokenSource = vm.getLoginCancleTokenSource(false);
      if (!isConfirm && vm.loginLoading.scanCode) {
        loginCancleTokenSource && loginCancleTokenSource.cancel();
        return;
      }
      let { scancode } = vm.$route.query;
      vm.loginLoading.scanCode = true;
      scanCodeLoginApi
        .confirmLogin(
          { scanCode: scancode },
          { [CANCEL_TOKEN]: vm.getLoginCancleTokenSource(true) }
        )
        .then(res => {
          if (res.data.code == 1) {
            vm.loginLoading.scanCode = false;
            // TODO 处理确认登陆
            /* vm.wssubscribe(
              scanCodeLogin(scanCode),
              function(response) {
                console.log(
                  "处理订阅WebSocket 扫码和确认登录后的返回结果     ",
                  response
                );
                let { code, msg } = response;
                if (code == 1) {
                  let { avatarUrl } = response.map;
                  // 扫码登录 进入视图
                  if (avatarUrl) {
                    vm.loginScanCodeAvatarUrl = avatarUrl;
                    vm.loginScanCodeAlert = {
                      message: msg ? msg : "扫码成功",
                      type: "success"
                    };
                  }
                  let {
                    Authorization,
                    AuthorizationCode,
                    identity
                  } = response.map;
                  // 确认登录
                  if (Authorization && AuthorizationCode && identity) {
                    vm.loginScanCodeAlert = {
                      message: msg ? msg : "扫码登录中。。。",
                      type: "success"
                    };
                    // 处理登录后
                    vm.handleAfterLogin(response);
                    vm.isConfirmLogin = true;
                  }
                } else {
                  vm.loginScanCodeAlert = {
                    message: msg ? msg : "扫码失败",
                    type: "error"
                  };
                }
              },
              {}
            );
           */
          }
        });
    },
    getLoginCancleTokenSource(isCreateWhenNon = true) {
      let identityType = "scanCode";
      let loginCancleTokenSource = this.loginCancleTokenSource[identityType];
      if (!loginCancleTokenSource && isCreateWhenNon) {
        loginCancleTokenSource = getCancelTokenSource();
        this.loginCancleTokenSource[identityType] = loginCancleTokenSource;
      }
      return loginCancleTokenSource;
    },
    handleAfterLogin(response) {
      let { Authorization, AuthorizationCode, identity } = response.map;
      if (Authorization && AuthorizationCode && identity) {
        // TODO 退回或进入首页
      }
    }
  }
};
</script>

<style>
.identity-confirm-login {
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
/* .login-scan-code-wrap .login-scan-code {
  position: absolute;
  width: 200px;
  height: 200px;
} */

.login-scan-code-wrap {
  /* border: 1px solid red; */
  margin: 0.4rem 0 1.3rem;
}

.login-scan-code-wrap .login-scan-code-expiration {
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 170px;
  height: 170px;
  background-color: rgba(177, 180, 182, 0.4);
}

/* .login-scan-code-wrap .login-scan-code-tips {
  margin-bottom: 1rem;
} */

.identity-confirm-login-header,
.identity-confirm-login-footer {
  /* border: 1px solid red; */
  margin: -1rem 0 0;
}
</style>
