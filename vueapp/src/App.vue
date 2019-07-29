<template>
  <div>
      <app-header></app-header>
      <app-ninjas></app-ninjas>
      <app-footer></app-footer>
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
  }
}
</script>

