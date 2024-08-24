let count;
let arr=[]
for (let index = 0; index < 10; index++) {
   count = index;
   arr.push(count)
    // console.log(count)//print every value
    
}

// console.log(count)//stores last value
// console.log(arr)

// print table from 2 to 10

for(let i=2;i<=10;i++){
    // console.log(`table of ${i}`)
    for(let j=1;j<=10;j++){
        
        // console.log(`${i} * ${j} = ${i*j}`)
    }
}

// break and continue

// break:if we encounter with break keyword we will come out of loop

for (let index = 0; index < 10; index++) {
    if(index==6){
        console.log("please stop here")
        break;
    }
   console.log(`value of ${index}`);

    
}

// continue:The continue statement skip one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.

for (let index = 0; index < 10; index++) {
    if(index==6){
        console.log("please stop here")
        continue;
    }
   console.log(`value of ${index}`);
}