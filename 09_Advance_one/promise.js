// callback hell- it is a nesting of callback ,stacked below one another forming a pyramid of callback.it is very difficult to understand and manage 
// function getData(data,getNextData){
//     setTimeout(() => {
//         console.log("data",data);
//         if(getNextData){
//             getNextData();
//         }
//     },2000);
    
// }
// getData(1,()=>{
//     getData(2,()=>{
//         getData(3)
//     })
// })

// to overcome from callback hell problems we have promises

// The Promise Object represents the completion or failure of an asynchronous operation and its results.

// A Promise can have 3 states:

// pending	initial state
// rejected	operation failed
// fulfilled	operation completed 

// function getData1(data){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("data",data)
//            resolve() 
//         }, 2000);
//     })
// }
// getData1(1)
// .then(()=>{
//     return getData1(2)
// })
// .then(()=>{
//     return getData1(3)
// })
// const promiseOne=new Promise((resolve,reject)=>{
// setTimeout((()=>{
//     let error=false;
//     if(!error){
//         resolve({username:"alisha",id:1234})
//     }
//   else{
//     reject("Error:request is failed")
//   }
// }),1000)
// })

// promiseOne.then((user)=>{
//     console.log(user);
//     return user.username;
// })
// .then((username)=>{
//     console.log(username)
// })
// .catch((err)=>{
//     console.log(err)
// })

// create promise

function getDataPro(data){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("data is coming...",data)
            resolve()
        }, 2000);
    })
}
let p1=getDataPro(1)
p1.then((data)=>{
return getDataPro(2);
})
.then((data)=>{
    return getDataPro(3);
})