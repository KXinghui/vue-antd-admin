<template>
  <div class="input-wrp">
    <a-input placeholder="Basic usage" allow-clear />
    <a-input
      ref="userNameInput"
      v-model="userName"
      placeholder="Basic usage"
      allow-clear
    >
      <a-icon slot="prefix" type="user" />
      <a-tooltip slot="suffix" title="Extra information">
        <a-icon type="info-circle" style="color: rgba(0,0,0,.45)" />
      </a-tooltip>
    </a-input>
    <!-- 前缀后缀选择 -->
    <a-input default-value="mysite" allow-clear>
      <a-select slot="addonBefore" default-value="Http://" style="width: 90px">
        <a-select-option value="Http://">
          Http://
        </a-select-option>
        <a-select-option value="Https://">
          Https://
        </a-select-option>
      </a-select>
      <a-select slot="addonAfter" default-value=".com" style="width: 80px">
        <a-select-option value=".com">
          .com
        </a-select-option>
        <a-select-option value=".jp">
          .jp
        </a-select-option>
        <a-select-option value=".cn">
          .cn
        </a-select-option>
        <a-select-option value=".org">
          .org
        </a-select-option>
      </a-select>
    </a-input>

    <!-- 搜索框 -->
    <a-input-search
      placeholder="input search loading with enterButton"
      loading
      enter-button
    />
    <!-- 密码框 -->
    <a-input-password placeholder="input password" />
    <!-- 文本域 -->
    <div class="textarea">
      <a-textarea
        placeholder="Autosize height with minimum and maximum number of lines"
        :auto-size="{ minRows: 2, maxRows: 6 }"
      />
      <span class="text-count"><span>20</span>/20</span>
    </div>
    <!-- 结合 Tooltip 组件输入时格式化展示 -->
    <a-tooltip
      :trigger="['focus']"
      placement="topLeft"
      overlay-class-name="numeric-input"
    >
      <span v-if="value" slot="title" class="numeric-input-title">
        {{ value !== "-" ? formatNumber(value) : "-" }}
      </span>
      <template v-else slot="title">
        Input a number
      </template>
      <a-input
        :value="value"
        placeholder="Input a number"
        :max-length="25"
        style="width: 120px"
        @change="onChange"
        @blur="onBlur"
      />
    </a-tooltip>
    <!-- 输入框与下拉菜单 => 树选择 -->
    <a-input default-value="mysite">
      <a-select slot="addonBefore" default-value="Http://" style="width: 90px">
        <a-select-option value="Http://">
          Http://
        </a-select-option>
        <a-select-option value="Https://">
          Https://
        </a-select-option>
      </a-select>
      <a-dropdown slot="addonAfter" placement="bottomRight">
        <div slot="overlay">
          <rich-text-view></rich-text-view>
        </div>
        <a-icon type="user" />
      </a-dropdown>
    </a-input>
    <antd-input input-type="textarea" :value="testValue"></antd-input>
    <a-input-number
      v-model="inputNum"
      :min="1"
      :max="10"
      @change="changeInputNum"
    />
    <a-radio-group name="radioGroup" :default-value="1">
      <a-radio :value="1">
        A
      </a-radio>
      <a-radio :value="2">
        B
      </a-radio>
      <a-radio :value="3">
        C
      </a-radio>
      <a-radio :value="4">
        D
      </a-radio>
    </a-radio-group>
    <a-switch
      checked-children="激活成功"
      un-checked-children="激活失败"
      default-checked
    />
    <a-rate v-model="rate" :tooltips="rateDesc" :count="6" />

    <a-rate v-model="rate" :tooltips="rateDesc" :count="6" allow-half />

    <a-slider :default-value="100" />

    <a-switch default-checked>
      <a-icon slot="checkedChildren" type="check" />
      <a-icon slot="unCheckedChildren" type="close" />
    </a-switch>
    <a-progress :percent="50" status="active" />
    <a-progress
      type="circle"
      :percent="50"
      status="active"
      :format="percent => `${percent} Days`"
    />
    <a-button @click="consoleLog"></a-button>
  </div>
</template>

<script>
import RichTextView from "@views/Admin/Editor/RichText";
import AntdInput from "../../../../components/Antd/DataEntry/Input";

function formatNumber(value) {
  value += "";
  const list = value.split(".");
  const prefix = list[0].charAt(0) === "-" ? "-" : "";
  let num = prefix ? list[0].slice(1) : list[0];
  let result = "";
  while (num.length > 3) {
    result = `,${num.slice(-3)}${result}`;
    num = num.slice(0, num.length - 3);
  }
  if (num) {
    result = num + result;
  }
  return `${prefix}${result}${list[1] ? `.${list[1]}` : ""}`;
}

export default {
  components: {
    RichTextView,
    AntdInput
  },
  data() {
    return {
      testValue: "afsdfad",
      userName: "",
      value: "",
      inputNum: 1,
      rate: 3,
      rateDesc: [
        "terrible",
        "bad",
        "normal",
        "good",
        "wonderful",
        "wwwonderful"
      ]
    };
  },
  computed: {},
  methods: {
    consoleLog() {
      console.log(this.testValue);
    },
    emitEmpty() {
      this.$refs.userNameInput.focus();
      this.userName = "";
    },
    formatNumber,
    onChange(e) {
      const { value } = e.target;
      const reg = /^-?[0-9]*(\.[0-9]*)?$/;
      if ((!isNaN(value) && reg.test(value)) || value === "" || value === "-") {
        this.value = value;
      }
    },
    // '.' at the end or only '-' in the input box.
    onBlur() {
      const { value, onChange } = this;
      // let valueTemp = value;
      if (value.charAt(value.length - 1) === "." || value === "-") {
        onChange({ value: value.slice(0, -1) });
      }
    },
    changeInputNum(value) {
      this.inputNum = value;
    }
  }
};
</script>

<style scoped>
.numeric-input .ant-tooltip-inner {
  min-width: 32px;
  min-height: 37px;
}

.numeric-input .numeric-input-title {
  font-size: 14px;
}

div.textarea {
  position: relative;
}
div.textarea .text-count {
  position: absolute;
  right: 0.4rem;
  bottom: 0.4rem;
}
</style>
