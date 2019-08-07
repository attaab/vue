<template>
  <div id="add-blog">
      <h2>Add a New Blog Post</h2>

      <form v-if="!submitted">
          <label for="blog-title"></label>

          <input type="text" v-model.lazy="blog.title" required/>

           <label for="blog-content"> Blog Content</label>
           <textarea v-model.lazy="blog.content" name="" id="" cols="30" rows="10"></textarea>

           <div id="checkboxes">
               <br/>
               <h4>Categories</h4>
               <label for="Ninjas">Ninjas</label>
                    <input type="checkbox" value="ninjas" v-model="blog.categories" name="" id=""/>

               <label for="Wizards">Wizards</label>
               <input type="checkbox" value="wizards" v-model="blog.categories" name="" id=""/>

                <label for="Mario">Mario</label>
                <input type="checkbox" value="mario" v-model="blog.categories" name="" id=""/>

                <label for="Cheese">Cheese</label>
                <input type="checkbox" value="cheese" v-model="blog.categories" name="" id=""/>
           </div>

            <label for="">Author</label>

            <select name="" id="" v-model="blog.author">
                <option v-for="author in authors"> {{author}}</option>
            </select>

            <button v-on:click.prevent="post">Add Blog</button>
        
      </form>

      <div v-if="submitted">
          <h3>Thanks for adding your post</h3>
      </div>

      <div id="preview">
          <h3>Preview blog</h3>
            <p>Blog title: {{blog.title}} </p>
            <p>Blog content </p>
            <p>{{ blog.content  }} </p>

            <p>Blog Categories</p>
            <ul>
                <li  v-for="category in blog.categories"> {{ category }}</li>
            </ul>

            <p> Author : {{blog.author}}</p>

      </div>
    
  </div>
</template>

<script>

export default {

    data() {
        return {
            blog : {
                title : "",
                content : "",
                categories : [],
                author : ""
            },
            authors : ["the Net Ninja", "the Angular Avenger", "the Vue Vindicator"],
            submitted : false
        }
    },
    methods: {
        post: function() {//in this method, before we had access to the http, we had to first add vue resource
            this.$http.post("http://jsonplaceholder.typicode.com/posts", {//this post object takes two parameters the first is the url and the second is the object we want to send
                title : this.blog.title,
                body : this.blog.content,
                userId : 1
            }).then(function(data) {//we are passing the then method because this is a promise when it is done, any function here will fire
                console.log(data);
                this.submitted = true;
            });
        }
    },
}

</script>

<style scoped>
    #add-blog *{
        box-sizing: border-box;
    }
    #add-blog {
        margin: 20px auto;
        max-width: 500px;
    }

     label {
         display: block;
         margin: 20px 0 10px;
     }

     input[type="text"], textarea {
         display: block;
         width: 100%;
         padding: 8px;
     }

     #preview {
         padding: 10px 20px;
         border: 1px dotted #ccc;
         margin: 30px 0;
     }
     h3{
         margin: 0;
     }

     #checkboxes input {
         display: inline-block;
         margin-right: 10px;
     }

     #checkboxes label {
         display: inline-block;
     }
</style>