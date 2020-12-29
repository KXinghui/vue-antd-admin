//default values
var defaultOptions = {
  themeable: true,
  position: "top",
  margin: "10px",
  float: "right",
  fontsize: "0.9em",
  color: "rgb(90,90,90)",
  language: "english",
  defaultTheme: "vue",
  themes: [
    { title: "vue", href: "//cdn.jsdelivr.net/npm/docsify/lib/themes/vue.css" },
    {
      title: "buble",
      href: "//cdn.jsdelivr.net/npm/docsify/lib/themes/buble.css"
    },
    {
      title: "dark",
      href: "//cdn.jsdelivr.net/npm/docsify/lib/themes/dark.css"
    },
    {
      title: "pure",
      href: "//cdn.jsdelivr.net/npm/docsify/lib/themes/pure.css"
    },
    {
      title: "dolphin",
      href: "//cdn.jsdelivr.net/npm/docsify/lib/themes/dolphin.css"
    }
  ]
};

var countDefaultOptions = {
  countable: true,
  position: "top",
  margin: "10px",
  float: "right",
  fontsize: "0.9em",
  color: "rgb(90,90,90)",
  language: "english",
  isExpected: true
};

function selectTheme(themeTitle) {
  let curThemeLink =
    document.getElementById("theme") || document.querySelector(`link[title]`);
  // curThemeLink.parentElement.replaceChild(link, curThemeLink);
  defaultOptions.themes.forEach(theme => {
    if (theme.title === themeTitle) {
      curThemeLink.setAttribute("href", theme.href);
      return false;
    }
  });
}

// Docsify plugin functions
// eslint-disable-next-line no-unused-vars
function plugin(hook, vm) {
  if (!defaultOptions.themeable) {
    return;
  }
  let wordsCount;
  hook.beforeEach(function(content) {
    // Match regex every time you start parsing .md
    wordsCount = content.match(/([\u4e00-\u9fa5]+?|[a-zA-Z0-9]+)/g).length;
    return content;
  });
  hook.afterEach(function(html, next) {
    let str = wordsCount + " words";
    let readTime = Math.ceil(wordsCount / 400) + " min";
    //Determine whether to use the Chinese style according to the attribute "language"
    if (countDefaultOptions.language === "chinese") {
      str = wordsCount + " 字";
      readTime = Math.ceil(wordsCount / 400) + " 分钟";
    }

    //add html string
    selectTheme(defaultOptions.defaultTheme);
    let themeLi = "";
    defaultOptions.themes.forEach(theme => {
      if (theme.title && theme.href) {
        themeLi += `<li class="theme-li" onclick="selectTheme('${theme.title}')"><span title="${theme.title}"> ${theme.title}</span></li>`;
      }
    });
    let themeHtml = `<div class="app-nav theme-ul">
    <ul><li><img class="emoji" src="https://github.githubassets.com/images/icons/emoji/unicode/1f45a.png" alt="theme"> 主题<ul>
    ${themeLi}
    </ul></li></ul>
    </div>`;
    //add html string
    next(
      `
        ${defaultOptions.position === "bottom" ? html : ""}
        <div style="margin-${defaultOptions.position ? "bottom" : "top"}: ${
        defaultOptions.margin
      };">
            <span style="
                  float: ${defaultOptions.float === "right" ? "right" : "left"};
                  font-size: ${defaultOptions.fontsize};">
            ${str}
            ${
              countDefaultOptions.isExpected ? `&nbsp; | &nbsp;${readTime}` : ""
            }
            </span>
            ${themeHtml}
            <div style="clear: both"></div>
        </div>
        ${defaultOptions.position !== "bottom" ? html : ""}
        `
    );
  });
}

// Docsify plugin options
window.$docsify["theme"] = Object.assign(
  defaultOptions,
  window.$docsify["theme"]
);
window.$docsify["count"] = Object.assign(
  countDefaultOptions,
  window.$docsify["count"]
);
window.$docsify.plugins = [].concat(plugin, window.$docsify.plugins);
