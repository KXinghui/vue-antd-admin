export class BaseEnum {
  id;
  name;
  value;
  desc;
  constructor(id, name, value, desc) {
    this.id = id;
    this.name = name;
    this.value = value;
    this.desc = desc;
  }

  static enums(id, name, value, desc) {
    return new BaseEnum(id, name, value, desc);
  }
  equals(enums) {
    return (this.id == enums) | (this.value == enums) | (this.name == enums);
  }
  static selectOptions(name = "desc", value = "id") {
    let selectOptions = [];
    for (let enumClass in this) {
      selectOptions.push({
        name: this[enumClass][name],
        value: this[enumClass][value]
      });
    }
    return selectOptions;
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
  constructor(id, name, value, desc, mapping) {
    super(id, name, value, desc);
    this.mapping = mapping;
  }
  static USER = this.enums(0, "USER", "user", "用户", "user");
  static SYS_USER = this.enums(1, "SYS_USER", "sysuser", "系统用户", "sysUser");
  static CHAT_USER = this.enums(
    2,
    "CHAT_USER",
    "chatuser",
    "聊天用户",
    "chatUser"
  );
}
