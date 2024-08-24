// there are some falsy value in js

// falsy values: false,null,undefined,0,-0,bingInt 0n,empty string "",NaN

// truthy value: anything in string is truthy value like "0","false"," " ,[],{},function(){}

// how to check array is empty 

let arr=[];
if(arr.length==0){
    console.log("array is empty");
}

// how to check object is empty
let obj={} 
if(Object.keys(obj).length==0){
    console.log("object is empty")
}

console.log(false==0);
console.log(false=='');
console.log(0=='');
console.log(0==-0)


// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")