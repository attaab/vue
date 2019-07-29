<template>
    <div>
       <ul>
           <li v-for="ninja in ninjas">
                {{ ninja }}
               </li> 
         </ul>
    </div>
</template>


<script>
export default {
    data () {
        return {
            ninjas : ["yoshi", "Ryu", "Goku"]
        }
    }
}
</script>