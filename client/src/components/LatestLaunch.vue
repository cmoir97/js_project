<template lang="html">
  <div id="detailWrapper">
    <h2>The Latest SpaceX Launch</h2>
    <div id="flexWrapper">
      <div id="left">
        <p>Launch date: {{ latestLaunch.launch_date_utc }}</p>
        <p v-if="latestLaunch">Launch site: {{ latestLaunch.launch_site.site_name }}</p>
        <p v-if="latestLaunch.launch_success == true || false">Launch Successful</p>
        <p v-if="latestLaunch.launch_success == false">Launch Unsuccessful</p>
        <p v-if="latestLaunch.launch_success == null">Upcoming Launch</p>
        <p>{{ latestLaunch.details }}</p>
        <img :src="`${latestLaunch.links.flickr_images[0]}`" alt="Launch Image" style="width:300px;height:300px;">
        <iframe width="420" height="345" :src="`https://www.youtube.com/embed/${latestLaunch.links.youtube_id}`"></iframe>
        <a href="">In the news</a>
      </div>

      <!-- "article_link": "https://spaceflightnow.com/2019/08/07/spacex-launches-israeli-owned-telecom-satellite/",
"wikipedia": -->
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
