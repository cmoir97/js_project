<template lang="html">
  <body>
    <h1>SpaceX Launch Tracker</h1>

<div id="app">
<div class="navbar">

  <button type="button" @click="homeClick">1</button>
  <button type="button" @click="launchClick">2</button>
  <button type="button" @click="missionClick">3</button>
  <button type="button" @click="requestMissionClick">4</button>
  <button type="button" @click="chartClick">5</button>

</div>
<div>
<div :selectedView="selectedView" v-if="selectedView === 'home'">
<h1>Latest Launch</h1>
<latest-launch :latestLaunch="latestLaunch" />
</div>


<div :selectedView="selectedView" v-if="selectedView === 'launches'">
<launches-list :launches="launches" />
<launch-detail />
</div>

<div :selectedView="selectedView" v-if="selectedView === 'missions'">
<h1>Missions</h1>
<missions-list :missions="missions" />
<mission-detail />
</div>

<div :selectedView="selectedView" v-if="selectedView === 'requestMission'">
<requested-mission-grid />
<mission-form />
</div>

<div :selectedView="selectedView" v-if="selectedView === 'chart'">
<h1>Launch Nationality Chart</h1>
<p>This chart shows the nationality of each launch's main client. </p>
<launch-nationality-chart :splicedRefactoredChartData="splicedRefactoredChartData"/>
</div>
</div>

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
import RequestedMissionGrid from './components/RequestedMissionGrid.vue'
import LaunchNationalityChart from './components/LaunchNationalityChart.vue'



export default {
  name:"app",
  components:{
    'launches-list': LaunchesList,
    'launch-detail': LaunchDetail,
    'missions-list': MissionsList,
    'mission-detail': MissionDetail,
    'latest-launch': LatestLaunch,
    'mission-form': MissionForm,
    'requested-mission-grid': RequestedMissionGrid,
    'launch-nationality-chart': LaunchNationalityChart
  },
  data(){
    return {
      launches: [],
      missions: [],
      requestedMissions: [],
      latestLaunch: {},
      selectedView: 'home'
    }
  },
  computed: {
    nationalities() {
      return this.launches.map(launch => launch.rocket.second_stage.payloads[0].nationality)
    },
    uniqueNationalities() {
      return this.launches.map((launch) => {
        return launch.rocket.second_stage.payloads[0].nationality;
      })
      .filter((uniqueLaunch, index, array) => {
        return array.indexOf(uniqueLaunch) === index;
      })
    },
    chartData() {
      return this.uniqueNationalities.map((uniqueNation) => {
        const numberOfOccurrences = this.nationalities.reduce((accumulator, nation) => {
          return accumulator + (nation === uniqueNation);
        }, 0);
        return [uniqueNation, numberOfOccurrences]
      })
    },

    refactoredChartData() {
       const chartHeader = [["Nationality", "Number of Occurrences"]];
       return chartHeader.concat(this.chartData)
    },
    splicedRefactoredChartData() {
      const newArray = this.refactoredChartData.slice()
      newArray.splice(20,1)
      return newArray

    }

  },
  methods: {
    homeClick() {
      this.selectedView = 'home';
    },
    launchClick() {
      this.selectedView = 'launches';
    },
    missionClick() {
      this.selectedView = 'missions';
    },
    requestMissionClick() {
      this.selectedView = 'requestMission';
    },
    chartClick() {
      this.selectedView = 'chart';
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
