let arr = [2, 3, 4];

// let n1 = arr[0];
// let n2= arr[1];

//destructuring

let [n1, n2, n3] = [2, 3, 4];
console.log(n1, n2, n3);

let companyD = {
  company: "Incedo",
  client: "Verizon",
  Location: "Hyderabad",
};

let user = {
  name: "syed",
  id: 9,
  city: "hyd",
  role: "dev",
  ...companyD,
};
console.log(user);

// let name = user.name;

// let city = user.city;

// let role= user.role;

//destructuring on Object

let { name, city, role } = user;

console.log(name, city, role);

//default parameters

//sum of 2 values

function Sum(n1 = 0, n2 = 1) {
  console.log(n1 + n2); //1
}

Sum();

//Rest and Spread   operator
//  represented using ...  3 dots

//Rest

let arr1 = [2, 3, 4, 1, 5];

let [num, ...newArr] = [2, 3, 4, 1, 5];

//rest is used to collected indiviual values into array

//spread -> unpack array values

console.log(num, newArr);

//spread

let copyArr = [9, 8, 7, ...arr1]; //[9,8,7,2,3,4,1,5]

console.log(copyArr);
