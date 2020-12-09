<template>
  <base-table
    :selectedRowKeys.sync="selectedRowKeys"
    :row-selection-type="rowSelectionType"
    :data="data"
    :columns="columns"
  >
    <!-- Unexpected mixed usage of different slot syntaxes -->
    <!-- <template v-slot:contextmenu="{ record }">
      <span>{{ record }}</span>
      <span>{{ record }}</span>
    </template> -->
    <!-- <template v-slot:action>
      <a href="javascript:;">Delete</a>
      <a href="javascript:;">Add</a>
      <a href="javascript:;">Update</a>
    </template> -->
    <!-- <template v-slot:contextmenu>
      右键菜单
    </template> -->
    <template v-slot:title>
      我是表格标题
    </template>
    <template v-slot:footer>
      我是表格尾部
    </template>
  </base-table>
</template>

<script>
import BaseTable from "../../../components/Table/BaseTable.vue";

export default {
  name: "TableTest",
  components: { BaseTable },
  data() {
    return {
      rowSelectionType: "checkbox",
      selectedRowKeys: [],
      columns: [
        {
          title: "Date",
          dataIndex: "date",
          width: 200,
          isResize: true,
          minWidth: 50,
          maxWidth: 300,
          ellipsis: true,
          fixed: "",
          align: "center"
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
        },
        {
          title: "Action",
          dataIndex: "action",
          key: "action",
          // scopedSlots: { customRender: "action" },
          width: 200,
          isResize: true,
          minWidth: 100,
          maxWidth: 300
          // fixed: "right"
        }
      ],

      data: [
        {
          id: "001",
          key: 0,
          date: "2018-02-11",
          amount: 120,
          type: "income",
          note: "transfer"
        },
        {
          id: "002",
          key: 1,
          date: "2018-03-11",
          amount: 243,
          type: "income",
          note: "transfer"
        },
        {
          id: "003",
          key: 2,
          date: "2018-04-11",
          amount: 98,
          type: "income",
          note: "transfer"
        },
        {
          id: "004",
          key: 3,
          date: "2018-04-11",
          amount: 98,
          type: "income",
          note: "transfer"
        },
        {
          id: "005",
          key: 4,
          date: "2018-04-11",
          amount: 98,
          type: "income",
          note: "transfer"
        },
        {
          id: "006",
          key: 5,
          date: "2018-04-11",
          amount: 98,
          type: "income",
          note: "transfer"
        },
        {
          id: "007",
          key: 6,
          date: "2018-04-11",
          amount: 98,
          type: "income",
          note: "transfer"
        },
        {
          id: "008",
          key: 7,
          date: "2018-04-11",
          amount: 98,
          type: "income",
          note: "transfer"
        }
      ]
    };
  },
  updated() {
    console.log("table 页面选中的     " + this.selectedRowKeys);
  }
};
</script>

<style></style>
