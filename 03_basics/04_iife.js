// IIFE-Immediatley invoked function expression:this functions execute as soon as function define

// Immediate Execution: IIFE functions are executed right away, ensuring that the code within them runs without the need for a separate function call.
// Encapsulation: IIFE creates a private scope for variables, preventing them from polluting the global scope and avoiding conflicts with other parts of your code.

// we use iife to prevent our variable from polluted global scope,somtimes gloabal scope creates polltion due to variables conflict ,to avoid pollution we use iife

(function(){
    console.log("alisha")
})();

// **********Note:if you are writing two iife , then always put semicolon ; at the end of first iife otherwise you will get error

((name)=>{
    console.log(`hi i am ${name}`)
})("Alisha")
