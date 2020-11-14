<template>
  <div>
    <a-button class="editable-add-btn" @click="handleAdd">
      Add
    </a-button>
    <!-- <b-scroll> -->
    <!-- <ul slot="content" class="content"> -->
    <a-table
      slot="content"
      bordered
      :data-source="dataSource"
      :columns="columns"
    >
      <template slot="name" slot-scope="text, record">
        <editable-cell
          :text="text"
          @change="onCellChange(record.key, 'name', $event)"
        />
      </template>
      <template slot="operation" slot-scope="text, record">
        <a-popconfirm
          v-if="dataSource.length"
          title="Sure to delete?"
          @confirm="() => onDelete(record.key)"
        >
          <a href="javascript:;">Delete</a>
        </a-popconfirm>
      </template>
    </a-table>
    <!-- </ul> -->
    <!-- </b-scroll> -->

    <a-tree-select
      v-model="value"
      show-search
      style="width: 100%"
      :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
      placeholder="Please select"
      allow-clear
      tree-default-expand-all
      :suffix-icon="suffixIcon"
    >
      <a-tree-select-node key="0-1" value="parent 1" title="parent 1">
        <a-tree-select-node key="0-1-1" value="parent 1-0" title="parent 1-0">
          <a-tree-select-node key="random" value="leaf1" title="my leaf" />
          <a-tree-select-node key="random1" value="leaf2" title="your leaf" />
        </a-tree-select-node>
        <a-tree-select-node key="random2" value="parent 1-1" title="parent 1-1">
          <a-tree-select-node key="random3" value="sss">
            <b slot="title" style="color: #08c">sss</b>
          </a-tree-select-node>
        </a-tree-select-node>
      </a-tree-select-node>
    </a-tree-select>
  </div>
</template>
<script>
// import BScroll from "@components/BScroll";
import Vue from "vue";

const EditableCell = {
  template: `
      <div class="editable-cell">
        <div v-if="editable" class="editable-cell-input-wrapper">
          <a-input :value="value" @change="handleChange" @pressEnter="check" /><a-icon
            type="check"
            class="editable-cell-icon-check"
            @click="check"
          />
        </div>
        <div v-else class="editable-cell-text-wrapper">
          {{ value || ' ' }}
          <a-icon type="edit" class="editable-cell-icon" @click="edit" />
        </div>
      </div>
    `,
  props: {
    text: String
  },
  data() {
    return {
      value: this.text,
      editable: false
    };
  },
  methods: {
    handleChange(e) {
      const value = e.target.value;
      this.value = value;
    },
    check() {
      this.editable = false;
      this.$emit("change", this.value);
    },
    edit() {
      this.editable = true;
    }
  }
};
export default {
  components: {
    EditableCell
    // BScroll
  },
  data() {
    return {
      suffixIcon: Vue.compile(`<a-icon type="smile" />`).staticRenderFns,
      value: undefined,
      dataSource: [
        {
          key: "0",
          name: "Edward King 0",
          age: "32",
          address: "London, Park Lane no. 0"
        },
        {
          key: "1",
          name: "Edward King 1",
          age: "32",
          address: "London, Park Lane no. 1"
        },
        {
          key: "2",
          name: "Edward King 0",
          age: "32",
          address: "London, Park Lane no. 0"
        },
        {
          key: "3",
          name: "Edward King 1",
          age: "32",
          address: "London, Park Lane no. 1"
        },
        {
          key: "4",
          name: "Edward King 1",
          age: "32",
          address: "London, Park Lane no. 1"
        },
        {
          key: "5",
          name: "Edward King 1",
          age: "32",
          address: "London, Park Lane no. 1"
        },
        {
          key: "6",
          name: "Edward King 1",
          age: "32",
          address: "London, Park Lane no. 1"
        }
      ],
      count: 2,
      columns: [
        {
          title: "name",
          dataIndex: "name",
          width: "30%",
          scopedSlots: { customRender: "name" }
        },
        {
          title: "age",
          dataIndex: "age"
        },
        {
          title: "address",
          dataIndex: "address"
        },
        {
          title: "operation",
          dataIndex: "operation",
          scopedSlots: { customRender: "operation" }
        }
      ]
    };
  },
  methods: {
    onCellChange(key, dataIndex, value) {
      const dataSource = [...this.dataSource];
      const target = dataSource.find(item => item.key === key);
      if (target) {
        target[dataIndex] = value;
        this.dataSource = dataSource;
      }
    },
    onDelete(key) {
      const dataSource = [...this.dataSource];
      this.dataSource = dataSource.filter(item => item.key !== key);
    },
    handleAdd() {
      const { count, dataSource } = this;
      const newData = {
        key: count,
        name: `Edward King ${count}`,
        age: 32,
        address: `London, Park Lane no. ${count}`
      };
      this.dataSource = [...dataSource, newData];
      this.count = count + 1;
    }
  },
  mounted() {
    console.log(typeof Vue.compile(`<a-icon type="select" />`).staticRenderFns);
  }
};
</script>
<style>
.editable-cell {
  position: relative;
}

.editable-cell-input-wrapper,
.editable-cell-text-wrapper {
  padding-right: 24px;
}

.editable-cell-text-wrapper {
  padding: 5px 24px 5px 5px;
}

.editable-cell-icon,
.editable-cell-icon-check {
  position: absolute;
  right: 0;
  width: 20px;
  cursor: pointer;
}

.editable-cell-icon {
  line-height: 18px;
  display: none;
}

.editable-cell-icon-check {
  line-height: 28px;
}

.editable-cell:hover .editable-cell-icon {
  display: inline-block;
}

.editable-cell-icon:hover,
.editable-cell-icon-check:hover {
  color: #108ee9;
}

.editable-add-btn {
  margin-bottom: 8px;
}
</style>
