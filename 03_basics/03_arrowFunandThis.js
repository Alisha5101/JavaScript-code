// this keyword-it refers to the current context

// this keyword in object refers to current context

let obj={
    name:"alisha",
    welcome:function() {
        console.log(this.name);
        console.log(this)
    }
}

obj.welcome()

console.log(this)//this keyword in node environment return empty object {} whereas this keyword in browser refers to global object i.e window object

// this keyword in function

// function one(){
//     let welcome="hi everyone"
//     console.log(this)//it returns global object both in node environment and browser environment
//     console.log(this.welcome)//returns undefined

// }
// one();

// Arrow function
const myFunction=()=>{
    console.log(this);//return {} in node environment and window object in browser
}
myFunction()
// *************note:Arrow functions do not create their own this binding

const first=(num1,num2)=>num1 + num2;
let result=first(5,3);
console.log(result)
// if you want to return as a object always use ({key:value})

const second=(name)=>{
   return (
        {
            firstname:name
        }
    )
}

let res=second("alisha")
console.log(res.firstname)