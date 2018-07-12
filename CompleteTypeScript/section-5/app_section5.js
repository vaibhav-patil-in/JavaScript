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
