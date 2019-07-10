new Vue ({
    el : "#vue-app",
    data : {
        width: 100,
        ended: false
    },
    methods: {
        punch : function () {
            this.width -= 10;//this reduces the width of the bag health
                            //by 10 everytime the function is fired

            if (this.width <= 0) {//this changes the boolean value when the width has been completely reduced to zero
                this.ended = true;
            }

        },
        restart : function () {//this function restarts the game by changing the ended boolean value to true
            this.ended = false;
            this.width = 100;
        }
    },
    computed: {

        
    }
});