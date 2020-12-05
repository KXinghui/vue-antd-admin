<template>
  <div class="note-item-wrap"></div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { ADMIN_MUTATION_TYPE } from "../../../../store/mutation-type";
import { confirm } from "../../../../utils/antd-utils";
import noteApi from "../../../../api/pvtnote/Note";

export default {
  name: "NoteItem",
  data() {
    return {};
  },
  props: {
    note: {
      type: [Object],
      default() {
        return {};
      },
      require: true
    }
  },
  computed: {
    ...mapState({
      // showDrawer: state => state.admin.layoutSetting.showDrawer,
      identity: state => state.identity.identity
    }),
    isTopOnBatch() {
      let isTopOnBatch = true;
      if (this.management.batch) {
        let topNum = 0;
        let selectedNoteIds = this.selectedNoteIds;
        this.notes.forEach(note => {
          if (selectedNoteIds.inclued(note.id) && note.isTop == 1) {
            topNum++;
          }
        });
        let selectedNoteLen = selectedNoteIds.length;
        if (selectedNoteLen != 0 && topNum == selectedNoteLen) {
          isTopOnBatch = false;
        }
      }
      return isTopOnBatch;
    }
  },
  methods: {
    getSelectedNotes() {
      let selectedNotes = [];
      let selectedNoteIds = this.selectedNoteIds;
      this.notes.forEach(note => {
        if (selectedNoteIds.inclued(note.id)) {
          selectedNotes.push(Object.assign({}, note));
        }
      });
      return selectedNotes;
    },
    ...mapMutations("admin", [
      // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
      ADMIN_MUTATION_TYPE.SHOW_DRAWER
    ]),
    closeDrawerBar() {
      let isBatch = this.management.batch;
      if (isBatch) {
        this.management.batch = !this.management.batch;
        this.hideDrawerBar();
      }
    },
    openBatchDrawerBar() {
      this.hideDrawerBar();
      this.management.batch = true;
      this.operation.currentOp = "";
      this.showDrawerBar();
    },
    listNotes() {
      if (this.noteGroupId) {
        noteApi.listByNoteGroup(this.noteGroupId).then(res => {
          this.notes = res.data;
        });
      } else {
        noteApi.listAll().then(res => {
          this.notes = res.data;
        });
      }
    },
    moveNote() {
      this.operation.currentOp = "batch-move";
      this.hideDrawerBar();
      this.showBottomDrawerBar("80%");
    },
    topNote() {
      if (this.isTopOnBatch) {
        // 置顶
      } else {
        // 取消置顶
      }
      let isTopOnBatch = this.isTopOnBatch;
      let title = isTopOnBatch ? "置顶" : "取消置顶";
      confirm({
        title,
        // content: () => <div style="color:red;">确定要title所选便签？</div>,
        content: function(h) {
          // h == createElement
          return h("div", {
            style: { color: "red" },
            text: `确定要${title}所选便签？`
          });
        },
        cancelText: "取消",
        okText: title,
        // okType: "primary",
        onOk() {
          console.log("OK");
        },
        onCancel() {}
      });
    },
    deleteNote() {
      confirm({
        title: "删除便签",
        content: () => <div style="color:red;">确定要删除所选便签？</div>,
        cancelText: "取消",
        okText: "删除",
        okType: "danger",
        onOk() {
          console.log("OK");
        },
        onCancel() {}
      });
    }
  },
  mounted() {
    this.listNotes();
  }
};
</script>

<style>
.note-item-wrap {
  height: 100%;
  background-color: #f5f5f5;
}
.selected-num {
  font-size: 1rem;
  padding: 0 0.3rem;
}
</style>
