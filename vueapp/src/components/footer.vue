<template>
    <div>
        <footer>
            <p>{{ copyright + title }}</p>
        </footer>
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
        //    copyright : "copyright 2019 Vue Ninjas"
           copyright : "copyright 2019 "
       } 
    },
    created() {
        bus.$on("titleChange", (data) => {
            this.title = data;
        }); 
    }
}
</script>


<style scoped>
    footer{
        background: #222;
        padding: 6px;
    }
    
    p {
        color: lightgreen;
        text-align: center;
    }
</style>
