<template>
  <div id="app">
    <chart></chart>
    <br />
    <piechart></piechart>
  </div>
</template>
<script>
import Chart from "./components/Chart";
import PieChart from "./components/PieChart";

export default {
  components: {
    chart: Chart,
    piechart: PieChart,
  },
  methods: {
    handler() {
      var args = arguments;
      for (var arg of args) {
        if (arg instanceof Function) {
          arg();
        }
      }
    },
  },
};
</script>


