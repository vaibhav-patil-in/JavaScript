"use strict";
// Simple Generic
function echo(data) {
    return data;
}
console.log(echo("Max"));
console.log(echo(27));
console.log(echo({ name: "Vaibhav", age: 27 }));
//Better Generic
function betterEcho(data) {
    return data;
}
console.log(betterEcho("Max").length);
console.log(betterEcho(27));
console.log(betterEcho({ name: "Vaibhav", age: 27 }));
// Built- in Generic
var testResultsArr = [1.94, 2.33];
testResultsArr.push(2.99);
//testResultsArr.push("Vaibhav");  // Error..
//Generic functions
function printGeneric(argument) {
    argument.forEach(function (element) { return console.log(element); });
}
printGeneric([11, 34, 12, 45]);
printGeneric(["Vaibhav", "Neha", "Gaurav", "Aman"]);
//Generic types
var echo2 = betterEcho;
console.log(echo2("something"));
//Generic Classes
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return this.baseValue * this.multiplyValue;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.baseValue = "10";
simpleMath.multiplyValue = "20";
console.log(simpleMath.calculate());
//Multiple generic types
//Generic Classes
var SimpleMathMoreThanOne = /** @class */ (function () {
    function SimpleMathMoreThanOne() {
    }
    SimpleMathMoreThanOne.prototype.calculate = function () {
        return this.baseValue * this.multiplyValue;
    };
    return SimpleMathMoreThanOne;
}());
var simpleMathMoreThanOne = new SimpleMathMoreThanOne();
simpleMathMoreThanOne.baseValue = "10";
simpleMathMoreThanOne.multiplyValue = 20;
console.log(simpleMathMoreThanOne.calculate());
