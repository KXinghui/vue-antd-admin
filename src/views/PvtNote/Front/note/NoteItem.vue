<template>
  <a-skeleton
    class="note-item-skeleton"
    :loading="skeleton"
    active
    :title="true"
    :avatar="{ size: 60, shape: 'square' }"
    :paragraph="{ rows: 2 }"
  >
    <div class="note-item-wrap" @click="clickNote(note.id)">
      <div class="note-item-left">
        <div v-show="note.coverUrl" class="note-item-cover">
          <img class="note-cover-img" v-lazy="note.coverUrl" />
        </div>
        <div class="note-item-info">
          <span class="note-title" @click="pushRoute">{{ note.title }}</span>
          <span class="note-sub-title">{{ note.subTitle }}</span>
          <span class="note-date">{{
            note.updateDate || note.createDate
          }}</span>
        </div>
      </div>
      <div class="note-item-right">
        <div v-show="isSelect" class="note-op">
          <!-- @change="selectNote" 冒泡 -->
          <a-checkbox :value="selectValue" :checked="isSelected"></a-checkbox>
        </div>
      </div>
      <div v-show="note.isTop == 1" class="tag-bottom note-top-tag"></div>
    </div>
  </a-skeleton>
</template>

<script>
import { pushRoute } from "../../../../utils/router-utils";

export default {
  name: "NoteItem",
  data() {
    return {};
  },
  props: {
    skeleton: {
      type: [Boolean],
      default: false,
      require: true
    },
    note: {
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
      return this.note[this.selectKey];
    }
  },
  methods: {
    pushRoute() {
      if (!this.isSelect) {
        pushRoute({ path: `/pvtnote/note/${this.note.id}` });
      }
    },
    clickNote(noteId) {
      if (!this.isSelect) {
        return;
      }
      this.$emit("selectNote", noteId, !this.isSelected);
    },
    selectNote(e) {
      if (!e || !e.target || !this.isSelect) {
        return;
      }
      this.$emit("selectNote", e.target.value, e.target.checked);
    }
  }
};
</script>

<style scoped>
.note-item-wrap {
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
  /* background-color: #e5e2e2 */
}
/* .note-item-skeleton + .note-item-skeleton, */
.note-item-wrap + .note-item-wrap {
  margin-top: 0.5rem;
}
.note-item-skeleton {
  display: flex;
  align-items: center;
  padding: 0 0.8rem;
  background-color: white;
  /* padding: 0 1rem; */
  /* margin: 0 0.6rem; */
}

.note-item-left {
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.note-item-cover {
  max-width: 30%;
  width: 5.5rem;
  height: 5.5rem;
  display: flex;
  align-items: center;
  padding-right: 0.8rem;
}
.note-cover-img {
  width: 100%;
  border-radius: 5%;
}
.note-item-info {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.note-title {
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
.note-sub-title {
  width: 100%;
  font-size: 1rem;
  font-weight: light;
  /* 强制不换行，省略号 */
  /* 强制不换行，省略号 */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.note-date {
  font-size: 0.8rem;
}
.note-item-right {
  width: 10%;
  display: flex;
  justify-content: flex-end;
}

.note-top-tag {
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
.note-top-tag:after {
  border-width: 0.4rem;
  left: 0;
  bottom: -0.45rem;
  /* border-top-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent; */
}
</style>
