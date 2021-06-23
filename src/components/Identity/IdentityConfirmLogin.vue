<template>
  <div class="identity-confirm-login">
    <!-- <a-row type="flex" justify="center">
      <a-col :xs="22" :sm="18" :md="10" :lg="6" :xl="6"> -->
    <div class="identity-confirm-login-header">
      <slot name="header"></slot>
    </div>
    <div class="identity-confirm-login-main">
      <div class="device-icon">
        <icon :icon="deviceIcon"></icon>
        <span> {{ loginScanCodeDevice }}</span>
      </div>
      <identity-avatar :avatarSize="100" :identity="identity"></identity-avatar>
      <a-button
        :disabled="isExpire"
        :loading="isConfirm && loginLoading.scanCode"
        type="primary"
        block
        @click="confirmLogin(true)"
      >
        {{ isExpire ? "确认登录(二维码无效或失效)" : "确认登录" }}
      </a-button>
      <a-button
        :disabled="isExpire"
        :loading="!isConfirm && loginLoading.scanCode"
        type="info"
        block
        @click="confirmLogin(false)"
      >
        {{ isExpire ? "取消(二维码无效或失效)" : "取消" }}
      </a-button>
    </div>
    <div class="identity-confirm-login-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
import { BASE_LAYOUT_MIXIN } from "../Mobile/mixins/BaseLayout";
import { ROUTER_MIXIN } from "../../mixins/router-mixin";
import IdentityAvatar from "./IdentityAvatar";
import { CANCEL_TOKEN, getCancelTokenSource } from "../../api/axios-config";
import scanCodeLoginApi from "../../api/integral/ScanCodeLoginApi";
import { mapState } from "vuex";

export default {
  name: "IdentityConfirmLogin",
  mixins: [BASE_LAYOUT_MIXIN, ROUTER_MIXIN],
  components: { IdentityAvatar },
  data() {
    return {
      loginCancleTokenSource: {
        scanCode: null
      },
      loginLoading: {
        scanCode: false
      },
      loginScanCodeDevice: "UNKNOWN",
      loginScanCodeExpiration: -1,
      isEnterView: false,
      isConfirmLogin: false,
      isConfirm: false
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
    isExpire() {
      return this.loginScanCodeExpiration == 0;
    },
    deviceIcon() {
      let device = this.loginScanCodeDevice;
      if (["MOBILE", "TABLET"].includes(device)) {
        return `Antd_${device.toLowerCase()}`;
      }
      if ("COMPUTER" == device) {
        return `Antd_desktop`;
      }
      if ("WEARABLE" == device) {
        return `IconFont_watch`;
      }
      return `IconFont_devices`;
    },
    ...mapState({
      identity: state => state.identity.identity
    })
  },
  methods: {
    enterView() {
      let vm = this;
      if (vm.isEnterView) {
        return;
      }
      let { scancode } = vm.$route.query;
      scanCodeLoginApi.enterView({ scanCode: scancode }).then(res => {
        let respResult = scanCodeLoginApi.respResult(res);
        if (respResult.isSucc()) {
          let { device, scanCodeExpiration } = res.data.map;
          if (scanCodeExpiration) {
            vm.loginScanCodeExpiration = scanCodeExpiration;
          }
          vm.loginScanCodeDevice = device;
          vm.isEnterView = true;
          // Interval 处理过期情况
          vm.loginScanCodeInterval = setInterval(function() {
            // 未确认登录
            if (!vm.isConfirmLogin) {
              vm.loginScanCode = "";
              // vm.loginScanCodeBase64 = "";
              vm.loginScanCodeExpiration = 0;
            }
            clearInterval(vm.loginScanCodeInterval);
          }, scanCodeExpiration * 1000);
        } else {
          vm.loginScanCodeExpiration = 0;
        }
      });
    },
    confirmLogin(isConfirm) {
      let vm = this;
      if (!vm.isEnterView) {
        return;
      }
      if (vm.isConfirmLogin) {
        return;
      }
      vm.isConfirm = isConfirm;
      if (!isConfirm) {
        let loginCancleTokenSource = vm.getLoginCancleTokenSource(false);
        if (vm.loginLoading.scanCode && loginCancleTokenSource) {
          loginCancleTokenSource.cancel();
        }
      }
      let { scancode } = vm.$route.query;
      vm.loginLoading.scanCode = true;
      scanCodeLoginApi
        .confirmLogin(
          { scanCode: scancode, isConfirm },
          { [CANCEL_TOKEN]: vm.getLoginCancleTokenSource().token }
        )
        .then(res => {
          vm.loginLoading.scanCode = false;
          if (res.data.code == 1) {
            vm.isConfirmLogin = true;
            // TODO 处理扫码者的确认登陆 回退或回到首页
            vm.handleAfterLogin(res.data);
          } else {
            let { scanCodeExpiration } = res.data.map;
            if (scanCodeExpiration == 0 || scanCodeExpiration) {
              vm.loginScanCodeExpiration = scanCodeExpiration;
            }
          }
        })
        .catch(() => {
          vm.loginLoading.scanCode = false;
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
        // TODO 回退或进入首页
        this.$router.go(-1);
      }
    }
  },
  mounted() {
    this.enterView();
  },
  destroyed() {
    if (this.loginScanCodeInterval) {
      clearInterval(this.loginScanCodeInterval);
    }
  }
};
</script>

<style>
.identity-confirm-login {
  width: 100%;
  margin: 0 auto;
}
.identity-confirm-login-header,
.identity-confirm-login-footer {
  margin: 1rem 0;
}
.identity-confirm-login-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
}
.identity-confirm-login-main > button {
  margin-top: 0.8rem;
}
.identity-confirm-login-main > .device-icon {
  margin: 0.5rem 0 1rem;
}
</style>
