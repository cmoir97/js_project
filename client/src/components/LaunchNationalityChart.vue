<template lang="html">
<<<<<<< HEAD
<!-- <GChart
v-if="chartData"
type="PieChart"
:data="chartData"
:options="chartOptions"
/> -->

</template>

<script>
import { GChart } from 'vue-google-charts'
export default {
  name: 'energy-tracker-chart',
  data(){
    return {
      chartOptions: {
        width: 800,
        height: 240,
        title: 'Generation Mix for the GB power system',
        colors: ['#084887', '#f58a07', '#f9ab55', '#f7f5fb', '#909cc2', '#C1BB8F', '#A176BC']
      }
    }
  },
  components : {
    GChart
=======
  <div>
  <GChart
     type="PieChart"
     :data="chartData"
     :options="chartOptions"
   />
 </div>
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
        ['Year', 'Sales', 'Expenses', 'Profit'],
        ['2014', 1000, 400, 200],
        ['2015', 1170, 460, 250],
        ['2016', 660, 1120, 300],
        ['2017', 1030, 540, 350]
      ],
      chartOptions: {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        }
      },
    }
>>>>>>> 6cdbcc77e181d106584a15d2a744fb198eac840a
  }
}
</script>

<<<<<<< HEAD


=======
>>>>>>> 6cdbcc77e181d106584a15d2a744fb198eac840a
<style lang="css" scoped>
</style>
