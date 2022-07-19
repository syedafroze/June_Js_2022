//Object -> Its DataStructure that stores data in form of key
// value pairs

//  Object is a real world entity which has properties nad behaviour.

//arr = ["syed","afroze","24","24"];

//

//UserDetails

/*

{
firstName:"Afroze",
lastName:"syed",
id:24,
age:24
}

{
name:"City",
color:"white",
fuelType:"Petrol"
}


*/

let user = {
  name: "Syed",
  id: 24,
  city: "hyd",
  country: "India",
};

// console.log(user.name);

// user.role="Dev";
// console.log(user.stories());

//for in
let values = [];
for (let i in user) {
  values.push([i, user[i]]);
}

// ["syed",24,"hyd","India"];

//Object.values()
//Object.keys()

//[ [name,"syed"] ,[id,24] ,[city,"hyd"]]

// let objValues = Object.keys(user);
// console.log(objValues);

let objToArr = Object.entries(user);

let user2 = Object.assign({}, user);

Object.assign(user2, { company: "incedo", location: "hyd" });

//delete

delete user.id;
console.log(user);

console.log(user2);

console.log(objToArr);

/*

Object.keys
Object.values'
Object.entries
Object.assign
delete

*/
