<template>
  <a-skeleton
    class="base-item-skeleton"
    :loading="skeleton"
    active
    :title="true"
    :avatar="skeletonAvatar"
    :paragraph="skeletonParagraph"
    v-on="$listeners"
  >
    <div class="base-item-wrap" @click="clickItem">
      <div class="base-item-left">
        <slot name="left"></slot>
      </div>
      <div class="base-item-right">
        <slot name="right">
          <div v-show="isSelect" class="base-op">
            <!-- @change="selectItem" 冒泡 -->
            <a-checkbox :value="selectValue" :checked="isSelected"></a-checkbox>
          </div>
        </slot>
      </div>
      <div v-show="item.isTop == 1" class="tag-bottom base-top-tag"></div>
    </div>
  </a-skeleton>
</template>

<script>
export default {
  name: "BaseItem",
  data() {
    return {};
  },
  props: {
    skeleton: {
      type: [Boolean],
      default: false,
      require: true
    },
    skeletonAvatar: {
      type: [Object],
      default() {
        return {};
      },
      require: true
    },
    skeletonParagraph: {
      type: [Object],
      default() {
        return {};
      },
      require: true
    },
    item: {
      type: [Object],
      default() {
        return {};
      },
      require: true
    },
    isSelected: {
      type: [Boolean],
      default: false,
      require: true
    },
    isSelect: {
      type: [Boolean],
      default: false,
      require: true
    },
    selectKey: {
      type: [String],
      default: "id",
      require: true
    }
  },
  computed: {
    selectValue() {
      return this.item[this.selectKey];
    }
  },
  methods: {
    clickItem() {
      if (!this.isSelect) {
        return;
      }
      this.$emit("selectNote", this.selectValue, !this.isSelected);
    },
    selectItem(e) {
      if (!e || !e.target || !this.isSelect) {
        return;
      }
      this.$emit("select", e.target.value, e.target.checked);
    }
  }
};
</script>

<style scoped>
.base-item-wrap {
  position: relative;
  /* border: 1px solid red; */
  height: 100%;
  height: 7.5rem;
  /* background-color: #f5f5f5; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.8rem;
  background-color: white;
  /* background-color: #eeecec */
}
/* .base-item-skeleton + .base-item-skeleton, */
.base-item-wrap + .base-item-wrap {
  margin-top: 0.5rem;
}
.base-item-skeleton {
  display: flex;
  align-items: center;
  padding: 0 0.8rem;
  background-color: white;
  /* padding: 0 1rem; */
  /* margin: 0 0.6rem; */
}

.base-item-skeleton + .base-item-skeleton {
  margin-top: 0.5rem;
}

.base-item-left {
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.base-item-cover {
  max-width: 30%;
  width: 5.5rem;
  height: 5.5rem;
  display: flex;
  align-items: center;
  padding-right: 0.8rem;
}
.base-cover-img {
  width: 100%;
  border-radius: 5%;
}
.base-item-info {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.base-title {
  width: 100%;
  font-size: 1rem;
  font-weight: bold;
  /* 自动换行 */
  /* word-wrap: break-word;
  word-break: normal; */
  /* 强制不换行，省略号 */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.base-sub-title {
  width: 100%;
  font-size: 1rem;
  font-weight: light;
  /* 强制不换行，省略号 */
  /* 强制不换行，省略号 */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.base-date {
  font-size: 0.8rem;
}
.base-item-right {
  width: 10%;
  display: flex;
  justify-content: flex-end;
}

.base-top-tag {
  /* width: 118px;
  height: 28px; */
  width: 0.8rem;
  height: 0.9rem;
  background-size: contain;
  font-size: 1rem;
  font-weight: 400;
  top: 0;
  right: 1rem;
}
.base-top-tag:after {
  border-width: 0.4rem;
  left: 0;
  bottom: -0.45rem;
  /* border-top-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent; */
}
</style>
