// closure :in closure the inner function can access the variables of its outer dunation 

function outeFun(){
    let name="alisha";
    let age=26

    function innerFun(){
        console.log(name)
    }

    innerFun()
}
outeFun()

// we cannnot call innerFun() outside the outeFun(),because we cannot access varable and fun outside the main function 
// closure will get only created when we use varables from its parent function otherwise if our code is like below ,no clousre will be created 
// function outeFun(){
//     let name="alisha";
//     let age=26

//     function innerFun(){
//         console.log("hi")
//     }

//     innerFun()
// }
// outeFun()

