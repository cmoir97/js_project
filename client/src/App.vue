<template lang="html">
<div id="app">
<h1>SpaceX Launch Tracker</h1>

<br>
<launches-list :launches="launches" />
<br>
<launch-detail />

<h1>Missions</h1>
<br>
<missions-list />
</div>
</template>

<script>
import LaunchesList from './components/LaunchesList.vue'
import LaunchDetail from './components/LaunchDetail.vue'
import MissionsList from './components/MissionsList.vue'




export default {
  name:"app",
  components:{
    'launches-list': LaunchesList,
    'launch-detail': LaunchDetail,
    'missions-list': MissionsList
  },
  data(){
    return {
      launches: [],
      missions: []
    }
  },
  mounted(){
    fetch('https://api.spacexdata.com/v3/launches')
    .then(res => res.json())
    .then(data => this.launches = data);

    fetch('https://api.spacexdata.com/v3/missions')
    .then(res => res.json())
    .then(data => this.missions = data)
  }
}
</script>

<style lang="css" scoped>

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
