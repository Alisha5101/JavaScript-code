let arr1=['pallavi','sachin','vidya'];
let team2=['harsh','pranitha','rachana','shivom']
let team3=['ravi','adarsh']
// concat()-returns new array

let newTeam=arr1.concat(team2,team3);
// console.log(newTeam)

// spread operator-jab ek glass ko fek diya aye toh vo tut ke bikhar jata hai vaise hi spread operator hai ,
// jab hum kisi array ko spready operator ke saath use karte hai toh uske saare elements invidual elements kelate hai

let myTeam=[...arr1,...team3];
console.log(myTeam)

// flat(depth level)-convert complex array into simple array

let exArr=[1,2,3,[4,5,[6,7,9]]]
// console.log(exArr.flat(Infinity))//[1,2,3,4,5,6,7,9]

// from()-if you want to convert anything like string,array,or object into an array except number

let num1='laisha';
let newNum1=Array.from(num1)//it is an static property of array,we should always write Array.from or Array.of()
console.log(Array.from(newNum1));
// console.log(Array.isArray(newNum1)); isArray is used to check whether it is array or not
// console.log(Array.from({name:"alisha"})) returns empty array,

// of()-The Array.of() method creates a new array from any number of arguments.

// The Array.of() method can take any type of arguments.

let var1=200;
let var2=300;

let newVar=Array.of(var1,var2);
console.log(newVar)//[200,300]

