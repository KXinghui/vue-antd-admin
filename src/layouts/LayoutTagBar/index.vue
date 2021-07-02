<template>
  <div :class="['layout-tag-bar', themeClass]">
    <!-- TODO 使用 vuedraggable 实现拖拽排序 -->
    <!-- <bs-core
        style="width: 80%"
        :scrollX="true"
        :scrollY="false"
        :isRefresh.sync="tagBarRefresh"
        :options="{ observeDOM: true }"
      > -->
    <!-- <transition-group> children must be keyed: <div> -->
    <!-- <div style="display:flex; flex-direction: row; justify-content: start;"> -->
    <!-- <transition-group type="transition" :name="!drag ? 'flip-list' : null"> -->
    <vue-draggable
      class="tags-drag-wrap scrollbar"
      v-model="layoutTags"
      v-bind="dragOptions"
      handle=".text"
    >
      <a-dropdown
        :trigger="['contextmenu']"
        v-for="(tag, tagIndex) in tags"
        :key="getRouteStr(tag)"
      >
        <layout-tag
          :tag="tag"
          :tagIndex="tagIndex"
          :isActive="activeTagIndex == tagIndex"
          @activeTag="activeTag"
          @deleteTag="deleteTag"
        >
          <!-- vuedraggable 在拖拽元素上绑定点击事件 使用 handle 属性（类型为字符串或数组）绑定没有绑定点击事件的元素（类名）即可 -->
          <!-- <template v-slot="tagSlot">
          {{ tagSlot.tag }}
        </template> -->
        </layout-tag>
        <a-menu slot="overlay" @click="e => handleTagClick(e, tagIndex)">
          <a-menu-item key="deleteAll">
            删除全部标签
          </a-menu-item>
          <a-menu-item key="deleteCur">
            删除当前标签
          </a-menu-item>
          <a-menu-item key="deleteCurLeft">
            删除当前标签左边
          </a-menu-item>
          <a-menu-item key="deleteCurRight">
            删除当前标签右边
          </a-menu-item>
          <a-menu-item key="deleteNotCur">
            删除非当前标签
          </a-menu-item>
        </a-menu>
      </a-dropdown>
      <!-- <layout-tag
        v-for="(tag, tagIndex) in tags"
        :key="getRouteStr(tag)"
        :tag="tag"
        :tagIndex="tagIndex"
        :isActive="activeTagIndex == tagIndex"
        @activeTag="activeTag"
        @deleteTag="deleteTag"
      >
      </layout-tag> -->
      <!-- vuedraggable 在拖拽元素上绑定点击事件 使用 handle 属性（类型为字符串或数组）绑定没有绑定点击事件的元素（类名）即可 -->
      <!-- <template v-slot="tagSlot">
          {{ tagSlot.tag }}
        </template> -->
      <!-- </transition-group> -->
      <!-- </div> -->
    </vue-draggable>
    <!-- </bs-core> -->
    <div class="tag-op-wrap">
      <a-dropdown>
        <a-menu slot="overlay" @click="handleTagClick">
          <a-menu-item key="deleteAll">
            删除全部标签
          </a-menu-item>
          <a-menu-item key="deleteCur">
            删除激活标签
          </a-menu-item>
          <a-menu-item key="deleteCurLeft">
            删除激活标签左边
          </a-menu-item>
          <a-menu-item key="deleteCurRight">
            删除激活标签右边
          </a-menu-item>
          <a-menu-item key="deleteNotCur">
            删除非激活标签
          </a-menu-item>
        </a-menu>
        <a-button type="primary" :class="themeClass" style="margin-left: .5rem">
          标签操作<a-icon type="down" />
        </a-button>
      </a-dropdown>
    </div>
  </div>
</template>

<script>
import LayoutTag from "./LayoutTag";
import { THEME_MIXIN } from "@mixins/theme-mixin.js";
// import BsCore from "../../components/BetterScroll/BsCore.vue";
import VueDraggable from "vuedraggable";
import { mapMutations } from "vuex";
import { ADMIN_MUTATION_TYPE } from "@store/mutation-type";
import { getRouteStr } from "../../utils/router-utils";

export default {
  name: "LayoutTagBar",
  mixins: [THEME_MIXIN],
  components: {
    // BsCore,
    LayoutTag,
    VueDraggable
  },
  data() {
    return {
      activeTagName: "",
      drag: false
      // tagBarRefresh: false
    };
  },
  props: {
    /**
     * 相当于 Menu
     */
    tags: {
      type: [Array],
      default() {
        return [];
        /* [
          { name: "QuillEditor", path: "/editor/richText/quillEditor" },
          { name: "WangEditor", path: "/editor/richText/wangEditor" },
          { name: "WangEditor", path: "/editor/richText/wangEditor" }
        ] */
      },
      required: false
    },
    activeTagIndex: {
      type: [Number],
      require: false
    }
  },
  computed: {
    // layoutTags: {
    //   // getter
    //   get: function() {
    //     // Do not mutate vuex store state outside mutation handlers
    //     return this.$store.state.admin.layoutTags;
    //   },
    //   // setter
    //   set: function(newValue) {
    //     this[ADMIN_MUTATION_TYPE.SET_LAYOUT_TAGS](newValue);
    //   }
    // },
    layoutTags: {
      set(tags) {
        this.$emit("update:tags", tags);
      },
      get() {
        return this.tags;
      }
    },
    dragOptions() {
      return {
        animation: 200,
        group: "tags",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  },
  // mounted() {
  //   this.layoutTags = this.tags;
  // },
  methods: {
    getRouteStr,
    ...mapMutations(ADMIN_MUTATION_TYPE.NAMESPACE, [
      // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
      // ADMIN_MUTATION_TYPE.SET_LAYOUT_SETTING,
      ADMIN_MUTATION_TYPE.SET_LAYOUT_TAGS
    ]),
    // handleChange(){
    //   this.
    // },
    // getComponentData() {
    //   return {
    //     on: {
    //       change: this.handleChange,
    //     },
    //   },
    activeTag(activeTagIndex) {
      this.$emit("activeTag", activeTagIndex);
    },
    deleteTag(tagIndex) {
      this.handleTag({ key: "deleteCur" }, tagIndex);
    },
    // 使用 vuedraggable 实现拖拽排序
    // 处理标签
    handleTag(e, curIndex) {
      // deleteAll 删除全部
      // deleteCur 删除当前
      // deleteNotCur 删除全部非当前
      // deleteCurLeft 删除当前左边
      // deleteCurRight 删除当前右边
      let event = e.key;
      let tagsLen = this.tags.length;
      if (curIndex < 0 || curIndex > tagsLen) {
        return;
      }
      let tags = [...this.tags];
      let isActiveInDelete = false;
      let activeTagIndex = this.activeTagIndex;
      let fixActiveTagIndex = 0;
      if ("deleteAll" == event) {
        tags = [];
      } else if ("deleteCur" == event) {
        isActiveInDelete = curIndex == activeTagIndex;
        fixActiveTagIndex = isActiveInDelete
          ? curIndex - 1 >= 0
            ? curIndex - 1
            : 0
          : activeTagIndex;
        tags.splice(curIndex, 1);
      } else if ("deleteNotCur" == event) {
        isActiveInDelete = curIndex != activeTagIndex;
        tags = [tags[curIndex]];
        fixActiveTagIndex = isActiveInDelete ? curIndex : 0;
      } else if ("deleteCurLeft" == event) {
        isActiveInDelete = 0 <= activeTagIndex && activeTagIndex < curIndex;
        tags.splice(0, curIndex);
        fixActiveTagIndex = isActiveInDelete ? curIndex : activeTagIndex;
      } else if ("deleteCurRight" == event) {
        isActiveInDelete =
          curIndex < activeTagIndex && activeTagIndex < tagsLen;
        fixActiveTagIndex = isActiveInDelete ? curIndex : activeTagIndex;
        tags.splice(curIndex + 1, tagsLen - curIndex - 1);
      }
      this.$emit("update:tags", tags);
      if (
        (fixActiveTagIndex == 0 && activeTagIndex == 0) ||
        fixActiveTagIndex != activeTagIndex ||
        tags.length == 0
      ) {
        // 激活标签情况：
        // 1 合适激活标签索引和激活标签索引都为0
        // 2 合适激活标签索引与激活标签索引不一致
        // 3 处理标签后的标签列表长度为 0
        this.activeTag(fixActiveTagIndex);
      }

      // this.tagBarRefresh = true;
    },
    handleTagClick(e, tagIndex) {
      // 标签索引：当前标签索引 或 激活标签索引
      this.handleTag(e, tagIndex ? tagIndex : this.activeTagIndex);
    }
  }
};
</script>

<style lang="less" src="../../styles/layout.less"></style>
