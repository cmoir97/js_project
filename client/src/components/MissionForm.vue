<template lang="html">
  <form v-on:submit.prevent="handleSubmit">
    <h1>Request a mission</h1>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" v-model="name" required/>

    <label for="description">Purpose of the mission:</label>
    <input type="text" id="description" name="description" v-model="description" required/>

    <label for="budget">Mission Budget:</label>
    <input type="number" name="budget" v-model="budget" step="1000000" required placeholder="$"/>

    <input type="submit" id="save" value="Save" />
  </form>
</template>


<script>

import { eventBus } from "../main.js";
import missionService from '../services/missionService.js'


export default {
  name: "mission-form",
  data() {
    return {
      name: "",
      description: "",
      budget: null
    }
  },
  methods: {
    handleSubmit(event) {
      event.preventDefault();

      const missionLoad = {
        name: this.name,
        description: this.description,
        budget: this.budget
      };
      missionService.addMission(missionLoad)
      .then(mission => {
        eventBus.$emit('submit-mission', mission);
      });
    }
  }
};

</script>

<style lang="css" scoped>
input {
  border-radius: 1000px;
}
</style>
