console.log("......LET & CONST ...");
let variable = "Test";
console.log(variable);
variable = "Another value";
console.log(variable);

const maxLevels = 100;
console.log(maxLevels);
//maxLevels = 99;  //--> Constant can not be changed


///Block Scope
function reset() {
    let variable = null;
    console.log(variable);   //Will print "null" -- inside scope
}
reset();
console.log(variable);  //Will print "Another value" - outside block

//Arrow function
console.log("......ARROW FUNCTION...");
const addNumbers = function(number1: number, number2: number): number {
    return number1 + number2;
}
console.log(addNumbers(4,5));

const multiplyNumber = (number1: number, number2: number) => number1 * number2;
console.log(multiplyNumber(3,4));

const greet = () => {
    console.log("Hello!");
}
greet();

const greetFriend = (friend: string) => console.log(friend);
greetFriend('Vaibhav');

//Default paramaters
console.log("----------DEFAULT PARMATERES-----");
const countDown = (start: number = 10): void => {
    console.log(start);
    while(start > 0) {
        start--;
    }
    console.log("Done!", start);
}
countDown(5);


//Rest & Spread operator
console.log("----------REST & SPREAD(...) OPERATORS-----");
//SPREAD operator - Used on function call to turns array into list of values
const numbers = [1, 89, 10, 99];
console.log(Math.max(1,89,10,99)); // List of values, cant input array
console.log(Math.max(...numbers));  // Spread operator to pass numbers

//REST operator - Use in the function declaration to merged multiple values parameters into one array
function makeArray(...args: number[]) {
    return args;
}
console.log(makeArray(1,2,4,5,6));


// Destructuring
console.log("----------Destructuring array-----");
const myHobbies = ["Cooking", "Sports"];
console.log(myHobbies[0], myHobbies[1]);
const [hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2);

console.log("----------Destructuring Object-----");
const userData1 = { userName: "Vaibhav", age:31 };
const { userName, age } = userData1;  // Object destructure ..should match name
const { userName: myname, age: myage } = userData1;  //With alias
console.log(userName, age);
console.log(myname, myage);


// Template literal
console.log("----------Template literal-----");
console.log(`My name is ${myname} and my age is ${myage}`);


