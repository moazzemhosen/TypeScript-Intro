//part 1
let first_name: string = "Masai";
console.log(first_name)

let y: number = 10;
console.log(y);

let isDone: boolean = false;
let arr1: number[] = [1, 2, 3, 4];
let arrayOfStrings: string[] = ["Masai", "School"];

let tuple: [string, number, number?];
tuple = ["Masai", 10];

//Enums -> a group of named constants

enum Color {
  User, //0
  SuperUser, //1
    Admin, //2
  SuperAdmin //3
}
let greenColor = Color.User;
// console.log(User["1"]);


//create a function that takes 2 arguments, x, y both numbers
 function sum(a: number, b: number):number {
   return a + b;
}
console.log(sum(2, 3));
 
 function multiply(a: number, b: number):number {
   return a / b;
}
console.log(multiply(2, 3));
 //create a function that takes a name and prints it without returning anything
function greeter(fn: (a: string) => void) {
  fn("Hello, World");
}

//part 2
//1.
type person = {
  title: string;
  status: boolean;
  id: number;
}; // creating a blue-print for the object
const masai: person = {
  title: "masai",
  status: true,
  id:10
  
};

//console.log(masai);

//2.

//  interface person1 {
//    first_name: string;
//    last_name?: string;
//  }
//  function getName(person1(first_name,last_name)) {
//    return `${first_name}${last_name}`;
// }
// console.log(getName("Moazzem","hosen"));

//3.
 interface Address {
   houseNumber: number;
   street: string;
   city: string;
   state: string;
   postalCode: number;
   country: string;

}
 //4.
 interface PersonDetails {
   prefix ?: number;
   phones : [number,number,number];
   address: [Address,Address];
   email?: string;
   firstname?: number;
   lasename?: string;

}
// 5.function PhoneBook(PersonDetails) {
  
// }
// console.log(PhoneBook(PersonDetails))


// part 3
interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

function useroradmin() {
  
}
console.log();
