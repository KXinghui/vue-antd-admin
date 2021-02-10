<template>
  <div class="icon-selector-wrap">
    <div
      class="icon-selector-show-wrap"
      v-if="selectedIcons && selectedIcons.length > 0"
    >
      <icon
        size="5"
        v-for="selectedIcon in selectedIcons"
        :icon="selectedIcon"
        :key="selectedIcon"
        @click="clickModal"
      ></icon>
    </div>
    <div class="icon-selector-show-wrap" v-else>
      <icon icon="Antd_plus" @click="clickModal"></icon>
    </div>
    <base-modal
      :modalVisible.sync="modalVisible"
      :modalTitle="modalTitle"
      :modalLoading.sync="modalLoading"
    >
      <div
        class="provider-wrap"
        v-for="provider in icons"
        :key="provider.provider"
      >
        <h2 v-text="provider.provider"></h2>
        <div class="provider-module-wrap" v-if="provider.modules">
          <div
            class="module-wrap"
            v-for="module in provider.modules"
            :key="module.name"
          >
            <h3 v-text="module.name"></h3>
            <div class="icon-wrap">
              <div
                class="isSelect(provider.provider, icon) ?'selected-icon-wrap-div':''"
                v-for="icon in module.icon"
                :key="composeIcon(provider.provider, icon)"
                @click="selectIcon(provider.provider, icon)"
              >
                <icon
                  class="icon"
                  :icon="composeIcon(provider.provider, icon)"
                ></icon>
                <span class="icon-name" v-text="icon"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="provider-icon-wrap" v-else>
          <div class="icon-wrap">
            <div
              class="isSelect(provider.provider, icon)?'selected-icon-wrap-div':''"
              v-for="icon in provider.icon"
              :key="composeIcon(provider.provider, icon)"
              @click="selectIcon(provider.provider, icon)"
            >
              <icon :icon="composeIcon(provider.provider, icon)"></icon>
              <span v-text="icon"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="provider-wrap">
        <h2>Link</h2>
        <a-input-search
          v-model="iconUrl"
          placeholder="输入图标链接"
          @search="inputIcon"
        >
          <a-icon slot="prefix" type="picture" />
          <a-button slot="enterButton"><a-icon type="link" />确定</a-button>
        </a-input-search>
      </div>
      <!-- <template slot="footer"> asdfasdf</template> -->
    </base-modal>
  </div>
</template>

<script>
// https://blog.csdn.net/wildye/article/details/89816963
import BaseModal from "../Antd/Modal/BaseModal";
// import Icon from "./index";
import icons from "./icon";

export default {
  name: "",
  components: {
    // Icon,
    BaseModal
  },
  data() {
    return {
      modalVisible: false,
      modalTitle: "选择图标 Select Icon",
      modalLoading: false,
      iconUrl: ""
    };
  },
  props: {
    selectNum: {
      type: [Number, String],
      default: 1,
      required: false
    },
    icons: {
      type: [Array],
      default: function() {
        return icons;
      },
      required: false
    },
    selectedIcons: {
      type: [Array],
      default: function() {
        return [];
      },
      required: false
    }
  },
  computed: {
    /* isSelect(provider, icon) {
      let selectIcon = this.composeIcon(provider, icon);
      return this.selectedIcons && this.selectedIcons.includes(selectIcon);
    } */
  },
  mounted() {
    console.log(icons);
  },
  methods: {
    isSelect(provider, icon) {
      let selectIcon = this.composeIcon(provider, icon);
      return this.selectedIcons && this.selectedIcons.includes(selectIcon);
    },
    clickModal() {
      this.modalVisible = true;
    },
    inputIcon() {
      let iconUrl = this.iconUrl;
      if (!iconUrl) {
        return;
      }
      debugger;
      this.selectIcon("Link", iconUrl);
    },
    composeIcon(provider, icon) {
      return `${provider}_${icon}`;
    },
    selectIcon(provider, icon) {
      debugger;
      let selectIcon = this.composeIcon(provider, icon);
      let selectedIcons = [...this.selectedIcons];
      let index = selectedIcons.indexOf(selectIcon);
      let isInclude = index != -1;
      if (isInclude) {
        selectedIcons.splice(index, 1);
      } else {
        if (parseInt(this.selectNum) <= selectedIcons.length) {
          return;
        }
        selectedIcons.push(selectIcon);
      }
      this.$emit("update:selectedIcons", selectedIcons);
    },
    copyIcon(provider, icon) {
      return `<icon icon="${this.composeIcon(provider, icon)}" />`;
    }
  }
};
</script>

<style>
.icon-selector-wrap {
  /* border: 1px solid red;
  height: 500px; */
}

.icon-selector-show-wrap {
  border: 1px dashed #888888;
  min-width: 2rem;
  min-height: 2rem;
  display: flex;
  /* justify-content: center; */
  align-items: center;
}
.module-wrap + .module-wrap,
.provider-wrap + .provider-wrap {
  margin-top: 1.2rem;
}

.icon-wrap {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.icon-wrap > div {
  /* border: 1px solid red; */
  border: 1px solid #888888;
  width: 7.5rem;
  height: 7rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
}
.icon-wrap > div:hover {
  box-shadow: 0 0 10px 0 #888888;
  background-color: #e6e6e6;
  transition: 0.3s;
}
.selected-icon-wrap-div {
  border: 1px solid red;
}
</style>
