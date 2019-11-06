<template lang="html">
<GChart
v-if="refactoredChartData"
type="PieChart"
:data="refactoredChartData"
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
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017'
        }
      },
    }
  },
  props: ["refactoredChartData"]
}
</script>

<style lang="css" scoped>
</style>
