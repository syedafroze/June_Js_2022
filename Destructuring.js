let arr = [3,5,4,6];

let [n1,n3] = [3, 5, 4, 6 ,7,8,9,0];
console.log(n1,n3);//3 4

//n1 n2 

let user={
    name:"syed",
    id:9,
    city:"hyd"
}


let {name,city } = user ;

console.log(name ,city);



let arr2 = [3,2,1,3,2,4,5,6];

//[3,2,1,4,5,6];


let set = new Set ( arr2);
let res1 = Array.from(set);
let res2 = [...set];
console.log(res2);




