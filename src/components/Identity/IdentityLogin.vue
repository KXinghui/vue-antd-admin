<template>
  <div class="identity-login">
    <a-row type="flex" justify="center">
      <a-col :xs="22" :sm="18" :md="10" :lg="6" :xl="6">
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
                <a-button type="primary" @click="loginByLocalAccount" block>
                  登录
                </a-button>
              </a-form-model-item>
            </a-form-model>
          </a-tab-pane>
          <a-tab-pane key="2">
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
                <a-button type="primary" @click="loginByMail" block>
                  登录
                </a-button>
              </a-form-model-item>
            </a-form-model>
          </a-tab-pane>
          <a-tab-pane key="3">
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
                <a-button type="primary" @click="loginByMobile" block disabled>
                  登录(暂不支持)
                </a-button>
              </a-form-model-item>
            </a-form-model>
          </a-tab-pane>
          <a-tab-pane key="4">
            <span slot="tab">
              <a-icon type="qrcode" />
              扫码登录
            </span>
            <div class="login-wrap login-scan-code-wrap">
              <img class="login-scan-code" :src="loginScanCodeSrc" />
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
      </a-col>
    </a-row>
    <a-row>
      <a-col
        :xs="24"
        :sm="20"
        :md="20"
        :lg="10"
        :xl="10"
        v-viewer="{
          movable: true,
          filter: function() {
            return !isBatch;
          }
        }"
      >
        <chat-record
          v-for="chatRecord in chatRecords"
          :chat-user="identity"
          :chat-record="chatRecord"
          :is-batch="isBatch"
          :chat-record-ids="chatRecordIds"
          @changeChatRecord="changeChatRecord"
          :key="chatRecord.id"
        ></chat-record>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import ChatRecord from "../IM/ChatRecord";
import { FORM_MIXIN } from "@mixins/form-mixin";

let msg =
  "asdfasdfasdfasdfasdfasdfasdfasdfasdfawsdfasdfasdfasdfasdfasdfafa发射点发射点发啊手动阀手动阀手动阀啊打发手动阀阿道夫";

export default {
  name: "IdentityLogin",
  mixins: [FORM_MIXIN],
  components: { ChatRecord },
  data() {
    let text = { html: msg + msg + msg + msg, md: "" };
    let message = {
      contentType: "image/jpg",
      url:
        "http://i2.hdslb.com/bfs/archive/84e2f23be2f09f03c5b22c8f3290bf2bd16f604a.jpg",
      fileName: "EVA.jpg",
      fileSize: "12121212",
      extension: ".jpg",
      createDate: "2020-10-12 00:00:00"
    };
    let message2 = {
      contentType: "application/pdf",
      url:
        "https://i2.hdslb.com/bfs/archive/84e2f23be2f09f03c5b22c8f3290bf2bd16f604a.jpg",
      fileName: "EVA.jpg",
      fileSize: "12121212",
      extension: ".pdf",
      createDate: "2020-10-12 00:00:00"
    };
    let message3 = {
      contentType: "application/pdf",
      url:
        "https://win-web-ra01-sycdn.kuwo.cn/f1248de9b25441973ba688658664e886/5f8a53b0/resource/n3/85/85/3570327548.mp3",
      fileName: "3570327548sadfasdfasdfasdfasdfasdfawsdfasdf.mp3",
      fileSize: "12121212",
      extension: ".mp3",
      createDate: "2020-10-12 00:00:00"
    };
    return {
      chatRecordIds: [],
      isBatch: false,
      identity: { name: "kxh" },
      chatRecords: [
        {
          id: "01",
          isOwn: "1",
          message: JSON.stringify(text),
          createDate: "2020-04-06 05:39:17"
        },
        {
          id: "02",
          isOwn: "0",
          message: JSON.stringify(text),
          createDate: "2020-04-06 05:39:17"
        },
        {
          id: "03",
          isOwn: "0",
          isToRead: 1,
          chatMsgTypeEnum: "FILE",
          message: JSON.stringify(message),
          createDate: "2020-04-06 05:39:17"
        },
        Object.assign(
          { id: "05", isOwn: "1" },
          {
            isToRead: 1,
            chatMsgTypeEnum: "FILE",
            message: JSON.stringify(message2),
            createDate: "2020-04-06 05:39:17"
          }
        ),
        Object.assign(
          { id: "06", isOwn: "1" },
          {
            isToRead: 1,
            chatMsgTypeEnum: "FILE",
            message: JSON.stringify(message3),
            createDate: "2020-04-06 05:39:17"
          }
        )
      ],
      loginCancleTokenSource: {
        localAccount: null,
        mail: null,
        mobile: null,
        scanCode: null
      },
      loginScanCodeBase64: "",
      tabOption: {
        position: "top",
        tabBarStyle: {
          /*  display: "flex" */
        },
        size: "default"
        /* tabBarGutter: 5 */
      },
      /* formOption: {
        // vertical horizontal
        layout: "vertical"
      }, */
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
    loginScanCodeSrc() {
      return `data:image/png;base64,${this.loginScanCodeBase64}`;
    }
  },
  methods: {
    changeChatRecord(value, checked) {
      let index = this.chatRecordIds.indexOf(value);
      if (checked) {
        if (index == -1) {
          this.chatRecordIds.push(value);
        }
      } else {
        this.chatRecordIds.splice(index, 1);
      }
      console.log(this.chatRecordIds);
    },
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
  width: 200px;
  height: 200px;
}
</style>
