<template lang="html">
  <div id="detailWrapper">
    <h2>View the Latest SpaceX Launch</h2>
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
  mounted(){
    fetch('https://api.spacexdata.com/v3/launches')
    .then(res => res.json())
    .then(launch => this.launches = launches)
  }
}

</script>

<style lang="css" scoped>
</style>

<!-- function getLatestDate(xs) {
   if (xs.length) {
      return xs.reduce((m, i) => (i.MeasureDate > m) && i || m, "")
               .MeasureDate;
   }
 } -->
