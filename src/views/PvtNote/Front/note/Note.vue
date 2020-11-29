<template>
  <div class="chat-wrap">
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
        <template v-if="operation.batch">
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
        <template v-if="operation.batch">
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
      </template>
    </base-drawer-bar>
  </div>
</template>

<script>
import { BASE_LAYOUT_MIXIN } from "../../../../components/Mobile/mixins/BaseLayout";
import IdentityAvatar from "../../../../components/Identity/IdentityAvatar";
import { mapState, mapMutations } from "vuex";
import { ADMIN_MUTATION_TYPE } from "../../../../store/mutation-type";
import BaseTabBarItem from "../../../../components/Mobile/layouts/BaseTabBar/BaseTabBarItem.vue";

export default {
  name: "Note",
  mixins: [BASE_LAYOUT_MIXIN],
  components: { IdentityAvatar, BaseTabBarItem },
  data() {
    return {
      msName: "pvtnote",
      activeTabIndex: 0,
      management: {
        batch: false
      },
      operation: {
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
        if (topNum == selectedNoteIds.length) {
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
      this.management.batch = !this.management.batch;
      this.resetDrawerBar();
      this.showDrawerBar();
    },
    moveNote() {
      this.hideDrawerBar();
      this.showBottomDrawerBar("50%");
    },
    topNote() {
      if (this.isTopOnBatch) {
        // 置顶
      } else {
        // 取消置顶
      }
    },
    deleteNote() {}
  }
};
</script>

<style>
.chat-wrap {
  height: 100%;
  background-color: #f5f5f5;
}
.selected-num {
  font-size: 1rem;
  padding: 0 0.3rem;
}
</style>
