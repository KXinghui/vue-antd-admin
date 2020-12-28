<template>
  <!-- <bs-core :scrollX="true" :isRefres="isScrollRefresh"> -->
  <div class="base-table-wrap" :ref="baseTableRef" :id="baseTableRef">
    <div class="base-table-form-wrap">
      <slot name="tableForm"></slot>
    </div>
    <div class="base-table-header-wrap">
      <slot name="tableHeader"></slot>
      <a-button v-show="isShowBatch" type="primary" @click="ableBatchOp"
        ><icon icon="IconFont_batch-op"></icon
        >{{ isBatch ? "取消批量" : "批量" }}</a-button
      >
    </div>
    <!-- :row-selection="{
        type: rowSelection.type,
        selectedRowKeys: rowSelection.selectedRowKeys,
        selections: rowSelection.selections,
        onChange: rowSelection.onChange,
        onSelectAll: rowSelection.onSelectAll,
        onSelectInvert: rowSelection.onSelectInvert
      }" -->
    <a-table
      v-viewer="{
        movable: true,
        filter: function() {
          return !isBatch;
        }
      }"
      :scroll="{ x: true, scrollToFirstRowOnChange: false }"
      class="base-table"
      bordered
      :loading="loading"
      :row-key="rowKey"
      :columns="columns"
      :data-source="data"
      :pagination="pagination"
      :row-selection="rowSelection"
      :custom-row="customRow"
      :components="tableComponents"
    >
      <!-- <template v-slot:action>
        <a href="javascript:;">Delete</a>
        <a href="javascript:;">Add</a>
      </template> -->
      <!-- <template v-for="(index, name) in $scopedSlots" v-slot:[name]="slotProps">
        <slot :name="name" v-bind="{ slotProps }"></slot>
      </template> -->
      <template
        v-for="column in columns"
        :slot="column.scopedSlots ? column.scopedSlots.customRender : ''"
        slot-scope="text, record"
      >
        <slot
          :name="column.scopedSlots ? column.scopedSlots.customRender : ''"
          v-bind="record"
          >{{ column.scopedSlots ? column.scopedSlots.customRender : "" }}</slot
        >
      </template>
      <!-- <template
        v-for="(index, name) in $scopedSlots"
        :slot="name"
        slot-scope="text, record"
      >
        <slot :name="name" v-bind="record"></slot>
      </template> -->
      <div slot="title" class="base-table-title-wrap">
        <slot name="tableTitle"></slot>
      </div>
      <div slot="footer" class="base-table-footer-wrap">
        <slot name="tableFooter"></slot>
      </div>
    </a-table>
    <!-- class="contextmenustyle" -->
    <a-menu
      :id="contextmenuId"
      :style="contextmenuStyle"
      v-if="contextmenuVisible"
    >
      <slot name="contextmenu">
        <a-menu-item key="1">
          1st menu item
        </a-menu-item>
        <a-menu-item key="2">
          2nd menu item
        </a-menu-item>
        <a-menu-item key="3">
          3rd menu item
        </a-menu-item>
      </slot>
    </a-menu>
    <a-modal
      v-model="settingModalVisible"
      title="Vertically centered modal dialog"
      centered
      @ok="() => (settingModalVisible = false)"
    >
      <a-collapse accordion>
        <a-collapse-panel key="1" header="This is panel header 1">
          <p>{{ text }}</p>
        </a-collapse-panel>
        <a-collapse-panel
          key="2"
          header="This is panel header 2"
          :disabled="false"
        >
          <p>{{ text }}</p>
        </a-collapse-panel>
        <a-collapse-panel key="3" header="This is panel header 3">
          <p>{{ text }}</p>
        </a-collapse-panel>
      </a-collapse>
    </a-modal>
  </div>
  <!-- </bs-core> -->
</template>

<script>
import { TABLE_MIXIN } from "../../mixins/table-mixin";
import BsCore from "../BetterScroll/BsCore.vue";

// eslint-disable-next-line no-unused-vars
const table = {
  // 表格元素的 table-layout 属性，设为 fixed 表示内容不会影响列的布局	- | 'auto' | 'fixed'	无 固定表头/列或使用了 column.ellipsis 时，默认值为 fixed	1.5.0
  tableLayout: "",
  // 是否展示外边框和列边框	boolean	false
  bordered: true,
  // 指定树形结构的列名	string[]	children
  childrenColumnName: ["children"],
  // 表格列的配置描述，具体项见下表	array	-
  columns: [],
  // 覆盖默认的 table 元素	object	-
  components: null,
  // 数据数组	any[]
  dataSource: [],
  // 初始时，是否展开所有行	boolean	false
  defaultExpandAllRows: false,
  // 默认展开的行	string[]	-
  defaultExpandedRowKeys: [],
  // 展开的行，控制属性	string[]	-
  expandedRowKeys: [],
  // 额外的展开行	Function(record, index, indent, expanded):VNode | slot="expandedRowRender" slot-scope="record, index, indent, expanded"	-
  // eslint-disable-next-line no-unused-vars
  expandedRowRender: (record, index, indent, expanded) => {},
  // 自定义展开图标	Function(props):VNode | slot="expandIcon" slot-scope="props"	-
  // eslint-disable-next-line no-unused-vars
  expandIcon: (record, index, indent, expanded) => {},
  // 通过点击行来展开子行	boolean	false
  expandRowByClick: false,
  // 展开的图标显示在哪一列，如果没有 rowSelection，默认显示在第一列，否则显示在选择框后面	number
  expandIconColumnIndex: 0,
  // 表格尾部	Function(currentPageData)|slot-scope
  // eslint-disable-next-line no-unused-vars
  footer: currentPageData => {},
  // 展示树形数据时，每层缩进的宽度，以 px 为单位	number	15
  indentSize: 10,
  // 页面是否加载中	boolean|object	false
  loading: false,
  // 默认文案设置，目前包括排序、过滤、空数据文案	object	filterConfirm: '确定' filterReset: '重置', emptyText: '暂无数据',
  locale: null,
  // 分页器，参考配置项或 pagination文档，设为 false 时不展示和进行分页	object
  pagination: {},
  // 表格行的类名	Function(record, index):string	-
  // eslint-disable-next-line no-unused-vars
  rowClassName: (record, index) => {},
  // 表格行 key 的取值，可以是字符串或一个函数	string|Function(record):string	'key'
  rowKey: "id",
  // 列表项是否可选择，配置项	object	null
  rowSelection: null,
  // 设置横向或纵向滚动，也可用于指定滚动区域的宽和高，建议为 x 设置一个数字，如果要设置为 true，需要配合样式 .ant-table td { white-space: nowrap; }	{ x: number | true, y: number }	-
  scroll: true,
  // 是否显示表头	boolean	true
  showHeader: true,
  // 表格大小	default | middle | small	default
  size: "default",
  // 表格标题	Function(currentPageData)|slot-scope
  // eslint-disable-next-line no-unused-vars
  title: currentPageData => {},
  // 设置头部行属性	Function(column, index)	-
  // eslint-disable-next-line no-unused-vars
  customHeaderRow: (column, index) => {},
  // 设置行属性	Function(record, index)	-
  // eslint-disable-next-line no-unused-vars
  customRow: record => {
    return {
      // props: {
      //   xxx... //属性
      // },
      on: {
        // 事件
        click: event => {
          this.clickRow(event, record);
        },
        dblclick: event => {
          this.dblclickRow(event, record);
        },
        contextmenu: event => {
          this.contextmenuRow(event, record);
        } /* ,
        mouseenter: event => {
          this.mouseenterRow(event, record);
        },
        mouseleave: event => {
          this.mouseleaveRow(event, record);
        } */
      }
    };
  },
  // 设置表格内各类浮层的渲染节点，如筛选菜单	(triggerNode) => HTMLElement	() => TableHtmlElement	1.5.0
  // getPopupContainer:
  // 数据渲染前可以再次改变，一般用户空数据的默认配置，可以通过 ConfigProvider 全局统一配置	Function({ text, column, record, index }) => any	-	1.5.4
  // eslint-disable-next-line no-unused-vars
  transformCellText: ({ text, column, record, index }) => {}
};
// eslint-disable-next-line no-unused-vars
const column = {
  // 设置列内容的对齐方式	'left' | 'right' | 'center'	'left'
  align: "left",
  // 超过宽度将自动省略，暂不支持和排序筛选一起使用。设置为 true 时，表格布局将变成 tableLayout="fixed"。	boolean	false	1.5.0
  ellipsis: false,
  // 表头列合并,设置为 0 时，不渲染	number
  colSpan: 0,
  // 列数据在数据项中对应的 key，支持 a.b.c 的嵌套写法	string	-
  dataIndex: "",
  // 默认筛选值	string[]	-	1.5.0
  defaultFilteredValue: [],
  // 可以自定义筛选菜单，此函数只负责渲染图层，需要自行编写各种交互	VNode | slot-scope	-
  filterDropdown: null,
  // 用于控制自定义筛选菜单是否可见	boolean	-
  filterDropdownVisible: false,
  // 标识数据是否经过过滤，筛选图标会高亮	boolean	false
  filtered: false,
  // 筛选的受控属性，外界可用此控制列的筛选状态，值为已筛选的 value 数组	string[]	-
  filteredValue: [],
  // 自定义 filter 图标。	VNode | (filtered: boolean, column: Column) => vNode |slot |slot-scope	false
  filterIcon: null,
  // 是否多选	boolean	true
  filterMultiple: true,
  // 表头的筛选菜单项	object[]	-
  filters: [],
  // 列是否固定，可选 true(等效于 left) 'left' 'right'	boolean|string	false
  fixed: false,
  // Vue 需要的 key，如果已经设置了唯一的 dataIndex，可以忽略这个属性	string	-
  key: "",
  // 生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引，@return 里面可以设置表格行/列合并,可参考 demo 表格行/列合并	Function(text, record, index) {}|slot-scope	-
  // eslint-disable-next-line no-unused-vars
  customRender: (text, record, index) => {},
  // 排序函数，本地排序使用一个函数(参考 Array.sort 的 compareFunction)，需要服务端排序可设为 true	Function|boolean	-
  sorter: () => {},
  // 排序的受控属性，外界可用此控制列的排序，可设置为 'ascend' 'descend' false	boolean|string	-
  sortOrder: ["ascend", "descend"],
  // 支持的排序方式，取值为 'ascend' 'descend'	Array	['ascend', 'descend']	1.5.0
  sortDirections: ["ascend", "descend"],
  // 列头显示文字	string|slot	-
  title: "",
  // width	列宽度	string|number	-
  // 设置单元格属性	Function(record, rowIndex)	-
  // eslint-disable-next-line no-unused-vars
  customCell: (record, rowIndex) => {}
  // customHeaderCell	设置头部单元格属性	Function(column)	-
  // onFilter	本地模式下，确定筛选的运行函数, 使用 template 或 jsx 时作为filter事件使用	Function	-
  // onFilterDropdownVisibleChange	自定义筛选菜单可见变化时调用，使用 template 或 jsx 时作为filterDropdownVisibleChange事件使用	function(visible) {}	-
  // slots	使用 columns 时，可以通过该属性配置支持 slot 的属性，如 slots: { filterIcon: 'XXX'}	object	-
  // 使用 columns 时，可以通过该属性配置支持 slot-scope 的属性，如 scopedSlots: { customRender: 'XXX'}	object	-
  // scopedSlots
};

// eslint-disable-next-line no-unused-vars
// const rowSelection = {
//   // 自定义列表选择框宽度	string|number	-
//   columnWidth: "",
//   // 自定义列表选择框标题	string|VNode	-
//   columnTitle: "选择",
//   // 把选择框列固定在左边	boolean	-
//   fixed: true,
//   // 选择框的默认属性配置	Function(record)	-
//   // eslint-disable-next-line no-unused-vars
//   getCheckboxProps: record => {},
//   // 去掉『全选』『反选』两个默认选项	boolean	false
//   hideDefaultSelections: true,
//   // 指定选中项的 key 数组，需要和 onChange 进行配合	string[]	[]
//   selectedRowKeys: [],
//   // 自定义选择配置项, 设为 true 时使用默认选择项	object[]|boolean	true
//   selections: true,
//   // 多选/单选，checkbox or radio	string	checkbox
//   type: "checkbox",
//   // 选中项发生变化时的回调	Function(selectedRowKeys, selectedRows)	-
//   // eslint-disable-next-line no-unused-vars
//   onChange: (selectedRowKeys, selectedRows) => {},
//   // 用户手动选择/取消选择某列的回调	Function(record, selected, selectedRows, nativeEvent)	-
//   // eslint-disable-next-line no-unused-vars
//   onSelect: (record, selected, selectedRows, nativeEvent) => {},
//   // 用户手动选择/取消选择所有列的回调	Function(selected, selectedRows, changeRows)	-
//   // eslint-disable-next-line no-unused-vars
//   onSelectAll: (selected, selectedRows, changeRows) => {},
//   // 用户手动选择反选的回调	Function(selectedRows)	-
//   // eslint-disable-next-line no-unused-vars
//   onSelectInvert: selectedRows => {}
// };

// const pagination = {
//   disabled: false,
//   hideOnSinglePage: false,
//   pageSizeOptions: ["5", "10", "20", "30", "40"],
//   showLessItems: false,
//   showQuickJumper: true,
//   showSizeChanger: true,
//   //showTotal:
//   simple: false
// };

export default {
  name: "BaseTable",
  mixins: [TABLE_MIXIN],
  // eslint-disable-next-line vue/no-unused-components
  components: { BsCore },
  data() {
    // var vm = this;
    return {
      text: "asdfasdf",
      table
      // pagination,
      // customRow: record => {
      //   return {
      //     // props: {
      //     //   xxx... //属性
      //     // },
      //     on: {
      //       // 事件
      //       click: event => {
      //         this.clickRow(event, record);
      //       },
      //       dblclick: event => {
      //         this.dblclickRow(event, record);
      //       },
      //       contextmenu: event => {
      //         this.contextmenuRow(event, record);
      //       } /* ,
      //   mouseenter: event => {
      //     this.mouseenterRow(event, record);
      //   },
      //   mouseleave: event => {
      //     this.mouseleaveRow(event, record);
      //   } */
      //     }
      //   };
      // }
    };
  },
  methods: {
    /* // 单击行
    clickRow: function(event, record) {
      console.log(event.target, record);
    },
    // 双击行
    dblclickRow: function(event, record) {
      console.log(event.target, record);
    },
    // 右键行
    contextmenuRow: function(event, record) {
      console.log(event.target, record);
    },
    // 鼠标移入行
    // eslint-disable-next-line no-unused-vars
    mouseenterRow: function(event, record) {},
    // 鼠标移出行
    // eslint-disable-next-line no-unused-vars
    mouseleaveRow: function(event, record) {} */
  },
  mounted() {
    console.log();
  }
};
</script>

<style lang="less">
/* 要去除 scoped */
/* .resize-table-th {
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
} */
.base-table-wrap {
  background-color: white;
  .base-table {
    // overflow-x: scroll;
    .resize-table-th {
      position: relative;
      .table-draggable-handle {
        border: none;
        position: absolute;
        height: 100% !important;
        left: auto !important;
        right: -5px;
        transform: none !important;
        bottom: 0;
        cursor: col-resize;
        touch-action: none;
      }
    }
    td img {
      width: 100%;
    }
  }
}
.base-table-header-wrap {
  border: 1px solid red;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
}
.base-table-form-wrap {
  border: 1px solid red;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  margin: 1rem 0 2rem;
}
</style>
