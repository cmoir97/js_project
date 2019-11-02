<template lang="html">
  <form v-on:submit.prevent>
<select v-on:change="handleSelect" v-model="selectedLaunch">
  <option disabled value="">Choose a launch</option>
  <option v-for="launch in launches" :value="launch">{{ launch.mission_name }}</option>
</select>
 </form>
</template>

<script>
import { eventBus } from '../main.js'

export default {
  name: "launches-list",
  data(){
    return {
    selectedLaunch: {},
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
