// for of loop used for string, array and map data type

let str1="hello world";

for (const element of str1) {
    if(element==" "){
        continue;
    }
    // console.log(element)
}

let arr1=["alisha","peeyush","alka","teju","ashu","akash","akanksha","cherry"];

for (const element of arr1) {
    // console.log(element)
}

// Map is similar to object datatype it store same key and value pair as object but map stores unique value in a order



const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);

//   console.log(fruits)
  fruits.set("grapes",100)
//   console.log(fruits)

  for (const [key,value] of fruits) {
    console.log(key,value)
  }

//   we cannot use for of loop with object 