export const FORM_MODEL_ITEMS = [
  /* 自动完成 AutoComplete */
  "a-auto-complete",
  /* 级联选择 */
  "a-cascader",
  /* 多选框 CheckBox */
  "a-checkbox",
  "a-checkbox-group",
  /* 日期选择框 DatePicker */
  "a-date-picker",
  "a-range-picker",
  "a-month-picker",
  "a-week-picker",
  /* 输入框 Input */
  "a-input",
  "a-input-password",
  "a-textarea",
  "a-input-search",
  /* 单选框 Radio */
  "a-radio",
  "a-radio-group",
  /* 评分 Rate */
  "a-rate",
  /* 选择器 Select */
  "a-select",
  "a-select-option",
  /* 滑动输入条 Slider */
  "a-slider",
  /* 开关 Switch */
  "a-switch",
  /* 时间选择框 TimePicker */
  "a-time-picker",
  /* 树选择 TreeSelect */
  "a-tree-select",
  "a-tree-select-node",
  /* 上传 Upload */
  "a-upload",
  "a-upload-dragger"
];

export async function getAComponent() {
  let ant = await import("ant-design-vue");
  console.log(ant);
}

// import {
//   AutoComplete,
//   /* 级联选择 */
//   Cascader,
//   /* 多选框 CheckBox */
//   Checkbox,
//   CheckboxGroup,
//   /* 日期选择框 DatePicker */
//   DatePicker,
//   RangePicker,
//   MonthPicker,
//   WeekPicker,
//   /* 输入框 Input */
//   Input,
//   InputPassword,
//   Textarea,
//   InputSearch,
//   /* 单选框 Radio */
//   Radio,
//   RadioGroup,
//   /* 评分 Rate */
//   Rate,
//   /* 选择器 Select */
//   Select,
//   SelectOption,
//   /* 滑动输入条 Slider */
//   Slider,
//   /* 开关 Switch */
//   Switch,
//   /* 时间选择框 TimePicker */
//   TimePicker,
//   /* 树选择 TreeSelect */
//   TreeSelect,
//   TreeSelectNode,
//   /* 上传 Upload */
//   Upload,
//   UploadDragger
// } from "ant-design-vue";
