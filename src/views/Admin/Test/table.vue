<template>
  <base-table>
    <!-- Unexpected mixed usage of different slot syntaxes -->
    <template v-slot:contextmenu="{ record }">
      <span>{{ record }}</span>
      <span>{{ record }}</span>
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
