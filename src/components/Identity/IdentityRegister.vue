<template>
  <div class="identity-register">
    <!--  <a-row type="flex" justify="center">
      <a-col :xs="22" :sm="18" :md="10" :lg="6" :xl="6"> -->
    <div class="identity-register-header">
      <slot name="header"></slot>
    </div>
    <a-tabs
      default-active-key="1"
      :tab-position="tabOption.position"
      :tab-bar-style="tabOption.tabBarStyle"
      :size="tabOption.size"
      :tab-bar-gutter="tabOption.tabBarGutter"
      @change="changeTabs"
    >
      <a-tab-pane key="1">
        <span slot="tab">
          <a-icon type="user" />
          本地账号注册
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
              placeholder="用户名/手机/邮箱"
              allow-clear
            />
          </a-form-model-item>
          <a-form-model-item label="密码">
            <a-input-password
              v-model="form.password"
              placeholder="密码"
              allow-clear
            />
          </a-form-model-item>
          <a-form-model-item :wrapper-col="buttonItemLayout.wrapperCol">
            <a-button type="primary" @click="registerByLocalAccount" block>
              注册
            </a-button>
          </a-form-model-item>
        </a-form-model>
      </a-tab-pane>
      <a-tab-pane key="2">
        <span slot="tab">
          <a-icon type="mail" />
          邮箱注册
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
            <a-button type="primary" @click="registerByMail" block>
              注册
            </a-button>
          </a-form-model-item>
        </a-form-model>
      </a-tab-pane>
      <a-tab-pane key="3">
        <span slot="tab">
          <a-icon type="mobile" />
          手机注册
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
            <a-button type="primary" @click="registerByMobile" block disabled>
              注册(暂不支持)
            </a-button>
          </a-form-model-item>
        </a-form-model>
      </a-tab-pane>
    </a-tabs>
    <div class="identity-register-footer">
      <slot name="footer"></slot>
    </div>
    <!-- 本地账号注册 -->
    <!-- 手机注册 -->
    <!-- 邮箱注册 -->
    <!-- 扫码注册 -->
    <!-- </a-col>
    </a-row> -->
  </div>
</template>

<script>
import { FORM_MIXIN } from "@mixins/form-mixin";
import { mapState } from "vuex";

export default {
  name: "IdentityLogin",
  mixins: [FORM_MIXIN],
  data() {
    return {
      registerCancleTokenSource: {
        localAccount: null,
        mail: null,
        mobile: null,
        scanCode: null
      },
      registerScanCodeBase64: "",
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
      /* 注册二维码 */
      registerScanCodeAlert: {
        message: "请扫描二维码注册",
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
    ...mapState({
      identity: state => state.identity.identity
    })
  },
  methods: {
    changeTabs(activeKey) {
      console.log(activeKey);
    },
    registerByLocalAccount() {
      console.log("localaccount register", this.form);
    },
    registerByMail() {
      console.log("mail register", this.form);
    },
    registerByMobile() {
      console.log("mobile register", this.form);
    },
    getLoginCancleTokenSource(identityType) {
      switch (identityType) {
        case "LOCALACCOUNT":
          break;

        default:
          break;
      }
    }
  }
};
</script>

<style>
.identity-register {
  width: 100%;
  margin: 0 auto;
}

.ant-tabs-nav-scroll {
  display: flex;
}

.identity-register-header,
.identity-register-footer {
  /* border: 1px solid red; */
  margin: -1rem 0 0;
}
</style>
