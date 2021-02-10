<template>
  <a-modal
    :bodyStyle="{
      height: modalHeight
    }"
    v-model="visible"
    :centered="modalCentered"
    ok-text="确认"
    cancel-text="取消"
    v-bind="$props"
    @cancel="cancelModal"
  >
    <a-spin class="modal-body" :spinning="modalLoading">
      <!-- @ok="hideModal" -->
      <a-anchor
        v-show="showAnchor"
        :affix="true"
        @click="handleAnchorClick"
        @change="handleAnchorChange"
        style="position: absolute; z-index: 10; left: 5rem;"
      >
        <!-- :getContainer="anchorContainer" -->
        <a-anchor-link
          v-for="anchor in anchors"
          :key="anchor.href"
          :href="anchor.href"
          :title="anchor.title"
        />
      </a-anchor>
      <div>
        <span class="modal-btn-span">
          <icon
            v-show="showAnchor"
            class="modal-btn"
            :icon="showAnchor ? 'Antd_close' : 'IconFont_anchor'"
            @click="toggleAnchor"
          ></icon>
        </span>
      </div>

      <bs-core
        :options="{
          nestedScroll: true,
          bounce: {
            top: false,
            bottom: false
          }
        }"
        :isRefresh.sync="modalRefresh"
      >
        <div class="modal-body" :ref="modalRef"><slot></slot></div>
      </bs-core>
    </a-spin>
    <template slot="title">
      <div>
        <slot name="title">{{ modalTitle }}</slot>
      </div>
    </template>
    <template slot="footer">
      <a-spin :spinning="modalLoading">
        <slot name="footer"></slot>
      </a-spin>
    </template>
  </a-modal>
</template>

<script>
import BsCore from "../../BetterScroll/BsCore.vue";
// import FullScreen from "../../FullScreen/index.vue";

export default {
  components: {
    BsCore
    // FullScreen
  },
  name: "BaseModal",
  data() {
    return {
      modalRef: `base-modal-${this._uid}`,
      anchorContainer: () =>
        this.$refs[this.modalRef] || this.$refs[this.modalRef].$el,
      showAnchor: false,
      modalHeight: 0,
      visible: false
    };
  },
  props: {
    modalRefresh: {
      type: [Boolean],
      default: false,
      require: false
    },
    modalLoading: {
      type: [Boolean],
      default: false,
      require: false
    },
    modalHeightPercent: {
      type: [String],
      default: "80%",
      require: false
    },
    /* anchorDirection: {
      type: [String],
      default() {
        return "left";
      },
      require: false,
      validator(value) {
        return ["left", "right"].includes(value);
      }
    }, */
    anchors: {
      type: [Array],
      default() {
        return [];
      },
      require: false
    },
    modalTitle: {
      type: [String],
      default: "",
      require: false
    },
    modalVisible: {
      type: [Boolean],
      default: false,
      require: false
    },
    modalCentered: {
      type: [Boolean],
      default: true,
      require: false
    },
    destroyOnClose: {
      type: [Boolean],
      default: false,
      require: false
    }
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    handleAnchorClick(e, link) {
      e.preventDefault();
    },
    handleAnchorChange(link) {
      this.$emit("changeAnchor", link);
    },
    toggleAnchor() {
      this.showAnchor = !this.showAnchor;
    },
    // 计算Modal高度
    resizeModalHeight() {
      // 网页可见区域高 [https://www.cnblogs.com/geektimi/p/5748664.html]
      let windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      this.modalHeight =
        windowHeight * parseFloat(this.modalHeightPercent) * 0.01 + "px";
    },
    cancelModal() {
      this.$emit("update:modalVisible", false);
    }
  },
  watch: {
    modalHeightPercent() {
      this.resizeModalHeight();
    },
    modalVisible() {
      this.visible = this.modalVisible;
    }
  },
  mounted() {
    this.resizeModalHeight();
    this.visible = this.modalVisible;
    window.addEventListener("resize", this.resizeModalHeight);
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeModalHeight);
  }
};
</script>

<style>
.modal-btn-span {
  display: block;
  width: 56px;
  height: 56px;
  font-size: 16px;
  font-style: normal;
  line-height: 56px;
  text-align: center;
  text-transform: none;
  text-rendering: auto;
  position: absolute;
  top: 0;
  left: 0;
}
.modal-btn {
  padding: 0;
  color: rgba(0, 0, 0, 0.45);
  font-weight: 700;
  line-height: 1;
  text-decoration: none;
  background: transparent;
  border: 0;
  outline: 0;
  cursor: pointer;
  transition: color 0.3s;
}
.modal-body,
.modal-body .ant-spin-container {
  width: 100%;
  height: 100%;
}
</style>
