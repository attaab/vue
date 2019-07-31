<template>
  <div>
      <app-header v-bind="title" v-on:changeTitle="updateTitle($event)"></app-header>
      <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
      <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
import header from "./components/header.vue";
import footer from "./components/footer";
import ninja from "./components/ninja.vue";

export default {
    components : {
      "app-header" : header,
      "app-footer" : footer,
      "app-ninjas" : ninja
  },
  data() {
     return {
       ninjas : [
              {name: 'Ryu', speciality: "Vue Components", show: false},
              {name: 'Crystal', speciality: "HTML Wizardry", show: false},
              {name: 'Hitoshi', speciality: "Click Events", show: false},
              {name: 'Tango', speciality: "Conditionals", show: false},
              {name: 'Kami', speciality: "Webpack", show: false},
              {name: 'Yoshi', speciality: "Data Digging", show: false}
          ],
          title : "Vue Ninjas"
     }
  },
  methods: {
    updateTitle : function (newTitle) {
      this.title = newTitle;
    }
  },
}
</script>

