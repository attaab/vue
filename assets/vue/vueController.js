new Vue ({
    el : "#vue-app",
    data : {
        website : "https://github.com/codefingas"
    },
    computed: {
        addAgeToA : function () {
            return this.age + this.a;
        },
        addAgeToB : function () {
            return this.age + this.b;
        }
    }
})

/**this vue instance is for the keyboard events */
// new Vue({
//     el: "#vue-app",
//     data : {
//         name : "name",
//         age : "age"
//     },
//     methods: {
//         logName : function () {
            
//             console.log("you entered your name");
//         },

//         logAge : function () {
//             console.log("you entered your age");
//         }
//     }


// })




/**this vue instance is for the  events lesson*/
// new Vue({
//     el: '#vue-app',
//     data: {
//         person : {
//             name : "shaun"
//     },
//     age : 26,
//         x : 0,
//         y : 0
//     },
//     methods: {
//         add : function (inc)    {
//             this.age += inc;
//         },
//         subtract : function (dec) {
//             this.age -= dec;
//         },
//         updateXY : function (event) {
//            this.x = event.offsetX;
//            this.y = event.offsetY;
//         }
//     }
// });
