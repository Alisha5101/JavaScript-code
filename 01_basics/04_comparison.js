//we should be careful while using comparison operators 
//if datatype is same then their is no issue with comparison operators but while comparing diifernt data type be careful
//try to conver into same data type and then compare otherwise it will lead to confusion

//equality(==) operator convert and compare operands that are of different types.

console.log("2"==2)//returns true

//while comapring null or undefined value be careful try to avoid these comparison 

console.log(null<0);//false
console.log(null>0);//false
console.log(null>=0);//true
console.log(null<=0);//true