new Vue ({
    el : "#vue-app",
    data : {
       available : false,
       nearBy : false,
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