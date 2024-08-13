let createDate=new Date();
console.log(createDate)//2024-07-25T14:35:43.370Z

//the typeod date is object
console.log(typeof createDate)//object

console.log(createDate.toISOString())//return 2024-07-25T14:42:15.210Z it is an ISO format,The timezone is always UTC, as denoted by the suffix Z
console.log(createDate.toJSON())//2024-07-25T14:43:48.241Z
console.log(createDate.toUTCString())//Thu, 25 Jul 2024 14:44:37 GMT
console.log(createDate.toTimeString())//14:45:29 GMT+0000 (Coordinated Universal Time)

let mydate=new Date("2024-11-4")//YYYY-MM-DD
console.log(mydate.toDateString());
console.log(mydate.toLocaleDateString())
console.log(`${mydate.getDate()}-${mydate.getMonth()+1}-${mydate.getFullYear()}`);

// to compare dates we can use getTime() or date.now()
console.log(mydate.getTime())//returns in milliseconds
let newDate=Date.now();
console.log(newDate);
