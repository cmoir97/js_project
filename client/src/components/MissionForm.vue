<template lang="html">
  <form v-on:submit.prevent="handleSubmit">
    <h1>Request a mission</h1>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" v-model="name" required/>

    <label for="description">Purpose of the mission:</label>
    <input type="text" id="description" name="description" v-model="description" required/>

    <input type="submit" name="submit" value="Save" />
  </form>
</template>


<script>

import { eventBus } from "@/main";


export default {
name: "mission-form",
data() {
  return {
    name: "",
    description: ""
  };
},
methods: {
  handleSubmit() {
    eventBus.$emit("submit-mission", this.$data);
    this.name = this.description = "";
  }
}
};





</script>





<style lang="css" scoped>
</style>
