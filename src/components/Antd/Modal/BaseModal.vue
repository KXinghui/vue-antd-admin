<template>
  <a-modal
    :bodyStyle="{
      height: modalHeight
    }"
    v-model="modalVisible"
    :title="modalTitle"
    :centered="modalCentered"
    ok-text="确认"
    cancel-text="取消"
    v-bind="$props"
  >
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
          class="modal-btn"
          v-show="anchors"
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
    >
      <div :ref="modalRef"><slot></slot></div>
    </bs-core>
    <template slot="footer">
      <slot name="footer"></slot>
    </template>
  </a-modal>
</template>

<script>
import BsCore from "../../BetterScroll/BsCore.vue";
export default {
  components: {
    BsCore
  },
  name: "BaseModal",
  data() {
    return {
      modalRef: `base-modal-${this._uid}`,
      anchorContainer: () =>
        this.$refs[this.modalRef] || this.$refs[this.modalRef].$el,
      showAnchor: false,
      modalHeight: 0
    };
  },
  props: {
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
    }
  },
  watch: {
    modalHeightPercent() {
      this.resizeModalHeight();
    }
  },
  mounted() {
    this.resizeModalHeight();
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
</style>
