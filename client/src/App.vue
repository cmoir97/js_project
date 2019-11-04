<template lang="html">
  <body>

<div id="app">
<h1>SpaceX Launch Tracker</h1>
<br>
<launches-list :launches="launches" />
<br>
<launch-detail />
<h1>Missions</h1>
<br>
<missions-list :missions="missions" />
<br>
<mission-form />
<br>
<mission-detail />
<h1>Latest Launch</h1>
<br>
<latest-launch :latestLaunch="latestLaunch" />
</div>
</body>

</template>


<script>
import LaunchesList from './components/LaunchesList.vue'
import LaunchDetail from './components/LaunchDetail.vue'
import missionService from "@/services/missionService"
import MissionsList from './components/MissionsList.vue'
import MissionDetail from './components/MissionDetail.vue'
import LatestLaunch from './components/LatestLaunch.vue'
import MissionForm from './components/MissionForm.vue'
import { eventBus } from './main.js'



export default {
  name:"app",
  components:{
    'launches-list': LaunchesList,
    'launch-detail': LaunchDetail,
    'missions-list': MissionsList,
    'mission-detail': MissionDetail,
    'latest-launch': LatestLaunch,
    'mission-form': MissionForm,
  },
  data(){
    return {
      launches: [],
      missions: [],
      requestedMissions: [],

      latestLaunch: {}
    }
  },
  mounted(){
    fetch('https://api.spacexdata.com/v3/launches')
    .then(res => res.json())
    .then(data => this.launches = data);

    fetch('https://api.spacexdata.com/v3/missions')
    .then(res => res.json())
    .then(data => this.missions = data)

    fetch('https://api.spacexdata.com/v3/launches/latest')
    .then(res => res.json())
    .then(data => this.latestLaunch = data)

    eventBus.$on('submit-mission', mission => this.requestedMissions.push(mission));

    missionService.getMissions()
    .then(data => this.requestedMissions = data);
}

}
</script>


<style lang="css" scoped>

body {
  background-color: salmon;
}

div{

  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  background: #222;
}

ul {
  display: flex;
  flex-direction: column;
  text-align: center;
  list-style-type: none;
}

li {
    padding: 6px 0;
    text-align: center;
}
a {
      position: relative;
      display: block;
      text-decoration: none;
      font-family: "Lato";
      color: white;
      text-transform: uppercase;
      padding: 4px 0;
      transition: 0.5s;
      text-align: center;
}
  &::after {
        position: absolute;
        content: "";
        width: 100%;
        height: 3px;
        top: 100%;
        left: 0;
        background: #3498db;
        transition: transform 0.5s;
        transform: scaleX(0);
        transform-origin: right;
      }
      &:hover {
        color: lightgreen;
      }

      &:hover::after {
        transform: scaleX(1);
        transform-origin: left;
      }

</style>
