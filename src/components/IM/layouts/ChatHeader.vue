<template>
  <div class="chat-header-wrap">
    <div class="chat-header-left">
      <div class="chat-header-icon">
        <div class="chat-header-back-icon" @click="clickBackIcon">
          <slot name="backIcon"
            ><icon v-if="showBackIcon" icon="Antd_left"
          /></slot>
        </div>
        <div
          v-if="!showBackIcon && showDrawerIcon"
          class="chat-header-drawer-icon"
          @click="clickDrawerIcon"
        >
          <slot name="drawerIcon"
            ><icon v-if="!showBackIcon && showDrawerIcon" icon="Antd_left"
          /></slot>
        </div>
      </div>
      <slot name="left"><span v-text="title"></span></slot>
    </div>
    <div class="chat-header-middle">
      <slot name="middle"></slot>
    </div>
    <div class="chat-header-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatHeader",
  data() {
    return {
      chatRecordStyle: {},
      overlayStyle: {
        /* "max-width": "60%" */
      },
      visible: true
    };
  },
  props: {
    showBackIcon: {
      type: [Boolean],
      default: false,
      required: false
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
    },
    title: {
      type: [String],
      default: "",
      required: false
    },
    showDrawerIcon: {
      type: [Boolean],
      default: false,
      required: false
    },
    defaultDrawer: {
      type: [Boolean],
      default: true,
      required: false
    }
  },
  methods: {
    clickBackIcon() {
      if (this.defaultBack) {
        this.$router.go(-1);
      } else {
        let backRoute = this.backRoute;
        if (backRoute) {
          this.$router.push(backRoute);
        } else {
          this.$emit("back");
        }
      }
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
.chat-header-wrap {
  height: 3.25rem;
  max-height: 3.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* background-color: #e1dfde; */
  background-color: white;
  position: fixed;
  width: 100%;
  top: 0;
  padding: 0 1rem;
  /* #e1dfde */
  /* padding: 2rem 0.5rem; */
}
.chat-header-left,
.chat-header-middle,
.chat-header-right {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  border: 1px solid red;
}

.chat-header-left {
  justify-content: flex-start;
}

.chat-header-icon {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.chat-header-middle {
  justify-content: space-between;
}
.chat-header-right {
  justify-content: flex-end;
  align-content: flex-end;
  /* flex-direction: row-reverse; */
}
.icon {
  cursor: pointer;
}
.chat-header-left .icon {
  padding: 0rem 1.2rem 0rem 0;
}
.chat-header-right .icon {
  padding-right: 1.2rem;
}
.chat-header-right .icon:last-of-type {
  padding-right: 0;
}
</style>
