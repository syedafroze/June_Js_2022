//Variable - it is used store data
//data
//dataType
//Number
/*
Datatypes are differentiated into 2 
Primitive Datatype 
-------------------------
Number  num =7 
String
Boolean 
null
undefined
symbol

Non Primitive 
------------------
Object and  (Array )
function

*/

// int num = 5;

let num; //
num = 9;
//let and const are used for variable declaration

const num2 = 10;
console.log(num, num2);

// console.log(1);
// console.log(2);
// console.log(3);

//    1       2     4
for (let i = 10; i > 0; i--) {
  console.log(i); //3   10 ,9,8,,,1
}

//

/*
1
hello

2 
hello
hello
...

5
hello 
hello


*/

//      1      2    4
for (let j = 1; j < 6; j++) {
  console.log(j); //3

  for (let k = 1; k <= j; k++) {
    console.log("hello");
  }
}

//for in ,for of  ,forEach   ,{ block }

let val = 10;
if (val < 10) {
  console.log("lesser"); //
} else if (val > 10) {
  console.log("greater");
} else {
  console.log("Equal ");
}

//calulator

let num1 = 5;
let num3 = 10;

let opr = "*";

switch (opr) {
  case "+":
    console.log(num1 + num3);
    break;
  case "-":
    console.log(num1 - num3);
    break;
  case "*":
    console.log(num1 * num3);
    break;
  case "/":
    console.log(num1 / num3);
    break;
  default:
    console.log("invalid operation");
}

//ternary operator / conditionl operator

//short hand notation for if else

// (condition)?(true):(false) ;

num1 == 5 ? console.log("true") : console.log("false");

// //binary 1 (true)  and 0 (false)
// if (true) {
//   console.log("true"); //true
// }

// console.log(10 % 5); // remainder  0
// console.log(10 / 5); //qoutient   2

/*
1- 20 
to print all even values between 1 and 20

even -> 
print "zig" if a value is divisible by 3 and print "zag" if divisible by 5 , "zigzag" if divisble by both 5 and 3

1 3 5  15 20 






*/
for (let i = 0; i <= 10; i++) {
  console.log(2 * i);
}

let number = 9;

// for(let i=0 ;i<=20;i++){
//   if(i%2==0){
//     console.log(i+" "+"even")
//   }
// }

// for (let j = 1; j <= 30; j++) {
//   if (j % 3 == 0 && j % 5 == 0) {
//     console.log(j + " ZigZag");
//   } else if (j % 3 == 0) {
//     console.log(j + " Zig");
//   } else if (j % 5 == 0) {
//     console.log(j + " Zag");
//   }
// }

for (let i = 1; i <= 20; i++) {
  let res =
    i % 3 == 0 && i %5==0 ? i+" zigzag":i%3==0?i+" zig":i%5==0?i+" zag":"not divisible by both 3 and 5";
       

  console.log(res);

}


