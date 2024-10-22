// The Promise Object represents the completion or failure of an asynchronous operation and its results.

// A Promise can have 3 states:

// pending	initial state
// rejected	operation failed
// fulfilled	operation completed 

const promiseOne=new Promise((resolve,reject)=>{
setTimeout((()=>{
    let error=false;
    if(!error){
        resolve({username:"alisha",id:1234})
    }
  else{
    reject("Error:request is failed")
  }
}),1000)
})

promiseOne.then((user)=>{
    console.log(user);
    return user.username;
})
.then((username)=>{
    console.log(username)
})
.catch((err)=>{
    console.log(err)
})