//String
//"I am Syed , i am developer

let name = "syed";
let role = "developer";

console.log("I am " + name, +"i am " + role);

console.log(`I am ${name} , i am ${role}`);
//template literal

//array => collection of values stored in single variable

//         0   1 2 3
let arr = [10, 20, 30, 40];

console.log(arr.length);

let arr2 = [1, 3, 4, 5, 6];

arr2.push(2);

console.log(arr2);

//pop()

arr2.pop();
console.log(arr2);

//unshift

arr2.unshift(0);
console.log(arr2);
//shift '

arr2.shift();
console.log(arr2);

//splice
//arrayName.splice(stratIndex, no of values to be removed , values to be added)

arr2.splice(1, 3, 8, 9);
console.log(arr2);

//copy an array '

let num = 2; //num -> 62350
let num2 = num; // num2 = 2  (adrress2)

num2++;
console.log(num, num2); //2,3

//- Non primitive or Reference Datatype

let arr3 = [2, 3, 4]; // 62350 => AFF (ReferenceValue) <= arr3

let arr4 = [].concat(arr3); //    <= arr4
//
arr3.push(5);
console.log(arr4, arr3);

//reverse ()

console.log(arr3.reverse());

//includes

console.log(arr3.includes(10));

//sort (alphabitcal sort ), numeric sort

let user = ["a", "p", "p", "d", "c"];
//["a","c","d]","p","p]

console.log(user.sort());

let numArr = [1, 4, 2, 3, 5, 22, 15]; //1,2,3,4,5,15,22

console.log(
  numArr.sort(function (num1, num2) {
    return num2 - num1;
  })
); //sort (function)  HOF

//




