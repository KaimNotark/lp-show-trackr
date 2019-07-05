<template>
  <div id="app">
    <vHeader />
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <teach teachText="Упаковка от мороженного" />
  </div>
</template>

<script>
import vHeader from "./components/vHeader.vue";
// import HelloWorld from "./components/HelloWorld.vue";
import teach from "./components/teach.vue";

export default {
  name: "app",
  components: {
    vHeader,
    // HelloWorld,
    teach
    
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
