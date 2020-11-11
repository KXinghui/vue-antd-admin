import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import hljs from "highlight.js";

export const OPTION = { usageStatistics: false };

export const DEFAULT_OPTIONS = {
  minHeight: "300px",
  language: "en-US",
  useCommandShortcut: true,
  useDefaultHTMLSanitizer: true,
  usageStatistics: false,
  hideModeSwitch: false,
  toolbarItems: [
    "heading",
    "bold",
    "italic",
    "strike",
    "divider",
    "hr",
    "quote",
    "divider",
    "ul",
    "ol",
    "task",
    "indent",
    "outdent",
    "divider",
    "table",
    "image",
    "link",
    "divider",
    "code",
    "codeblock"
  ],
  plugins: [[codeSyntaxHighlight, { hljs }]]
};
