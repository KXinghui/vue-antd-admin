<template>
  <div>
    <v-chart :force-fit="true" :height="height" :data="data" :scale="scale">
      <v-tooltip :show-title="false" data-key="item*percent" />
      <v-axis />
      <v-legend data-key="item" />
      <v-pie
        position="percent"
        color="item"
        :v-style="pieStyle"
        :label="labelConfig"
      />
      <v-coord type="theta" />
    </v-chart>
  </div>
</template>

<script>
const DataSet = require("@antv/data-set");

const sourceData = [
  { item: "事例一", count: 40 },
  { item: "事例二", count: 21 },
  { item: "事例三", count: 17 },
  { item: "事例四", count: 13 },
  { item: "事例五", count: 9 }
];

const scale = [
  {
    dataKey: "percent",
    min: 0,
    formatter: ".0%"
  }
];

const dv = new DataSet.View().source(sourceData);
dv.transform({
  type: "percent",
  field: "count",
  dimension: "item",
  as: "percent"
});
const data = dv.rows;

export default {
  data() {
    return {
      data,
      scale,
      height: 400,
      pieStyle: {
        stroke: "#fff",
        lineWidth: 1
      },
      labelConfig: [
        "percent",
        {
          formatter: (val, item) => {
            return item.point.item + ": " + val;
          },
          offset: -40,
          textStyle: {
            rotate: 0,
            textAlign: "center",
            shadowBlur: 2,
            shadowColor: "rgba(0, 0, 0, .45)"
          }
        }
      ]
    };
  }
};
</script>
