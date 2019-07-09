<template>
  <div id="app">
    <header>
      <h1>Vue.js SPA</h1>
    </header>
    <main>
      <aside class="sidebar">
        <router-link
          v-for="post in posts"
          active-class="is-active"
          class="link"
          :to="{ name: 'post', params: { id: post.id } }"
        >{{post.id}}. {{post.title}}
        </router-link>
      </aside>
      <div class="content">
        <router-view></router-view>
      </div>
    </main>
    <!-- <vHeader /> -->
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <teach teachText="Упаковка от мороженного" /> -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      posts: [],
      endpoint: "https://jsonplaceholder.typicode.com/posts/"
    };
  },

  created() {
    this.getAllPosts();
  },

  methods: {
    getAllPosts() {
      axios
        .get(this.endpoint)
        .then(response => {
          this.posts = response.data;
        })
        .catch(error => {
          console.log("-----error-------");
          console.log(error);
        });
    }
  }
};

// import vHeader from "./components/vHeader.vue";
// // import HelloWorld from "./components/HelloWorld.vue";
// import teach from "./components/teach.vue";

// export default {
//   name: "app",
//   components: {
//     vHeader,
//     // HelloWorld,
//     teach
//   }
// };
</script>

<style  lang="scss">
// ------------------------------------

body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
header {
  position: fixed;
  top: 0;
  width: 100%;
  min-height: 90px;
  border-bottom: 1px solid #42b983;
  text-align: center;
  background: #ffffff;
}
main {
  display: flex;
  height: calc(100vh - 90px);
  max-width: 1200px;
  margin-top: 90px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
}
aside {
  flex: 1 0 30%;
  height: 100%;
  overflow-y: auto;
  width: 30%;
  padding: 50px 30px;
  box-sizing: border-box;
  border-right: 1px solid #42b983;
}
.content {
  flex: 1 1 70%;
  display: flex;
  align-items: center;
  justify-content: center;
}

// --------------------------------------

// @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap");
// /* @import 'normalize.css'; */
// $font-family-primary: "Source Sans Pro", sans-serif;

// body {
//   min-height: 100vh;
//   margin: 0;
//   font-family: $font-family-primary;
//   box-sizing: border-box;
// }

// #app {
//   font-family: "Source Sans Pro", sans-serif;
// }
// /* #app {
//   font-family: "Avenir", Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//    margin-top: 60px;
// } */

// html {
//   scroll-behavior: smooth;
// }

// // .wrapper *,
// // .wrapper *::before,
// // .wrapper *::after {
// //   box-sizing: border-box;
// // }

// h1,
// h2,
// h3,
// h4,
// h5,
// h6,
// p {
//   margin: 0;
// }

// ul,
// li {
//   list-style-type: none;
//   margin: 0;
//   padding: 0;
// }

// .container {
//   max-width: 1100px;
//   margin: 0 auto;
//   padding-left: 20px;
//   padding-right: 20px;
// }
</style>
