// there are two types of scope gloabal scope and block scope
// variable declared inside curly braces are in block scope which we cannot access outside the block scope

// we can access gloabal scope inside block scope but we cannot access block scope varible in global scope
// we should not use var variable because it does not follow global and bock scope, it can be access anywhere

let a =10;

if(true){
    console.log(a)
}

if(true){
    let b=300;
}
// console.log(b)-//return error

// scope concept is different in browser than in node-important