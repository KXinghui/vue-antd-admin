<template>
  <div ref="test">
    <a-button class="btn" @click="test">
      测试
    </a-button>

    <a-upload-dragger
      name="file"
      :multiple="true"
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      @change="handleChange"
    >
      <p class="ant-upload-drag-icon">
        <a-icon type="inbox" />
      </p>
      <p class="ant-upload-text">
        Click or drag file to this area to upload
      </p>
      <p class="ant-upload-hint">
        Support for a single or bulk upload. Strictly prohibit from uploading
        company data or other band files
      </p>
    </a-upload-dragger>
    <!-- <cropper></cropper> -->
    <a-input v-model="text"></a-input>
    <qr-code :text="text"></qr-code>
    <icon-selector
      selectNum="5"
      :selectedIcons.sync="selectedIcons"
    ></icon-selector>
    <trianglify width="600" height="400"></trianglify>
    <identity-avatar-cropper :identity="identity"></identity-avatar-cropper>

    <!-- <template v-slot="viewer">
        <identity-avatar :></identity-avatar>
      </template> -->
  </div>
</template>

<script>
import { fileToBase64 } from "@utils/utils";
import { md5, hashFile } from "@utils/spark-md5-utils";
import QRCode from "../../../components/QRCode";
import { screenshot } from "../../../utils/file-utils";
// import Cropper from "../../../components/Cropper";
import IconSelector from "../../../components/Icon/IconSelector";
import Trianglify from "../../../components/Trianglify";
import IdentityAvatarCropper from "../../../components/Identity/IdentityAvatarCropper";
import { mapState } from "vuex";

export default {
  name: "Test",
  components: {
    "qr-code": QRCode,
    IconSelector,
    Trianglify,
    IdentityAvatarCropper
  },
  data() {
    return {
      cropperData: {},
      htmlRef: this.$refs.test,
      text: "https://webqr.com/create.html",
      selectedIcons: []
    };
  },
  methods: {
    handleChange(info) {
      const status = info.file.status;
      console.log(info.file.originFileObj);
      console.log(fileToBase64(info.file.originFileObj));
      hashFile(info.file.originFileObj);
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        this.$message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    },
    test() {
      md5("asdasdf");
      screenshot(null, {}, "screenshot.jpeg").then(res => {
        console.log(res);
      });
    }
  },
  computed: {
    ...mapState({
      identity: state => state.identity.identity
    })
  },
  mounted() {
    this.htmlRef = this.$refs["test"].$el;
  },
  updated() {
    console.log(this.selectedIcons);
  }
};
</script>

<style></style>
