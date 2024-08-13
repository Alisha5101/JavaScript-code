/************************************* Number ***********************************/

let num1=100;
// console.log(num1.toFixed(2))// 100.00  it fixed the number of digit after decimal

let str=num1.toString()
// console.log(str)//convert into string
// console.log(typeof str)// string

let num2=1234873664;
// console.log(num2.toLocaleString('en-IN'))//1,23,48,73,664  show in indian format default is us format
// console.log(num2.toPrecision(6));//1.23487e+9

let num3=new Number(34)// number construter it return object
// console.log(num3.valueOf())//34

/****************************************Math *************************************/

// console.log(Math)//Math is an object
// console.log(Math.abs(-4)); //it returns positive value i.e 4
// console.log(Math.round(45.60));//46
// console.log(Math.ceil(43.89))//44
// console.log(Math.floor(55.23))//55

//Random number between 0-1
// console.log(Math.random());//0.1111233,0.344333
console.log(Math.floor(Math.random()*10))
//Random number between 1-10
console.log(Math.floor(Math.random()*10)+1)

//Random number between 1-100
// console.log(Math.floor((Math.random()*100))+1)

//random number between 11-30;
let min=11;
let max=30;

console.log(Math.floor((Math.random()* (max-min+1))+min));

2.33
