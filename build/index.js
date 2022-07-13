//part 1
let first_name = "Masai";
console.log(first_name);
let y = 10;
console.log(y);
let isDone = false;
let arr1 = [1, 2, 3, 4];
let arrayOfStrings = ["Masai", "School"];
let tuple;
tuple = ["Masai", 10];
//Enums -> a group of named constants
var Color;
(function (Color) {
    Color[Color["User"] = 0] = "User";
    Color[Color["SuperUser"] = 1] = "SuperUser";
    Color[Color["Admin"] = 2] = "Admin";
    Color[Color["SuperAdmin"] = 3] = "SuperAdmin"; //3
})(Color || (Color = {}));
let greenColor = Color.User;
// console.log(User["1"]);
//create a function that takes 2 arguments, x, y both numbers
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 3));
function multiply(a, b) {
    return a / b;
}
console.log(multiply(2, 3));
//create a function that takes a name and prints it without returning anything
function greeter(fn) {
    fn("Hello, World");
}
const masai = {
    title: "masai",
    status: true,
    id: 10
};
function useroradmin() {
}
console.log();
//# sourceMappingURL=index.js.map