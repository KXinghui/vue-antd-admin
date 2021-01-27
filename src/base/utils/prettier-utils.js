const prettier = require("prettier");

export function format(code, options) {
  return prettier.format(code, options);
}

export function formatBabel(code) {
  return format(code, { parser: "babel" });
}

export function formatVue(code) {
  return format(code, { parser: "vue" });
}

export function check(code, options) {
  return prettier.check(code, options);
}

export function getSupportInfo() {
  console.log(JSON.stringify(prettier.getSupportInfo()));
}
