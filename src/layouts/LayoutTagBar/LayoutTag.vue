<template>
  <div
    :class="['layout-tag', isActivable ? 'layout-tag-active' : '']"
    @click.stop.prevent="activeTag"
  >
    <slot v-bind:tag="tag">
      <!-- <div> -->
      <div class="text">
        <slot name="icon"><icon v-if="tag.icon" :icon="tag.icon"></icon></slot
        >{{ tag.name }}
      </div>
      <!-- 容器和容器内元素定义事件，容器内元素不需要传播可使用@click.stop -->
      <span v-if="isClosable" @click.stop.prevent="deleteTag">
        <a-icon
          type="close"
          :style="{ fontSize: '.7rem', marginLeft: '.5rem' }"
        />
      </span>
      <!-- </div> -->
    </slot>
  </div>
</template>

<script>
import { pushRoute } from "@utils/router-utils";

export default {
  name: "LayoutTag",
  data() {
    return {};
  },
  props: {
    tag: {
      type: [Object],
      default: function() {
        return {
          name: "",
          route: {},
          path: "",
          meta: {
            isClosable: true
          }
        };
      },
      required: true
    },
    tagIndex: {
      type: [Number],
      // default: false,
      required: false
    },
    activeTagName: {
      type: [String],
      default: "",
      required: false
    },
    isActive: {
      type: [Boolean],
      // default: false,
      required: false
    }
  },
  computed: {
    isActivable() {
      if (this.isActive == undefined) {
        return (
          this.tag && this.activeTagName && this.tag.name == this.activeTagName
        );
      }
      return this.isActive;
    },
    isClosable() {
      let isClosable = true;
      if (this.tag.meta && this.tag.meta.isClosable != undefined) {
        isClosable = this.tag.meta.isClosable;
      }
      return isClosable;
    }
  },
  methods: {
    activeTag() {
      let tag = this.tag;
      if (tag.route) {
        pushRoute(tag.route);
      }
      if (!tag.route && tag.path) {
        pushRoute(tag.path);
      }
      this.$emit("activeTag", this.tagIndex);
    },
    deleteTag() {
      this.$emit("deleteTag", this.tagIndex);
    }
  }
};
</script>

<style lang="less" src="../../styles/layout.less"></style>
<style>
.layout-tag {
  padding: 0.1rem 0.6rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.layout-tag:hover {
  cursor: pointer;
}
.layout-tag + .layout-tag {
  margin-left: 0.5rem;
}
</style>
