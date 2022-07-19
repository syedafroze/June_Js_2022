/*
setTimeout(callback, time)
setInterval(callback,time)
setImmediate(callback , time )

sync
asycn
*/

console.log("one"); // one

//setTimeout(() => console.log("two "), 3000); //3000
setImmediate(() => console.log("done"));
console.log("three");

// let set = setInterval(() => console.log("repeats"), 2000);

// setTimeout(() => clearInterval(set), 11000);

/*
one 
two 
three 


one    [ 3000sec started]
three 
two 

two 
Event loop 
*/
