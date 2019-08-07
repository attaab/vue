<template>
  <div>
    <keep-alive>
         <component v-bind:is="component"></component>
    </keep-alive>
    
      <button v-on:click="component = 'form-one'">form one</button>
      <button v-on:click="component = 'form-two'">form two</button>
  </div>
</template>

<script>
//imports
import formOne from "./components/formOne.vue";
import formTwo from "./components/formTwo.vue";

export default {
    components : { 
           "form-one" : formOne,
           "form-two" : formTwo
  },
  data() {
    return {
        component : "form-one"
    }
    
  }
  
}
</script>

