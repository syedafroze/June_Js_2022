//  carname

// camel case

let student1 = [20, 30, 40, 40, 30];
//avg = sum of the values / number of the values

let student2 = [30, 50, 40, 40, 30];

//function declaration
function Average(marks) {
  //parameters
  //function definition
  let sum = 0;

  for (let i = 0; i < marks.length; i++) {
    sum = sum + marks[i];
    //sum = 20+ 30= 50
  }
  console.log(sum);

  let avg = sum / marks.length;

  console.log(avg);
}

//code reusability

//code redundancy

//function call
Average(student1); //arguments
Average(student2);

/*

web devloper 
UI/UX 

frontend developer  (ReactJs , Angular , Vue)
Backend developer
Fullstack developer 

MERN 
MongoDB , ExpressJS , ReactJS ,Nodejs

MEAN
MongoDB , ExpressJS , AngularJS ,Nodejs

*/

function Sum(num1, num2) {
  let res = num1 + num2;

  return res;
  console.log("doesnt executed");
}

let result2 = Sum(4, 5); //9

console.log(result2);


///---------------------------------------
function A(){
  console.log("in A");//in A
  
  function B(){
    console.log("in B");//in B
  }
  
  
  
  
  return B;//undefined
 
}





let result = A()();//currying function 

//function A when callled will return function B

console.log(result);





/*
in A
in B
undefined

*/
//factorial 

// !5 => 5*4*3*2*1 => 120



//recursive function -> a function calling itslef


function fact(num){
  if(num==1){
    return 1;
  }
  else{
    return num * fact(num-1);
  }
}

console.log(fact(5));//120


/*
fact(5)-> return 5 *24;
fact(4)-> return 4 * 6;
fact(3) -> return 3 * 2;
fact(2)-> return 2 * 1;
fact(1)-> return 1;

*/


function fun(a){
  
  let num =5;
  
  return function B(b){
    return  num+a+b; 
  }
}

let res = fun(2);

console.dir(res(5)); //