<template>
  <div>
    <v-chart
      force-fit="true"
      height="500"
      :padding="padding"
      :data="data"
      :scale="scaleOptions"
    >
      <v-tooltip />
      <v-axis
        :data-key="axispts.dataKey10"
        :line="axis1Opts.line"
        :tick-line="axis1Opts.tickLine"
        :grid="axis1Opts.grid"
      />
      <v-axis
        :data-key="axispts.dataKey20"
        :line="axis2Opts.line"
        :tick-line="axis2Opts.tickLine"
        :grid="axis2Opts.grid"
      />
      <v-legend
        :data-key="legendOptions.dataKey"
        :marker="legendOptions.marker"
        :offset="legendOptions.offset"
      />
      <v-coord type="polar" :radius="0.8" />
      <v-line
        :position="linePointArea.position"
        :color="linePointArea.color"
        :size="linePointArea.size"
      />
      <v-point
        :position="linePointArea.position"
        :color="linePointArea.color"
        :size="linePointArea.size"
        :shape="linePointArea.shape"
      />
      <v-area
        v-if="chartType === 'radar_base'"
        :position="linePointArea.position"
        :color="linePointArea.color"
      />
    </v-chart>
  </div>
</template>

<script>
import { CHART_MIXIN } from "../../../mixins/chart-mixin";

const axis1Opts = {
  line: null,
  tickLine: null,
  grid: {
    lineStyle: {
      lineDash: null
    },
    hideFirstLine: false
  }
};
const axis2Opts = {
  line: null,
  tickLine: null,
  grid: {
    type: "polygon",
    lineStyle: {
      lineDash: null
    }
  }
};

export default {
  name: "Radar",
  mixins: [CHART_MIXIN],
  data() {
    return {
      padding: [20, 20, 95, 20],
      axis1Opts,
      axis2Opts
    };
  },
  props: {
    axispts: {
      type: [Object],
      default: function() {
        return { dataKey10: "", dataKey20: "" };
      },
      require: true
    }
  }
};
</script>
