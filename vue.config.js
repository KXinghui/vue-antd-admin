const CompressionPlugin = require("compression-webpack-plugin");
// var WebpackObfuscator = require("webpack-obfuscator");
const AntDesignThemePlugin = require("antd-theme-webpack-plugin");
// const themeColorReplacer = import("@configs/themes");

let proxyObj = {};
proxyObj["/ws"] = {
  ws: true,
  target: "ws://localhost/vue-antd-admin"
};
proxyObj["/"] = {
  ws: false,
  target: "http://localhost:8080/vue-antd-admin",
  changeOrigin: true,
  pathRewrite: {
    "^/": ""
  }
};

const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
// const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

const configureWebpack = {
  plugins: [
    new CompressionPlugin(),
    // themeColorReplacer
    new AntDesignThemePlugin({
      antDir: resolve("./node_modules/ant-design-vue"),
      stylesDir: resolve("./src/styles"),
      varFile: resolve(
        // "./node_modules/ant-design-vue/lib/style/themes/default.less"
        "./src/styles/themes/variables.less"
      ),
      themeVariables: [
        "@primary-color",
        "@secondary-color",
        "@text-color",
        "@text-color-secondary",
        "@heading-color",
        "@layout-header-background",
        "@layout-body-background",
        "@btn-primary-bg",
        "@processing-color"
      ],
      generateOnce: false,
      indexFileName: "index.html",
      // indexFileName: "./public/index.html",
      lessUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/less.js/2.7.2/less.min.js",
      publicPath: "/vue-antd-admin"
      // customColorRegexArray: [] // An array of regex codes to match your custom color variable values so that code can identify that it's a valid color. Make sure your regex does not adds false positives.
    })
    // new CompressionPlugin({
    //   algorithm: "gzip", //'brotliCompress'
    //   test: /\.js$|\.html$|\.css/, // + $|\.svg$|\.png$|\.jpg
    //   threshold: 10240, //对超过10k的数据压缩
    //   deleteOriginalAssets: false //不删除原文件
    // }),
    /* new WebpackObfuscator(
      {
        rotateUnicodeArray: true, // 必须为true
        compact: true, // 紧凑 从输出混淆代码中删除换行符。
        controlFlowFlattening: false, // 此选项极大地影响了运行速度降低1.5倍的性能。 启用代码控制流展平。控制流扁平化是源代码的结构转换，阻碍了程序理解。
        controlFlowFlatteningThreshold: 0.8,
        deadCodeInjection: true, // 此选项大大增加了混淆代码的大小（最多200％） 此功能将随机的死代码块（即：不会执行的代码）添加到混淆输出中，从而使得更难以进行反向工程设计。
        deadCodeInjectionThreshold: 0.5,
        debugProtection: true, // 调试保护  如果您打开开发者工具，可以冻结您的浏览器。
        debugProtectionInterval: true, // 如果选中，则会在“控制台”选项卡上使用间隔强制调试模式，这使得使用“开发人员工具”的其他功能变得更加困难。它是如何工作的？一个调用调试器的特殊代码;在整个混淆的源代码中反复插入。
        disableConsoleOutput: true, // 通过用空函数替换它们来禁用console.log，console.info，console.error和console.warn。这使得调试器的使用更加困难。
        domainLock: [], // 锁定混淆的源代码，使其仅在特定域和/或子域上运行。这使得有人只需复制并粘贴源代码并在别处运行就变得非常困难。多个域和子域可以将代码锁定到多个域或子域。例如，要锁定它以使代码仅在www.example.com上运行添加www.example.com，以使其在example.com的任何子域上运行，请使用.example.com。
        identifierNamesGenerator: "hexadecimal", // 使用此选项可控制标识符（变量名称，函数名称等）的混淆方式。
        identifiersPrefix: "", // 此选项使所有全局标识符都具有特定前缀。
        inputFileName: "",
        log: false,
        renameGlobals: false, // 不要启动 通过声明启用全局变量和函数名称的混淆。
        reservedNames: [], // 禁用模糊处理和生成标识符，这些标识符与传递的RegExp模式匹配。例如，如果添加^ someName，则混淆器将确保以someName开头的所有变量，函数名和函数参数都不会被破坏。
        reservedStrings: [], // 禁用字符串文字的转换，字符串文字与传递的RegExp模式匹配。例如，如果添加^ some * string，则混淆器将确保以某些字符串开头的所有字符串都不会移动到`stringArray`。
        rotateStringArray: true, //
        seed: 0, // 默认情况下（seed = 0），每次混淆代码时都会得到一个新结果（即：不同的变量名，插入stringArray的不同变量等）。如果需要可重复的结果，请将种子设置为特定的整数。
        selfDefending: false, // 此选项使输出代码能够抵抗格式化和变量重命名。如果试图在混淆代码上使用JavaScript美化器，代码将不再起作用，使得理解和修改它变得更加困难。需要紧凑代码设置。
        sourceMap: false, // 请确保不要上传嵌入了内嵌源代码的混淆源代码，因为它包含原始源代码。源映射可以帮助您调试混淆的Java Script源代码。如果您希望或需要在生产中进行调试，可以将单独的源映射文件上载到秘密位置，然后将浏览器指向该位置。
        sourceMapBaseUrl: "", // 这会将源的源映射嵌入到混淆代码的结果中。如果您只想在计算机上进行本地调试，则非常有用。
        sourceMapFileName: "",
        sourceMapMode: "separate",
        stringArray: true, // 将stringArray数组移位固定和随机（在代码混淆时生成）的位置。这使得将删除的字符串的顺序与其原始位置相匹配变得更加困难。如果原始源代码不小，建议使用此选项，因为辅助函数可以引起注意。
        stringArrayEncoding: false, // 此选项可能会略微降低脚本速度。使用Base64或RC4对stringArray的所有字符串文字进行编码，并插入一个特殊的函数，用于在运行时将其解码回来。
        stringArrayThreshold: 0.8, // 您可以使用此设置调整字符串文字将插入stringArray的概率（从0到1）。此设置在大型代码库中很有用，因为对stringArray函数的重复调用会降低代码的速度。
        target: "browser", // 您可以将混淆代码的目标环境设置为以下之一： Browser 、Browser No Eval 、Node 目前浏览器和节点的输出是相同的。
        transformObjectKeys: false, // 转换（混淆）对象键。例如，此代码var a = {enabled：true};使用此选项进行模糊处理时，将隐藏已启用的对象键：var a = {};a [_0x2ae0 [（'0x0'）] = true;。 理想情况下与String Array设置一起使用。
        unicodeEscapeSequence: true // 将所有字符串转换为其unicode表示形式。例如，字符串“Hello World！”将被转换为“'\ x48 \ x65 \ x6c \ x6c \ x6f \ x20 \ x57 \ x6f \ x72 \ x6c \ x64 \ x21”。
      },
      ["abc.js"]
    ) */
  ],
  resolve: {
    extensions: [".js", ".vue", ".json", ".css"],
    alias: {
      [`vue$`]: "vue/dist/vue.esm.js",
      "@": resolve("src"),
      "@views": resolve("src/views"),
      "@layouts": resolve("src/layouts"),
      "@assets": resolve("src/assets"),
      "@utils": resolve("src/utils"),
      "@api": resolve("src/api"),
      "@consts": resolve("src/consts"),
      "@configs": resolve("src/configs"),
      "@components": resolve("src/components"),
      "@router": resolve("src/router"),
      "@mixins": resolve("src/mixins")
    }
  }
};

module.exports = {
  runtimeCompiler: true,
  //部署应用包时的基本 URL
  publicPath: "/vue-antd-admin/",
  productionSourceMap: process.env.NODE_ENV === "production" ? false : true,
  pages: {
    index: {
      // page 的入口
      entry: "src/main.js",
      // 模板来源
      // template: "public/index.html",
      // 在 dist/index.html 的输出
      // filename: "index.html",
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: "Vue Antd Admin"
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      // chunks: ["chunk-vendors", "chunk-common", "index"]
    }
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // "primary-color": "#1DA57A"
        },
        javascriptEnabled: true
      }
    },
    extract: false
  },
  configureWebpack /* : config => {
    if (process.env.NODE_ENV === "production") {
      
    } else {
      // 为开发环境修改配置
      // onfig.plugins = [new MonacoWebpackPlugin()];
      config.resolve.extensions = [".js", ".vue", ".json", ".css"];
      config.resolve.alias = {
        [`vue$`]: "vue/dist/vue.esm.js",
        "@": resolve("src"),
        "@views": resolve("src/views"),
        "@layouts": resolve("src/layouts"),
        "@assets": resolve("src/assets"),
        "@utils": resolve("src/utils"),
        "@api": resolve("src/api"),
        "@consts": resolve("src/consts"),
        "@configs": resolve("src/configs"),
        "@components": resolve("src/components"),
        "@router": resolve("src/router"),
        "@mixins": resolve("src/mixins")
      };
    } */,
  chainWebpack(config) {
    // it can improve the speed of the first screen, it is recommended to turn on preload
    // it can improve the speed of the first screen, it is recommended to turn on preload
    // config.plugin("preload").tap(() => [
    //   {
    //     rel: "preload",
    //     // to ignore runtime.js
    //     // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
    //     fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
    //     include: "initial"
    //   }
    // ]);

    // // when there are many pages, it will cause too many meaningless requests
    // config.plugins.delete("prefetch");

    // set svg-sprite-loader
    config.module
      .rule("svg")
      .exclude.add(resolve("src/icons"))
      .end();
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]"
      })
      .end();
  }
};
