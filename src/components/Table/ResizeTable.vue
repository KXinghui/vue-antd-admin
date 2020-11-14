<template>
  <div>
    <a-table
      bordered
      :columns="columns"
      :components="tableComponents"
      :data-source="data"
      :custom-row="customRow"
    >
      <!-- <template v-slot:action>
        <a href="javascript:;">Delete</a>
      </template> -->
    </a-table>
    <a-menu
      class="contextmenustyle"
      :style="contextmenuStyle"
      v-if="contextmenuVisible"
    >
      <a-menu-item key="1">
        1st menu item
      </a-menu-item>
      <a-menu-item key="2">
        2nd menu item
      </a-menu-item>
      <a-menu-item key="3">
        3rd menu item
      </a-menu-item>
      <slot name="contextmenu"></slot>
    </a-menu>
  </div>
</template>

<script>
import Vue from "vue";
import VueDraggableResizable from "vue-draggable-resizable";
Vue.component("vue-draggable-resizable", VueDraggableResizable);

import { TABLE_MIXIN } from "@mixins/table-mixin";

const columns = [
  {
    title: "Date",
    dataIndex: "date",
    width: 200,
    isResize: true,
    minWidth: 100,
    maxWidth: 300
  },
  {
    title: "Amount",
    dataIndex: "amount",
    width: 100,
    isResize: false,
    minWidth: 100,
    maxWidth: 300
  },
  {
    title: "Type",
    dataIndex: "type",
    width: 100,
    isResize: true,
    minWidth: 100,
    maxWidth: 300
  },
  {
    title: "Note",
    dataIndex: "note",
    width: 100,
    isResize: true,
    minWidth: 100,
    maxWidth: 300
  }
  /* {
    title: "Action",
    key: "action",
    scopedSlots: { customRender: "action" },
    isResize: true,
    minWidth: 100,
    maxWidth: 300
  } */
];
const data = [
  {
    key: 0,
    date: "2018-02-11",
    amount: 120,
    type: "income",
    note: "transfer"
  },
  {
    key: 1,
    date: "2018-03-11",
    amount: 243,
    type: "income",
    note: "transfer"
  },
  {
    key: 2,
    date: "2018-04-11",
    amount: 98,
    type: "income",
    note: "transfer"
  }
];
export default {
  name: "ResizeTable",
  mixins: [TABLE_MIXIN],
  data() {
    return {
      data,
      columns
    };
  }
};
</script>
<style lang="less">
.resize-table-th {
  position: relative;
  .table-draggable-handle {
    height: 100% !important;
    bottom: 0;
    left: auto !important;
    right: -5px;
    cursor: col-resize;
    touch-action: none;
  }
  .vdr {
    border: none;
  }
}
</style>
