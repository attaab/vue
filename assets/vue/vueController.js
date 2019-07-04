new Vue ({
    el : "#vue-app",
    data : {
       age : 25,
       x : 0,
       y : 0
    },
    methods: {
        addAge : function (inc) {
            this.age += inc;
        },
        subtractAge : function (dec) {
            this.age -= dec;
        },
        updateXY : function (event) {

            this.x = event.offsetX;
            this.y = event.offsetY;
            
        },
        click : function (event) {
            // console.log(event);
            alert("you click the link " + event.target.innerHTML);
        },
        alertName : function () {
            alert("you entered your name");
       },
       alertage : function () {
           alert("you entered your age");
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
