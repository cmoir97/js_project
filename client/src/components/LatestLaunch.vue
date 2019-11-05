<template lang="html">
  <div id="detailWrapper">
    <h2>The Latest SpaceX Launch</h2>
    <div id="flexWrapper">
      <div  v-if="latestLaunch" id="left">
        <p>Launch date: {{ latestLaunch.launch_date_utc }}</p>
        <p v-if="latestLaunch">Launch site: {{ latestLaunch.launch_site.site_name }}</p>
        <p v-if="latestLaunch.launch_success === true || false">Launch Successful</p>
        <p v-if="latestLaunch.launch_success == false">Launch Unsuccessful</p>
        <p v-if="latestLaunch.launch_success == null">Upcoming Launch</p>
        <p>{{ latestLaunch.details }}</p>
        <img :src="`${latestLaunch.links.flickr_images[0]}`" alt="Launch Image" style="width:300px;height:300px;">
        <iframe width="420" height="345" :src="`https://www.youtube.com/embed/${latestLaunch.links.youtube_id}`"></iframe>
        <br>
        <a :href="`${latestLaunch.links.article_link}`" target="_blank">In the news</a>
        <br>
        <a :href="`${latestLaunch.links.wikipedia}`" target="_blank">Find out more</a>

      </div>


    </div>
</div>
</template>

<script>
import { eventBus } from '../main.js'

export default {
  name: 'latest-launch',
  props: ['latestLaunch']
}
</script>

<style lang="css" scoped>
</style>
