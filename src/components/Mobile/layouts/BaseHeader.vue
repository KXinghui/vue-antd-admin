<template>
  <div class="base-header-wrap">
    <div class="base-header-left">
      <div class="base-header-icon">
        <div class="base-header-back-icon" @click="clickBackIcon">
          <slot name="backIcon"
            ><icon v-if="showBackIcon" icon="Antd_left"
          /></slot>
        </div>
        <div
          v-if="!showBackIcon && showDrawerIcon"
          class="base-header-drawer-icon"
          @click="clickDrawerIcon"
        >
          <slot name="drawerIcon"
            ><icon v-if="!showBackIcon && showDrawerIcon" icon="Antd_menu"
          /></slot>
        </div>
      </div>
      <slot name="left"><span v-text="title"></span></slot>
    </div>
    <div class="base-header-middle">
      <slot name="middle"></slot>
    </div>
    <div class="base-header-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { ADMIN_MUTATION_TYPE } from "../../../store/mutation-type";

export default {
  name: "BaseHeader",
  data() {
    return {
      chatRecordStyle: {},
      overlayStyle: {
        /* "max-width": "60%" */
      }
    };
  },
  computed: {
    visible: {
      // getter
      get: function() {
        // Do not mutate vuex store state outside mutation handlers
        return this.$store.state.admin.layoutSetting.showDrawer;
      },
      // setter
      set: function(newValue) {
        this[ADMIN_MUTATION_TYPE.SHOW_DRAWER](newValue);
      }
    }
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
    ...mapMutations("admin", [
      // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
      ADMIN_MUTATION_TYPE.SHOW_DRAWER
    ]),
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
    clickDrawerIcon() {
      if (this.defaultDrawer) {
        this.visible = !this.visible;
      } else {
        this.$emit("drawer", !this.visible);
      }
    },
    changeBaseRecord(e) {
      if (!e || !e.target) {
        return;
      }
      this.$emit("changeBaseRecord", e.target.value, e.target.checked);
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
.base-header-wrap {
  height: 7.25%;
  max-height: 7.25%;
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
.base-header-left,
.base-header-middle,
.base-header-right {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  /* border: 1px solid red; */
}

.base-header-left {
  justify-content: flex-start;
}

.base-header-icon {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.base-header-middle {
  justify-content: space-between;
}
.base-header-right {
  justify-content: flex-end;
  align-content: flex-end;
  /* flex-direction: row-reverse; */
}
.icon {
  cursor: pointer;
}
.base-header-left .icon {
  /* padding: 0 1.2rem 0 0; */
  margin-right: 0.3rem;
}
.base-header-right .icon {
  /* padding-right: 1.2rem; */
  /* padding-right: 1.2rem; */
  /* padding: 0 1.2rem 0 1.2rem; */
  margin-left: 0.3rem;
}
/* .base-header-right > .icon:last-of-type {
  padding-right: 0;
} */
</style>
