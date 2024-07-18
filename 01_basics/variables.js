const accountId=234543;
// const is a keyword if we are using const variable then we cannot change the value of const variable if we do so it will throw an error 

let accountName="alusha";
var accountMail="alishaprasdad@mail.com"

// the main difference between let and var are
// scope-var is a gloabally scope whereas let is a block scope and functional scope
// access and declaration- var can be declared and  accessed gloabally but let can be accessed within the block scope in which it is declared
// regenration-var can be re declare and we can assign value to it but let cannot be declared again within the same scope

let accountCity /*it will give udefined value  */
console.table([accountId,accountMail,accountCity,accountName])