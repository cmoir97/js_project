<template lang="html">
<div id="app">
<h1>hi</h1>
<launches-list :launches="launches" />
<launch-detail />
</div>
</template>

<script>
import LaunchesList from './components/LaunchesList.vue'

export default {
  name:"app",
  components:{
    'launches-list': LaunchesList
  },
  data(){
    return {
      launches: []
    }
  },
  mounted(){
    fetch('https://api.spacexdata.com/v3/launches')
    .then(res => res.json())
    .then(data => this.launches = data)
  }
}
</script>

<style lang="css" scoped>
</style>
