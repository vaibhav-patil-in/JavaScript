// Simple Generic
function echo(data: any) {
    return data;
}

console.log(echo("Max"));
console.log(echo(27));
console.log(echo({name: "Vaibhav", age: 27}));

//Better Generic
function betterEcho<T>(data: T): T {
    return data;
}

console.log(betterEcho("Max").length);
console.log(betterEcho<number>(27));
console.log(betterEcho({name: "Vaibhav", age: 27}));


// Built- in Generic
const testResultsArr: Array<number> = [1.94, 2.33];
testResultsArr.push(2.99);
//testResultsArr.push("Vaibhav");  // Error..


//Generic functions
function printGeneric<T>(argument: T[]) {
    argument.forEach(element => console.log(element));
}
printGeneric<number>([11,34,12,45]);
printGeneric<string>(["Vaibhav","Neha","Gaurav","Aman"]);


//Generic types
const echo2: <T>(data: T) => T = betterEcho;
console.log(echo2<string>("something"));


//Generic Classes
class SimpleMath<T extends number | string> {
    baseValue: T;
    multiplyValue: T;
    calculate(): number {
        return this.baseValue * this.multiplyValue;
    }
}

const simpleMath = new SimpleMath<string>();
simpleMath.baseValue = "10";
simpleMath.multiplyValue = "20";
console.log(simpleMath.calculate());


//Multiple generic types
//Generic Classes
class SimpleMathMoreThanOne<T extends string, U extends number | string> {
    baseValue: T;
    multiplyValue: U;
    calculate(): number {
        return this.baseValue * this.multiplyValue;
    }
}

const simpleMathMoreThanOne = new SimpleMathMoreThanOne<string, number>();
simpleMathMoreThanOne.baseValue = "10";
simpleMathMoreThanOne.multiplyValue = 20;
console.log(simpleMathMoreThanOne.calculate());