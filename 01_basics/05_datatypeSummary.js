// type of 
// console.log(typeof "string");
// console.log(typeof 5);
// console.log(typeof null);// there is an error or bug from javscript side that type of null is object
// console.log(typeof undefined);
// console.log(typeof 123n);
// console.log(typeof Symbol('123'));
// console.log(typeof true);

//there are two types of datatypes in javascript
//primitive and non primitive data type
//1.primitive datatype-primitive datatype follows call by value that is it is immutable mens we cannot change or alter the value of variable
    let string1 ="this is my js";
    console.log(string1)//this is my js
    string1[0]='v'
    console.log(string1)// this is my js

    //as you can see from the above example the value of string is still same as before
    //We can assign the new value to the variable but we cannot alter the value ,it means we can assign new value to string1 variable as shown below
      string1="my name is alisha"
      console.log(string1)//my name is alisha
    // Primitive is compared by value. Two values are strictly equal if they have the same value.

        const example1 = 'This is a test string';
        const example2 = 'This is a test string';
        example1 == example2 // True
//2. Reference type or non primitve data type; it is a mutable datatype which means it follows call by reference that is it points to the address of variable so if we make any change in variable it directly reflects in the variable
     //array, object,functions all are object
     let arr1=[1,'alisha','alka'];
     arr1[0]='peeyush'
     console.log(arr1)//[ 'peeyush', 'alisha', 'alka' ]
     //reference is not compared by value instead it is compared by reference if the reference of variable is same then it will return true
     let arr2=[1,2,3,4];
     let arr3=arr2;
     console.log(arr2==arr3)//true





