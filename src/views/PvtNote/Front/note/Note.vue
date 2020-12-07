<template>
  <div class="note-wrap">
    <base-header showDrawerIcon>
      <div slot="left">便签</div>
      <div slot="right">
        <icon icon="IconFont_batch-op" @click="openBatchDrawerBar" />
        <icon icon="Antd_search" @click="pushRoute('/search')" />
        <!-- <a-popover placement="bottomRight">
          <template slot="content">
            <a-menu>
              <a-menu-item>
                <a href="javascript:;">1st menu item</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;">2nd menu item</a>
              </a-menu-item>
              <a-menu-item>
                <a href="javascript:;">3rd menu item</a>
              </a-menu-item>
            </a-menu>
          </template>
          <icon icon="Antd_plus-circle" />
        </a-popover> -->
      </div>
      <!-- <div slot="right"><a-icon type="ellipsis" /></div> -->
    </base-header>
    <base-main>
      <template slot="main">
        <note-item
          v-for="note in notes"
          :key="note.id"
          :note="note"
          @selectNote="selectNote"
          :isSelect="management.batch"
          :isSelected="selectedNoteIds.includes(note.id)"
        ></note-item>
      </template>
    </base-main>
    <base-tab-bar
      :base-tab-bars="baseTabBars"
      :active-item-key="activeKey"
      :color="color"
      :active-color="activeColor"
    ></base-tab-bar>
    <base-drawer
      width="300px"
      :visible.sync="showDrawer"
      :placement="drawerPlacement"
    >
      <identity-avatar
        :identity="identity"
        :avatarSize="58"
        avatarShape="square"
      ></identity-avatar>
      <div class="note-group-wrap">
        <bs-core :isRefresh.sync="isRefresh">
          <div
            v-for="noteGroup in noteGroups"
            :key="noteGroup.id"
            class="note-groupo-item"
          >
            <span v-text="noteGroup.name"></span>
            <span v-text="noteGroup.noteNum"></span>
          </div>
        </bs-core>
      </div>
    </base-drawer>
    <base-drawer-bar
      :topVisible.sync="topDrawerBarVisible"
      :bottomVisible.sync="bottomDrawerBarVisible"
      :topHeightPercent="topDrawerBarHeightPercent"
      :bottomHeightPercent="bottomDrawerBarHeightPercent"
    >
      <template slot="top">
        <template v-if="management.batch">
          <span @click="closeDrawerBar">取消</span>
          <span
            >已选择<span
              class="selected-num"
              v-text="selectedNoteIds.length"
            ></span
            >项</span
          >
          <span @click="selectAllNotes">全选</span>
        </template>
      </template>
      <template slot="bottom">
        <template v-if="management.batch && !operation.currentOp">
          <base-tab-bar-item
            :item="{
              index: 'move',
              icon: 'Antd_drag',
              text: '移动',
              route: false
            }"
            @click="moveNote"
          ></base-tab-bar-item>
          <base-tab-bar-item
            :item="{
              index: 'top',
              icon: isTopOnBatch
                ? 'Antd_vertical-align-top'
                : 'Antd_vertical-align-bottom',
              text: isTopOnBatch ? '置顶' : '取消置顶',
              route: false
            }"
            @click="topNote"
          ></base-tab-bar-item>
          <base-tab-bar-item
            :item="{
              index: 'delete',
              icon: 'Antd_delete',
              text: '删除',
              route: false
            }"
            @click="deleteNote"
          ></base-tab-bar-item>
        </template>
        <template v-if="operation.currentOp == 'batch-move'">
          <div class="operaton-btn-wrap"></div>
          <template v-if="operation.currentOp == 'batch-move'">
            移动便签
          </template>
        </template>
      </template>
    </base-drawer-bar>
  </div>
</template>

<script>
import { BASE_LAYOUT_MIXIN } from "../../../../components/Mobile/mixins/BaseLayout";
import { BASE_LAYOUT_DRAWER_BAR_MIXIN } from "../../../../components/Mobile/mixins/BaseLayoutDrawerBar";
import IdentityAvatar from "../../../../components/Identity/IdentityAvatar";
import { mapState } from "vuex";
import BaseTabBarItem from "../../../../components/Mobile/layouts/BaseTabBar/BaseTabBarItem.vue";
import { confirm } from "../../../../utils/antd-utils";
import noteApi from "../../../../api/pvtnote/Note";
// import noteGroupApi from "../../../../api/pvtnote/NoteGroup";
import NoteItem from "./NoteItem";
import BsCore from "../../../../components/BetterScroll/BsCore.vue";

export default {
  name: "Note",
  mixins: [BASE_LAYOUT_MIXIN, BASE_LAYOUT_DRAWER_BAR_MIXIN],
  components: { IdentityAvatar, BaseTabBarItem, NoteItem, BsCore },
  data() {
    return {
      msName: "pvtnote",
      activeTabIndex: 0,
      management: {
        batch: false
      },
      operation: {
        currentOp: "",
        batch: ["delete", "move", "top", "cancelTop", "selectAll"]
      },
      notes: [
        {
          id: "4545454545",
          coverUrl:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607250899938&di=4c6d8f23b19a1c1d12295e1b5a4c20d0&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Farchive%2Faa75a819d9cfd32e39d7965543780f803cd30fe8.jpg",
          title:
            "SpringBoot Vue 便签SpringBoot Vue 便签SpringBoot Vue 便签SpringBoot Vue 便签SpringBoot Vue 便签",
          subTitle:
            "SpringBoot Vue实现的私人便签SpringBootasdf  Vue实现的私人便签SpringBoot Vue实现的私人便签SpringBoot Vue实现的私人便签",
          createDate: "2020-12-10",
          isTop: 1
        },
        {
          id: "4545454545665",
          title: "SpringBoot Vue IM",
          subTitle: "SpringBoot Vue实现的私人IM",
          createDate: "2020-12-11",
          isTop: 0
        }
      ],
      selectedNoteIds: [],
      noteGroupId: "",
      isRefresh: false
    };
  },
  computed: {
    ...mapState({
      // showDrawer: state => state.admin.layoutSetting.showDrawer,
      identity: state => state.identity.identity,
      noteGroups: state => state.pvtnote.noteGroups
    }),
    isTopOnBatch() {
      let isTopOnBatch = true;
      if (this.management.batch) {
        let topNum = 0;
        let selectedNoteIds = this.selectedNoteIds;
        this.notes.forEach(note => {
          if (selectedNoteIds.includes(note.id) && note.isTop == 1) {
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
    selectNote(noteId, isSelect) {
      let selectedNoteIds = this.selectedNoteIds;
      if (isSelect && !selectedNoteIds.includes(noteId)) {
        selectedNoteIds.push(noteId);
      } else {
        selectedNoteIds.splice(selectedNoteIds.indexOf(noteId), 1);
      }
    },
    selectAllNotes() {
      this.notes.forEach(note => {
        let noteId = note.id;
        let selectedNoteIds = this.selectedNoteIds;
        if (!selectedNoteIds.includes(noteId)) {
          selectedNoteIds.push(noteId);
        }
      });
    },
    getSelectedNotes() {
      let selectedNotes = [];
      let selectedNoteIds = this.selectedNoteIds;
      this.notes.forEach(note => {
        if (selectedNoteIds.includes(note.id)) {
          selectedNotes.push(Object.assign({}, note));
        }
      });
      return selectedNotes;
    },
    closeDrawerBar() {
      let isBatch = this.management.batch;
      if (isBatch) {
        this.management.batch = !this.management.batch;
        this.selectedNoteIds = [];
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
        // noteApi.listByNoteGroup(this.noteGroupId).then(res => {
        //   this.notes = res.data;
        // });
      } else {
        // noteApi.listAll().then(res => {
        //   this.notes = res.data;
        // });
      }
    },
    sortNotes() {},
    moveNote() {
      this.operation.currentOp = "batch-move";
      this.hideDrawerBar();
      // noteGroupApi.listAll().then(res => {
      //   this.noteGroups = res.data;
      //   this.showBottomDrawerBar("80%");
      // });
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
          noteApi.topNotes(this.selectedNoteIds, isTopOnBatch);
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
    this.isRefresh = true;
    console.log(this.noteGroups);
  }
};
</script>

<style>
.note-wrap {
  height: 100%;
  background-color: #f5f5f5;
}

.ant-drawer-wrapper-body .ant-drawer-body {
  height: 90%;
}
.selected-num {
  font-size: 1rem;
  padding: 0 0.3rem;
}
.note-group-wrap {
  border: 1px solid red;
  height: 100%;
}
.note-groupo-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
}
</style>
