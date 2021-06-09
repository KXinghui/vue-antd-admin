<template>
  <div class="cropper-wrap">
    <div v-if="cropperData.loaded" class="cropper-editor" @dblclick="dblclick">
      <img
        :id="cropperRef"
        :ref="cropperRef"
        :alt="cropperData.name"
        :src="cropperData.url"
        @loadstart="start"
        @load="start"
      />
      <div class="cropper-tooler">
        <slot name="tooler">
          <a-button type="primary">
            <a-icon type="picture" />
          </a-button>
          <a-button type="primary" @click="setDragMode('move')">
            <a-icon type="drag" />
          </a-button>
          <a-button type="primary" @click="setDragMode('crop')">
            <icon icon="IconFont_crop"></icon>
          </a-button>
          <a-button type="primary" @click="enable">
            <a-icon :type="cropperEnable ? 'lock' : 'unlock'" />
          </a-button>

          <a-button type="primary" @click="clear">
            <a-icon type="reload" />
          </a-button>
          <a-button type="primary" @click="reset">
            <a-icon type="sync" />
          </a-button>

          <a-button-group>
            <a-button type="primary" @click="move(0, -10)">
              <a-icon type="arrow-up" />
            </a-button>
            <a-button type="primary" @click="move(0, 10)">
              <a-icon type="arrow-down" />
            </a-button>
            <a-button type="primary" @click="move(-10, 0)">
              <a-icon type="arrow-left" />
            </a-button>
            <a-button type="primary" @click="move(10, 0)">
              <a-icon type="arrow-right" />
            </a-button>
          </a-button-group>

          <a-button type="primary" @click="rotate(-45)">
            <a-icon type="undo" />
          </a-button>
          <a-button type="primary" @click="rotate(45)">
            <a-icon type="redo" />
          </a-button>
          <a-button type="primary" @click="zoom(0.1)">
            <a-icon type="zoom-in" />
          </a-button>
          <a-button type="primary" @click="zoom(-0.1)">
            <a-icon type="zoom-out" />
          </a-button>
          <a-button type="primary" @click="scale(-1)">
            <a-icon type="column-width" />
          </a-button>
          <a-button type="primary" @click="scale(0, -1)">
            <a-icon type="column-height" />
          </a-button>

          <a-button type="primary" @click="previewCropped">
            <a-icon type="eye" />
          </a-button>
          <a-button type="primary" @click="previewCropped">
            <a-icon type="download" />
          </a-button>
          <a-button type="primary" @click="uploadCropped">
            <a-icon type="upload" />
          </a-button>
        </slot>
      </div>
    </div>
    <div
      v-else
      class="cropper-loader"
      @drop="drop"
      @dragover="dragover"
      @change="change"
    >
      <slot name="loader">
        <input type="file" @change="change" />
      </slot>
    </div>
    <base-modal
      :modalVisible.sync="previewModal.visible"
      :modalRefresh="previewModal.refresh"
      :modalLoading.sync="previewModal.loading"
    >
      <div class="cropper-viewer">
        <slot name="viewer" v-bind="previewUrl">
          <img :src="previewUrl" />
        </slot>
      </div>
    </base-modal>
  </div>
</template>

<script>
import "cropperjs/dist/cropper.css";
import Cropper from "cropperjs";
import BaseModal from "@components/Antd/Modal/BaseModal";
import { blobToDataURL } from "@utils/file-utils";

const URL = window.URL || window.webkitURL;

export default {
  name: "Cropper",
  components: { BaseModal },
  data() {
    return {
      cropperRef: "cropper-" + this._uid,
      defaultOptions: {
        viewMode: 1,
        autoCrop: false,
        dragMode: "move",
        background: false,
        aspectRatio: 16 / 9
      },
      cropperEnable: true,
      canvasData: null,
      cropBoxData: null,
      croppedData: null,
      previewModal: {
        visible: false,
        loading: false,
        refresh: false
      },
      previewUrl: null
    };
  },
  props: {
    options: {
      type: [Object],
      default() {
        return this.defaultOptions;
      },
      required: false
    },
    cropperData: {
      type: [Object],
      default() {
        return {};
      },
      required: false
    }
  },
  methods: {
    read(files) {
      return new Promise((resolve, reject) => {
        if (!files || files.length === 0) {
          resolve();
          return;
        }
        debugger;
        const file = files[0];

        if (/^image\/\w+$/.test(file.type)) {
          if (URL) {
            resolve({
              loaded: true,
              name: file.name,
              type: file.type,
              url: URL.createObjectURL(file)
            });
          } else {
            reject(new Error("Your browser is not supported."));
          }
        } else {
          reject(new Error("Please choose an image file."));
        }
      });
    },
    change({ target }) {
      this.read(target.files)
        .then(cropperData => {
          target.value = "";
          this.update(cropperData);
        })
        .catch(e => {
          target.value = "";
          console.log("读取图片错误  " + e);
        });
    },
    drop(e) {
      e.preventDefault();
      this.read(e.dataTransfer.files)
        .then(cropperData => {
          this.update(cropperData);
        })
        .catch();
    },
    dragover(e) {
      e.preventDefault();
    },
    dblclick(e) {
      if (e.target.className.indexOf("cropper-face") >= 0) {
        e.preventDefault();
        e.stopPropagation();
        this.crop();
      }
    },
    start() {
      debugger;
      const { cropperData } = this;

      if (cropperData.cropped || this.cropper) {
        return;
      }
      const image =
        document.getElementById(this.cropperRef) || this.$refs[this.cropperRef];
      this.cropper = new Cropper(image, this.cropperOptions);
      // this.cropper = cropper;
    },
    crop() {
      const { cropper, cropperData } = this;

      if (cropperData.cropping) {
        this.croppedData = cropper.getData();
        this.canvasData = cropper.getCanvasData();
        this.cropBoxData = cropper.getCropBoxData();
        this.update({
          cropped: true,
          cropping: false,
          previousUrl: cropperData.url,
          url: cropper
            .getCroppedCanvas(
              cropperData.type === "image/png"
                ? {}
                : {
                    fillColor: "#fff"
                  }
            )
            .toDataURL(cropperData.type)
        });
        this.destroy();
      }
    },
    reset() {
      this.cropper && this.cropper.reset();
      this.update({
        cropped: false,
        cropping: false,
        loaded: false,
        name: "",
        previousUrl: "",
        type: "",
        url: ""
      });
    },
    clear() {
      this.cropper && this.cropper.clear();
    },
    replace() {},
    setDragMode(dragMode) {
      if (this.cropper && ["crop", "move", "none"].includes(dragMode)) {
        this.cropper.setDragMode(dragMode);
      }
    },
    enable() {
      let isEnable = !this.cropperEnable;
      if (this.cropper) {
        isEnable ? this.cropper.enable() : this.cropper.disable();
        this.cropperEnable = isEnable;
      }
    },
    move(offsetX, offsetY) {
      this.cropper && this.cropper.move(offsetX, offsetY);
    },
    rotate(degree) {
      this.cropper && this.cropper.rotate(degree);
    },
    scale(scaleX, scaleY) {
      this.cropper && this.cropper.scale(scaleX, scaleY);
    },
    zoom(ratio) {
      this.cropper && this.cropper.zoom(ratio);
    },
    getData(rounded) {
      if (this.cropper) {
        // returnObj
        // x: the offset left of the cropped area
        // y: the offset top of the cropped area
        // width: the width of the cropped area
        // height: the height of the cropped area
        // rotate: the rotated degrees of the image
        // scaleX: the scaling factor to apply on the abscissa of the image
        // scaleY: the scaling factor to apply on the ordinate of the image
        return this.cropper.getData(rounded);
      }
    },
    getCropBoxData() {
      if (this.cropper) {
        // left: the offset left of the crop box
        // top: the offset top of the crop box
        // width: the width of the crop box
        // height: the height of the crop box
        return this.cropper.getCropBoxData();
      }
    },
    // 预览裁剪图像
    previewCropped() {
      if (!this.cropper) {
        return;
      }
      let vm = this;
      vm.previewModal.visible = true;
      vm.previewModal.loading = true;
      this.cropper.getCroppedCanvas().toBlob(
        blob => {
          blobToDataURL(blob).then(res => {
            console.log(res);
            vm.previewUrl = res;
            vm.previewModal.loading = false;
          });
        } /*, 'image/png' */
      );
    },
    // 下载裁剪图像
    downloadCropped() {},
    // 上传裁剪图像
    uploadCropped() {
      this.cropper.getCroppedCanvas().toBlob(
        blob => {
          blobToDataURL(blob).then(res => {
            console.log(res);
          });
        } /*, 'image/png' */
      );
    },
    destroy() {
      if (this.cropper) {
        this.cropper.destroy();
        this.cropper = null;
      }
    },
    update(cropperData) {
      this.$emit(
        "update:cropperData",
        Object.assign(this.cropperData, cropperData)
      );
    }
  },
  computed: {
    cropperOptions() {
      return Object.assign(
        {
          //   crop(event) {
          //     console.log(event.detail.x);
          //     console.log(event.detail.y);
          //     console.log(event.detail.width);
          //     console.log(event.detail.height);
          //     console.log(event.detail.rotate);
          //     console.log(event.detail.scaleX);
          //     console.log(event.detail.scaleY);
          //   },
          ready: () => {
            if (this.croppedData) {
              this.cropper
                .crop()
                .setData(this.croppedData)
                .setCanvasData(this.canvasData)
                .setCropBoxData(this.cropBoxData);

              this.croppedData = null;
              this.canvasData = null;
              this.cropBoxData = null;
            }
          },
          crop: ({ detail }) => {
            if (
              detail.width > 0 &&
              detail.height > 0 &&
              !this.cropperData.cropping
            ) {
              this.update({
                cropping: true
              });
            }
          }
        },
        this.options
      );
    }
  },
  destroyed() {
    this.destroy();
  }
};
</script>

<style scoped>
.cropper-wrap {
  width: 100%;
  height: 100%;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cropper-editor > img {
  display: block;
  /* This rule is very important, please don't ignore this */
  max-width: 100%;
}
.cropper-loader {
  border: 1px solid black;
  background-color: red;
  height: 100%;
}
</style>
