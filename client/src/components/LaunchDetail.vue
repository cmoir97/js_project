<template lang="html">
  <div v-if="launch" id="launchDetail">
    <div id="detailWrapper">
      <h2>{{ launch.mission_name }}</h2>
      <div v-if="launch" id="flexWrapper">
        <div id="left">
          <p>Launch date: {{ launch.launch_date_utc }}</p>
          <p>Launch site: {{ launch.launch_site.site_name }}</p>
          <p v-if="launch.launch_success == true || false">Launch Successful</p>
          <p v-if="launch.launch_success == false">Launch Unsuccessful</p>
          <p v-if="launch.launch_success == null">Upcoming Launch</p>
          <p>{{ launch.details }}</p>
          <img :src="`${launch.links.flickr_images[0]}`" alt="Launch Image" style="width:300px;height:300px;">
          <iframe width="420" height="345" :src="`https://www.youtube.com/embed/${launch.links.youtube_id}`"></iframe>
          <br>
          <a :href="`${launch.links.article_link}`" target="_blank">In the news</a>
          <br>
          <a :href="`${launch.links.wikipedia}`" target="_blank">Find out more</a>
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
      launch: {}
    }
  },
  props: ['selected-launch'],
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
