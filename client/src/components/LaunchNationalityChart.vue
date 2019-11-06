<template lang="html">
<GChart
v-if="chartData"
type="PieChart"
:data="chartData"
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
      chartData: [
        ['Year', 'Sales'],
        ['2014', 1000],
        ['2015', 1170],
        ['2016', 660],
        ['2017', 1030]
      ],
      chartOptions: {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017'
        }
      },
    }
  }
}
</script>

<style lang="css" scoped>
</style>
