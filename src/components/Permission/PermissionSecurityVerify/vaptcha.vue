<template>
  <!-- 点击式按钮建议高度介于36px与46px  -->
  <div class="vaptcha-container" :id="vaptchaRef" :ref="vaptchaRef">
    <!--vaptcha-container是用来引入VAPTCHA的容器，下面代码为预加载动画，仅供参考-->
    <div class="vaptcha-init-main">
      <div class="vaptcha-init-loading">
        <a href="/" target="_blank">
          <img src="https://r.vaptcha.net/public/img/vaptcha-loading.gif" />
        </a>
        <span class="vaptcha-text">VAPTCHA is initializing...</span>
      </div>
    </div>
  </div>
</template>

<script src="https://v.vaptcha.com/v3.js"></script>
<script>
const vaptcha = vaptcha || window.vaptcha;

export default {
  name: "PermissionSecurityVerify",
  data() {
    return {
      vaptchaRef: `vaptcha${this._uid}`
    };
  },
  props: {
    vaptchaObj: {
      type: [Object],
      default() {
        return [];
      },
      require: true
    },
    vid: {
      type: [String],
      default: "602b27f226af12b134e54c71",
      require: false
    },
    type: {
      type: [String],
      default: "invisible",
      require: false
    },
    scene: {
      type: [Number],
      default: 0,
      require: false
    },
    form: {
      type: [String, HTMLElement],
      default: "",
      require: true
    }
  },
  methods: {
    init() {
      let vm = this;
      let container = vm.$refs[vm.vaptchaRef];
      vaptcha({
        vid: "****", // 验证单元id
        type: "click", // 显示类型 点击式
        scene: 0, // 场景值 默认0
        container: container, // 容器，可为Element 或者 selector
        offline_server: "" //离线模式服务端地址，若尚未配置离线模式，请填写任意地址即可。
        //可选参数
        //lang: 'auto', // 语言 默认auto,可选值auto,zh-CN,en,zh-TW,jp
        //https: true, // 使用https 默认 true
        //style: 'dark' //按钮样式 默认dark，可选值 dark,light
        //color: '#57ABFF' //按钮颜色 默认值#57ABFF
      }).then(function(vaptchaObj) {
        //   VAPTCHA验证实例
        vm.$emit("update:vaptchaObj", vaptchaObj);
        //获取token的方式一：
        // vaptchaObj.render(); // 调用验证实例 vpObj 的 render 方法加载验证按钮
        //获取token的方式二：
        //vaptchaObj.renderTokenInput(vm.form)//以form的方式提交数据时，使用此函数向表单添加token值
        // vaptchaObj.listen("pass", function() {
        //   // 验证成功进行后续操作
        //   var data = {
        //     //表单数据
        //     token: vaptchaObj.getToken()
        //   };
        //   $.post("login", data, function(r) {
        //     if (r.code !== 200) {
        //       console.log("登录失败");
        //       vaptchaObj.reset(); //重置验证码
        //     }
        //   });
        // });
        //关闭验证弹窗时触发
        // vaptchaObj.listen("close", function() {
        //   //验证弹窗关闭触发
        // });
      });
    }
  }
};
</script>

<style scoped>
.vaptcha-container {
  width: 300px;
  height: 36px;
  min-height: 36px;
  max-height: 46px;
}

.vaptcha-init-main {
  display: table;
  width: 100%;
  height: 100%;
  background-color: #eeeeee;
}
.vaptcha-init-loading {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}
.vaptcha-init-loading > a {
  display: inline-block;
  width: 18px;
  height: 18px;
  border: none;
}
.vaptcha-init-loading > a img {
  vertical-align: middle;
}

.vaptcha-init-loading .vaptcha-text {
  font-family: sans-serif;
  font-size: 12px;
  color: #cccccc;
  vertical-align: middle;
}
</style>
