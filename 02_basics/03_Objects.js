// Object-An object is a collection of properties, and properties are stored in the form of key and value pair

// object can be intialized or created in two ways
// 1. Object literals

// let person={
//     name:"alisha",
//     age:24
// }
// console.log(person)
// 2. through constructor-here we can have function and we can create object by using new keyword

function bioData(name,course){
    return {username:name,course}
}

let bioDetails=new bioData("alisha","betech");
console.log(bioDetails)

// using constructor function we can have multiple instances
//********** */ Note- Objects created using object literal are singletons, this means when a change is made to the object, it affects the object entire the script. Whereas if an object is created using constructor function and a change is made to it, that change won't affect the object throughout the script.

// How to access Object

// 1. using dot(.) 
let person={
    name:"alisha",
    age:24
}
console.log(person.name)//alisha

// 2. using []
let details={
    mobile:23445,
    fullName:"Alisha rani",
  
}
console.log(details["fullName"])
// Suppose you want to access add full address as a key in details object and wants to access it
let property1="full address";
details[property1]="air force"
console.log(details)

// interview question -suppose there is symbol datatype, how will you show in object
let var1=Symbol("key1")
let data={
    mobile:23445,
    fullName:"Alisha rani",
  [var1]:"i am symbol"
}
console.log(data)


// object.freeze()--after this we cannot modify object

Object.freeze(data)

data.fullName="alia"
console.log(data);
data.petName="aloo"
console.log(data)
