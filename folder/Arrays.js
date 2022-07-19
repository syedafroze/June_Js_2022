//Array -> Collecton of multiple in one single variable

//index     0  1 2
let marks = [10, 20, 30, 40, 50, 60, 70, 80];
console.log(marks.length);
// console.log(marks[0])
// console.log(marks[1]);
// console.log(marks[2]);

for (let i = 0; i <= 8; i++) {
  console.log(marks[i]);
}

let arr = [2, 3, 4];

let arr2 = new Array(); //constructor method

//push -> will add values to last index
arr.push(5);
arr.push(6);

//unshift

arr.unshift(1);
console.log(arr);

//pop()

arr.pop();

console.log(arr);

//shift
arr.shift();
console.log(arr);

//splice(startIndex, no of values to be removed , numbers to be added )

let splicedValue = arr.splice(1, 2, 7, 8, 9);
console.log(arr, splicedValue);

//

//reverse ()

console.log( arr.reverse() );


//reduce 

let numArr2= [3,4,5,2,1];
let sum = 0;
for(let i=0 ; i<numArr2.length ; i++){
 sum = sum + numArr2[i];
}

let res4 = numArr2.reduce( function (total,num){
return total+num;
} );

//function expression
let sum2 = function(){

}


/*

total = 3 , num = 4 => 7
total = 3 , num = 4 => 7;




*/
console.log(sum, res4)

//[]


let sum4 = function (n1, n2) {
  return n1 + n2;
};

let sum3 = (n2, n3) => n2 + n3;

///good code is one which is understanadable.

console.log(sum3(3, 4));

//IIFE -> Imediately Invoked Function Expression 

(function fun(){console.log("IFEE");})();


