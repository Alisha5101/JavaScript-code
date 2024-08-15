// methods of objects

// 1.Object.assign(target,source)-to merge the objects 

// let obj1={
//     name:'alisha',
//     lastname:"kumari"
// }
// let obj2={
//     name:'alka',
//     lastname:'rani'
// }
// let obj4={
//     course:'btech'
// }
// let newObj=Object.assign({},obj1,obj2);
// // console.log(obj1);

// let obj3={...obj1,...obj2}
// console.log(obj3)

// The properties are overwritten by other objects that have the same properties later in the parameters order.

// let obj5=Object.assign({},obj1,obj4);
// let obj6={...obj1,...obj4}
// console.log(obj5);
// console.log(obj6);

// Object.values and Object.keys()/returns array of keys and values

// let objKeys=Object.keys(obj6);
// console.log(objKeys);

// let objValue=Object.values(obj5);
// console.log(objValue)

// Object.hasOwnProperty-check if property exist orr not,return true or false

// let objPro=Object.hasOwn(obj4,'course');
// console.log(obj1.hasOwnProperty('name'))
// console.log(objPro);


// Object destructuring

let obj2={
    name:'alka',
    lastname:'rani'
}

let {name,lastname:last}=obj2;

console.log(name,last)