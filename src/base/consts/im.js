import { BaseEnum } from "./base-enum";

export class ChatRecordTypeEnum extends BaseEnum {
  static CHAT_FRIEND = this.enums(0, "CHAT_FRIEND", "ChatFreind");
  static CHAT_GROUP = this.enums(1, "CHAT_GROUP", "ChatGroup");
}

export class ChatMsgTypeEnum extends BaseEnum {
  static HTML = this.enums(0, "HTML", "Html");
  static FILE = this.enums(1, "FILE", "File");
  static DYNAMIC = this.enums(2, "DYNAMIC", "Dynamic");
  static RECORD = this.enums(3, "RECORD", "Record");
  static BIZ_CARD = this.enums(4, "BIZ_CARD", "BizCard");
}

export class ChatGroupResourceEnum extends BaseEnum {
  static MANAGER = this.enums(0, "MANAGER", "Manager");
  static MEMBER = this.enums(1, "MEMBER", "Member");
  static QR_CODE = this.enums(2, "QR_CODE", "QRCode");
  static BIZ_CARD = this.enums(3, "BIZ_CARD", "BizCard");
}

export class ChatSubjectTypeEnum extends BaseEnum {
  static CHAT_USER = this.enums(0, "CHAT_USER", "ChatUser");
  static CHAT_GROUP = this.enums(1, "CHAT_GROUP", "ChatGroup");
}
