const foodList = require("./favfoodlist.js");
var oneLinerJoke = require('one-liner-joke');
var getRandomJoke = oneLinerJoke.getRandomJoke();


for(let i = 0; i < foodList.length; i++ ){
    console.log(foodList[i]);
}
console.log(getRandomJoke);