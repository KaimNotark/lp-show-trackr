<template>
  <div id="app">
    <header>
      <vHeader/>
    </header>
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <teach teachText="Упаковка от мороженного"/>
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

<style  lang="scss">
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap");
$font-family-primary: "Source Sans Pro", sans-serif;
/* @import 'normalize.css'; */

body {
  min-height: 100vh;
  margin: 0;
  font-family: $font-family-primary;
  box-sizing: border-box;
}

#app {
  font-family: $font-family-primary;
}
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
   margin-top: 60px; 
} */

html {
  scroll-behavior: smooth;
}

// .wrapper *,
// .wrapper *::before,
// .wrapper *::after {
//   box-sizing: border-box;
// }

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul,
li {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
