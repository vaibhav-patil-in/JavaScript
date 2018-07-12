class Person {
    personName: string;
    private personType: string;
    protected personAge: number = 31;

    constructor(name: string, public userName: string) {
        this.personName = name;
    }

    printAge(): void {
        console.log(this.personAge);
        this.setType("Old Guy");
    }

    private setType(type: string): void {
        this.personType = type;
        console.log(this.personType);
    }
}

console.log("-------------CLASSES & OBJECTS----------");

const person = new Person("Vaibhav", "Vaibhav228");
console.log(person);
console.log(person.personName, person.userName);
person.printAge();
//person.setType("Cool Guy");   /// This wont work, because of private method

console.log("-------------CLASSES & INHERITANCE----------");

class Vaibhav extends Person {
    //personName = "Vaibhav";   //Content defined in the Parent class will be overwritten by child class

    constructor(userName: string) {
        super("Max", userName);
        this.personAge = 40;  //Child class can use protected members
    }
}
const vaibhav = new Vaibhav("Neha2288");
console.log(vaibhav);

//Getters & Setters
class Plant {
    private _species: string = "Default";

    get species() {
        return this._species;
    }

    set species(value: string) {
        if(value.length > 3) {
            this._species = value;
        } else {
            this._species = "Default";
        }
    }
}
const plant = new Plant();
console.log(plant.species);
plant.species = "AB";
console.log(plant.species);
plant.species = "Green Plan";
console.log(plant.species);


//Static properties and methods
class Helpers {
    static PI: number = 3.14;

    static calcCircumference(diameter: number): number {
        return this.PI * diameter;
    }
}
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));

//Abstarct Classes - Marked with abstract keyward. Can not be instaciated

abstract class Project {
    projectName: string = "Default";
    budget: number;

    abstract changeName(name: string): void;

    calcBudget() {
        return this. budget * 2;
    }
}

class ITProject extends Project {
    
    changeName(name: string): void {
        this.projectName = name;
    }
}

let CTMProject = new ITProject();
console.log(CTMProject);
CTMProject.changeName('CTM');
console.log(CTMProject);

//Private Constructor and Singletons -- Added in TS2.0
class OnlyOne {
    private static instance: OnlyOne;
    public readonly name: string;
    private constructor(name: string) {
        this.name = name;
    }

    static getInstance() {
        if(!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The only one');
        }
        return OnlyOne.instance;
    }
}

//let wrong = new OnlyOne('The Only One'); //Wrong
let right =OnlyOne.getInstance(); //Right


//readonly properties