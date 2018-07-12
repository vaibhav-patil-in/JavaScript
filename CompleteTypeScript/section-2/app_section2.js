"use strict";
console.log('It works');
//#######################Primitive types##########
//string
var myName = 'Vaibhav';
//myName = 28; --Error
//number
var myAge = 27.8;
//boolean
var hasHobbies = true;
hasHobbies = false;
//hasHobbies = 1; --> Throw an error as number
//assign types -- any - Default is any
var myRealAge;
myRealAge = 27;
myRealAge = '27';
////#######################Arrays types##########
var hobbies = ['Cooking', 'Sports'];
console.log(hobbies[0]);
console.log(typeof hobbies); //This will return object
//hobbies = [100];  //Gives an error because, it infers as string array;
var skills = ['Java', 'RxJS'];
skills = [100]; //This will be allowed, because type is any[]
//skills = 100; //not allowed as type is any[] not any
//Tuples - New Type - Mixed array with limited number of items
//For exmample array of Skills and level of proficiency
var skillProficiency = ['Java', 8];
//enums
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Red"] = 3] = "Red";
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor); //This will print 1
//any - Try to avoid any. If you really cant tell and want to use flexibility of ES5 javascript, then use any
var car = 'BMW';
console.log(car);
car = { brand: 'BMW', series: 3 };
console.log(car);
////#######################Functions & types##########
function returnMyName() {
    return myName;
}
console.log(returnMyName());
//void function t(ype
function sayHello() {
    console.log('Hello');
    //return myAge;   ///Error, because return type is void
}
//argument types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(2, 3));
//console.log(multiply(2, 'Vai')); //Error
////#######################Functions as types##########
var myMultiply; //Function types
myMultiply = multiply;
console.log(myMultiply(3, 4));
//myMultiply = sayHello;  ///This will throw error as function type does not match
////#######################Objects and types##########
var userData = {
    name: "Max",
    age: 27
};
/*
userData = {};   ///Error, because above object is referred as type here

//Below also error - because names of the properties are important to really identify object type
userData = {
    a: "Vaibhav",
    b: 28
}*/
//THis will work as it fits the obejct type defination
userData = {
    name: "Neha",
    age: 26
};
////#####################Complex Object##########
//Combining alll things to build complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
////Union types - alternative to any, but for more types cases
var myRealRealAge = 27; //--> create union type using |
myRealRealAge = "Twenty Seven";
///// Check type - typeof  --> Need to put actual types in double quatotion marks
var finalValue = "Vaibhav";
if (typeof finalValue == "string") { //--> Double Quote
    console.log("Final value is string");
}
else if (typeof finalValue == "number") {
    console.log("Final value is number");
}
//// never type ---- added in TypeScript 2.0
//// basically used for functions never returning anything.
function neverReturns() {
    throw new Error("Never return anything but error");
}
////nullable types -- added Typescript 2.0   --> 
/*
This is compiler option. Needs to be added to tsConfig.json --> "strictNullChecks": true.

THis will not allow null values in the code for all variables. But we can allow some variable null by
using union operator like variable can be number | null.

If setting is enabled, no null are allowed unless explicitely mentioned.

*/
var canBeNull = 12;
canBeNull = null;
