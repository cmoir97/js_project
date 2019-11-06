<template lang="html">
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
  }
}
</script>



<style lang="css" scoped>
</style>
