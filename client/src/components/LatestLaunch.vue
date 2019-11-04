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
        <iframe width="420" height="345" :src="`https://www.youtube.com/embed/${latestLaunch.links.youtube_id}`"></iframe>
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
