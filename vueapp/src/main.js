import Vue from 'vue'
import App from './App.vue'

export const bus = new Vue();//creating an event Bus

new Vue({
  el: '#app',
  render: h => h(App)
})
