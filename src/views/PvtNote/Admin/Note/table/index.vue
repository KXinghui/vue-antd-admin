<template>
  <div class="note-table">
    <a-space>
      <a-button v-has-pmsn="{ key: 'enCode', pmsns: ['Insert'] }" type="primary"
        ><icon icon="Antd_plus"></icon>增加</a-button
      >
      <a-button v-has-pmsn="{ key: 'enCode', pmsns: ['Delete'] }" type="danger"
        ><icon icon="Antd_delete"></icon>删除</a-button
      >
      <a-button v-has-pmsn="{ key: 'enCode', pmsns: ['Update'] }" type="primary"
        ><icon icon="Antd_edit"></icon>更新</a-button
      >
      <a-button v-has-pmsn="{ key: 'enCode', pmsns: ['Import'] }" type="danger"
        ><icon icon="Antd_import"></icon>导入</a-button
      >
    </a-space>
  </div>
</template>

<script>
import { TABLE_MIXIN } from "@mixins/table-mixin";

export default {
  name: "NoteTableView",
  mixins: [TABLE_MIXIN]
};
</script>

<style></style>
