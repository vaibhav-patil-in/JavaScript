"use strict";
console.log("......LET & CONST ...");
var variable = "Test";
console.log(variable);
variable = "Another value";
console.log(variable);
var maxLevels = 100;
console.log(maxLevels);
//maxLevels = 99;  //--> Constant can not be changed
///Block Scope
function reset() {
    var variable = null;
    console.log(variable); //Will print "null" -- inside scope
}
reset();
console.log(variable); //Will print "Another value" - outside block
//Arrow function
console.log("......ARROW FUNCTION...");
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(4, 5));
var multiplyNumber = function (number1, number2) { return number1 * number2; };
console.log(multiplyNumber(3, 4));
var greet = function () {
    console.log("Hello!");
};
greet();
var greetFriend = function (friend) { return console.log(friend); };
greetFriend('Vaibhav');
//Default paramaters
console.log("----------DEFAULT PARMATERES-----");
var countDown = function (start) {
    if (start === void 0) { start = 10; }
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log("Done!", start);
};
countDown(5);
//Rest & Spread operator
console.log("----------REST & SPREAD(...) OPERATORS-----");
//SPREAD operator - Used on function call to turns array into list of values
var numbers = [1, 89, 10, 99];
console.log(Math.max(1, 89, 10, 99)); // List of values, cant input array
console.log(Math.max.apply(Math, numbers)); // Spread operator to pass numbers
//REST operator - Use in the function declaration to merged multiple values parameters into one array
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(makeArray(1, 2, 4, 5, 6));
// Destructuring
console.log("----------Destructuring array-----");
var myHobbies = ["Cooking", "Sports"];
console.log(myHobbies[0], myHobbies[1]);
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
console.log(hobby1, hobby2);
console.log("----------Destructuring Object-----");
var userData1 = { userName: "Vaibhav", age: 31 };
var userName = userData1.userName, age = userData1.age; // Object destructure ..should match name
var myname = userData1.userName, myage = userData1.age; //With alias
console.log(userName, age);
console.log(myname, myage);
// Template literal
console.log("----------Template literal-----");
console.log("My name is " + myname + " and my age is " + myage);
