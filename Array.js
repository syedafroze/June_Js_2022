//Array -> collection of values stored in one single variables .

let arr = [20, 30, 40, 10, 40];

let arr2 = [].concat(arr).reverse();

console.log(arr, arr2);

//-------------
//
//splice array.splice(startIndex, no fo values to be removed , values to be added )
// arrayName.slice(startIndex, endIndex + 1)
     //   0  1  2  3 
let ar = [3, 4, 5, 1, 2, 8, 9];

let sliced = ar.slice(1,  4); 

ar.splice(1, 2, 7, 8, 9);
console.log(ar,sliced);



// forEach 

ar.forEach((val,index)=>console.log(val*index))


