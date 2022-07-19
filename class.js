// Will discuss classes

let user1 = {
  name: "syed",
  id: 10,
  city: "hyd",
};

let user2 = {
  name: "sohial",
  id: 120,
  city: "noida",
};

//factory functions {}
//class is  blueprint of Object . //  shirt design
class createUser {
  constructor(name, id, city) {
    this.name = name;
    this.id = id;
    this.city = city;
  }
}

//constructor

let obj = {};
obj.name = "alisha";

let user3 = new createUser("mounika", 19, "hyd");

let user4 = new createUser("uday", 20, "noida");
console.log(user4, user3);
//functions

//class

class A {
  constructor(name, city, id) {
    this.name = name;
    this.id = id;
    this.city = city;
  }
}

//speak

class B extends A {
  constructor(company, role, name, city, id) {
    super(name, city, id); //it is calling parent class constructor
    this.company = company;
    this.role = role;
  }
}

let B1 = new B("Infosys", "Dev", "syed", "hyd", 6);
console.log(B1);



let obj = {};
obj.name="syed";






