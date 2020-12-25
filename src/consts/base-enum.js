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
    return (this.id == enums) | (this.value == enums) | (this.name == enums);
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

export class IdentityRoleEnum extends BaseEnum {
  mapping;
  constructor(id, name, value, mapping) {
    super(id, name, value);
    this.mapping = mapping;
  }
  static USER = this.enums(0, "USER", "user", "user");
  static SYS_USER = this.enums(1, "SYS_USER", "sysuser", "sysUser");
  static CHAT_USER = this.enums(2, "CHAT_USER", "chatuser", "chatUser");
}
