let user = {
  name: "syed",
  id: 10,
  city: "hyd",
};

// function createUser(name, id, city) {
//   return {
//     name: name,
//     id: id,
//     city: city,
//   };
// }
//factory functions


///Object -> functionalities and property 

class createUser {
  constructor(name, id, city) {
    this.name = name;
    this.id = id;
    this.city = city;
  }
  getName(){
    return this.name;
  }
}



//Object -> Master  property prototype ={ }



let obj = {};
obj.name = "syed";

let user1 = new createUser("sohail", 10, "hyd"); //{}
let user2 = new createUser("sana", 10, "hyd"); //{}
console.log(user1.getName(), user2.getName());
