<template>
  <div class="qrcode-wrap" :ref="qrcodeRef"></div>
</template>

<script>
import QRCode from "qrcodejs2";

export default {
  name: "QRCode",
  data() {
    return {
      qrcodeRef: `qrcode-${this._uid}`,
      defaultOptions: {
        // width: "100%",
        // height: "100%",
        width: "200",
        height: "200",
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
      }
    };
  },
  props: {
    text: {
      type: [String],
      default: "",
      require: false
    },
    width: {
      type: [Number],
      default: 128,
      require: false
    },
    height: {
      type: [Number],
      default: 128,
      require: false
    },
    options: {
      type: [Object],
      default() {
        return {};
      },
      require: false
    }
  },
  computed: {
    qrcodeOptions() {
      return Object.assign(this.defaultOptions, {
        ...this.options,
        text: this.text,
        width: this.width,
        height: this.height
      });
    }
  },
  methods: {
    initQRCode() {
      this.qrcode = new QRCode(this.$refs[this.qrcodeRef], this.qrcodeOptions);
    },
    makeQRCode() {
      this.qrcode & this.qrcode.makeCode(this.text);
    },
    destroyQRCode() {
      this.qrcode && this.qrcode.clear();
      delete this.qrcode;
    }
  },
  watch: {
    text() {
      this.makeQRCode();
    },
    options() {
      this.initQRCode();
    }
  },
  mounted() {
    this.initQRCode();
  },
  destroyed() {
    this.destroyQRCode();
  }
};
</script>

<style></style>
