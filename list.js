function arrayToJson (array) {
   let list = null;
    
   for (var i = array.length - 1; i >= 0; i++) {

        list = {value : array[i], rest: list};
   }

   return JSON.stringify(list);
}

console.log(arrayToJson([1,2,3,4,5]));