import moment from "moment";

export { formatDate, relativeDate, date2TimeStamp };

moment.locale("zh-cn");

export const DEFAULT_DATE_PATTERN = "YYYY-MM-DD HH:mm:ss";

/* 日期时间 */

/* 根据指定模板格式化指定日期 */

function formatDate(date, pattern) {
  if (!pattern) {
    pattern = DEFAULT_DATE_PATTERN;
  }
  return moment(date).format(pattern);
}

function relativeDate(date, pattern) {
  if (!pattern) {
    pattern = DEFAULT_DATE_PATTERN;
  }
  return moment(date, pattern).fromNow();
}

function date2TimeStamp(date) {
  if (!date) date = new Date();
  return moment(new Date(date), DEFAULT_DATE_PATTERN).valueOf();
}

/* function timeStamp2Date(timeStamp) {
  return moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
} */
