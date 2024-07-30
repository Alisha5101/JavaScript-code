// Array-it is an collection of elements stored in single variable

// Properties of array
let arr1=[1,2,3,4,5];
// console.log(arr1.length)//5

// 1.join()/join(seperator)-it returns string,it does not change original array

let arr2=['alisha','is','a','good','girl'];
// console.log(arr2.join(" "))
// console.log(arr2)

let newArr=new Array(1,2,3,4,5);//The new Array() constructor creates an Array object.
// console.log(newArr)

// 2 at()-it is used to get element present at given index, we can use [] also but [] does not allow negative index where as at(-1) allows

// console.log(arr2.at(-1))

//3. copyWithin(target,startindex,endindex)-end index is not included The copyWithin() method copies array elements to another position in an array.
//  overwrites the existing values.  does not add items to the array or does not change its length.it modiefies the original array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.copyWithin(2, 0));//['Banana','Orange','Banana','Orange'];
// console.log(fruits)

// 4.push(elemnt)-adds element at last in array, modifies the original array
//5. pop()-removes element from last of array

// console.log(fruits.pop())//returns deleted element

//6. unshift(element)-add element at start position
//7. shift()-removes elemnt at start position, it return deleted element from start

// console.log(fruits.shift())

//8. includes()-checks if element is present in array or not,returns true or false

//9. indexOf(element)-returns the index of elemnt
console.log(newArr.indexOf(4));

// 10. slice(start,index)-returns part of array 

// 11.splice(index,delete count,elements....)-The splice() method adds and/or removes array elements.
// The splice() method overwrites the original array.
newArr.splice(3,0,"alisha","rani")
console.log(newArr)
newArr.splice(3,1);
console.log(newArr)

