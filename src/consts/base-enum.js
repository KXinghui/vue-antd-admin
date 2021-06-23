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
    if (enumName || enumName == 0) {
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
    if (enumName || enumName == 0) {
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
    }
    return enumObj;
  }
}

export class GenderEnum extends BaseEnum {
  static FEMALE = this.enums(0, "FEMALE", "FeMale", "女");
  static MALE = this.enums(1, "MALE", "Male", "男");
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
  static BAIDU = this.enums(13, "BAIDU", "Baidu", "百度", "baidu");
  static WECHAT_MP = this.enums(14, "WeChatMP", "微信小程序", "wechatmp");
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

export class EnDeCryptModeEnum extends BaseEnum {
  static NON = this.enums(0, "NON", "Non", "非加解密模式");
  static SYMMETRIC = this.enums(1, "SYMMETRIC", "Symmetric", "对称加解密模式");
  static ASYMMETRIC = this.enums(
    2,
    "ASYMMETRIC",
    "Asymmetric",
    "非对称加解密模式"
  );
  static MIX = this.enums(3, "MIX", "Mix", "混合加解密模式");
}
