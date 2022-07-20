
function *generator(){
   yield 4;
   yield 6;
   yield 9;
}


let genObj = generator();

// Redux Thunk , Redux saga 


console.log(genObj.next());
//after 30 loc
console.log(genObj.next());
console.log(genObj.next());
console.log(genObj.next());
/*
{done:"false" ,value: 4}
{done :false value:6}
{done :false value:9}
{done :true value:undefined}
*/


