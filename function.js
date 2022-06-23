//function ->

//code reusability

let S1 = [20, 30, 20, 40, 50];

//Average = sum of the values/ count of values

let S2 = [25, 35, 20, 40, 20];

//function declaration
//             parameters
function Average(marks) {
  //function definition
  let sum = 0;
  //     1             2  (5)       4
  for (let i = 0; i < marks.length; i++) {
    sum = sum + marks[i]; //3   sum = 20  + 30 =>50
  }

  console.log(sum);

  let Avg = sum / marks.length;

  console.log(Avg); //Avg

  return Avg;

  console.log("doesnt execute this line");
}

//function call
let res = Average(S1); //arguments Avg
console.log("Average scored", res);



let res1 = Average(S2);
console.log("Average scored", res1);
4



function A(){
  console.log("in A");//in A
  //
}



function B(functionA){//A
  functionA();//undefined()  
  
}


//A()=> undefined

B(A);


//function which is passed as an argument to another function is callled "Callback function" -> A

//function that accepts another function as parameter is called "Higher Order Function" -> B
