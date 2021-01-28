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
  static of(enumName) {
    let enumObj = new BaseEnum();
    for (let enumClass in this) {
      let enums = [
        this[enumClass]["id"],
        this[enumClass]["name"],
        this[enumClass]["value"]
      ];
      if (enums.includes(enumName)) {
        enumObj = this[enumClass];
      }
    }
    return enumObj;
  }
  static selectOptions(name = "desc", value = "id") {
    let selectOptions = [];
    for (let enumClass in this) {
      selectOptions.push({
        enum: this[enumClass],
        name: this[enumClass][name],
        value: this[enumClass][value]
      });
    }
    return selectOptions;
  }
}

export class BaseMappingEnum extends BaseEnum {
  mapping;
  constructor(id, name, value, desc, mapping) {
    super(id, name, value, desc);
    this.mapping = mapping;
  }
  static enums(id, name, value, desc, mapping) {
    return new BaseMappingEnum(id, name, value, desc, mapping);
  }
  static of(enumName) {
    let enumObj = new BaseMappingEnum();
    for (let enumClass in this) {
      let enums = [
        this[enumClass]["id"],
        this[enumClass]["name"],
        this[enumClass]["value"],
        this[enumClass]["mapping"]
      ];
      if (enums.includes(enumName)) {
        enumObj = this[enumClass];
      }
    }
    return enumObj;
  }
}

export class IdentityTypeEnum extends BaseMappingEnum {
  static USERNAME = this.enums(0, "USERNAME", "UserName", "用户名", "username");
  static PASSWORD = this.enums(1, "PASSWORD", "Password", "密码", "password");
  static MAIL = this.enums(2, "MAIL", "Mail", "邮箱", "mail");
  static MOBILE = this.enums(3, "MOBILE", "Mobile", "手机", "mobile");
  static SCAN_CODE = this.enums(4, "SCAN_CODE", "ScanCode", "扫码", "scanCode");
  static GITHUB = this.enums(5, "GITHUB", "GitHub", "GitHub", "github");
  static GITEE = this.enums(6, "GITEE", "Gitee", "Gitee", "gitee");
  static OSCHINA = this.enums(7, "OSCHINA", "OSChina", "开源中国", "oschina");
  static DINGTALK = this.enums(8, "DINGTALK", "DingTalk", "钉钉", "dingtalk");
  static ALIPAY = this.enums(9, "ALIPAY", "Alipay", "支付宝", "alipay");
  static WECHAT = this.enums(10, "WECHAT", "WeChat", "微信", "wechat");
  static QQ = this.enums(11, "QQ", "QQ", "qq", "qq");
  static MICRO_BLOG = this.enums(
    12,
    "MICRO_BLOG",
    "MicroBlog",
    "微博",
    "microblog"
  );
}

export class IdentityRoleEnum extends BaseMappingEnum {
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
