<template>
  <div class="base-form-wrap">
    <a-form-model
      :model="formModel"
      :layout="formOption.layout"
      v-bind="formItemLayout"
    >
      <!-- :label-col="labelCol"
          :wrapper-col="wrapperCol" -->
      <!-- <a-form-model-item label="本地账号">
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
      </a-form-model-item> -->
      <slot>asdfasdfasdf</slot>
      adsfasdf
    </a-form-model>
  </div>
</template>

<script>
import { FORM_MIXIN } from "../../../mixins/form-mixin";
export default {
  name: "BaseForm",
  mixins: [FORM_MIXIN],
  props: {
    formModel: {
      type: [Object],
      default() {
        return {};
      },
      require: false
    }
  }
};
</script>

<style></style>
