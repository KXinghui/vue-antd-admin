// 表单搜索、重置
// 【批量】新增/编辑[单元格编辑|行内编辑]/删除
// able 启用|禁用
/**
 * 封装Table
 * [https://www.cnblogs.com/cirry/p/12459729.html]
 *
 * 右键菜单
 * 【https://www.jb51.net/article/174741.htm】
 */
export const TABLE_MIXIN = {
  data() {
    let vm = this;
    // this.tableComponents = {
    //   header: {
    //     cell: (h, props, children) => {
    //       const { key, ...restProps } = props;
    //       const col = this.columns.find(col => {
    //         const k = col.dataIndex || col.key;
    //         return col.isResize && k === key;
    //       });
    //       // const col = draggingMap[key];
    //       if (!col || !col.width) {
    //         return h("th", { ...restProps }, [...children]);
    //       }
    //       const dragProps = {
    //         key: col.dataIndex || col.key,
    //         class: "table-draggable-handle",
    //         attrs: {
    //           w: 10,
    //           x: col.width,
    //           z: 1,
    //           axis: "x",
    //           draggable: true,
    //           resizable: false
    //         },
    //         on: {
    //           dragging: x => {
    //             debugger;
    //             let colWidth = Math.max(x, 1);
    //             if (col.minWidth && col.minWidth > colWidth) {
    //               col.width = col.minWidth;
    //               return;
    //             }
    //             if (col.maxWidth && col.maxWidth < colWidth) {
    //               col.width = col.maxWidth;
    //               return;
    //             }
    //             col.width = colWidth;
    //           }
    //         }
    //       };
    //       const drag = h("vue-draggable-resizable", { ...dragProps });
    //       return h("th", { ...restProps, class: "resize-table-th" }, [
    //         ...children,
    //         drag
    //       ]);
    //     }
    //   }
    // };
    return {
      // 设置对话框
      settingModalVisible: false,
      isBatch: false,
      columns: [],
      /* 伸缩列 */
      draggingMap: {},
      contextmenuId: `contextmenu${this._uid}`,
      contextmenuRecord: {},
      contextmenuVisible: false,
      contextmenuStyle: {
        position: "absolute",
        top: "0",
        left: "0",
        zIndex: 1,
        borderRadius: "5px",
        border: "1px solid #eee"
      },
      table: {
        rowKey: "id"
      },
      customRow: record => ({
        props: {},
        on: {
          // 事件
          click: event => {
            vm.clickRow(event, record);
          },
          dblclick: event => {
            vm.dblclickRow(event, record);
          },
          contextmenu: event => {
            vm.contextmenuRow(event, record);
          },
          mouseenter: event => {
            vm.mouseenterRow(event, record);
          },
          mouseleave: event => {
            vm.mouseleaveRow(event, record);
          }
        }
      }),
      currentRecord: null
    };
  },
  props: {
    /* contextmenuRecord: {
      type: [Object],
      default() {
        return {};
      },
      require: false
    } */
  },
  computed: {
    tableComponents() {
      return {
        header: {
          cell: (h, props, children) => {
            const { key, ...restProps } = props;
            const col = this.columns.find(col => {
              const k = col.dataIndex || col.key;
              return col.isResize && k === key;
            });
            // const col = draggingMap[key];
            if (!col || !col.width) {
              return h("th", { ...restProps }, [...children]);
            }
            const dragProps = {
              key: col.dataIndex || col.key,
              class: "table-draggable-handle",
              attrs: {
                w: 10,
                x: col.width,
                z: 1,
                axis: "x",
                draggable: true,
                resizable: false
              },
              on: {
                dragging: x => {
                  debugger;
                  let colWidth = Math.max(x, 1);
                  if (col.minWidth && col.minWidth > colWidth) {
                    col.width = col.minWidth;
                    return;
                  }
                  if (col.maxWidth && col.maxWidth < colWidth) {
                    col.width = col.maxWidth;
                    return;
                  }
                  col.width = colWidth;
                }
              }
            };
            const drag = h("vue-draggable-resizable", { ...dragProps });
            return h("th", { ...restProps, class: "resize-table-th" }, [
              ...children,
              drag
            ]);
          }
        }
      };
    },
    rowSelection() {
      return {
        columnTitle: "选择",
        // 把选择框列固定在左边	boolean	-
        fixed: true,
        // 选择框的默认属性配置	Function(record)	-
        // eslint-disable-next-line no-unused-vars
        getCheckboxProps: record => {},
        // 去掉『全选』『反选』两个默认选项	boolean	false
        hideDefaultSelections: true,
        // 指定选中项的 key 数组，需要和 onChange 进行配合	string[]	[]
        selectedRowKeys: [],
        // 自定义选择配置项, 设为 true 时使用默认选择项	object[]|boolean	true
        selections: true,
        // 多选/单选，checkbox or radio	string	checkbox
        type: "checkbox",
        // 选中项发生变化时的回调	Function(selectedRowKeys, selectedRows)	-
        // eslint-disable-next-line no-unused-vars
        onChange: (selectedRowKeys, selectedRows) => {
          this.rowSelection.selectedRowKeys = selectedRowKeys;
        },
        // 用户手动选择/取消选择某列的回调	Function(record, selected, selectedRows, nativeEvent)	-
        // eslint-disable-next-line no-unused-vars
        onSelect: (record, selected, selectedRows, nativeEvent) => {},
        // 用户手动选择/取消选择所有列的回调	Function(selected, selectedRows, changeRows)	-
        // eslint-disable-next-line no-unused-vars
        onSelectAll: (selected, selectedRows, changeRows) => {},
        // 用户手动选择反选的回调	Function(selectedRows)	-
        // eslint-disable-next-line no-unused-vars
        onSelectInvert: selectedRows => {},
        onSelectChange: selectedRowKeys => {
          console.log(typeof selectedRowKeys);
          console.log("selectedRowKeys changed: ", selectedRowKeys);
          this.rowSelection.selectedRowKeys = selectedRowKeys;
        }
      };
    }
  },
  methods: {
    ableBatchOp() {
      this.isBatch = !this.isBatch;
    },
    // eslint-disable-next-line no-unused-vars
    customRowFunc: function(event, record) {
      // console.log("事件 " + JSON.stringify(event.type));
      // console.log("记录 " + JSON.stringify(record));
    },
    // 单击行
    clickRow: function(event, record) {
      this.customRowFunc(event, record);
      if (this.isBatch) {
        let selectedRowKey = record[this.table.rowKey];
        let selectedRowKeys = this.rowSelection.selectedRowKeys;
        let index = selectedRowKeys.indexOf(selectedRowKey);
        if (index == -1) {
          selectedRowKeys.push(selectedRowKey);
        } else {
          selectedRowKeys.splice(index, 1);
        }
      }
    },
    // 双击行
    dblclickRow: function(event, record) {
      this.customRowFunc(event, record);
    },
    // 右键行
    // 右键行菜单【https://www.jb51.net/article/174741.htm】
    contextmenuRow: function(event, record) {
      debugger;
      this.customRowFunc(event, record);
      let contextmenu = document.getElementById(this.contextmenuId);
      this.contextmenuVisible = true;
      let contextmenuWidth = contextmenu
        ? contextmenu.clientWidth || contextmenu.offsetWidth
        : 0;
      let contextmenuHeight = contextmenu
        ? contextmenu.clientHeight || contextmenu.offsetHeight
        : 0;
      event.preventDefault();
      let windowWidth =
        window.innerWidth || document.documentElement.clientWidth;
      let windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      this.contextmenuRecord = record;
      let eventClientX = event.clientX;
      let eventClientY = event.clientY;
      this.contextmenuStyle.top =
        (eventClientY + contextmenuHeight > windowHeight
          ? eventClientY - contextmenuHeight
          : eventClientY) + "px";
      this.contextmenuStyle.left =
        (eventClientX + contextmenuWidth > windowWidth
          ? eventClientX - contextmenuWidth
          : eventClientX) + "px";
      document.addEventListener("click", this.cancelContextmenu);
    },
    //取消行右键菜单
    cancelContextmenu() {
      this.contextmenuVisible = false;
      this.contextmenuRecord = null;
      document.body.removeEventListener("click", this.cancelContextmenu);
    },
    // 鼠标移入行
    // eslint-disable-next-line no-unused-vars
    mouseenterRow: function(event, record) {
      this.customRowFunc(event, record);
    },
    // 鼠标移出行
    // eslint-disable-next-line no-unused-vars
    mouseleaveRow: function(event, record) {
      this.customRowFunc(event, record);
    }
  },
  mounted() {
    // 表格可伸缩列 不使用JSX【https://www.jianshu.com/p/89b8ccd1eca0】
    this.columns.forEach(col => {
      if (col.isResize) {
        this.draggingMap[col.key] = col;
      }
    });
  }
};
