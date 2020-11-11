const DataSet = require("@antv/data-set");

export function transDateSetView(sourceData, transformOptions) {
  const dv = new DataSet.View().source(sourceData);
  dv.transform(transformOptions);
  const data = dv.rows;
  return data;
}

export let VISER_CHART_TYPE_MAP = new Map();
/* 雷达图 */
export const VISER_CHART_RADAR_TYPE = ["radar_base", "radar_line"];
VISER_CHART_TYPE_MAP.set("BaseRadarMap", "基础雷达图");
VISER_CHART_TYPE_MAP.set("LineRadarMap", "线性雷达图");
// VISER_CHART_TYPE_MAP.set("CurvilineRadarMap", "曲线雷达图");
/* 雷达图 */
export const VISER_CHART_PIE_TYPE = [
  "pie_base",
  "pie_in_text",
  "pie_base_ring"
];
VISER_CHART_TYPE_MAP.set("BasePieMap", "基础饼图");
VISER_CHART_TYPE_MAP.set("InTextPieMap", "基础饼图-内部文本");
VISER_CHART_TYPE_MAP.set("BaseRingPieMap", "环饼图");
// VISER_CHART_TYPE_MAP.set("CurvilineRadarMap", "曲线雷达图");

export const VISER_CHART_TYPE = [
  ...VISER_CHART_PIE_TYPE,
  ...VISER_CHART_RADAR_TYPE
];
/* 
<v-tooltip :show-title="false" :item-tpl="tooltipOpts.itemTpl" />
tooltipOption 
isShowTitle
itemTpl

*/
