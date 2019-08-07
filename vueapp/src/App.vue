<template>
  <div>

    <add-blog></add-blog>
      
  </div>
</template>

<script>
//imports
import addBlog from "./components/addBlog.vue";

export default {
  components : {
    "add-blog" : addBlog
  }
}

</script>

<style scoped>
  body {
    margin: 0;
    font-family: "Nonito semiBold";
  }
</style>