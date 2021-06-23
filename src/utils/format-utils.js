export function toChineseNum(num) {
  if (!["number", "string"].includes(typeof num))
    return console.error("类型错误：应为number类型或者string类型");

  var newnum = String(num).match(/[0-9]/gi);
  if (newnum.length > 10) return console.error("位数过大，无法计算");

  var tmpnewchar = "";
  for (var i = 0; i < newnum.length; i++) {
    switch (newnum[i]) {
      case "0":
        tmpnewchar += "零";
        break;
      case "1":
        tmpnewchar += "一";
        break;
      case "2":
        tmpnewchar += "二";
        break;
      case "3":
        tmpnewchar += "三";
        break;
      case "4":
        tmpnewchar += "四";
        break;
      case "5":
        tmpnewchar += "五";
        break;
      case "6":
        tmpnewchar += "六";
        break;
      case "7":
        tmpnewchar += "七";
        break;
      case "8":
        tmpnewchar += "八";
        break;
      case "9":
        tmpnewchar += "九";
        break;
    }
    switch (newnum.length - i - 1) {
      case 1:
        if (newnum[i] != 0) tmpnewchar = tmpnewchar + "十";
        break;
      case 2:
        if (newnum[i] != 0) tmpnewchar = tmpnewchar + "百";
        break;
      case 3:
        if (newnum[i] != 0) tmpnewchar = tmpnewchar + "千";
        break;
      case 4:
        tmpnewchar = tmpnewchar + "万";
        break;
      case 5:
        if (newnum[i] != 0) tmpnewchar = tmpnewchar + "十";
        break;
      case 6:
        if (newnum[i] != 0) tmpnewchar = tmpnewchar + "百";
        break;
      case 7:
        if (newnum[i] != 0) tmpnewchar = tmpnewchar + "千";
        break;
      case 8:
        tmpnewchar = tmpnewchar + "亿";
        break;
      case 9:
        tmpnewchar = tmpnewchar + "十";
        break;
    }
  }

  while (
    tmpnewchar.search("零零") != -1 ||
    tmpnewchar.search("零亿") != -1 ||
    tmpnewchar.search("亿万") != -1 ||
    tmpnewchar.search("零万") != -1
  ) {
    tmpnewchar = tmpnewchar.replace("零亿", "亿");
    tmpnewchar = tmpnewchar.replace("亿万", "亿");
    tmpnewchar = tmpnewchar.replace("零万", "万");
    tmpnewchar = tmpnewchar.replace("零零", "零");
  }

  if (tmpnewchar.indexOf("一十") == 0) {
    tmpnewchar = tmpnewchar.substr(1);
  }

  if (tmpnewchar.lastIndexOf("零") == tmpnewchar.length - 1) {
    tmpnewchar = tmpnewchar.substr(0, tmpnewchar.length - 1);
  }
  return tmpnewchar;
}
