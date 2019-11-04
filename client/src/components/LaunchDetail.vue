<template lang="html">
  <div v-if="launch" id="launchDetail">
    <div id="detailWrapper">
      <h2>{{ launch.mission_name }}</h2>
      <div id="flexWrapper">
        <div id="left">
          <p>Launch date: {{ launch.launch_date_utc }}</p>
          <p>Launch site: {{ launch.launch_site.site_name }}</p>
          <p v-if="launch.launch_success == true || false">Launch Successful</p>
          <p v-if="launch.launch_success == false">Launch Unsuccessful</p>
          <p v-if="launch.launch_success == null">Upcoming Launch</p>
          <p>{{ launch.details }}</p>
          <a href="launch.links.video_link">Youtube Link</a>


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
#launchDetail{
  text-align: center;
}
</style>
