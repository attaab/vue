<template>
    <div>
        <header>
            <h1 v-on:click="changeTitle">
                {{ title }}
            </h1>
        </header>
    </div>
</template>


<script>
import { bus } from "../main";

export default {
    props : {
        title : {
            type : String
        }
    },
    data() {
       return {
        //    title : "Vue Ninjas"
       } 
    },
    methods: {
        changeTitle : function () {
            // this.$emit("changeTitle",  "Vue Wizards ?");
            this.title = "Vue Wizards ?";//changing the title of the header
            bus.$emit("titleChange", "Vue Wizards ?");//passing the new title to the bus
        }
    },
}
</script>

<style scoped>
    header {
        background: lightgreen;
        padding: 10px;
    }
    h1 {
        color: #222;
        text-align: center;
    }
</style>
