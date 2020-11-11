<template>
  <component
    :class="['icon', 'anticon']"
    :is="cmptName"
    :style="{ color: color }"
    :[iconProp]="realIcon"
    v-on="$listeners"
    v-bind="$props"
  />
  <!-- <i class="icon">
    <icon-svg
      v-if="realProvider === 'IconFont'"
      :icon-class="realIcon"
    ></icon-svg>
    <a-icon
      v-else-if="realProvider === 'Antd'"
      :type="realIcon"
      v-bind="$attrs"
      v-on="$listeners"
    /> -->
  <!-- :theme="antdOption.theme"
      :two-tone-color="antdOption.twoToneColor" -->
  <!-- <img v-else-if="realProvider === 'Link'" :src="realIcon" />
  </i> -->
</template>

<script>
const PROVIDERCMPT_MAP = new Map();
PROVIDERCMPT_MAP.set("Antd", "a-icon");
PROVIDERCMPT_MAP.set("IconFont", "icon-svg");
PROVIDERCMPT_MAP.set("FontAwesome", "font-awssome");
PROVIDERCMPT_MAP.set("Link", "img");

const PROVIDERS = ["Antd", "IconFont", "FontAwesome", "Link"];

export default {
  name: "Icon",
  props: {
    theme: {
      type: [String],
      default: "outlined",
      required: false
    },
    twoToneColor: {
      type: [String],
      default: "",
      required: false
    },
    color: {
      type: [String],
      default: "",
      required: false
    },
    /* iconProps: {
      type: [Object],
      default: function() {
        return {
          theme: "twoTone",
          twoToneColor: "#eb2f96"
        };
      },
      required: false
    }, */
    provider: {
      type: [String],
      default: "",
      required: false,
      validator: function(value) {
        return !value || PROVIDERS.indexOf(value) !== -1;
      }
    },
    icon: {
      type: [String],
      required: true
    },
    antdOption: {
      type: [Object],
      default: function() {
        return {
          theme: "",
          twoToneColor: ""
        };
      },
      required: false
    }
  },
  computed: {
    // 提供者 PROVIDERS[provider_icon]
    realProvider() {
      let provider = this.provider || this.icon.split("_")[0];
      if (!provider) {
        console.error(`IconProvider Is Not Empty`);
      }
      let isSupport = provider && PROVIDERS.indexOf(provider) != -1;
      if (!isSupport) {
        console.error(`IconProvider ${provider} Is Not Support`);
      }
      return isSupport ? provider : "";
    },
    cmptName() {
      return PROVIDERCMPT_MAP.get(this.realProvider);
    },
    iconProp() {
      let iconProp = "";
      switch (this.realProvider) {
        case "Antd":
          iconProp = "type";
          break;
        case "IconFont":
          iconProp = "icon-class";
          break;
        case "FontAwesome":
          iconProp = "icon-class";
          break;
        case "Link":
          iconProp = "src";
          break;
        default:
          break;
      }
      return iconProp;
    },
    realIcon() {
      return this.icon.substr(this.icon.indexOf("_") + 1);
    }
  }
};
</script>

<style>
.icon {
  width: 1.1rem;
  height: 1.1rem;
}
.icon svg {
  color: inherit;
}
</style>
