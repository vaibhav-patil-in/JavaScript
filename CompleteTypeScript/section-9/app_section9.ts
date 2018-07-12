function logged(constructorFn: Function) {  //Decorator by default gets constructor function as a argument
    console.log(constructorFn);
}

//Basic Decorator
@logged
class Person9 {

    constructor() {
        console.log("Hi");
    }
}

//Decorator Factory - Create factory, based on the input, pass return the decorator function
function logging(value: boolean) {
    return value ? logged : null;
}

@logging(true)  //Attach logging whose result will be attached and executed
class Car9 {

}


////UseFull Decorator - Advanced
function printable(constructorFn: Function) {
    constructorFn.prototype.print = function() {
        console.log(this);
    }
}

@logging(true)  ////We can use multiple Decorator
@printable  //Print the this. This decorator added a method on the prototy of the class. It's extra method each object has when created
class Plant9 {
    name = "Green Plant";
}

const plant9 = new Plant9();
(<any>plant9).print();  //We need to cast to <any> to work this


///Method decorator
function editable(value: boolean) {
    return function(target: any, propName: string, descriptor: PropertyDescriptor) {
        descriptor.writable = value;
    }
}

//Property decorator
function overWritable(value: boolean) {
    return function(target: any, propName: string): any {
        console.log(propName);
        const newDescriptor: PropertyDescriptor = {
            writable: value
        }
        return newDescriptor;
    }
}

class Project9 {

    @overWritable(true)  //Property decorator
    projectName: string;

    constructor(name: string) {
        this.projectName = name;
    }

    @editable(true)  //Method Decorator
    calcBudget() {
        console.log(1000);
    }
}

const project9 = new Project9("Super Project");
project9.calcBudget();
project9.calcBudget = function() {  //This is dependent on the editable decorator now
    console.log(2000);
}
project9.calcBudget();
console.log(project9);


///Pramater Decorator
function printInfo(target: any, methodName: string, paramIndex: number) {
    console.log("Target: ", target);
    console.log("Methodname: ", methodName);
    console.log("ParamIndex: ", paramIndex);
}

class Course {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    printStudentNumbers(mode: string, @printInfo printAll: boolean) {  //Pramater Decorator
        if(printAll) {
            console.log(10000);
        } else {
            console.log(20000);
        }
    }
}

const course = new Course("Super Course");
course.printStudentNumbers("anything", true);
course.printStudentNumbers("anything", false);