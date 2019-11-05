<template lang="html">
  <div class="requested-mission-card">
<h3>{{requestedMission.name}}</h3>
<h4>{{requestedMission.description}}</h4>
<h4>${{requestedMission.budget}}</h4>
  </div>
</template>

<script>
import { eventBus } from '../main.js'
import missionService from '../services/missionService.js'

export default {
  name: 'requested-mission-card',
  props: ["requestedMission"]
}
</script>

<style lang="css" scoped>
</style>
