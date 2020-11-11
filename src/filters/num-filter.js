export { formatNum, limitNum };

/* 数字格式化 */
function formatNum(num, scale) {
  if (Number.isNaN(num)) return 0;
  if (Number.isNaN(scale)) scale = 0;
  return num.toFixed(scale);
}

const DEFAULT_MAX_NUM = 99;

/* 数字限制化 */
function limitNum(num, maxNum) {
  if (Number.isNaN(num)) return num;
  if (Number.isNaN(maxNum)) maxNum = DEFAULT_MAX_NUM;
  if (num > maxNum) {
    return `${maxNum}+`;
  }
  return num;
}
