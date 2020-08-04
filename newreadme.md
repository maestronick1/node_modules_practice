## Node Modules
In the terminal access the  project directory, type npm init. enter through the object. pull up the project in vs Code and add an index.js file. creat another .js file to the project. the name should be related to your goal.

## Create the array
Create your array in your second .js file. Creat a variable with words that relate to your array so you can lead yourself through your assignment. then under the array state module.exports = foodList, preparing the array to be exported.
```js
const foodList =["Pasta", "Burgers", "Chicken", "Mangos"]
module.exports = foodList;
```
## Export your array to index.js
create a variable and use the following syntax to access your exported .js array.

```js
const foodList = require("./favfoodlist.js");
```
## Using the for loop to print the array.
following for loop starting at the 0 index accesses the array length  and increases to access all items in the array. the console.log(foodlist[i]) prints the array to your terminal..
```js
for(let i = 0; i < foodList.length; i++ ){
    console.log(foodList[i]);
}
```
## Experimenting with npms
explore npmjs for great npms to expirament trhough your js files and log though teminal. make sure you use the correct syntax to fetch the informations from these npms. first line expoerts the npm and the second passes a random one liner. 

```JS
var oneLinerJoke = require('one-liner-joke');
var getRandomJoke = oneLinerJoke.getRandomJoke();
```
## Puttin both the foodlist and  Npm together.
i just seimply console logged the foodlist inside the forloop and the npm oneliner npm outside, under the for loop so I got the foodlist then a one liner. if you console log the custom npm iside the for looop with the array you get back a food then a oneliner, in that order four times.

```js
for(let i = 0; i < foodList.length; i++ ){
    console.log(foodList[i]);
}
console.log(getRandomJoke);
```

## .gitingnore
From the assignment directory touch a .gitignore file. when you open the .gitignore file, type in node_modules. this will prevent the modules from being pushed to github.


## git repo

