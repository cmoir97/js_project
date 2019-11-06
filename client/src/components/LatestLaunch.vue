<template lang="html">
  <div id="detailWrapper">
    <div id="flexWrapper">
      <h1>Latest SpaceX Launch</h1>
      <div  v-if="latestLaunch" id="left">
        <p>Launch date: {{ latestLaunch.launch_date_utc }}</p>
        <p v-if="latestLaunch">Launch site: {{ latestLaunch.launch_site.site_name }}</p>
        <p v-if="latestLaunch.launch_success === true || false">Launch Successful</p>
        <p v-if="latestLaunch.launch_success == false">Launch Unsuccessful</p>
        <p v-if="latestLaunch.launch_success == null">Upcoming Launch</p>
        <p>{{ latestLaunch.details }}</p>
        <div id="mediaBox">
        <img :src="`${latestLaunch.links.flickr_images[0]}`" alt="Launch Image">
        <iframe :src="`https://www.youtube.com/embed/${latestLaunch.links.youtube_id}`"></iframe>
      </div>
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
img {
  width:250px;
  height:250px;
  margin: 4px;

}

iframe{
  width:250px;
  height:250px;
  margin: 4px;

}

#detailWrapper {
  background-color: teal;
  border: 1px solid black;
  border-radius: 20px;
  padding: 20px;
  margin: 10px;
  align-items: center;
}

#mediaBox {
  display: inline-flex;

}
a {
  color: white;
}
</style>
