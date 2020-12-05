<template>
  <aside class="layout-setting">
    <a-button type="primary" icon="setting" @click="showDrawer" />
    <a-drawer
      title="Basic Drawer"
      placement="right"
      :closable="false"
      :visible="visible"
      width="300px"
      :after-visible-change="afterVisibleChange"
      @close="onClose"
    >
      <p>布局设置</p>
      <!-- :model="layoutSetting" -->
      <a-form-model
        v-model="layoutSetting"
        :layout="formOption.layout"
        v-bind="formItemLayout"
      >
        <a-form-model-item>
          <a-checkbox
            :checked="layoutSetting.showSider"
            @change="changeLayoutSetting('showSider')"
          >
            展示布局侧边栏
          </a-checkbox>
        </a-form-model-item>
        <a-form-model-item>
          <a-checkbox
            :checked="layoutSetting.foldSider"
            @change="changeLayoutSetting('foldSider')"
          >
            展开布局侧边栏
          </a-checkbox>
        </a-form-model-item>
        <a-form-model-item>
          <a-checkbox
            :checked="layoutSetting.floatSider"
            @change="changeLayoutSetting('floatSider')"
          >
            悬浮布局侧边栏
          </a-checkbox>
        </a-form-model-item>
        <a-form-model-item>
          <a-checkbox
            :checked="layoutSetting.showSiderLogo"
            @change="changeLayoutSetting('showSiderLogo')"
          >
            展示布局侧边栏Logo
          </a-checkbox>
        </a-form-model-item>
        <a-form-model-item>
          <a-checkbox
            :checked="layoutSetting.showMainBreadcrumbBar"
            @change="changeLayoutSetting('showMainBreadcrumbBar')"
          >
            展示布局面包屑栏
          </a-checkbox>
        </a-form-model-item>
        <a-form-model-item>
          <a-checkbox
            :checked="layoutSetting.showTagBar"
            @change="changeLayoutSetting('showTagBar')"
          >
            展示布局标签栏
          </a-checkbox>
        </a-form-model-item>
      </a-form-model>

      <p>主题设置</p>
      <!-- :model="layoutSetting" -->
      <!-- <a-form-model
        v-model="themeSetting"
        :layout="formOption.layout"
        v-bind="formItemLayout"
      > -->
      <a-form-model-item>
        <!-- style="width: 120px" -->
        <a-select
          :default-name="themeSettingVar"
          @change="changeThemeSettingVar"
        >
          <a-select-option
            v-for="varName in themeSettingVars"
            :key="varName"
            :value="varName"
          >
            {{ varName }}
          </a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item>
        <color-picker
          :colors.sync="colors"
          @input="inputThemeSetting"
        ></color-picker>
        <a-button @click="resetThemeSetting">重置主题</a-button>
      </a-form-model-item>
      <!-- </a-form-model> -->
    </a-drawer>
  </aside>
</template>

<script>
import { mapMutations } from "vuex";
import { FORM_MIXIN } from "@mixins/form-mixin";
import { ADMIN_MUTATION_TYPE } from "../store/mutation-type";
import ColorPicker from "../components/ColorPicker";
import { msg } from "../utils/antd-utils";

export default {
  name: "LayoutSetting",
  mixins: [FORM_MIXIN],
  components: { ColorPicker },
  data() {
    return {
      /* formOption: {
        // VERTICAL HORIZONTAL INLINE
        layout: VERTICAL
      }, */
      visible: false,
      themeSettingVar: ""
    };
  },
  computed: {
    layoutSetting: {
      // getter
      get: function() {
        // Do not mutate vuex store state outside mutation handlers
        return Object.assign({}, this.$store.state.admin.layoutSetting);
      },
      // setter
      set: function(newValue) {
        this[ADMIN_MUTATION_TYPE.SET_LAYOUT_SETTING](newValue);
      }
    },
    themeSetting: {
      // getter
      get: function() {
        // Do not mutate vuex store state outside mutation handlers
        return Object.assign({}, this.$store.state.admin.themeSetting);
      },
      // setter
      set: function(newValue) {
        this[ADMIN_MUTATION_TYPE.SET_THEME_SETTING](newValue);
      }
    },
    themeSettingVars() {
      return Object.keys(this.themeSetting || {});
    },
    colors() {
      let themeSettingVar = this.themeSettingVar;
      if (themeSettingVar) {
        return this.themeSetting[themeSettingVar];
      }
      return "#ffffff";
    }
  },
  methods: {
    ...mapMutations("admin", [
      // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
      ADMIN_MUTATION_TYPE.SET_LAYOUT_SETTING,
      ADMIN_MUTATION_TYPE.SET_THEME_SETTING
    ]),
    changeThemeSettingVar(varName) {
      debugger;
      this.themeSettingVar = varName;
    },
    resetThemeSetting() {
      window.less &&
        window.less
          .modifyVars({
            "@heading-color": "black",
            "@layout-header-background": "white"
          })
          .then(() => {
            msg({ code: 1, msg: "重置主题设置" });
          })
          .catch(() => {
            msg({ code: -1, msg: "重置主题设置" });
          });
    },
    inputThemeSetting(colors) {
      debugger;
      console.log(JSON.stringify(colors));
      let themeSettingVar = this.themeSettingVar;
      if (themeSettingVar) {
        let themeSetting = { [themeSettingVar]: colors.hex };
        this.themeSetting = Object.assign(this.themeSetting, themeSetting);
        this.themeSettingVars.forEach(varName => {
          let themeSettingColor = this.themeSetting[varName];
          if (themeSettingColor) {
            themeSetting[varName] = themeSettingColor;
          }
        });
        window.less && window.less.modifyVars(themeSetting);
      }
    },
    afterVisibleChange() {
      /* console.log("visible", val); */
    },
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
    changeLayoutSetting(prop) {
      let value = this.layoutSetting[prop];
      this.layoutSetting = Object.assign(this.layoutSetting, {
        [prop]: !value
      });
    }
  },
  mounted() {
    // this.themeSettingVar = this.themeSettingVars[0];
    // let themeSetting = {};
    // this.themeSettingVars.forEach(varName => {
    //   let themeSettingColor = this.themeSetting[varName];
    //   if (themeSettingColor) {
    //     themeSetting[varName] = themeSettingColor;
    //   }
    // });
    // window.less && window.less.modifyVars(themeSetting);
  }
};
</script>

<style lang="less" src="../styles/layout.less"></style>

<style lang="less">
/* .layout-setting {
  position: absolute;
  top: 30%;
  right: 0;
  color: @text-color;
} */
</style>
