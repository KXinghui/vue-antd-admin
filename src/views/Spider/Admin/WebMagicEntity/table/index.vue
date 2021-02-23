<template>
  <div class="web-magic-entity-table">
    <!-- 表格 -->
    <base-table
      :isBatch.sync="isBatch"
      :selectedRowKeys.sync="selectedRowKeys"
      :row-selection-type.sync="rowSelectionType"
      :data="data"
      :columns="columns"
      @changePage="changePage"
    >
      <div slot="tableForm">
        <!-- <base-form :formModel="noteQuery"> </base-form> -->
        <a-form-model :model="noteQuery" layout="inline">
          <!-- v-bind="formItemLayout" -->
          <a-form-model-item label="标题">
            <a-input v-model="noteQuery.title" placeholder="标题" allow-clear />
          </a-form-model-item>
          <a-form-model-item label="副标题">
            <a-input
              v-model="noteQuery.subTitle"
              placeholder="副标题"
              allow-clear
            />
          </a-form-model-item>
          <!--  {{ enums["NoteTypeEnum"] }} -->
          <!-- style="width: 100%" -->
          <a-form-model-item label="便签类型">
            <a-select
              mode="multiple"
              placeholder="便签类型"
              @change="changeNoteTypes"
            >
              <a-select-option
                v-for="noteType in enums['NoteTypeEnumOptions']"
                :key="noteType.value"
                :value="noteType.value"
              >
                {{ noteType.name }}
              </a-select-option>
            </a-select>
          </a-form-model-item>

          <a-form-model-item :wrapper-col="buttonItemLayout.wrapperCol">
            <a-dropdown>
              <a-button
                v-has-pmsn="{ key: 'enCode', pmsns: ['List'] }"
                type="primary"
                block
              >
                搜索
              </a-button>
              <a-menu slot="overlay">
                <a-menu-item key="0">
                  <!-- <a-button type="primary" block> -->
                  模糊搜索
                  <!-- </a-button> -->
                </a-menu-item>
                <a-menu-item key="1">
                  <!-- <a-button type="primary" block> -->
                  精确搜索
                  <!-- </a-button> -->
                </a-menu-item>
              </a-menu>
            </a-dropdown>
          </a-form-model-item>
        </a-form-model>
      </div>
      <!-- 操作栏 -->
      <div slot="tableHeader">
        <!-- size="small" -->
        <a-button
          v-has-pmsn="{ key: 'enCode', pmsns: ['Insert'] }"
          type="primary"
          @click="openModal('Insert')"
          ><icon icon="Antd_plus"></icon>增加</a-button
        >
        <a-button
          :disabled="!selectedRowKeys || selectedRowKeys.length != 1"
          v-has-pmsn="{ key: 'enCode', pmsns: ['Update'] }"
          type="primary"
          @click="openModal('Update')"
          ><icon icon="Antd_edit"></icon>更新</a-button
        >
        <a-button
          :disabled="!selectedRowKeys || selectedRowKeys.length == 0"
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
      <template v-slot:groupStationEnum="record">
        {{ enums["GroupStationEnum"].of(record.groupStationEnum).desc }}
      </template>
      <template v-slot:title="record">
        <span :title="record.title">{{ record.title }}</span>
      </template>
      <template v-slot:coverUrl="record">
        <img class="img-response" :src="record.coverUrl" />
      </template>
      <template v-slot:noteTypeEnum="record">
        <a-tag v-if="enums['NoteTypeEnum'].of(record.noteTypeEnum)">
          {{ enums["NoteTypeEnum"].of(record.noteTypeEnum).desc }}
        </a-tag>
      </template>
      <template v-slot:action="">
        <a href="javascript:;">Delete</a>
        <a href="javascript:;">Add</a>
        <a href="javascript:;">Update</a>
      </template>
      <!-- <template v-slot:contextmenu>
      右键菜单
    </template> -->
      <template v-slot:tableTitle>
        我是表格标题
      </template>
      <template v-slot:tableFooter>
        我是表格尾部
      </template>
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
import BaseTable from "@components/Table/BaseTable.vue";
import BaseModal from "@components/Antd/Modal/BaseModal";
import { FORM_MIXIN } from "@mixins/form-mixin";

export default {
  name: "WebMagicEntityView",
  mixins: [FORM_MIXIN],
  components: { BaseTable, /* BaseForm, */ BaseModal },
  data() {
    return {
      isBatch: false,
      // enums: {
      //   NoteTypeEnum,
      //   NoteTypeEnumOptions: NoteTypeEnum.selectOptions(),
      //   GroupStationEnum,
      //   GroupStationEnumOptions: GroupStationEnum.selectOptions()
      // },
      noteQuery: { title: "", subTitle: "" },
      form: "",
      formModel: { localAccount: "sentinel", password: "12321654" },
      rowSelectionType: "radio",
      selectedRowKeys: [],
      columns: [
        {
          title: "分组站",
          dataIndex: "groupStationEnum",
          scopedSlots: { customRender: "groupStationEnum" },
          width: 50,
          isResize: true,
          minWidth: 50,
          maxWidth: 300,
          ellipsis: true,
          align: "center"
        },
        {
          title: "标题",
          dataIndex: "title2",
          scopedSlots: { customRender: "title" },
          width: 100,
          isResize: true,
          minWidth: 50,
          maxWidth: 300,
          ellipsis: true,
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
          ellipsis: true,
          align: "center"
        },
        {
          title: "副标题",
          dataIndex: "subTitle",
          width: 100,
          isResize: true,
          minWidth: 100,
          maxWidth: 300,
          ellipsis: true,
          align: "center"
        },
        {
          title: "便签类型",
          dataIndex: "noteTypeEnum",
          scopedSlots: { customRender: "noteTypeEnum" },
          width: 50,
          isResize: true,
          minWidth: 100,
          maxWidth: 300,
          ellipsis: true,
          align: "center"
        } /* ,
        {
          title: "Action",
          dataIndex: "action",
          key: "action",
          scopedSlots: { customRender: "action" },
          width: 200,
          isResize: true,
          minWidth: 100,
          maxWidth: 300,
          ellipsis: true,
          align: "center"
        } */
      ],
      data: [
        {
          id: "001",
          groupStationEnum: "PRIVATE_STATION",
          title:
            "SpringBoot Vue PVTNOTESpringBoot Vue PVTNOTESpringBoot Vue PVTNOTESpringBoot Vue PVTNOTE",
          coverUrl:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3708925153,3035744045&fm=26&gp=0.jpg",
          amount: 120,
          type: "income",
          noteTypeEnum: "ORIGINAL"
        },
        {
          id: "002",
          groupStationEnum: "PRIVATE_STATION",
          title: "SpringBoot Vue PVTNOTE",
          coverUrl:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3708925153,3035744045&fm=26&gp=0.jpg",
          amount: 243,
          type: "income",
          noteTypeEnum: "ORIGINAL"
        },
        {
          id: "003",
          groupStationEnum: "ENCRYP_STATION",
          title: "SpringBoot Vue PVTNOTE",
          coverUrl:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3708925153,3035744045&fm=26&gp=0.jpg",
          amount: 98,
          type: "income",
          noteTypeEnum: "TRANSLATE"
        },
        {
          id: "004",
          groupStationEnum: "RECYCLE_STATION",
          title: "SpringBoot Vue PVTNOTE",
          coverUrl:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3708925153,3035744045&fm=26&gp=0.jpg",
          amount: 98,
          type: "income",
          noteTypeEnum: "REPRINT"
        },
        {
          id: "005",
          groupStationEnum: "EXHIBITION_STATION",
          title: "SpringBoot Vue PVTNOTE",
          coverUrl:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3708925153,3035744045&fm=26&gp=0.jpg",
          amount: 98,
          type: "income",
          noteTypeEnum: "TRANSLATE"
        },
        {
          id: "006",
          groupStationEnum: "ENCRYP_STATION",
          title: "SpringBoot Vue PVTNOTE",
          coverUrl:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3708925153,3035744045&fm=26&gp=0.jpg",
          amount: 98,
          type: "income",
          noteTypeEnum: "REPRINT"
        }
      ],
      modalRefresh: false,
      modalVisible: false,
      modalTitle: "",
      modalLoading: true
    };
  },
  methods: {
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
