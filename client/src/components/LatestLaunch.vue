<template lang="html">
  <div id="detailWrapper">
    <h2>The Latest SpaceX Launch</h2>
    <div id="flexWrapper">
      <div id="left">
        <p>Launch date: {{ latestLaunch.launch_date_utc }}</p>
        <p>Launch site: {{ latestLaunch.launch_site.site_name }}</p>
        <p>Successful? {{ latestLaunch.launch_success }}</p>
        <p>{{ latestLaunch.details }}</p>
        <a href="latestLaunch.links.video_link">Youtube Link</a>
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
