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
    //
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
      baseTableRef: `baseTable${this._uid}`,
      settingModalVisible: false,
      // columns: [],
      /* 伸缩列 */
      // draggingMap: {},
      contextmenuId: `contextmenu${this._uid}`,
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
      })
      // rowSelection2: {
      //   columnTitle: "选择",
      //   columnWidth: "100",
      //   // 把选择框列固定在左边	boolean	-
      //   fixed: true,
      //   // 选择框的默认属性配置	Function(record)	-
      //   // eslint-disable-next-line no-unused-vars
      //   getCheckboxProps: record => {},
      //   // 去掉『全选』『反选』两个默认选项	boolean	false
      //   hideDefaultSelections: false,
      //   // 指定选中项的 key 数组，需要和 onChange 进行配合	string[]	[]
      //   selectedRowKeys: [],
      //   // 自定义选择配置项, 设为 true 时使用默认选择项	object[]|boolean	true
      //   selections: false,
      //   // 多选/单选，checkbox or radio	string	checkbox
      //   type: "checkbox",
      //   // 选中项发生变化时的回调	Function(selectedRowKeys, selectedRows)	-
      //   // eslint-disable-next-line no-unused-vars
      //   onChange: (selectedRowKeys, selectedRows) => {
      //     console.log(selectedRowKeys);
      //     this.rowSelection.selectedRowKeys = selectedRowKeys;
      //   }
      //   // 用户手动选择/取消选择某列的回调	Function(record, selected, selectedRows, nativeEvent)	-
      //   // eslint-disable-next-line no-unused-vars
      //   // onSelect: (record, selected, selectedRows, nativeEvent) => {},
      //   // 用户手动选择/取消选择所有列的回调	Function(selected, selectedRows, changeRows)	-
      //   // eslint-disable-next-line no-unused-vars
      //   // onSelectAll: (selected, selectedRows, changeRows) => {
      //   //   console.log("全选");
      //   // },
      //   // 用户手动选择反选的回调	Function(selectedRows)	-
      //   // eslint-disable-next-line no-unused-vars
      //   // onSelectInvert: selectedRows => {
      //   //   console.log("反选");
      //   // }
      // }
    };
  },
  props: {
    isScrollRefresh: {
      typoe: [Boolean],
      default: false,
      requrire: false
    },
    loading: {
      typoe: [Boolean],
      default: false,
      requrire: false
    },
    isBatch: {
      typoe: [Boolean],
      default: false,
      requrire: false
    },
    isShowBatch: {
      typoe: [Boolean],
      default: true,
      requrire: false
    },
    rowKey: {
      typoe: [String],
      default: "id",
      requrire: false
    },
    rowSelectionType: {
      typoe: [String],
      default: "checkbox",
      requrire: false,
      validator(value) {
        return ["checkbox", "radio"].includes(value);
      }
    },
    selectedRowKeys: {
      typoe: [Array],
      default() {
        return [];
      },
      requrire: false
    },
    data: {
      typoe: [Array],
      default() {
        return [];
      },
      requrire: false
    },
    columns: {
      typoe: [Array],
      default() {
        return [];
      },
      requrire: false
    },
    pagination: {
      typoe: [Object],
      default() {
        // let vm = this;
        return {
          total: 0,
          pageSize: NaN,
          disabled: false,
          hideOnSinglePage: false,
          pageSizeOptions: ["5", "10", "20", "30", "40"],
          showLessItems: false,
          showQuickJumper: true,
          showSizeChanger: true,
          //showTotal:
          simple: false,
          onChange: (page, pageSize) => {
            this.$emit("changePage", page, pageSize);
          },
          onShowSizeChange: (current, pageSize) => {
            this.$emit("changePage", current, pageSize);
          }
        };
      },
      requrire: false
    }
  },
  computed: {
    // 表格可伸缩列 不使用JSX【https://www.jianshu.com/p/89b8ccd1eca0】
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
      if (!this.isBatch) {
        return null;
      }
      let vm = this;
      return {
        // columnTitle: "选择",
        columnWidth: "50",
        fixed: false,
        hideDefaultSelections: false,
        type: this.rowSelectionType,
        selectedRowKeys: this.selectedRowKeys,
        // eslint-disable-next-line no-unused-vars
        onChange(selectedRowKeys, selectedRows) {
          vm.$emit("update:selectedRowKeys", selectedRowKeys);
        },
        // 用户手动选择/取消选择某列的回调	Function(record, selected, selectedRows, nativeEvent)	-
        // eslint-disable-next-line no-unused-vars
        onSelect(record, selected, selectedRows, nativeEvent) {},
        // 用户手动选择/取消选择所有列的回调	Function(selected, selectedRows, changeRows)	-
        // eslint-disable-next-line no-unused-vars
        onSelectAll(selected, selectedRows, changeRows) {},
        // 用户手动选择反选的回调	Function(selectedRows)	-
        // eslint-disable-next-line no-unused-vars
        onSelectInvert(selectedRows) {}
      };
    }
    /* columnScopedSlots(){
      this.column.map
    } */
  },
  methods: {
    ableBatchOp(rowSelectionType) {
      let curIsBatch = this.isBatch;
      let curRowSelectionType = this.rowSelectionType;
      let isBatch =
        curRowSelectionType != rowSelectionType ? true : !curIsBatch;
      this.$emit("update:rowSelectionType", rowSelectionType);
      this.$emit("update:isBatch", isBatch);
      if (!isBatch) {
        this.$emit("update:selectedRowKeys", []);
      }
      // this.isBatch = !this.isBatch;
    },
    // eslint-disable-next-line no-unused-vars
    customRowFunc: function(event, record) {
      // this.$emit("update:currentRecord", record);
      this.$emit(`${event.type}"`, record);
      // console.log("事件 " + JSON.stringify(event.type));
      // console.log("记录 " + JSON.stringify(record));
    },
    // 单击行
    clickRow: function(event, record) {
      this.customRowFunc(event, record);
      // 批量
      if (this.isBatch) {
        let selectedRowKey = record[this.table.rowKey];
        // 数组复制 Array.from
        let selectedRowKeys = [...this.selectedRowKeys];
        let index = selectedRowKeys.indexOf(selectedRowKey);
        let isInclude = index != -1;
        // 单选
        if (this.rowSelectionType == "radio") {
          selectedRowKeys = isInclude ? [] : [selectedRowKey];
        } else {
          // 多选
          if (isInclude) {
            selectedRowKeys.splice(index, 1);
          } else {
            selectedRowKeys.push(selectedRowKey);
          }
        }
        this.$emit("update:selectedRowKeys", selectedRowKeys);
      }
    },
    // 双击行
    dblclickRow: function(event, record) {
      this.customRowFunc(event, record);
    },
    // 右键行
    // 右键行菜单【https://www.jb51.net/article/174741.htm】
    contextmenuRow: function(event, record) {
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
      // let windowWidth =
      //   window.screen.availWidth ||
      //   window.innerWidth ||
      //   document.documentElement.clientWidth;
      // let windowHeight =
      //   window.screen.availHeight ||
      //   window.innerHeight ||
      //   document.documentElement.clientHeight;
      // let eventClientX = event.clientX;
      // let eventClientY = event.clientY;
      // this.contextmenuStyle.top =
      //   (eventClientY + contextmenuHeight > windowHeight
      //     ? eventClientY - contextmenuHeight
      //     : eventClientY) + "px";
      // this.contextmenuStyle.left =
      //   (eventClientX + contextmenuWidth > windowWidth
      //     ? eventClientX - contextmenuWidth
      //     : eventClientX) + "px";
      let eventClientX = event.clientX;
      let eventClientY = event.clientY;
      console.log(document.getElementById(this.baseTableRef));
      let tableWidth = this.$refs[this.baseTableRef].offsetWidth;
      let tableHeight = this.$refs[this.baseTableRef].offsetHeight;
      let windowWidth =
        window.screen.availWidth ||
        window.innerWidth ||
        document.documentElement.clientWidth;
      let windowHeight =
        window.screen.availHeight ||
        window.innerHeight ||
        document.documentElement.clientHeight;
      console.log(tableWidth + "======" + tableHeight);
      console.log(windowWidth + "======" + windowHeight);
      let x = eventClientX - (windowWidth - tableWidth);
      let y = eventClientY * (tableHeight / windowHeight);
      this.contextmenuStyle.top =
        (y + contextmenuHeight > tableHeight ? y - contextmenuHeight : y) +
        "px";
      this.contextmenuStyle.left =
        (x + contextmenuWidth > tableWidth ? x - contextmenuWidth : x) + "px";
      console.log(x + "======" + y);
      document.addEventListener("click", this.cancelContextmenu);
      console.log(this.contextmenuStyle.top);
      console.log(this.contextmenuStyle.left);
    },
    //取消行右键菜单
    cancelContextmenu() {
      this.contextmenuVisible = false;
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
  watch: {
    data() {
      this.isScrollRefresh = true;
    }
  },
  mounted() {
    // 表格可伸缩列 不使用JSX【https://www.jianshu.com/p/89b8ccd1eca0】
    /* this.columns.forEach(col => {
      if (col.isResize) {
        this.draggingMap[col.key] = col;
      }
    }); */
    console.log("columns " + JSON.stringify(this.columns));
  }
};
