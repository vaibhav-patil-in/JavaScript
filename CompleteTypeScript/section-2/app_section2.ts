console.log('It works');

//#######################Primitive types##########

//string
let myName: string = 'Vaibhav';
//myName = 28; --Error

//number
let myAge: number = 27.8;

//boolean
let hasHobbies: boolean = true;
hasHobbies = false;
//hasHobbies = 1; --> Throw an error as number

//assign types -- any - Default is any
let myRealAge: any;
myRealAge = 27;
myRealAge = '27';

////#######################Arrays types##########
let hobbies= ['Cooking', 'Sports'];
console.log(hobbies[0]);
console.log(typeof hobbies);   //This will return object
//hobbies = [100];  //Gives an error because, it infers as string array;

let skills: any[] = ['Java', 'RxJS'];
skills = [100];  //This will be allowed, because type is any[]
//skills = 100; //not allowed as type is any[] not any


//Tuples - New Type - Mixed array with limited number of items
//For exmample array of Skills and level of proficiency
let skillProficiency: [string, number] = ['Java', 8];

//enums
enum Color {
    Gray,  //0
    Green, //1
    Blue,  //2
    Red
}
let myColor: Color = Color.Green;
console.log(myColor);  //This will print 1

//any - Try to avoid any. If you really cant tell and want to use flexibility of ES5 javascript, then use any
let car: any = 'BMW';
console.log(car);
car = { brand: 'BMW', series: 3 };
console.log(car);


////#######################Functions & types##########
function returnMyName(): string {
    return myName;
}
console.log(returnMyName());

//void function t(ype
function sayHello(): void {
    console.log('Hello');
    //return myAge;   ///Error, because return type is void
}

//argument types
function multiply(value1: number, value2: number): number {
    return value1 * value2;
}
console.log(multiply(2,3));
//console.log(multiply(2, 'Vai')); //Error



////#######################Functions as types##########
let myMultiply: (val1: number, val2: number) => number;   //Function types
myMultiply = multiply;
console.log(myMultiply(3,4));

//myMultiply = sayHello;  ///This will throw error as function type does not match


////#######################Objects and types##########
let userData: { name: string, age: number} = {
    name: "Max",
    age: 27
}
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
}


////#####################Complex Object##########

//Combining alll things to build complex object

let complex: { data: number[], output: (all: boolean) => number[] } = {
    data: [100, 3.99, 10],
    output: function(all: boolean) : number[] {
        return this.data;
    }
};
//complex = {}; //Will throw and error

//Create custom type with Type Aliases

/// type alias - use type keyword

type Complex = { data: number[], output: (all: boolean) => number[] };

let complex2: Complex = {    //--> Now it's easy to create type and if we want to change, we can change in one place i.e. type
    data: [100, 3.99, 10],
    output: function(all: boolean) : number[] {
        return this.data;
    }
};

////Union types - alternative to any, but for more types cases

let myRealRealAge: number | string = 27;   //--> create union type using |
myRealRealAge = "Twenty Seven";

///// Check type - typeof  --> Need to put actual types in double quatotion marks
let finalValue = "Vaibhav";
if(typeof finalValue == "string") {  //--> Double Quote
    console.log("Final value is string");
} else if( typeof finalValue == "number") {
    console.log("Final value is number");
}

//// never type ---- added in TypeScript 2.0
//// basically used for functions never returning anything.
function neverReturns() : never {
    throw new Error("Never return anything but error");
}

////nullable types -- added Typescript 2.0   --> 
/* 
This is compiler option. Needs to be added to tsConfig.json --> "strictNullChecks": true. 

THis will not allow null values in the code for all variables. But we can allow some variable null by 
using union operator like variable can be number | null.

If setting is enabled, no null are allowed unless explicitely mentioned.

*/
let canBeNull: number | null = 12;
canBeNull = null;
