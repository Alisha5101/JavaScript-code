// we use for in loop for objects, array and string
let str="alisha"
for (const key in str) {
//    console.log(str[key])
}

let obj={
    name:"alisha",
    place:"hyderabad"
}
for(let key in obj){
    console.log(`${key} - ${obj[key]}`)
}

// we cannot use for in loop for map as it is not iterable


// forEach loop

let arr=["alisha","peeyush","alka","teju"];

arr.forEach( (value,index)=>{
    console.log(`${index}-${value}`)
})

let newObj=[
    {
         name:"alisha",
    place:"hyderabad"
    },
    { name:"peeyush",
        place:"delhi"
    },
  {
       name:"karan",
    place:"zaheerabad"
  }
]

newObj.forEach((value)=>{
console.log(value.name)
})

let arr1=[1,2,3,4,5,6,7,8];

arr1.forEach( (num,i)=>{
   arr1[i]=num + 10;
})
console.log(arr1)