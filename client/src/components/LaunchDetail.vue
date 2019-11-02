<template lang="html">
  <div v-if="launch" id="launchDetail">
    <div id="detailWrapper">
      <h2>{{ launch.mission_name }}</h2>
      <div id="flexWrapper">
        <div id="left">
          <p>Launch date : {{ launch.launch_date_utc }}</p>
          <p>Launch site: {{ launch.launch_site.site_name }}</p>
          <p>Successful? {{ launch.launch_success }}</p>
          <p>{{ launch.details }}</p>


        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from '../main.js'

export default {
  name: 'launch-detail',
  data(){
    return {
      launch: null
    }
  },
  mounted(){
    eventBus.$on('selected-launch', (launch) => {
      this.launch = launch
    })
  }
}
</script>

<style lang="css" scoped>
</style>
