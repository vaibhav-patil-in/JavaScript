
interface NamedPerson {
    firstName: string;
    age?: number;
    [propName: string]: any;    ///If you dont know the name of property, then you can add that as well.
    greet(lastName: string): void;
}

function greetings(person: NamedPerson) {
    console.log("Hello, "+ person.firstName);
    console.log("Your Hobby is, "+ person.hobbies);
    person.greet("Patil");
}

const namedPerson: NamedPerson = {
    firstName: "Max",
    age: 31,
    hobbies: ["Cooking", "Sports"],  //We can add property on fly
    greet(lastName: string) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
}

greetings(namedPerson);




//Classes with interfaces
class PersonC implements NamedPerson {
    firstName: string = "Default";
    lastName: string = "";
    greet(lastName: string): void {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
}

const myPerson = new PersonC();
myPerson.firstName = "Vaibhavvi";
myPerson.lastName = "Anything";
greetings(myPerson);
myPerson.greet(myPerson.lastName);



//Interfaces and Function types
interface DoubleValueFunc {
    (number1: number, number2: number): number;
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function(value1: number, value2: number): number {
    return (value1 + value2) * 2;
}

console.log(myDoubleFunction(10, 20));


// Interface Inheritance
interface AgedPerson extends NamedPerson {
    age: number;
}

const oldPerson : AgedPerson = {
    age: 27,
    firstName: "Vaibhav",
    greet(lastName: string) {
        console.log("Hello!!");
    }
}

console.log(oldPerson);
