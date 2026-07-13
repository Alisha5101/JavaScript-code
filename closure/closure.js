// closure :in closure the inner function can access the variables of its outer dunation 

// function outeFun(){
//     debugger
//     let name="alisha";
//     let age=26

//     function innerFun(){
//         debugger
//         console.log(name)
//     }

//     innerFun()
// }
// outeFun()

// we cannnot call innerFun() outside the outeFun(),because we cannot access varable and fun outside the main function 
// closure will get only created when we use varables from its parent function otherwise if our code is like below ,no clousre will be created 
// function outeFun(){
//     debugger
//     let name="alisha";
//     let age=26

//     function innerFun(){
//         debugger
//         console.log("hi")
//     }

//     innerFun()
// }
// outeFun()

// or we can say that inner function can access its lexical scope 
// if we are accessing one variable one or the varaible which we are accessing in inner funation for that only closure will be created ,but if we are not at all accessing outer properties the no closure will be created

// we can have sturcture like outer---inner---inner2
// example
// function outer(){
//     debugger
//     let  name="alisha";
//     let age=26;

//     function inner(){
//         debugger
//         let sub="javascript"
//         console.log(name);

//         function inner2(){
//             debugger
//             console.log("sub");
//             // console.log(name)
//         }
//         inner2()
//     }
// inner()

// }

// outer();

// below is the code snippent ,see that and guess the output

function outer(){
    counter=0;
    return {
        increment:function(){
            counter++;
            console.log(counter)
        },
        decrememnt:function(){
            counter--;
            console.log(counter)
        }
    }
}
// result=outer();
// result.increment()
// result.increment()
// result.increment()
// result.decrememnt()
// what we will be output now
// ======== its 1,2,3

// let result2=outer();
// result2.increment()
// result2.increment();
// result2.decrememnt()

// what will be the out put now
// its 1,2 again because now we new object and it will create different execution context 

for(var i=0;i<3;i++){
    
    setTimeout(()=>{
        debugger
        console.log(i)},3000)
}


