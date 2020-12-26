import { BaseEnum } from "./base-enum";

export class NoteTypeEnum extends BaseEnum {
  static ORIGINAL = this.enums(0, "ORIGINAL", "Original", "原创");
  static REPRINT = this.enums(1, "CHAT_GROUP", "Reprint", "转载");
  static TRANSLATE = this.enums(2, "TRANSLATE", "Translate", "翻译");
}
