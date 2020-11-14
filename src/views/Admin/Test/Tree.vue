<template>
  <a-tree
    v-model="checkedKeys"
    checkable
    :show-line="showLine"
    :show-icon="showIcon"
    :expanded-keys="expandedKeys"
    :auto-expand-parent="autoExpandParent"
    :selected-keys="selectedKeys"
    :tree-data="treeData"
    @expand="onExpand"
    @select="onSelect"
  >
    <!-- <a-icon slot="switcherIcon" type="down" /> -->
    <!-- <a-icon slot="switcherIcon" type="down" /> -->
    <a-icon slot="smile" type="smile-o" />
    <a-icon slot="meh" type="smile-o" />
  </a-tree>
</template>
<script>
const treeData = [
  {
    title: "0-0",
    key: "0-0",
    children: [
      {
        title: "0-0-0",
        key: "0-0-0",
        children: [
          { title: "0-0-0-0", key: "0-0-0-0" },
          { title: "0-0-0-1", key: "0-0-0-1" },
          { title: "0-0-0-2", key: "0-0-0-2" }
        ]
      },
      {
        title: "0-0-1",
        key: "0-0-1",
        children: [
          { title: "0-0-1-0", key: "0-0-1-0" },
          { title: "0-0-1-1", key: "0-0-1-1" },
          { title: "0-0-1-2", key: "0-0-1-2" }
        ]
      },
      {
        title: "0-0-2",
        key: "0-0-2"
      }
    ]
  },
  {
    title: "0-1",
    key: "0-1",
    children: [
      { title: "0-1-0-0", key: "0-1-0-0" },
      { title: "0-1-0-1", key: "0-1-0-1" },
      { title: "0-1-0-2", key: "0-1-0-2" }
    ]
  },
  {
    title: "0-2",
    key: "0-2"
  }
];

export default {
  data() {
    return {
      expandedKeys: ["0-0-0", "0-0-1"],
      checkedKeys: ["0-0-0"],
      selectedKeys: ["0-0-0", "0-0-1"],
      treeData,
      autoExpandParent: true,
      showLine: true,
      showIcon: true
    };
  },
  watch: {
    checkedKeys(val) {
      console.log("onCheck", val);
    }
  },
  methods: {
    onExpand(expandedKeys) {
      console.log("onExpand", expandedKeys);
      // if not set autoExpandParent to false, if children expanded, parent can not collapse.
      // or, you can remove all expanded children keys.
      this.expandedKeys = expandedKeys;
      this.autoExpandParent = false;
    },
    onCheck(checkedKeys) {
      console.log("onCheck", checkedKeys);
      this.checkedKeys = checkedKeys;
    },
    onSelect(selectedKeys, info) {
      console.log("onSelect", info);
      this.selectedKeys = selectedKeys;
    }
  }
};
</script>
