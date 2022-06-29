//check if a string contains vowels

// a e i o u

let vowels = ["a", "e", "i", "o", "u"];

let str = "ppl";

//declarative method  ()
// imperative method ()

let result = str.split("").some((char) => vowels.includes(char));

console.log(result);

//return true if atleast one value is greater than 10

let arr = [2, 4, 5, 12, 9];

let res = arr.some((val) => val > 10);

console.log(res);

//return true if all the values are greater than 10

let arr2 = [12, 2, 30, 40];

let res2 = arr2.every((val) => val > 10);

console.log(res2);

//?

// let exp = "1plus2plus3minus4";

// exp=exp.replace(/plus/g,"+").replace(/minus/g,"-");

// console.log(eval(exp));
