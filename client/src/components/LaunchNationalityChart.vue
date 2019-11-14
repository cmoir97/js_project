<template lang="html">
<GChart
v-if="splicedRefactoredChartData"
type="PieChart"
:data="splicedRefactoredChartData"
:options="chartOptions"
/>

</template>

<script>
import { GChart } from "vue-google-charts";

export default {
  name: "launch-nationality-chart",
  components: {
    GChart
  },
  data () {
    return {
      chartOptions: {
        backgroundColor: 'black',
        legend: {
        textStyle: {
          color: '#FFFFFF'
        }
        },
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        },
        height: "600"
      },
    }
  },
  props: ["splicedRefactoredChartData"]
}
</script>

<style lang="css" scoped>

</style>
