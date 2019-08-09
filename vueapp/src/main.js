import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'

export const bus = new Vue();//creating an event Bus


Vue.use(VueResource);//telling vue to use the resource file we imported
Vue.use(VueRouter);

const router = new VueRouter({
   routes : Routes
   //the alternative of doing this is to register the routes as an array here and pssing the paths and components
});

//custom directives
//vue diretive takes a couple of arguments
//first is its name.
// Vue.directive("rainbow", {//this function was commented because it now runs locally
//   bind(el, binding, vnode){
//         //the next line of code takes the element property and styles its color
//         //the Math.random().toString().slice(2,8) function gets a random number converts it to a string and slices it to 6 digits
//         el.style.color = '#'+ Math.random().toString().slice(2,8);
//   }
// });

Vue.directive("theme", {
  bind(el, binding, vnode){
     if(binding.value == "wide") {//binding.value catches the value passed to the binding
       el.style.maxWidth = "1200px";
     } else if (binding.value = "narrow") {
        el.style.maxWidth = "560px";
     };

     if(binding.arg == "column") {//binding.arg catches the arguements passed to the element asin 
          el.style.background = "#ddd";
          el.style.padding = "20px";
     };

  }
});

//FILTERS
Vue.filter("to-uppercase", function (value) {
      return value.toUpperCase();//the toUppercase function converts a string to all uppercases
});

Vue.filter("snippet", function (value) {//filter function
  
  return value.slice(0, 100) + "...";
});


new Vue({
  el: '#app',
  render: h => h(App),
  router: router //this object is teh router object we just created to route out our app
});

