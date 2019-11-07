<template lang="html">
  <body>

    <img id="logo" src="./assets/navtav_logo.jpg">
    <div id="app">
      <div class="navbar">

        <button type="button" @click="homeClick">Home</button>
        <button type="button" @click="launchClick">SpaceX Launches</button>
        <button type="button" @click="missionClick">SpaceX Missions</button>
        <button type="button" @click="requestMissionClick">Request a SpaceX Mission</button>
        <button type="button" @click="chartClick">View SpaceX Launch Data</button>

      </div>
      <br>
      <br>
      <br>
      <br>
      <div  :selectedView="selectedView" v-if="selectedView === 'home'">
        <p>SpaceX is an American aerospace company founded in 2002 that helped usher in the era of commercial spaceflight. Its headquarters are in Hawthorne, California.</p>

        <p>SpaceX was formed by entrepreneur Elon Musk in the hopes of revolutionising the aerospace industry and making affordable spaceflight a reality. The company entered the arena with the Falcon 1 rocket, a two-stage liquid-fueled craft designed to send small satellites into orbit. The Falcon 1 was vastly cheaper to build and operate than its competitors, a field largely populated by spacecraft built by publicly owned and government-funded companies, such as Lockheed Martin and Boeing. Part of the rocket’s cost-effectiveness was made possible by the SpaceX-developed Merlin engine, a cheaper alternative to those used by other companies. SpaceX also focused on making reusable rockets (other launch vehicles are generally made for one-time use).</p>

        <p>Use the SpaceX Tracker App to find information about its launches and missions, view data about its launches, and even suggest your own mission for SpaceX to complete in the future!</p>

        <latest-launch :latestLaunch="latestLaunch" />
      </div>


      <div :selectedView="selectedView" v-if="selectedView === 'launches'">
        <h1>SpaceX Launches</h1>
        <p>Use this menu to select and views details about past and future SpaceX launches.</p>
        <launches-list :launches="launches" />
        <launch-detail />
      </div>

      <div :selectedView="selectedView" v-if="selectedView === 'missions'">
        <h1>SpaceX Missions</h1>
        <p>Use this menu to select and views details about SpaceX missions.</p>
        <missions-list :missions="missions" />
        <mission-detail />
      </div>

      <div :selectedView="selectedView" v-if="selectedView === 'requestMission'">
        <mission-form />
        <br>
        <requested-mission-grid />
      </div>

      <div :selectedView="selectedView" v-if="selectedView === 'chart'">
        <h1>Launch Nationality Chart</h1>
        <p>Every SpaceX launch has a specific goal that it sets out to achieve.
           This chart shows the nationality of each launches main customer,
           the company or organisation who have provided SpaceX with a goal for that mission.
           These goals can vary widely and include tasks such as refueling the ISS or deploying  satellites.</p>
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

h1 {
  font-size: 70px;
}

body {
  background-color: black;
  font-family: Arial;
}

div{

  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  background: black;
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
&:hover {
  color: lightgreen;
}

&:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

#intro {
  background-color: teal;
  border: 1px solid black;
  border-radius: 20px;
  padding: 20px;
  margin: 10px;
  align-items: center;
}
button {
  font-size: 20px;
  border-radius: 3px
}
#logo{
  height: 300px;
  width: 200px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
.navbar{
  border-radius: 100px;
}
button:hover {
	background: black;
	color: teal;
}
</style>
