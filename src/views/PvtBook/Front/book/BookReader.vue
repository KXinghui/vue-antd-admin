<template>
  <div class="pvtbook-wrap">
    <base-header showDrawerIcon>
      <div slot="left">电子书</div>
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
          <span @click="closeDrawerBar">全选</span>
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
          移动便签
        </template>
        <template v-if="operation.currentOp == 'batch-move'">
          <a-icon :style="{ color: preColor }" type="frown-o" />
          <a-slider
            :min="8"
            :max="24"
            :value="fontSize"
            @change="changeFontSize"
          />
          <a-icon :style="{ color: nextColor }" type="smile-o" />
        </template>
      </template>
    </base-drawer-bar>
  </div>
</template>

<script>
import { BASE_LAYOUT_MIXIN } from "../../../../components/Mobile/mixins/BaseLayout";
import { BASE_LAYOUT_DRAWER_BAR_MIXIN } from "../../../../components/Mobile/mixins/BaseLayoutDrawerBar";
import IdentityAvatar from "../../../../components/Identity/IdentityAvatar";
import { mapState, mapMutations } from "vuex";
import { ADMIN_MUTATION_TYPE } from "../../../../store/mutation-type";
import BaseTabBarItem from "../../../../components/Mobile/layouts/BaseTabBar/BaseTabBarItem.vue";
import { confirm } from "../../../../utils/antd-utils";

export default {
  name: "Note",
  mixins: [BASE_LAYOUT_MIXIN, BASE_LAYOUT_DRAWER_BAR_MIXIN],
  components: { IdentityAvatar, BaseTabBarItem },
  data() {
    return {
      msName: "pvtbook",
      activeTabIndex: 0,
      management: {
        batch: false
      },
      operation: {
        currentOp: "",
        batch: ["delete", "move", "top", "cancelTop", "selectAll"]
      },
      notes: [],
      selectedNoteIds: []
    };
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
    },
    changeFontSize(value) {
      this.fontSize = value;
    }
  }
};
</script>

<style>
.pvtbook-wrap {
  height: 100%;
  background-color: #f5f5f5;
}
.selected-num {
  font-size: 1rem;
  padding: 0 0.3rem;
}
</style>
