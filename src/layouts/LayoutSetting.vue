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
    </a-drawer>
  </aside>
</template>

<script>
import { mapMutations } from "vuex";
import { FORM_MIXIN } from "@mixins/form-mixin";
import { ADMIN_MUTATION_TYPE } from "../store/mutation-type";

export default {
  name: "LayoutSetting",
  mixins: [FORM_MIXIN],
  data() {
    return {
      /* formOption: {
        // VERTICAL HORIZONTAL INLINE
        layout: VERTICAL
      }, */
      visible: false
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
    }
  },
  methods: {
    ...mapMutations("admin", [
      // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
      ADMIN_MUTATION_TYPE.SET_LAYOUT_SETTING
    ]),
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
  }
};
</script>

<style lang="less">
.layout-setting {
  position: absolute;
  top: 30%;
  right: 0;
}
</style>
