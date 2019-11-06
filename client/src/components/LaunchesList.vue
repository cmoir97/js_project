<template lang="html">
  <form v-on:submit.prevent>
<select v-on:change="handleSelect" v-model="selectedLaunch">
  <option disabled  value="">Choose Launch</option>
  <option v-for="(launch, index) in launches" :value="launch">{{ launch.mission_name }}</option>
</select>
 </form>
</template>

<script>
import { eventBus } from '../main.js'

export default {
  name: "launches-list",
  data(){
    return {
    selectedLaunch: launches[0],
  }
},
  props: ['launches'],
  methods: {
    handleSelect(){
      eventBus.$emit('selected-launch', this.selectedLaunch)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
