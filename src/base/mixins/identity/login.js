export const LOGIN_MIXIN = {
  data() {
    return {
      identityRole: ""
    };
  },
  methods: {
    // 发送邮箱
    sendMail: function() {},
    // 登录的逻辑都会涉及到Vuex
    // 本地账号登录
    loginByLocalAccount: function() {},
    // 邮箱登录
    loginByMail: function() {},
    // 扫码登录
    drawLoginScanCode: function() {
      // 获取登录二维码
      // 订阅登录二维码 /login/scancode/{encryptScanCode}
    }
  }
};
