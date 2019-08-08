<template>
  <div id="show-blogs">
      <h1>All Blog Articles</h1>

      <div v-for="blog in blogs" class="single-blog">
          <h3>{{blog.title}}</h3>
          <article>{{blog.body}}</article>
      </div>
  </div>
</template>

<script>

export default {
    data() {
        return {
            blogs : []
        }
    },methods: {
        
    },
    created() {//created is a lifecycle hook that runs when the instance has been created but not yet mounted
        this.$http.get("http://jsonplaceholder.typicode.com/posts")//here we dont need to passing in post requests, we arent sending any data 
                .then(function(data){
                    
                   this.blogs = data.body.slice(0,10);

                });
    },
}
</script>

<style scoped>
#show-blogs {
    max-width: 800px;
    margin: 0 auto;
}

.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>