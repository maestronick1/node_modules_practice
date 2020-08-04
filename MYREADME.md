## Node Modules
In the terminal access the  project directory, type npm init. enter through the object. pull up the project in vs Code and add an index.js file. creat another .js file to the project. the name should be related to your goal.

## Create the array
Create your array in your second .js file. Create a variable with words that relate to your array so you can lead yourself through your assignment. then under the array state module.exports = foodList, preparing the array to be exported.
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
Explore (npmjs.com) for great npms to experiment through your js files and terminal. make sure you use the correct syntax to access the information from these npms. the first line exports the npm and the second passes a random one liner. 

```JS
var oneLinerJoke = require('one-liner-joke');
var getRandomJoke = oneLinerJoke.getRandomJoke();
```
## Puttin both the foodlist and  Npm together.
I just simply console logged the foodlist inside the for loop and the npm oneliner npm below the for loop so I got the foodList array then a one liner. If you console.log the custom npm inside the for loop with the array, you get back an array item then a one-liner, in that order four times.

```js
for(let i = 0; i < foodList.length; i++ ){
    console.log(foodList[i]);
}
console.log(getRandomJoke);
```

## .gitingnore
From the assignment directory touch a .gitignore file. When you open the .gitignore file, type in node_modules. This will prevent the modules from being pushed to github.


## Github Repo
(https://github.com/maestronick1/node_modules_practice)


