<template>
  <base-table>
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
    return {};
  }
};
</script>

<style></style>
