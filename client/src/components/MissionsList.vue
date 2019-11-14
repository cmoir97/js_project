<template lang="html">
  <form v-on:submit.prevent>
<select v-on:change="handleSelect" v-model="selectedMission">
  <option disabled value="">Choose a Mission</option>
  <option v-for="mission in missions" :value="mission">{{ mission.mission_name }}</option>
</select>
 </form>
</template>

<script>
import { eventBus } from '../main.js'

export default {
  name: "missions-list",
  data(){
    return {
    selectedMission: {},
  }
},
  props: ['missions'],
  methods: {
    handleSelect(){
      eventBus.$emit('selected-mission', this.selectedMission)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
