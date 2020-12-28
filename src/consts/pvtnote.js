import { BaseEnum } from "./base-enum";

export class NoteTypeEnum extends BaseEnum {
  static ORIGINAL = this.enums(0, "ORIGINAL", "Original", "原创");
  static REPRINT = this.enums(1, "REPRINT", "Reprint", "转载");
  static TRANSLATE = this.enums(2, "TRANSLATE", "Translate", "翻译");
}

export class GroupStationEnum extends BaseEnum {
  static PRIVATE_STATION = this.enums(
    0,
    "PRIVATE_STATION",
    "PrivateStation",
    "私人站"
  );
  static ENCRYP_STATION = this.enums(
    1,
    "ENCRYP_STATION",
    "EncrypStation",
    "加密站"
  );
  static RECYCLE_STATION = this.enums(
    2,
    "RECYCLE_STATION",
    "RecycleStation",
    "回收站"
  );
  static EXHIBITION_STATION = this.enums(
    3,
    "EXHIBITION_STATION",
    "ExhibitionStation",
    "展示站"
  );
}
