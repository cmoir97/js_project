<template lang="html">
  <div id="detailWrapper">
    <h2>The Latest SpaceX Launch</h2>
    <div id="flexWrapper">
      <div id="left">
        <p>Launch date: {{ launch.launch_date_utc }}</p>
        <p>Launch site: {{ launch.launch_site.site_name }}</p>
        <p>Successful? {{ launch.launch_success }}</p>
        <p>{{ launch.details }}</p>
        <a href="launch.links.video_link">Youtube Link</a>
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'latest-launch',
  data(){
    return {
      launch: null
    }
  },
  mounted(){
    eventBus.$on('latest-launch', (launch) => {
      this.launch = launch
    })
  }
}
</script>

<style lang="css" scoped>
</style>
