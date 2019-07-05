new Vue ({
    el : "#vue-app",
    data : {
       error : false,
       success : false,
    },
    computed : {
        compClasses : function () {
            return {
                available : this.available,
                nearby : this.nearBy
            }
        }
    }
})