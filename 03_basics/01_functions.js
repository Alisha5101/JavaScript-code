// function-function is a block of code designed to perform particular task

// function defination

function firstFunction(parameter1,parameter2){
    return parameter1 + parameter2;
}

let result=firstFunction(2,4)  // values which we pass during function call is known as argument

console.log(result) //6

console.log(firstFunction(0,"4")) //04

//function will not execute  after return statement

// default parameter
function myName(name="alisha"){
console.log(name)
}

myName();// in the function defination we can pass default value 

// restParameter mostly used for cart addition -returns an array

function restParam(...rest){
    return rest
}
console.log(restParam(400,500,600))//[400,500,600]

// passing object to the function

let person={
    name:"alisha",
    course:"js"
}

function objFun(myObj){
    return `My name is ${myObj.name}, my favorite subject is ${myObj.course}`
}

console.log(objFun(person))
console.log(objFun({
    name:"peeysh",
    course:"masti"
}))

// passing array to the function

let arr=[100,2000,3000,400];

function ArrayFun(myArr){
    return myArr
}
console.log(ArrayFun(arr))
console.log(ArrayFun([100,500]))


