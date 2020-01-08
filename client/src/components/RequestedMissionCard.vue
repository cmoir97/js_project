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
.requested-mission-card {
  background-color: teal;
  border: 1px solid black;
  border-radius: 18px;
  padding: 20px;
  margin: 10px;
  height: 150px;
  width: 250px;
  align-items: center;
}
.requested-mission-card:hover {
	background: white;
	color: teal;
	box-shadow: inset 0 0 0 3px #3a7999;
}
</style>
