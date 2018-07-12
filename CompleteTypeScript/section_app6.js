"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
var myName1 = "Vaibhav";
var myAge1 = 31;
//myName1 = 34;
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
console.log("------------EXCERCISE 4------------");
// Exercise 1 - Maybe use an Arrow Function?
var double = function (value) { return value * 2; };
console.log(double(10));
// Exercise 2 - If only we could provide some default values...
var greet1 = function (name) {
    if (name === void 0) { name = "Max"; }
    return console.log("Hello, " + name);
};
greet1();
greet1("Anna");
// Exercise 3 - Isn't there a shorter way to get all these Values?
var numbers1 = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers1));
// Exercise 4 - I have to think about Exercise 3 ...
var newArray = [55, 20];
newArray.push.apply(newArray, numbers1);
console.log(newArray);
// Exercise 5 - That's a well-constructed array.
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0], result2 = testResults[1], result3 = testResults[2];
console.log(result1, result2, result3);
// Exercise 6 - And a well-constructed object!
var scientist = { firstName: "Will", experience: 12 };
var firstName = scientist.firstName, experience = scientist.experience;
console.log(firstName, experience);
var Person = /** @class */ (function () {
    function Person(name, userName) {
        this.userName = userName;
        this.personAge = 31;
        this.personName = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.personAge);
        this.setType("Old Guy");
    };
    Person.prototype.setType = function (type) {
        this.personType = type;
        console.log(this.personType);
    };
    return Person;
}());
console.log("-------------CLASSES & OBJECTS----------");
var person = new Person("Vaibhav", "Vaibhav228");
console.log(person);
console.log(person.personName, person.userName);
person.printAge();
//person.setType("Cool Guy");   /// This wont work, because of private method
console.log("-------------CLASSES & INHERITANCE----------");
var Vaibhav = /** @class */ (function (_super) {
    __extends(Vaibhav, _super);
    //personName = "Vaibhav";   //Content defined in the Parent class will be overwritten by child class
    function Vaibhav(userName) {
        var _this = _super.call(this, "Max", userName) || this;
        _this.personAge = 40; //Child class can use protected members
        return _this;
    }
    return Vaibhav;
}(Person));
var vaibhav = new Vaibhav("Neha2288");
console.log(vaibhav);
//Getters & Setters
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = "Default";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "Default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = "AB";
console.log(plant.species);
plant.species = "Green Plan";
console.log(plant.species);
//Static properties and methods
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));
//Abstarct Classes - Marked with abstract keyward. Can not be instaciated
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = "Default";
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var CTMProject = new ITProject();
console.log(CTMProject);
CTMProject.changeName('CTM');
console.log(CTMProject);
//Private Constructor and Singletons -- Added in TS2.0
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The only one');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
//let wrong = new OnlyOne('The Only One'); //Wrong
var right = OnlyOne.getInstance(); //Right
//readonly properties
// Exercise 1 - Class
var Car = /** @class */ (function () {
    function Car(name) {
        this.acceleration = 0;
        this.name = name;
    }
    Car.prototype.honk = function () {
        console.log("Toooooooot!");
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(20);
console.log(car.acceleration);
// Exercise 2 - Inheritance
var BaseObject = /** @class */ (function () {
    function BaseObject() {
        this.width = 0;
        this.length = 0;
    }
    return BaseObject;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return Rectangle;
}(BaseObject));
var rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 10;
console.log(rectangle.calcSize());
// Exercise 3 - Getters & Setters
var Person = /** @class */ (function () {
    function Person() {
        this._firstName = "";
    }
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            if (value.length > 3) {
                this._firstName = value;
            }
            else {
                this._firstName = "";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var person = new Person();
console.log(person.firstName);
person.firstName = "Ma";
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);
var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function calculateCircumference(diameter) {
        return diameter * PI;
    }
    MyMath.calculateCircumference = calculateCircumference;
})(MyMath || (MyMath = {}));
var MyMath;
(function (MyMath) {
    function calculateRectangle(width, length) {
        return width * length;
    }
    MyMath.calculateRectangle = calculateRectangle;
})(MyMath || (MyMath = {}));
/// <reference path="circleMath.ts" />
/// <reference path="rectangleMath.ts" />
var PI = 2.99;
console.log(MyMath.calculateRectangle(10, 20));
console.log(MyMath.calculateCircumference(3));
console.log(PI);
