<template>
  <div>
    <highcharts class="hc" :options="chartOptions" ref="chart"></highcharts>
    <!--<ul>
      <li v-for="item in list" v-bind:key="item.id">
        {{ item.date }}
      </li>
    </ul>-->
  </div>
</template>
<script>
var Highcharts = require("highcharts/highstock");
// Load Highcharts Maps as a module
require("highcharts/modules/map")(Highcharts);
import exportingInit from "highcharts/modules/exporting";
import { Chart } from "highcharts-vue";
import { getDataSales } from "../highChartsData.js";

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
      getDataSales().then((res) => {
        this.list = res.data.Data.item;
        //console.log(res.data.Data.item);
        // this.chartOptions.title.text = res.data.Data.item[0].date;
        let categoriesArr = [];
        let totalSaleData = [];
        let quantityData = [];
        let totalExpenseData = [];
        let reimbursementData = [];
        let totalRefundData = [];

        res.data.Data.item.map(function (value) {
          categoriesArr.push(value["date"]);
          totalSaleData.push(value["totalSales"]);
          quantityData.push(value["itemQuantity"]);
          totalExpenseData.push(value["totalExpenses"]);
          reimbursementData.push(value["reimbursement"]);
          totalRefundData.push(value["refund"]);
        });
        this.chartOptions.xAxis[0].categories = categoriesArr;
        this.chartOptions.series[2].data = totalSaleData;
        this.chartOptions.series[3].data = quantityData;
        this.chartOptions.series[4].data = totalExpenseData;
        this.chartOptions.series[0].data = reimbursementData;
        this.chartOptions.series[1].data = totalRefundData;
        //console.log(categoriesArr);
      });
    },
  },
  data() {
    return {
      list: undefined,
      chartOptions: {
        chart: {
          zoomType: "xy",
        },
        exporting: {
          enabled: false,
        },
        title: {
          text: "Sales & Finance",
          align: "left",
        },
        xAxis: [
          {
            categories: [],
            crosshair: true,
          },
        ],
        yAxis: [
          {
            // Primary yAxis
            labels: {
              format: "{value}$",
              style: {
                color: Highcharts.getOptions().colors[0],
              },
            },
            title: {
              text: "Amount ($)",
              style: {
                color: Highcharts.getOptions().colors[0],
              },
            },
          },
          {
            // Secondary yAxis
            title: {
              text: "Quantity (Units)",
              style: {
                color: Highcharts.getOptions().colors[1],
              },
            },
            labels: {
              format: "{value}",
              style: {
                color: Highcharts.getOptions().colors[1],
              },
            },
            opposite: true,
          },
        ],
        tooltip: {
          shared: true,
        },
        plotOptions: {
          column: {
            stacking: "normal",
          },
        },
        series: [
          {
            name: "Reimbursement",
            type: "column",
            data: [],
            stack: "male",
            tooltip: {
              valueSuffix: "",
            },
          },
          {
            name: "Total Refund",
            type: "column",
            data: [],
            stack: "female",
            tooltip: {
              valueSuffix: "",
            },
          },
          {
            name: "Total Sales",
            type: "column",
            data: [],
            stack: "male",
            tooltip: {
              valueSuffix: "$",
            },
          },
          {
            name: "Quantity",
            type: "spline",
            yAxis: 1,
            zIndex: 100,
            data: [],
            tooltip: {
              valueSuffix: "",
            },
          },
          {
            name: "Total Expense",
            type: "column",
            data: [],
            stack: "female",
            tooltip: {
              valueSuffix: "",
            },
          },
        ],
      },
    };
  },
};
</script>
