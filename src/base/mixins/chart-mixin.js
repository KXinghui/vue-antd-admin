import {
  transDateSetView
  /* VISER_CHART_TYPE */
} from "../components/Charts/Viser/viser-utils";

/* 图表 */
export const CHART_MIXIN = {
  data() {
    return {
      data: null
    };
  },
  props: {
    chartType: {
      type: [String],
      default: "Base",
      require: false
      /* validator: function(value) {
        return VISER_CHART_TYPE.indexOf(value) !== -1;
      } */
    },
    sourceData: {
      type: [Array],
      default: function() {
        return [];
      },
      require: true
    },
    transformOptions: {
      type: [Object],
      default: function() {
        return { type: "", fields: [], key: "", value: "" };
      },
      require: true
    },
    scaleOptions: {
      type: [Array],
      default: function() {
        return [];
      },
      require: true
    },
    /* axispts: {
      type: [Object],
      default: function() {
        return { dataKey10: "", dataKey20: "" };
      },
      require: true
    }, */
    tooltipOptions: {
      type: [Object],
      default: null,
      require: false
    },
    legendOptions: {
      type: [Object],
      default: function() {
        return { dataKey: "", marker: "", offset: "" };
      },
      require: true
    },
    coordOptions: {
      type: [Object],
      default: function() {
        return { type: "", radius: "", innerRadius: "" };
      },
      require: false
    },
    linePointArea: {
      type: [Object],
      default: function() {
        return {
          position: "",
          color: "",
          size: "",
          shape: ""
        };
      },
      require: true
    }
  },
  methods: {
    hello: function() {
      console.log("hello from mixin!");
    }
  },
  mounted() {
    this.data = transDateSetView(this.sourceData, this.transformOptions);
  }
};
