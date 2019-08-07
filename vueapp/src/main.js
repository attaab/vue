import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

export const bus = new Vue();//creating an event Bus


Vue.use(VueResource);//telling vue to use the resource file we imported

new Vue({
  el: '#app',
  render: h => h(App)
})
