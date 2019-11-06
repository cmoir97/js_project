<template lang="html">
  <body>

<div id="app">
  <!-- <div class="navbar">

  <button type="button" name="button" @click="homeClick"></button>

</div> -->

<h1>SpaceX Launch Tracker</h1>
<p>SpaceX is an American aerospace company founded in 2002 that helped usher in the era of commercial spaceflight. Its headquarters are in Hawthorne, California.</p>

<p>SpaceX was formed by entrepreneur Elon Musk in the hopes of revolutionising the aerospace industry and making affordable spaceflight a reality. The company entered the arena with the Falcon 1 rocket, a two-stage liquid-fueled craft designed to send small satellites into orbit. The Falcon 1 was vastly cheaper to build and operate than its competitors, a field largely populated by spacecraft built by publicly owned and government-funded companies, such as Lockheed Martin and Boeing. Part of the rocket’s cost-effectiveness was made possible by the SpaceX-developed Merlin engine, a cheaper alternative to those used by other companies. SpaceX also focused on making reusable rockets (other launch vehicles are generally made for one-time use).</p>

<p>Use the SpaceX Tracker App to find information about its launches and missions, view data about its launches, and even suggest your own mission for SpaceX to complete in the future!</p>
<h1>Launch Nationality Chart</h1>
<p>This chart shows the nationality of each launch's main client. </p>
<launch-nationality-chart :splicedRefactoredChartData="splicedRefactoredChartData"/>
<launches-list :launches="launches" />
<launch-detail />
<h1>Missions</h1>
<missions-list :missions="missions" />
<mission-form />
<requested-mission-grid />
<mission-detail />
<h1>Latest Launch</h1>
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
      selectedView: 'Home'
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
      this.selectedView = home
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
  background-color: #222;
  font-family: Arial;
}

div{

  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  background: #222;
  border-radius: 50;
  border-color: salmon;

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
