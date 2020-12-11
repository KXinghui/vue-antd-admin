<template>
  <div class="note-wrap">
    <base-header showBackIcon>
      <div slot="left"></div>
      <div slot="middle">
        {{ note.title }}
      </div>
      <div slot="right">
        <icon icon="Antd_ellipsis" @click="openNormalDrawerBar" />
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
    <base-main :isScroll="false">
      <template slot="main">
        <quill-editor :html.sync="noteContent.html"></quill-editor>
      </template>
    </base-main>
    <base-tab-bar
      :base-tab-bars="baseTabBars"
      :active-item-key="activeKey"
      :visible="baseTabBarVisible"
      :centerVisible="baseTabBarCenterVisible"
      :color="color"
      :active-color="activeColor"
    ></base-tab-bar>
    <!-- <base-drawer
      class="note-drawer"
      width="300px"
      :visible.sync="showDrawer"
      :placement="drawerPlacement"
    >
      <identity-avatar
        :identity="identity"
        :avatarSize="58"
        avatarShape="square"
        @click="
          () => {
            pushRoute('/pvtnote/my');
          }
        "
      ></identity-avatar>
      <div class="note-group-wrap">
        <bs-core :isRefresh.sync="isRefresh">
          <div
            v-for="noteGroup in noteGroups"
            :key="noteGroup.id"
            class="note-group-item"
            @click="selectNoteGroup(noteGroup.id)"
          >
            <span v-text="noteGroup.name"></span>
            <span v-text="noteGroup.noteNum"></span>
          </div>
        </bs-core>
      </div>
    </base-drawer> -->
    <base-drawer-bar
      :topVisible.sync="topDrawerBarVisible"
      :bottomVisible.sync="bottomDrawerBarVisible"
      :topHeightPercent="topDrawerBarHeightPercent"
      :bottomHeightPercent="bottomDrawerBarHeightPercent"
    >
      <template slot="top">
        <template v-if="management.normal">
          <span @click="closeDrawerBar">取消</span>
          <!-- <span
            >已选择<span
              class="selected-num"
              v-text="selectedNoteIds.length"
            ></span
            >项</span
          >
          <span @click="selectAllNotes">{{
            isSelectedAll ? "反选" : "全选"
          }}</span> -->
          <span @click="saveNote">保存</span>
        </template>
      </template>
      <template slot="bottom">
        <template v-if="management.normal && !operation.currentOp">
          <base-tab-bar-item
            :item="{
              index: 'setting',
              icon: 'Antd_setting',
              text: '设置',
              route: false
            }"
            @click="openSetting"
          ></base-tab-bar-item>
          <base-tab-bar-item
            :item="{
              index: 'move',
              icon: 'Antd_drag',
              text: '移动',
              route: false
            }"
            @click="openMoveNote"
          ></base-tab-bar-item>
          <base-tab-bar-item
            :item="{
              index: 'top',
              icon: isTop
                ? 'Antd_vertical-align-top'
                : 'Antd_vertical-align-bottom',
              text: isTop ? '置顶' : '取消置顶',
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
        <template v-if="operation.currentOp">
          <div class="operation-wrap">
            <div class="operation-btn-wrap">
              <icon icon="Antd_close" @click="openNormalDrawerBar"></icon>
            </div>
            <div class="operation-main-wrap">
              <bs-core :options="{ scrollbar: false }">
                <template v-if="operation.currentOp == 'normal-move'">
                  <div
                    v-for="noteGroup in noteGroups"
                    :key="noteGroup.id"
                    class="note-group-item"
                    @click.once="moveNote(noteGroup.id)"
                  >
                    <span v-text="noteGroup.name"></span>
                  </div>
                </template>
                <template v-if="operation.currentOp == 'normal-setting'">
                  设置
                </template>
              </bs-core>
            </div>
          </div>
        </template>
      </template>
    </base-drawer-bar>
  </div>
</template>

<script>
import { BASE_LAYOUT_MIXIN } from "../../../../components/Mobile/mixins/BaseLayout";
import { BASE_LAYOUT_DRAWER_BAR_MIXIN } from "../../../../components/Mobile/mixins/BaseLayoutDrawerBar";
import { ROUTER_MIXIN } from "../../../../mixins/router-mixin";
import { mapState } from "vuex";
import BaseTabBarItem from "../../../../components/Mobile/layouts/BaseTabBar/BaseTabBarItem.vue";
import { msg, confirm } from "../../../../utils/antd-utils";
import noteApi from "../../../../api/pvtnote/Note";
// import noteGroupApi from "../../../../api/pvtnote/NoteGroup";
import BsCore from "../../../../components/BetterScroll/BsCore.vue";
import QuillEditor from "../../../../components/Editor/RichText/QuillEditor/index.vue";

export default {
  name: "NoteEdit",
  mixins: [BASE_LAYOUT_MIXIN, BASE_LAYOUT_DRAWER_BAR_MIXIN, ROUTER_MIXIN],
  components: { BaseTabBarItem, BsCore, QuillEditor },
  data() {
    return {
      msName: "pvtnote",
      activeTabIndex: "",
      management: {
        normal: false
      },
      operation: {
        currentOp: "",
        normal: ["delete", "move", "top", "cancelTop", "setting"]
      },
      note: { title: "SpringBoot Vue 便签" },
      noteContent: {
        html: "",
        md: ""
      },
      skeleton: false,
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
    isTop() {
      let isTop = true;
      if (this.management.normal) {
        isTop = !this.note.isTop || this.note.isTop == 0;
      }
      return isTop;
    },
    noteGroupName() {
      return this.findNoteGroupName(this.noteGroupId);
    }
  },
  props: {
    noteId: {
      type: [String],
      default: "",
      required: false
    }
  },
  methods: {
    saveNote() {},
    selectNote(noteId, isSelect) {
      let selectedNoteIds = this.selectedNoteIds;
      if (isSelect && !selectedNoteIds.includes(noteId)) {
        selectedNoteIds.push(noteId);
      } else {
        selectedNoteIds.splice(selectedNoteIds.indexOf(noteId), 1);
      }
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
      let isNormal = this.management.normal;
      this.operation.currentOp = "";
      if (isNormal) {
        this.management.normal = !this.management.normal;
        this.selectedNoteIds = [];
        this.hideDrawerBar();
        this.showTabBar();
      }
    },
    openNormalDrawerBar() {
      this.hideDrawerBar();
      this.management.normal = true;
      this.operation.currentOp = "";
      this.showDrawerBar();
      this.hideTabBar();
    },
    findNoteGroupName(noteGroupId) {
      // let noteGroupId = this.noteGroupId;
      let noteGroup = noteGroupId
        ? this.noteGroups.find(noteGroup => {
            return noteGroup.id == noteGroupId;
          })
        : null;
      if (noteGroup) {
        return noteGroup.name;
      }
      return "";
    },
    openSetting() {
      this.operation.currentOp = "normal-setting";
      this.hideDrawerBar();
      this.showBottomDrawerBar("80%");
    },
    openMoveNote() {
      this.operation.currentOp = "normal-move";
      this.hideDrawerBar();
      this.showBottomDrawerBar("80%");
      // noteGroupApi.listAll().then(res => {
      //   this.noteGroups = res.data;
      //   this.showBottomDrawerBar("80%");
      // });
    },
    moveNote(noteGroupId) {
      // 绑定的事件触发了两次 @click.once
      if (!noteGroupId) {
        msg({ code: 0, msg: "请选择便签分组" });
        return;
      }
      var vm = this;
      let noteGroupName = this.findNoteGroupName(noteGroupId);
      confirm({
        title: "移动便签",
        content: () => (
          <div>
            <span style="color:red;">
              确定要移动所选便签到 {noteGroupName} ？
            </span>
          </div>
        ),
        cancelText: "取消",
        okText: "移动",
        okType: "primary",
        onOk() {
          console.log("OK");
          vm.note.noteGroupId = noteGroupId;
        },
        onCancel() {
          vm.openNormalDrawerBar();
        }
      });
    },
    topNote() {
      if (!this.note.id) {
        // msg({ code: 0, msg: "请至少选择一个" });
        return;
      }
      let isTop = this.isTop;
      let title = isTop ? "置顶" : "取消置顶";
      var vm = this;
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
          if (this.isTop) {
            // 置顶
          } else {
            // 取消置顶
          }
          noteApi.topNotes(this.selectedNoteIds, isTop).then(res => {
            console.log(res);
            vm.closeDrawerBar();
          });
        },
        onCancel() {
          vm.closeDrawerBar();
        }
      });
    },
    deleteNote() {
      var vm = this;
      confirm({
        title: "删除便签",
        content: () => (
          <div>
            <span style="color:red;">确定要删除所选便签？</span>可在回收站撤回
          </div>
        ),
        cancelText: "取消",
        okText: "删除",
        okType: "danger",
        onOk() {
          console.log("OK");
        },
        onCancel() {
          // console.log(res);
          vm.closeDrawerBar();
        }
      });
    },
    beforeunloadWindow(e) {
      let event = e || window.event;
      // 兼容IE8和Firefox 4之前的版本
      if (event) {
        event.returnValue = "关闭提示";
      }
      // Chrome, Safari, Firefox 4+, Opera 12+ , IE 9+
      return "关闭提示";
      // debugger;
      // e.preventDefault();
      // confirm({
      //   // title: "移动便签",
      //   content: () => (
      //     <div>
      //       <span style="color:red;">确定要离开吗？</span>
      //     </div>
      //   ),
      //   cancelText: "取消",
      //   okText: "离开",
      //   okType: "danger",
      //   onOk() {
      //     window.close();
      //   },
      //   onCancel() {}
      // });
    }
  },
  mounted() {
    // TODO 根据noteId判断是否为空 为空则为增加便签；不为空：判断是否自身 不是则显示不可编辑div，且添加增加便签按钮；是则编辑便签
    this.isRefresh = true;
    // 用户退出页面 unload; 即将离开页面（刷新或关闭）时触发 beforeunload
    // 监听窗口事件 在用户退出、刷新页面时弹窗提示
    // window.addEventListener("unload", e => this.beforeunloadHandler(e));
    // window.addEventListener("beforeunload", this.beforeunloadHandler);
    // 移除监听窗口事件
    // window.removeEventListener("unload", e => this.beforeunloadHandler(e));
    // window.removeEventListener("beforeunload", this.beforeunloadHandler);
    // let vm = this;
    // window.onbeforeunload = function(e) {
    //   // confirm({
    //   //   // title: "移动便签",
    //   //   content: () => (
    //   //     <div>
    //   //       <span style="color:red;">确定要离开吗？</span>
    //   //     </div>
    //   //   ),
    //   //   cancelText: "取消",
    //   //   okText: "离开",
    //   //   okType: "danger",
    //   //   onOk() {
    //   //     window.close();
    //   //   },
    //   //   onCancel() {}
    //   // });
    //   e.preventDefault();
    //   e = e || window.event;
    //   // 兼容IE8和Firefox 4之前的版本
    //   if (e) {
    //     e.returnValue = vm.html ? true : false;
    //   }
    //   // Chrome, Safari, Firefox 4+, Opera 12+ , IE 9+
    //   return vm.html ? true : false;
    // };
  }
  // destroyed() {
  //   window.onbeforeunload = null;
  // }
};
</script>

<style>
.note-wrap {
  height: 100%;
  background-color: #f5f5f5;
}

.note-drawer .ant-drawer-wrapper-body .ant-drawer-body {
  height: 100%;
  width: 100%;
  padding: 1.8rem 1rem;
}
.selected-num {
  font-size: 1rem;
  padding: 0 0.3rem;
}

.note-drawer .ant-drawer-wrapper-body .ant-drawer-body .identity-avatar {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.note-drawer .ant-drawer-wrapper-body .ant-drawer-body .note-group-wrap {
  /* border: 1px solid red; */
  height: 80%;
}
.note-drawer
  .ant-drawer-wrapper-body
  .ant-drawer-body
  .note-group-wrap
  .note-group-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0.8rem;
}

.operation-wrap {
  height: 100%;
  width: 100%;
}
.operation-btn-wrap {
  border: 1px solid red;
  height: 7.25%;
  display: flex;
  align-items: center;
}
.operation-main-wrap {
  border: 1px solid red;
  height: 80%;
  display: flex;
}

.operation-wrap .operation-main-wrap .note-group-item {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0.8rem;
}
</style>
