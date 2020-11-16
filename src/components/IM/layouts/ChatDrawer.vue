<template>
  <a-drawer
    class="chat-drawer-wrap"
    :width="width"
    :title="title"
    :placement="placement"
    :closable="false"
    :visible="visible"
    @close="onClose"
    :wrapClassName="wrapClassName"
    :mask="mask"
    v-bind="$props"
  >
    <slot></slot>
  </a-drawer>
</template>

<script>
export default {
  name: "ChatDrawer",
  data() {
    return {};
  },
  props: {
    wrapClassName: {
      type: [String],
      default: "left",
      required: false
    },
    width: {
      type: [String],
      default: "",
      required: false
    },
    title: {
      type: [String],
      default: "",
      required: false
    },
    visible: {
      type: [Boolean],
      default: true,
      required: false
    },
    mask: {
      type: [Boolean],
      default: true,
      required: false
    },
    placement: {
      type: [String],
      default: "left",
      required: false,
      validator(value) {
        return ["left", "right"].includes(value);
      }
    },
    defaultBack: {
      type: [Boolean],
      default: true,
      required: false
    },
    backRoute: {
      type: [Object],
      default() {
        return null;
      },
      required: false
    }
  },
  methods: {
    onClose() {
      this.$emit("update:visible", !this.visible);
    },
    changeChatRecord(e) {
      if (!e || !e.target) {
        return;
      }
      this.$emit("changeChatRecord", e.target.value, e.target.checked);
    },
    handleButtonClick(e) {
      console.log("click left button", e);
    },
    handleMenuClick(e) {
      console.log("click", e);
    }
  },
  mounted() {}
};
</script>

<style>
/* .chat-drawer-wrap {
  height: 3.25rem;
  max-height: 3.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #e1dfde;
  background-color: white;
  position: fixed;
  width: 100%;
  top: 0;
  padding: 0 1rem;
} */
.chat-drawer-left,
.chat-drawer-middle,
.chat-drawer-right {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  border: 1px solid red;
}

.chat-drawer-left {
  justify-content: flex-start;
}
.chat-drawer-middle {
  justify-content: space-between;
}
.chat-drawer-right {
  justify-content: flex-end;
  align-content: flex-end;
  /* flex-direction: row-reverse; */
}
.icon {
  cursor: pointer;
}
.chat-drawer-left .icon {
  padding: 0rem 1.2rem 0rem 0;
}
.chat-drawer-right .icon {
  padding-right: 1.2rem;
}
.chat-drawer-right .icon:last-of-type {
  padding-right: 0;
}
</style>
