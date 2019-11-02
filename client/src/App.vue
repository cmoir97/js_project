<template lang="html">
<div id="app">
<h1>hi</h1>
</div>
</template>

<script>
export default {
  name:"app",
  components:{},
  data(){
    return {
      launches: []
    }
  },
  mounted(){
    fetch('https://api.spacexdata.com/v3/launches')
    .then(res => res.json())
    .then(data => console.log(data))
  }
}
</script>

<style lang="css" scoped>
</style>
