<template>
  <div id="app">
    <FrontEndChallenge msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import FrontEndChallenge from "./components/FrontendChallenge.vue";
export default {
  name: "App",
  components: {
    FrontEndChallenge,
  },
};
</script>


<style>
@import url(https://cdn.syncfusion.com/ej2/material.css);
html {
  background-color: #1ec5c3;
}
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: white;
  -ms-overflow-style: none; /* for Internet Explorer, Edge */
  scrollbar-width: none; /* for Firefox */
  overflow-y: scroll;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>