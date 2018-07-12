"use strict";
function greetings(person) {
    console.log("Hello, " + person.firstName);
    console.log("Your Hobby is, " + person.hobbies);
    person.greet("Patil");
}
var namedPerson = {
    firstName: "Max",
    age: 31,
    hobbies: ["Cooking", "Sports"],
    greet: function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
};
greetings(namedPerson);
//Classes with interfaces
var PersonC = /** @class */ (function () {
    function PersonC() {
        this.firstName = "Default";
        this.lastName = "";
    }
    PersonC.prototype.greet = function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    };
    return PersonC;
}());
var myPerson = new PersonC();
myPerson.firstName = "Vaibhavvi";
myPerson.lastName = "Anything";
greetings(myPerson);
myPerson.greet(myPerson.lastName);
var myDoubleFunction;
myDoubleFunction = function (value1, value2) {
    return (value1 + value2) * 2;
};
console.log(myDoubleFunction(10, 20));
var oldPerson = {
    age: 27,
    firstName: "Vaibhav",
    greet: function (lastName) {
        console.log("Hello!!");
    }
};
console.log(oldPerson);
