<template>
  <div>
      <h1>{{ title }}</h1>
        <ninjas></ninjas>
  </div>
</template>

<script>
import ninjas from "./Ninjas.vue";

export default {
  components : {
    "ninjas": ninjas
  },
  data () {
    return {
      title: 'Ninja App'
    }
  }
}
</script>

<style scoped>
  h1 {
    color: aqua;
  }
</style>

