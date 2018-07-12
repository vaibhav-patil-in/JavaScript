"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function logged(constructorFn) {
    console.log(constructorFn);
}
//Basic Decorator
var Person9 = /** @class */ (function () {
    function Person9() {
        console.log("Hi");
    }
    Person9 = __decorate([
        logged
    ], Person9);
    return Person9;
}());
//Decorator Factory - Create factory, based on the input, pass return the decorator function
function logging(value) {
    return value ? logged : null;
}
var Car9 = /** @class */ (function () {
    function Car9() {
    }
    Car9 = __decorate([
        logging(true) //Attach logging whose result will be attached and executed
    ], Car9);
    return Car9;
}());
////UseFull Decorator - Advanced
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
var Plant9 = /** @class */ (function () {
    function Plant9() {
        this.name = "Green Plant";
    }
    Plant9 = __decorate([
        logging(true) ////We can use multiple Decorator
        ,
        printable //Print the this. This decorator added a method on the prototy of the class. It's extra method each object has when created
    ], Plant9);
    return Plant9;
}());
var plant9 = new Plant9();
plant9.print(); //We need to cast to <any> to work this
///Method decorator
function editable(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
}
//Property decorator
function overWritable(value) {
    return function (target, propName) {
        console.log(propName);
        var newDescriptor = {
            writable: value
        };
        return newDescriptor;
    };
}
var Project9 = /** @class */ (function () {
    function Project9(name) {
        this.projectName = name;
    }
    Project9.prototype.calcBudget = function () {
        console.log(1000);
    };
    __decorate([
        overWritable(true) //Property decorator
    ], Project9.prototype, "projectName", void 0);
    __decorate([
        editable(true) //Method Decorator
    ], Project9.prototype, "calcBudget", null);
    return Project9;
}());
var project9 = new Project9("Super Project");
project9.calcBudget();
project9.calcBudget = function () {
    console.log(2000);
};
project9.calcBudget();
console.log(project9);
///Pramater Decorator
function printInfo(target, methodName, paramIndex) {
    console.log("Target: ", target);
    console.log("Methodname: ", methodName);
    console.log("ParamIndex: ", paramIndex);
}
var Course = /** @class */ (function () {
    function Course(name) {
        this.name = name;
    }
    Course.prototype.printStudentNumbers = function (mode, printAll) {
        if (printAll) {
            console.log(10000);
        }
        else {
            console.log(20000);
        }
    };
    __decorate([
        __param(1, printInfo)
    ], Course.prototype, "printStudentNumbers", null);
    return Course;
}());
var course = new Course("Super Course");
course.printStudentNumbers("anything", true);
course.printStudentNumbers("anything", false);
