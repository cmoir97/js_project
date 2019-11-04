<template lang="html">
<div id="app">
<h1>SpaceX Launch Tracker</h1>
<ul>
  <li><a href="#">home</a></li>
</ul>
<launches-list :launches="launches" />
<launch-detail />
</div>
</template>

<script>
import LaunchesList from './components/LaunchesList.vue'
import LaunchDetail from './components/LaunchDetail.vue'
import missionService from "@/services/missionService"



export default {
  name:"app",
  components:{
    'launches-list': LaunchesList,
    'launch-detail': LaunchDetail
  },
  data(){
    return {
      launches: []
    }
  },
  mounted(){
    fetch('https://api.spacexdata.com/v3/launches')
    .then(res => res.json())
    .then(data => this.launches = data)
  }
}
</script>

<style lang="css" scoped>

div{
  display: flex;
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
  align-items: start;
  list-style-type: none;
}

li {
    padding: 6px 0;
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
