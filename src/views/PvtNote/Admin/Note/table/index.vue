<template>
  <div class="note-table">
    <!-- 搜索表单 -->

    <!-- 表格 -->
    <base-table
      :selectedRowKeys.sync="selectedRowKeys"
      :row-selection-type="rowSelectionType"
      :data="data"
      :columns="columns"
      @changePage="changePage"
    >
      <!-- 操作栏 -->
      <div slot="header" class="operation-bar">
        <!-- size="small" -->
        <a-button v-has-pmsn="{ key: 'enCode', pmsns: ['List'] }" type="primary"
          ><icon icon="Antd_search"></icon>搜索</a-button
        >
        <a-button
          v-has-pmsn="{ key: 'enCode', pmsns: ['Insert'] }"
          type="primary"
          @click="openModal('Insert')"
          ><icon icon="Antd_plus"></icon>增加</a-button
        >
        <a-button
          v-has-pmsn="{ key: 'enCode', pmsns: ['Update'] }"
          type="primary"
          @click="openModal('Update')"
          ><icon icon="Antd_edit"></icon>更新</a-button
        >
        <a-button
          v-has-pmsn="{ key: 'enCode', pmsns: ['Delete'] }"
          type="danger"
          ><icon icon="Antd_delete"></icon>删除</a-button
        >
        <a-button
          v-has-pmsn="{ key: 'enCode', pmsns: ['Import'] }"
          type="primary"
          ><icon icon="Antd_import"></icon>导入</a-button
        >
        <a-button
          v-has-pmsn="{ key: 'enCode', pmsns: ['Export'] }"
          type="primary"
          ><icon icon="Antd_export"></icon>导出</a-button
        >
        <a-button type="primary"
          ><icon icon="Antd_setting"></icon>设置</a-button
        >
        <a-button type="primary" @click="reload"
          ><icon icon="Antd_reload"></icon>刷新</a-button
        >
      </div>
      <!-- Unexpected mixed usage of different slot syntaxes -->
      <!-- <template v-slot:contextmenu="{ record }">
      <span>{{ record }}</span>
      <span>{{ record }}</span>
    </template> -->
      <template v-slot:title="record">
        <span> {{ record.title }}</span>
      </template>
      <template v-slot:coverUrl="record">
        <img class="img-response" :src="record.coverUrl" />
      </template>
      <div slot="action" slot-scope="text, record">
        {{ record }}
        <a href="javascript:;">Delete</a>
        <a href="javascript:;">Add</a>
        <a href="javascript:;">Update</a>
      </div>
      <!-- <template v-slot:contextmenu>
      右键菜单
    </template> -->
      <!--  <template v-slot:title>
        我是表格标题
      </template>
      <template v-slot:footer>
        我是表格尾部
      </template> -->
    </base-table>
    <base-modal
      :modalRefresh.sync="modalRefresh"
      :modalVisible.sync="modalVisible"
      :modalTitle="modalTitle"
      :modalLoading.sync="modalLoading"
    >
      <template v-if="form === 'Insert'">
        增加
        <!-- <base-form :formModel="formModel"> -->
        <a-form-model
          :model="formModel"
          :layout="formOption.layout"
          v-bind="formItemLayout"
        >
          <a-form-model-item label="本地账号">
            <a-input
              v-model="formModel.localAccount"
              placeholder="用户名/手机/邮箱"
              allow-clear
            />
          </a-form-model-item>
          <a-form-model-item label="密码">
            <a-input-password
              v-model="formModel.password"
              placeholder="密码"
              allow-clear
            />
          </a-form-model-item>
          <a-form-model-item>
            <a-button type="primary" @click="registerByLocalAccount">
              注册
            </a-button>
          </a-form-model-item>
          <!-- </base-form> -->
        </a-form-model>
      </template>
      <template v-if="form === 'Update'">更新</template>
      <template slot="footer"> </template>
    </base-modal>
  </div>
</template>

<script>
import BaseTable from "../../../../../components/Table/BaseTable.vue";
import BaseModal from "../../../../../components/Antd/Modal/BaseModal";
import { FORM_MIXIN } from "../../../../../mixins/form-mixin";
// import BaseForm from "../../../../../components/Antd/Modal/BaseModal.vue";

export default {
  name: "NoteTableView",
  mixins: [FORM_MIXIN],
  components: { BaseTable, /* BaseForm, */ BaseModal },
  data() {
    return {
      form: "",
      formModel: { localAccount: "sentinel", password: "12321654" },
      rowSelectionType: "checkbox",
      selectedRowKeys: [],
      columns: [
        {
          title: "标题",
          dataIndex: "title",
          key: "title",
          scopedSlots: { customRender: "title" },
          width: 200,
          isResize: true,
          minWidth: 50,
          maxWidth: 300,
          ellipsis: true,
          fixed: "",
          align: "center"
        },
        {
          title: "封面图",
          dataIndex: "coverUrl",
          scopedSlots: { customRender: "coverUrl" },
          width: 100,
          isResize: true,
          minWidth: 100,
          maxWidth: 300,
          ellipsis: true
        },
        {
          title: "副标题",
          dataIndex: "subTitle",
          width: 100,
          isResize: true,
          minWidth: 100,
          maxWidth: 300
        },
        {
          title: "Action",
          dataIndex: "action",
          key: "action",
          scopedSlots: { customRender: "action" },
          width: 200,
          isResize: true,
          minWidth: 100,
          maxWidth: 300
        }
      ],
      data: [
        {
          id: "001",
          title: "SpringBoot Vue PVTNOTE",
          coverUrl:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3708925153,3035744045&fm=26&gp=0.jpg",
          amount: 120,
          type: "income",
          note: "transfer"
        },
        {
          id: "002",
          title: "SpringBoot Vue PVTNOTE",
          coverUrl:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3708925153,3035744045&fm=26&gp=0.jpg",
          amount: 243,
          type: "income",
          note: "transfer"
        },
        {
          id: "003",
          title: "SpringBoot Vue PVTNOTE",
          coverUrl:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3708925153,3035744045&fm=26&gp=0.jpg",
          amount: 98,
          type: "income",
          note: "transfer"
        },
        {
          id: "004",
          title: "SpringBoot Vue PVTNOTE",
          coverUrl:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3708925153,3035744045&fm=26&gp=0.jpg",
          amount: 98,
          type: "income",
          note: "transfer"
        },
        {
          id: "005",
          title: "SpringBoot Vue PVTNOTE",
          coverUrl:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3708925153,3035744045&fm=26&gp=0.jpg",
          amount: 98,
          type: "income",
          note: "transfer"
        },
        {
          id: "006",
          title: "SpringBoot Vue PVTNOTE",
          coverUrl:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3708925153,3035744045&fm=26&gp=0.jpg",
          amount: 98,
          type: "income",
          note: "transfer"
        }
      ],
      modalRefresh: false,
      modalVisible: false,
      modalTitle: "",
      modalLoading: true
    };
  },
  methods: {
    registerByLocalAccount() {},
    reload() {
      this.reload();
    },
    openModal(form) {
      console.log("打开表单：" + form);
      // TODO 设置modal属性
      this.form = form;
      this.modalLoading = false;
      this.modalVisible = true;
      this.modalRefresh = true;
      if (form === "Insert") {
        this.modalTitle = "增加便签";
      } else if (form === "Update") {
        this.modalTitle = "更新便签";
      }
      /* setTimeout(() => {
        this.modalLoading = false;
      }, 4000); */
    },
    changePage(page, pageSize) {
      console.log("当前页码为： " + page + "当前每页条数为： " + pageSize);
    }
  }
};
</script>

<style></style>
