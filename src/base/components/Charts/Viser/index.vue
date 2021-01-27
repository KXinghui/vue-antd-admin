<template>
  <div class="viser-wrp">
    <div class="viser1">
      <v-chart :force-fit="true" :height="height" :data="data" :scale="scale">
        <v-tooltip />

        <v-axis
          v-if="chartType === ''"
          :data-key="axis1Opts.dataKey"
          :line="axis1Opts.line"
          :tick-line="axis1Opts.tickLine"
          :grid="axis1Opts.grid"
        />
        <v-axis
          v-if="chartType === ''"
          :data-key="axis2Opts.dataKey"
          :line="axis2Opts.line"
          :tick-line="axis2Opts.tickLine"
          :grid="axis2Opts.grid"
        />

        <v-legend data-key="city" />
        <v-smooth-line position="month*temperature" color="city" :size="8" />
      </v-chart>
    </div>
  </div>
</template>

<script>
import { transDateSetView } from "./viser-utils";
/* import { CHART_MIXIN } from "@mixins/chart-mixin"; */

/* 公有变量 */

const sourceData = [
  { month: "Jan", Tokyo: 7.0, London: 3.9 },
  { month: "Feb", Tokyo: 6.9, London: 4.2 },
  { month: "Mar", Tokyo: 9.5, London: 5.7 },
  { month: "Apr", Tokyo: 14.5, London: 8.5 },
  { month: "May", Tokyo: 18.4, London: 11.9 },
  { month: "Jun", Tokyo: 21.5, London: 15.2 },
  { month: "Jul", Tokyo: 25.2, London: 17.0 },
  { month: "Aug", Tokyo: 26.5, London: 16.6 },
  { month: "Sep", Tokyo: 23.3, London: 14.2 },
  { month: "Oct", Tokyo: 18.3, London: 10.3 },
  { month: "Nov", Tokyo: 13.9, London: 6.6 },
  { month: "Dec", Tokyo: 9.6, London: 4.8 }
];

const data = transDateSetView(sourceData, {
  type: "fold",
  fields: ["Tokyo", "London"],
  key: "city",
  value: "temperature"
});
const scale = [
  {
    dataKey: "percent",
    min: 0,
    formatter: ".2%"
  }
];

export default {
  name: "Chart",
  /* mixins: [CHART_MIXIN], */
  data() {
    return {
      data,
      scale,
      height: 400,
      padding: [20, 20, 50, 50],
      pos: ["2014-01", 1750]
    };
  },
  props: {
    // chartType: {}
  },
  mounted() {
    this.setStyle();
  },
  methods: {
    setStyle() {
      const id = "legend-html";
      if (document.getElementById(id)) {
        return;
      }
      const styleTxt = `
          .g2-label-item {
              font-size: 12px;
              text-align: center;
              line-height: 1.5;
          }

          .g2-label-item-value {
              color: #595959;
          }

          .g2-label-item-percent {
              color: #8c8c8c;
          }
        `;
      const style = document.createElement("style");
      style.setAttribute("id", id);
      style.innerHTML = styleTxt;
      document.getElementsByTagName("head")[0].appendChild(style);
    }
  }
};
</script>

<style scoped>
/* .viser-wrp {
}
.viser-wrp .viser1 {
   height: 200px; 
} */
</style>
