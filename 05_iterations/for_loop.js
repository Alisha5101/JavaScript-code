let count;
let arr=[]
for (let index = 0; index < 10; index++) {
   count = index;
   arr.push(count)
    console.log(count)//print every value
    
}

// console.log(count)//stores last value
console.log(arr)

// print table from 2 to 10

for(let i=2;i<=10;i++){
    console.log(`table of ${i}`)
    for(let j=1;j<=10;j++){
        
        console.log(`${i} * ${j} = ${i*j}`)
    }
}

