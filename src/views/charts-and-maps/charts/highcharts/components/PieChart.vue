<template>
  <div>
    <highcharts class="hc" :options="chartOptions" ref="chart"></highcharts>
  </div>
</template>

<script>
import Highcharts from "highcharts";
import exportingInit from "highcharts/modules/exporting";
import { Chart } from "highcharts-vue";
import { getDataExpense } from "../highChartsData.js";

exportingInit(Highcharts);

export default {
  components: {
    highcharts: Chart,
  },
  mounted() {
    this.getDataFromServer();
  },
  methods: {
    async getDataFromServer() {
      getDataExpense().then((res) => {
        this.list = res.data.Data.item;
        console.log(res.data.Data.item);
        var myStringArray = res.data.Data.item;
        var arrayLength = myStringArray.length;
        for (var i = 0; i < arrayLength; i++) {
          console.log(myStringArray[i]);
          this.chartOptions.series[0].data[i].y = res.data.Data.item[i].amount;
          this.chartOptions.series[0].data[i].name = res.data.Data.item[i].type;
        }
        this.chartOptions.legend.title.text =
          'Total Expenses <span style="float:right;">' +
          res.data.Data.totalExpenses +
          "$</span>";
      });
    },
  },
  data() {
    return {
      list: undefined,
      chartOptions: {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: "pie",
          marginLeft: -300,
        },
        title: {
          text: "Expenses & Refunds",
          align: "left",
        },
        tooltip: {
          pointFormat: "<b>${point.y}</b>",
        },
        accessibility: {
          point: {
            valueSuffix: "%",
          },
        },
        exporting: {
          enabled: false,
        },
        legend: {
          title: {
            text: "Total Expenses",
            style: {
              fontSize: "20",
            },
          },
          align: "right",
          verticalAlign: "top",
          x: -50,
          y: 80,
          width: 400,
          floating: true,
          itemWidth: 200,
          itemMarginTop: 20,
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: "pointer",
            dataLabels: {
              enabled: false,
            },
            showInLegend: true,
          },
        },
        series: [
          {
            colorByPoint: true,
            data: [
              {
                name: "",
                y: null,
              },
              {
                name: "",
                y: null,
              },
              {
                name: "",
                y: null,
              },
              {
                name: "",
                y: null,
              },
              {
                name: "",
                y: null,
              },
              {
                name: "",
                y: null,
              },
              {
                name: "",
                y: null,
              },
              {
                name: "",
                y: null,
              },
              {
                name: "",
                y: null,
              },
              {
                name: "",
                y: null,
              },
              {
                name: "",
                y: null,
              },
              {
                name: "",
                y: null,
              },
            ],
          },
        ],
      },
    };
  },
};
</script>
