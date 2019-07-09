import 'normalize.css'
import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Post from './components/Post.vue'
import Hello from './components/Hello.vue'

Vue.config.productionTip = false

Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Hello,
    },
    {
      path: '/post/:id',
      name: 'post',
      component: Post,
      props: true,
    },
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
