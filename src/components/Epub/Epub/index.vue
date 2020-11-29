<template>
  <div class="epub-wrap">
    <div class="epub-book-wrap" :id="epubWrap"></div>
    <div class="epub-mask" v-if="isFlowPage">
      <div class="epub-mask-prev" @click="prevPage">
        <slot name="prev"></slot>
      </div>
      <div class="epub-mask-center" @click="onClickCenter">
        <slot name="center"></slot>
      </div>
      <div class="epub-mask-next" @click="nextPage">
        <slot name="next"></slot>
      </div>
    </div>
    <div class="epub-loading" v-show="isLoadBook">
      <slot name="loading"></slot>
    </div>
  </div>
</template>

<script>
import ePub, { Book } from "epubjs";
export default {
  name: "Epub",
  data() {
    return {
      epubWrap: "epub-" + this._uid,
      defaultRenditionOptions: {
        method: "continuous",
        flow: "auto",
        width: "100%",
        height: "100%"
      }
    };
  },
  props: {
    isLoadBook: {
      type: [Boolean],
      default: false,
      required: false
    },
    book: {
      type: [Object],
      default() {
        return null;
      },
      required: false
    },
    url: {
      type: [String, ArrayBuffer],
      default: "https://s3.amazonaws.com/epubjs/books/alice/OPS/package.opf",
      required: false
    },
    renderManager: {
      type: [String],
      default: "",
      required: false,
      validator(value) {
        return ["default", "continuous"].includes(value);
      }
    },
    renderFlow: {
      type: [String],
      default: "",
      required: false,
      validator(value) {
        return ["auto", "paginated", "scrolled-doc"].includes(value);
      }
    },
    bookOptions: {
      type: [Object],
      default() {
        return {};
      },
      required: false
    },
    renditionOptions: {
      type: [Object],
      default() {
        return this.defaultRenditionOptions;
      },
      required: false
    },
    bookTheme: {
      type: [String],
      default: "default",
      required: false
    },
    bookThemes: {
      type: [Array],
      default() {
        return [
          {
            name: "default",
            style: {
              body: { color: "black", background: "white" }
            }
          },
          {
            name: "eye",
            style: {
              body: { color: "black", background: "#cee" }
            }
          },
          {
            name: "night",
            style: {
              body: { color: "white", background: "black" }
            }
          }
        ];
      },
      required: false
    },
    fontSize: {
      type: [String],
      default: "16px",
      required: false
    },
    progress: {}
  },
  computed: {
    epubBookOptions() {
      return Object.assign(this.defaultBookOptions, this.bookOptions);
    },
    epubRenditionOptions() {
      return Object.assign(this.defaultRenditionOptions, {
        flow: this.renderFlow,
        manager: this.renderManager,
        ...this.renditionOptions
      });
    },
    isFlowPage() {
      return this.epubRenditionOptions.flow != "scrolled-doc";
    }
  },
  methods: {
    initEpub() {
      // JavaScript 文件如何转 ArrayBuffer
      let book = (this.book =
        ePub(this.url, this.epubBookOptions) ||
        new Book(this.url, this.epubBookOptions));
      book
        .ready()
        .then(() => {
          this.navigation = book.loaded.navigation;
          return book.locations.generate();
        })
        .then(() => {
          this.$emit("update:book", book);
          this.$emit("update:isLoadBook", false);
          // 获取Locations对象
          this.locations = book.locations;
        });
      let rendition = (this.rendition = book.renderTo(
        this.epubWrap,
        this.epubRenditionOptions
      ));
      let themes = (this.themes = rendition.themes);
      this.bookThemes.forEach(bookTheme => {
        themes.register(bookTheme.name, bookTheme.style);
      });
      themes.select(this.bookTheme);
      themes.fontSize(this.fontSize);
      rendition.display();
    },
    destroyEpub() {
      this.rendition && this.rendition.destroy();
      this.themes && this.themes.destroy();
    },
    onClickCenter() {
      this.$emit("center");
    },
    prevPage() {
      if (this.isFlowPage) {
        this.rendition && this.rendition.prev();
      }
    },
    nextPage() {
      if (this.isFlowPage) {
        this.rendition && this.rendition.next();
      }
    }
  },
  watch: {
    epubRenditionOptions() {
      let book = this.book;
      if (book) {
        let rendition = (this.rendition = book.renderTo(
          this.epubWrap,
          this.epubRenditionOptions
        ));
        rendition.display();
      }
    },
    progress() {
      let locations = this.locations;
      if (locations) {
        // 将百分比转化为小数形式
        const percentage = this.progress / 100;
        // 获取百分比对应的EpubCFI
        const location =
          percentage > 0 ? locations.cfiFromPercentage(percentage) : 0;
        // 跳转到百分比对应的电子书位置
        this.rendition && this.rendition.display(location);
      }
    }
  },
  mounted() {
    this.initEpub();
  },
  destroyed() {
    this.destroyEpub();
  }
};
</script>

<style>
.epub-wrap {
  position: relative;
}
.epub-book-wrap {
  position: absolute;
}
.epub-mask,
.epub-loading {
  border: 1px solid red;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.epub-mask-center {
  border: 1px solid red;
  width: 60%;
  height: 100%;
}
.epub-mask-prev,
.epub-mask-next {
  border: 1px solid red;
  width: 20%;
  height: 100%;
}
</style>
