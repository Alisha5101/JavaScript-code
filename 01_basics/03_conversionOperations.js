let score="33";
// convert score into number 

console.log(Number(33))// will give 33 
let num1="33abc";
// convert num1 into number
let num2=null
//console.log(typeof num1)// string
// console.log(Number(num1))// will give NaN(not a number ) of type Number
// console.log(Number(true))// return 1
// console.log(Number(num2))// return 0
// console.log(Number(undefined)) //return NaN if type Number

//conver into boolean
let somevalue=1;

console.log(Boolean(somevalue))
// 1=>true 0=>false ""=>false "alia"=>true

//************************************ Operations ************************************** */

//  1 + "2" will give 12
//2 + "2" will give 22
//1 + 1 +"2" will give 22

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"


//If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.

//If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.