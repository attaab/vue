<template>
    <div>
        <footer>
            <p>{{ copyright }}</p>
        </footer>
    </div>
</template>


<script>
export default {
    data() {
       return {
           copyright : "copyright 2019 Vue Ninjas"
       } 
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
