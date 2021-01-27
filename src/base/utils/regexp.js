// i	执行对大小写不敏感的匹配。
// g	执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）。
// m	执行多行匹配。

// var patt=new RegExp(pattern,modifiers);

// var patt=/pattern/modifiers;

// pattern（模式） 描述了表达式的模式
// modifiers(修饰符) 用于指定全局匹配、区分大小写的匹配和多行匹配(i g m)

// eslint-disable-next-line no-useless-escape
export const REGEX_URL = /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/g;

// export const REGEX_URL = new RegExp(
//   "/^((https?|ftp|file)://)?([da-z.-]+).([a-z.]{2,6})([/w .-]*)*/?$",
//   "g"
// );
export const REGEX_MOBILE = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/g;

export const REGEX_MAIL = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/g;

export function test(regex, str) {
  if (!(regex instanceof RegExp)) {
    return false;
  }
  return regex.test(str);
}

//test(REGEX_ID_CARD, "441900199511854520"); // false
//test(REGEX_MOBILE, "13416666812"); // true
