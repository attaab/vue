<template>
  <div v-theme:column=" 'wide' " id="show-blogs">
      <h1>List Blog Title</h1>
     <input v-model="search" placeholder="Search blogs" type="text" name="" id="">
      <div v-for="blog in filteredBlogs" class="single-blog">
          <h3 v-rainbow>{{blog.title | to-uppercase}}</h3>
      </div>
  </div>
</template>

<script>
// import {bus} from "../main";//pulling in the event bus from the mai
import searchMixin from "../mixins/searchMixin";//importing the search mixin function

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
    filters : {
        'to-uppercase': function (value) {//this function or that on directives.rainbow can be defined like data was and it would still work perfectly
            return value.toUpperCase();//the toUppercase function converts a string to all uppercases
        }
    },
    directives : {
        'rainbow': {
            bind(el, binding, vnode) {
                 el.style.color = '#'+ Math.random().toString().slice(2,8);
            }
        }
    },
    mixins : [searchMixin]//Mixins are arrays and are registered like so
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