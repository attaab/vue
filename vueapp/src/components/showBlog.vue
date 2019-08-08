<template>
  <div v-theme:column=" 'wide' " id="show-blogs">
      <h1>All Blog Articles</h1>
     <input v-model="search" placeholder="Search blogs" type="text" name="" id="">
      <div v-for="blog in filteredBlogs" class="single-blog">
          <h3 v-rainbow>{{blog.title | to-uppercase}}</h3>
          <article v-on:click="fullText">{{blog.body | snippet}}</article>
      </div>
  </div>
</template>

<script>
// import {bus} from "../main";//pulling in the event bus from the mai

export default {
    props : ["blogsData"],
    data() {
        return {
            blogs : [],
            search : ""
        }
    },
    methods: {
        fullText: function() {
           
        }
    },
    created() {//created is a lifecycle hook that runs when the instance has been created but not yet mounted
            // I commented this out when I passed the blog as a prop no longer a GET request 
        // this.$http.get("http://jsonplaceholder.typicode.com/posts")//here we dont need to passing in post requests, we arent sending any data 
        //     .then(function(data){
        //         this.blogs = data.body.slice(0,10);

        //     });

        this.blogs = this.blogsData.slice(0, 10);//blog data are being passed through props
    },
    computed : {
        filteredBlogs : function () {
            return this.blogs.filter((blog) => {
                return blog.title.match(this.search);
            });
        }
    } 
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

 input[type="text"], textarea {
         display: block;
         width: 100%;
         padding: 8px;
     }

</style>