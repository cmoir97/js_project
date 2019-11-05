<template lang="html">
<div class="requested-mission-grid">
  <requested-mission-card v-for="(requestedMission, index) in requestedMissions" :key="index" :requestedMission="requestedMission"/>
</div>
</template>

<script>
import { eventBus } from '../main.js'
import missionService from '../services/missionService.js'
import RequestedMissionCard from './RequestedMissionCard.vue'
export default {
  data() {
    return {
      requestedMissions: []
    };
  },
  mounted() {
    missionService.getMissions()
    .then(requestedMissions => this.requestedMissions = requestedMissions);

    eventBus.$on('submit-mission', (requestedMission) => {
      this.requestedMissions.push(requestedMission)
    })
  },
  components: {
    'requested-mission-card': RequestedMissionCard
  }
}
</script>

<style lang="css" scoped>
</style>
