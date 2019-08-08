<template>
  <div>

    <!-- <add-blog></add-blog> -->
    <show-blog></show-blog>
      
  </div>
</template>

<script>
//imports
import addBlog from "./components/addBlog.vue";
import showBlog from "./components/showBlog.vue"

export default {
  components : {
    "add-blog" : addBlog,
    "show-blog" : showBlog
  }
}

</script>

<style scoped>
  body {
    margin: 0;
    font-family: "Nonito semiBold";
  }
</style>