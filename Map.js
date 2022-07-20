let user1 = {
  name: "syed",
};

let user2 = {
  name: "Sana",
};

// let Users={
//   company :"Incedo"
// }

// //

// Users[user1]= 1;
// Users[user2]= 2;

let Users = new Map();

Users.set(user1, 1).set(user2, 2);

console.log(Users);
