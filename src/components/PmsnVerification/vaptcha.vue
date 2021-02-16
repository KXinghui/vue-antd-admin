<template>
  <div class="pmsn-verifcation-vaptch">
    <!-- 点击式按钮建议高度介于36px与46px  -->
    <div id="vaptchaContainer" style="width: 300px;height: 36px;">
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
  </div>
</template>

<script src="https://v.vaptcha.com/v3.js"></script>
<script>
export default {
  name: "PmsnVerifcationVaptch"
};
</script>

<style>
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
