<template>
  <div class="note-detail-wrap">
    <base-header showDrawerIcon>
      <div slot="left"></div>
      <div slot="middle">
        <span class="note-title" v-text="note.title"></span>
      </div>
      <div slot="right">
        <a-dropdown placement="bottomRight">
          <icon icon="Antd_ellipsis" />
          <a-menu slot="overlay">
            <a-menu-item>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="http://www.tmall.com/"
                >3rd menu item</a
              >
            </a-menu-item>
          </a-menu>
        </a-dropdown>
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
    <base-main :isScrollPull="true">
      <template slot="main"> </template>
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
    </base-drawer>
  </div>
</template>

<script>
import { BASE_LAYOUT_MIXIN } from "../../../../components/Mobile/mixins/BaseLayout";
import { BASE_LAYOUT_DRAWER_BAR_MIXIN } from "../../../../components/Mobile/mixins/BaseLayoutDrawerBar";
import IdentityAvatar from "../../../../components/Identity/IdentityAvatar";
import { mapState } from "vuex";
import { confirm } from "../../../../utils/antd-utils";
import noteApi from "../../../../api/pvtnote/Note";
import noteGroupApi from "../../../../api/pvtnote/NoteGroup";

export default {
  name: "NoteDetail",
  mixins: [BASE_LAYOUT_MIXIN, BASE_LAYOUT_DRAWER_BAR_MIXIN],
  components: { IdentityAvatar },
  data() {
    return {
      msName: "pvtnote",
      management: {
        normarl: false
      },
      operation: {
        currentOp: "",
        normarl: [""]
      },
      note: {
        id: "4545454545665",
        title: "SpringBoot Vue IM",
        subTitle: "SpringBoot Vue实现的私人IM",
        createDate: "2020-12-11",
        isTop: 0
      },
      timer: {
        save: null
      }
    };
  },
  props: {
    noteId: {
      type: [String],
      default: "",
      required: true
    }
  },
  computed: {
    ...mapState({
      // showDrawer: state => state.admin.layoutSetting.showDrawer,
      identity: state => state.identity.identity
    })
    //
  },
  methods: {
    getNote() {
      // 根据noteId获取note
      console.log(this.noteId);
    },
    closeDrawerBar() {
      let isBatch = this.management.batch;
      if (isBatch) {
        this.management.batch = !this.management.batch;
        this.hideDrawerBar();
      }
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
      noteGroupApi.listAll().then(res => {
        this.noteGroups = res.data;
        this.showBottomDrawerBar("80%");
      });
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
    this.getNote();
  }
};
</script>

<style>
.note-detail-wrap {
  height: 100%;
  background-color: #f5f5f5;
}
.selected-num {
  font-size: 1rem;
  padding: 0 0.3rem;
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
</style>
