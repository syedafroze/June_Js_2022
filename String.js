//string -> collection of characters
//char 'A'

//str = char[10];
// index   0123456789012
let str = "double qoutes";
let str1 = "Single qoutes";
let str2 = `backTicks`;

let strlen = str.length;
console.log(strlen);

//w3schools

//reverse a string
let revStr = "";
for (let i = strlen - 1; i >= 0; i--) {
  revStr = revStr + str[i];
}

console.log(revStr);

//to check whether the string is palindrome or not
//palindrome -> actualString == revString

let str3 = "madam";

let arr = [];

// for (let i = str3.length - 1; i >= 0; i--) {
//   arr.push(str3[i]);
// }
// console.log(arr);

let revStr3 = str3.split("").reverse().join("")==str3?str3 +" palindrome":str3+" Not palindrome";
console.log(revStr3);
//reverse() -> Arrays
