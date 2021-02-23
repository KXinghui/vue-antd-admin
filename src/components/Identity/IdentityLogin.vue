<template>
  <div class="identity-login">
    <!-- <a-row type="flex" justify="center">
      <a-col :xs="22" :sm="18" :md="10" :lg="6" :xl="6"> -->
    <div class="identity-login-header">
      <slot name="header"></slot>
    </div>
    <a-tabs
      class="identity-login-tabs"
      default-active-key="localAccount"
      :tab-position="tabOption.position"
      :tab-bar-style="tabOption.tabBarStyle"
      :size="tabOption.size"
      :tab-bar-gutter="tabOption.tabBarGutter"
      @change="changeTabs"
    >
      <a-tab-pane key="localAccount">
        <span slot="tab">
          <a-icon type="user" />
          本地账号登录
        </span>
        <a-form-model
          :model="form"
          :layout="formOption.layout"
          v-bind="formItemLayout"
        >
          <!-- :label-col="labelCol"
          :wrapper-col="wrapperCol" -->
          <a-form-model-item label="本地账号">
            <a-input
              v-model="form.localAccount"
              autocomplete="username"
              placeholder="用户名/手机/邮箱"
              allow-clear
            />
          </a-form-model-item>
          <!-- Input elements should have autocomplete attributes (suggested: "current-password") -->
          <a-form-model-item label="密码">
            <a-input-password
              v-model="form.password"
              autocomplete="current-password"
              placeholder="密码"
              allow-clear
            />
          </a-form-model-item>
          <a-form-model-item :wrapper-col="buttonItemLayout.wrapperCol">
            <a-button
              type="primary"
              @click="loginByLocalAccount"
              :loading="loginLoading.localAccount"
              block
            >
              {{ loginLoading.localAccount ? "取消登录" : "登录" }}
            </a-button>
          </a-form-model-item>
        </a-form-model>
      </a-tab-pane>
      <a-tab-pane key="mail">
        <span slot="tab">
          <a-icon type="mail" />
          邮箱登录
        </span>
        <a-form-model
          :model="form"
          :layout="formOption.layout"
          v-bind="formItemLayout"
        >
          <a-form-model-item label="邮箱">
            <a-input v-model="form.mail" placeholder="邮箱" allow-clear />
          </a-form-model-item>
          <a-form-model-item label="邮箱验证码">
            <a-input-group compact>
              <a-input
                style="width: 70%"
                v-model="form.svCode"
                placeholder="邮箱验证码"
                allow-clear
              />
              <a-button style="width: 30%" type="primary">
                <icon icon="IconFont_send" />
                发送
              </a-button>
            </a-input-group>
          </a-form-model-item>
          <a-form-model-item :wrapper-col="buttonItemLayout.wrapperCol">
            <a-button
              type="primary"
              @click="loginByMail"
              :loading="loginLoading.mail"
              block
            >
              {{ loginLoading.mail ? "取消登录" : "登录" }}
            </a-button>
          </a-form-model-item>
        </a-form-model>
      </a-tab-pane>
      <a-tab-pane key="mobile">
        <span slot="tab">
          <a-icon type="mobile" />
          手机登录
        </span>
        <a-form-model
          :model="form"
          :layout="formOption.layout"
          v-bind="formItemLayout"
        >
          <a-form-model-item label="手机">
            <a-input v-model="form.mobile" placeholder="手机" allow-clear />
          </a-form-model-item>
          <a-form-model-item label="手机验证码">
            <a-input-group compact>
              <a-input
                style="width: 70%"
                v-model="form.svCode"
                placeholder="手机验证码"
                allow-clear
              />
              <a-button style="width: 30%" type="primary">
                <icon icon="IconFont_send" />
                发送
              </a-button>
            </a-input-group>
          </a-form-model-item>
          <a-form-model-item :wrapper-col="buttonItemLayout.wrapperCol">
            <a-button
              type="primary"
              @click="loginByMobile"
              :loading="loginLoading.mobile"
              block
              disabled
            >
              {{
                loginLoading.mobile ? "取消登录(暂不支持)" : "登录(暂不支持)"
              }}
            </a-button>
          </a-form-model-item>
        </a-form-model>
      </a-tab-pane>
      <a-tab-pane key="scanCode">
        <span slot="tab">
          <a-icon type="qrcode" />
          扫码登录
        </span>
        <div class="login-wrap login-scan-code-wrap">
          <!-- <img class="login-scan-code" :src="loginScanCodeSrc" /> -->
          <div class="login-scan-code-wrap">
            <a-spin :spinning="loginLoading.scanCode">
              <img class="login-scan-code" :src="loginScanCodeSrc" />
            </a-spin>
            <div
              v-show="loginScanCodeExpiration == 0"
              class="login-scan-code-expiration"
            >
              <a-button type="primary" @click="drawLoginScanCode"
                >点击刷新登录二维码</a-button
              >
            </div>
          </div>
          <div class="login-scan-code-tips">
            <a-alert
              :message="loginScanCodeAlert.message"
              :type="loginScanCodeAlert.type"
              show-icon
            />
            <!-- 扫码成功 进入确认登录页 显示Identity的头像和用户名 message="扫描成功" type="success" -->
            <!-- 确认登录 登录中。。。message="登录中。。。" type="info" -->
            <!--  <a-alert message="Success Tips" type="success" show-icon /> -->
            <!-- 登录成功 message="登录成功" type="success" -->
            <!-- 登录失败 显示失败原因 重新获取登录二维码 message="登录失败" type="error" -->
          </div>
        </div>
      </a-tab-pane>
    </a-tabs>
    <!-- 本地账号登录 -->
    <!-- 手机登录 -->
    <!-- 邮箱登录 -->
    <!-- 扫码登录 -->
    <!-- </a-col>
    </a-row> -->
    <div class="identity-login-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
import { FORM_MIXIN } from "@mixins/form-mixin";
import { WS_MIXIN } from "@mixins/ws-mixin";
import { baseIdentityApi } from "../../api/base/ApiFactory";
import { CANCEL_TOKEN, getCancelTokenSource } from "../../api/axios-config";
import { mapState, mapMutations } from "vuex";
import { IDENTITY_MUTATION_TYPE } from "../../store/mutation-type";
import scanCodeLoginApi from "../../api/integral/ScanCodeLoginApi";
import { scanCodeLogin } from "../../api/ws/destination";
import { pushRoute } from "../../utils/router-utils";

const IDENITTY_TYPES = ["localAccount", "mail", "mobile", "scanCode"];

export default {
  name: "IdentityLogin",
  mixins: [FORM_MIXIN, WS_MIXIN],
  data() {
    return {
      loginCancleTokenSource: {
        localAccount: null,
        mail: null,
        mobile: null,
        scanCode: null
      },
      loginLoading: {
        localAccount: false,
        mail: false,
        mobile: false,
        scanCode: false
      },
      // loginScanCodeLoading: true,
      loginScanCode: "",
      // loginScanCodeBase64: `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`,
      loginScanCodeBase64: "",
      loginScanCodeExpiration: -1,
      loginScanCodeAvatarUrl: "",
      isConfirmLogin: false,
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
      },
      /* 登录二维码 */
      loginScanCodeAlert: {
        message: "请扫描二维码登录",
        type: "warning"
      }
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
    /* formItemLayout() {
      const { layout } = this.formOption;
      return layout === "horizontal"
        ? {
            labelCol: { span: 5, offset: 1 },
            wrapperCol: { span: 16, offset: 1 }
          }
        : {};
    }, */
    /* buttonItemLayout() {
      const { layout } = this.formOption;
      return layout === "horizontal"
        ? {
            wrapperCol: { span: 22, offset: 1 }
          }
        : {};
    }, */
    ...mapState({
      identity: state => state.identity.identity
    }),
    loginScanCodeSrc() {
      let loginScanCodeBase64 = this.loginScanCodeBase64;
      if (!loginScanCodeBase64) {
        return "/lazy/qrcode.png";
      }
      return `data:image/png;base64,${loginScanCodeBase64}`;
    }
  },
  methods: {
    ...mapMutations(IDENTITY_MUTATION_TYPE.NAMESPACE, [
      // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
      IDENTITY_MUTATION_TYPE.SET_TOKEN,
      IDENTITY_MUTATION_TYPE.SET_IDENTITY
    ]),
    changeTabs(activeKey) {
      if ("scanCode" == activeKey) {
        this.drawLoginScanCode();
      }
    },
    loginByLocalAccount() {
      console.log("localAccount login", this.form);
      let vm = this;
      if (vm.handleCancleWhenLogin("localAccount")) {
        return;
      }
      vm.loginLoading["localAccount"] = { delay: 1500 };
      baseIdentityApi(this.identityRole)
        .loginByLocalAccount(
          {
            localAccount: this.form.localAccount,
            password: this.form.password
          },
          {
            [CANCEL_TOKEN]: this.getLoginCancleTokenSource("localAccount").token
          }
        )
        .then(res => {
          vm.handleAfterLogin(res.data);
          vm.loginLoading["localAccount"] = false;
        })
        .catch(() => {
          vm.loginLoading["localAccount"] = false;
        });
    },
    loginByMail() {
      console.log("mail login", this.form);
      let vm = this;
      if (vm.handleCancleWhenLogin("mail")) {
        return;
      }
      vm.loginLoading["mail"] = { delay: 1500 };
      baseIdentityApi(this.identityRole)
        .loginByMail(
          {
            mail: this.form.mail,
            svCodeKey: this.form.mail,
            svCode: this.form.svCode
            // userQuery: {
            //   localAccount: this.form.localAccount,
            //   password: this.form.password
            // }
          },
          {
            [CANCEL_TOKEN]: this.getLoginCancleTokenSource("mail").token
          }
        )
        .then(res => {
          vm.handleAfterLogin(res.data);
          vm.loginLoading["mail"] = false;
        })
        .catch(() => {
          vm.loginLoading["mail"] = false;
        });
    },
    loginByMobile() {
      console.log("mobile login", this.form);
      let vm = this;
      if (vm.handleCancleWhenLogin("mobile")) {
        return;
      }
      vm.loginLoading["mobile"] = { delay: 1500 };
      baseIdentityApi(this.identityRole)
        .loginByMobile(
          {
            mobile: this.form.mobile,
            svCodeKey: this.form.mobile,
            svCode: this.form.svCode
            // userQuery: {
            //   localAccount: this.form.localAccount,
            //   password: this.form.password
            // }
          },
          {
            [CANCEL_TOKEN]: this.getLoginCancleTokenSource("mobile").token
          }
        )
        .then(res => {
          vm.handleAfterLogin(res.data);
          vm.loginLoading["mobile"] = false;
        })
        .catch(() => {
          vm.loginLoading["mobile"] = false;
        });
    },
    drawLoginScanCode() {
      let vm = this;
      // 判断是否有扫描码或扫描码过期
      if (vm.loginScanCodeExpiration && vm.loginScanCodeExpiration > 0) {
        return;
      }
      vm.loginScanCodeExpiration = -1;
      vm.loginLoading.scanCode = true;
      vm.loginScanCodeAlert = {
        message: "正在刷新登录二维码",
        type: "info"
      };
      scanCodeLoginApi
        .drawScanCode(vm.identityRole)
        .then(res => {
          if (res.data.code == 1) {
            // TODO 取消订阅
            if (vm.loginScanCode) {
              vm.wsunsubscribe(scanCodeLogin(vm.loginScanCode));
            }
            let { scanCode, scanCodeBase64, scanCodeExpiration } = res.data.map;
            vm.loginScanCode = scanCode;
            vm.loginScanCodeBase64 = scanCodeBase64;
            vm.loginScanCodeExpiration = scanCodeExpiration;
            vm.loginLoading.scanCode = false;
            vm.wssubscribe(
              scanCodeLogin(scanCode),
              function(response) {
                // TODO 处理订阅WebSocket 扫码和确认登录后的返回结果
                let res = JSON.parse(response.body);
                let { code, msg } = res;
                let { avatarUrl, scanCodeExpiration } = res.map;
                if (code == 1) {
                  // 扫码登录 进入视图
                  if (scanCodeExpiration) {
                    vm.loginScanCodeAvatarUrl = avatarUrl;
                    vm.loginScanCodeAlert = {
                      message: msg ? msg : "扫码成功",
                      type: "success"
                    };
                  }
                  let { Authorization, AuthorizationCode, identity } = res.map;
                  // 确认登录
                  if (Authorization && AuthorizationCode && identity) {
                    vm.loginScanCodeAlert = {
                      message: msg ? msg : "扫码登录中。。。",
                      type: "success"
                    };
                    // 处理登录后
                    vm.handleAfterLogin(res);
                    vm.isConfirmLogin = true;
                  }
                } else {
                  if (scanCodeExpiration == 0 || scanCodeExpiration) {
                    vm.loginScanCodeExpiration = scanCodeExpiration;
                  }
                  vm.loginScanCodeAlert = {
                    message: msg ? msg : "扫码失败",
                    type: "error"
                  };
                }
              },
              {}
            );
            vm.loginScanCodeAlert = {
              message: "请扫描二维码登录",
              type: "warning"
            };
            // Interval 处理过期情况
            vm.loginScanCodeInterval = setInterval(function() {
              // 未确认登录
              if (!vm.isConfirmLogin) {
                vm.loginScanCode = "";
                // vm.loginScanCodeBase64 = "";
                vm.loginScanCodeExpiration = 0;
                vm.loginScanCodeAlert = {
                  message: "请点击刷新登录二维码",
                  type: "warning"
                };
              }
              clearInterval(vm.loginScanCodeInterval);
            }, scanCodeExpiration * 1000);
          }
        })
        .catch(err => {
          console.log(err);
          vm.loginLoading.scanCode = false;
          vm.loginScanCodeBase64 = "";
          vm.loginScanCodeExpiration = 0;
          vm.loginScanCodeAlert = {
            message: "刷新登陆二维码失败",
            type: "error"
          };
        });
    },
    getLoginCancleTokenSource(identityType, isCreateWhenNon = true) {
      if (IDENITTY_TYPES.includes(identityType)) {
        let loginCancleTokenSource = this.loginCancleTokenSource[identityType];
        if (!loginCancleTokenSource && isCreateWhenNon) {
          loginCancleTokenSource = getCancelTokenSource();
          this.loginCancleTokenSource[identityType] = loginCancleTokenSource;
        }
        return loginCancleTokenSource;
      }
      return null;
    },
    handleAfterLogin(response) {
      let vm = this;
      let { Authorization, AuthorizationCode, identity } = response.map;
      if (Authorization && AuthorizationCode && identity) {
        vm[IDENTITY_MUTATION_TYPE.SET_TOKEN]({
          token: Authorization,
          tokenCode: AuthorizationCode
        });
        vm[IDENTITY_MUTATION_TYPE.SET_IDENTITY](identity);
        // TODO 进入首页
        pushRoute({ path: "/" });
      }
    },
    handleCancleWhenLogin(identityType) {
      if (!IDENITTY_TYPES.includes(identityType)) {
        return;
      }
      let vm = this;
      let isCancle = vm.loginLoading[identityType];
      if (isCancle) {
        let source = vm.getLoginCancleTokenSource(identityType, false);
        if (source) {
          source.cancel();
        }
        vm.loginLoading[identityType] = false;
      }
      return isCancle;
    }
  },
  destroyed() {
    debugger;
    if (this.loginScanCode) {
      this.wsunsubscribe(scanCodeLogin(this.loginScanCode));
    }
    this.wsdisconnect();
    if (this.loginScanCodeInterval) {
      clearInterval(this.loginScanCodeInterval);
    }
  }
};
</script>

<style>
.identity-login {
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
  width: 160px;
  height: 160px;
}

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

.identity-login-header,
.identity-login-footer {
  /* border: 1px solid red; */
  margin: -1rem 0 0;
}
</style>
