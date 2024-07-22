//Javascript strings are primitive and immutable: All string methods produce a new string without altering the original string.
// 1. length

let str1="alisha"
console.log(str1.length);

// 2.charAt(index)
let str2="akash is a dog"
console.log(str2.charAt(1));

// 3.indexOf('stringor character')

console.log(str2.indexOf("h"));

// 4.substring(start,end);it does accept negative index
console.log(str2.substring(2,7));

// 5.slice(start,end);it accepts negative index
// let str='The quick brown fox jumps over the lazy dog.'
// console.log(str.slice(-7,-1));

//6. split(pattern symbol)
// let str='The quick-brown fox jumps over the lazy dog.'
// console.log(str.split('-'));

//7. replace(string,replaceword);
// let str='The quick-brown fox jumps over the lazy dog.'
// console.log(str.replace('fox','alisha'));

//8. repeat(numberoftimes)
// let str='The quick-brown fox jumps over the lazy dog.'
// console.log(str.repeat(3));

//9. replaceAll('string',replac)-The replaceAll() method of String values returns a new string with all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. The original string is left unchanged.

//10. includes("string")-return tru or false

// 11.endsWith("string")-return true or false

// 12 startsWith("string")-return true or false

// trim()-removes whitspaces from left and right

// trimEnd() and trimStart()

// 13.search("str")--The search() method searches a string for a string (or a regular expression) and returns the position of the match:

// localeCompare-You can use the localeCompare method to compare two strings in the current locale. Here's the syntax:

// string1.localeCompare(string2)
// locaelCompare returns:

// 1 if string1 is greater (higher in the alphabetical order) than string2
// -1 if string1 is smaller (lower in the alphabetical order) than string2
// 0 if string1 and string2 are equal in the alphabetical order