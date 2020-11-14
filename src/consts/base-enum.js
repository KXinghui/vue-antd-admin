export class BaseEnum {
  id;
  name;
  value;
  constructor(id, name, value) {
    this.id = id;
    this.name = name;
    this.value = value;
  }
  static enums(id, name, value) {
    return new BaseEnum(id, name, value);
  }
  equals(enums) {
    return (this.value == enums) | (this.name == enums);
  }
}

export class IdentityTypeEnum extends BaseEnum {
  static USERNAME = this.enums(0, "USERNAME", "UserName");
  static PASSWORD = this.enums(1, "PASSWORD", "Password");
  static MAIL = this.enums(2, "MAIL", "Mail");
  static MOBILE = this.enums(3, "MOBILE", "Mobile");
  static SCAN_CODE = this.enums(4, "SCAN_CODE", "ScanCode");
  static GITHUB = this.enums(5, "GITHUB", "Github");
  static WECHAT = this.enums(6, "WECHAT", "WeChat");
  static QQ = this.enums(7, "QQ", "QQ");
  static MICRO_BLOG = this.enums(8, "MICRO_BLOG", "MicroBlog");
}
