
//Variables
//Let and const

//ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

//ES6
const name6 = 'Jane Smith';
let age6 = 24;
//name6 = 'Jane Miller';    ---> Not allowed
console.log(name6);


//ES5 - Variables are function scoped
function driverLicencse5(passedTest) {

    if(passedTest) {
        var firstName = 'John Miller';
        var yearOfBirth = 1987;
    }
    //Below line will work as ES5 is function scope
    console.log(firstName + 'born in '+ yearOfBirth + ' now officially a driver');
}

driverLicencse5(true);


//ES6 - Variables are block scoped
function driverLicencse6(passedTest) {

    let firstName;;
    const yearOfBirth = 1987; 

    if(passedTest) {
        firstName = 'John Miller';
    }
    //Below line will not work as ES6 is block scope - Need to move variable to upper block
    console.log(firstName + 'born in '+ yearOfBirth + ' now officially a driver');
}

driverLicencse6(true);


//Two different variables
let i = 23;
for(let i = 0; i < 4; i++){
    console.log(i);
}
console.log(i); //-->Output will be 23

//######################################################################################################

//Blocks and IIFES

//ES5 - Data privacy through IIFEs
(function(){
    var c = 3;
    console.log(c);
})();


//ES6 - We can just use block which gets invoked
{
    const a = 1;
    let b = 2;
    var c = 3;
}
//console.log(b);  //--> This will throw an error because of block scope
console.log(c);


//######################################################################################################

//Strings in ES6/ES2015

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1987;

function calcAge(year) {
    return 2018 - year;
}

//ES5 - String concatenations
console.log('This is '+ firstName+ ' '+lastName+'. He is born in '+yearOfBirth+ '. Today he is '+ calcAge(yearOfBirth)+ ' years old.');


//ES6 - Template Liternal with bakctick
console.log(`This is ${firstName} ${lastName}. He is born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old.`);


//ES6 - Functions on Strings
const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J'));
console.log(n.endsWith('Sm'));
console.log(n.includes('oh'));
console.log(`${firstName} `.repeat(5));


//######################################################################################################

//Arrow functions

const years = [1990, 1965, 1982, 1985];

//ES5
var ages = years.map(function(cur){
    return 2018 - cur;
});
console.log(ages);

//ES6 - Simple Arrow function
let ages6 = years.map(cur => 2018-cur);
console.log(ages6);

//ES6 - Arrow functions with more than 1 argument
ages6 = years.map((cur, index) => `Age element ${index + 1} : ${2018 - cur}.`);
console.log(ages6);

//ES6 - Arrow functions with more than 1 line of block statements.We have write return in this case
ages6 = years.map((cur, index) => {
    const now = new Date().getFullYear();
    const age = now - cur;
    return `Age element ${index + 1} : ${age}.`;
});
console.log(ages6);


//Arrow functions with Lexical this variable

//ES5 - Here 'this' is window object not the box object. Anonymouse function does not belong to box5. SO create new variable and store this in that variable
/*var box5 =  {
    color: 'green',
    position: 1,
    clickMe: function() {
        var self = this;
        document.querySelector('.green').addEventListener('click', function(){
            var str = 'THis is box number ' + self.position + ' and it is '+ self.color;
            alert(str);
        });
    }
}
box5.clickMe();
*/


//ES6 - Use arrow function to solve this. arrow functions share this keyword of surroundings
var box6 =  {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green').addEventListener('click',
        () => {
            var str = 'THis is box number ' + this.position + ' and it is '+ this.color;
            alert(str);
        });
    }
}
box6.clickMe();



//Function constructor to create person object

function Person(name){
    this.name = name;
}

//ES5 - Use bind to pass this
Person.prototype.myFriends5 = function(friends) {
    var arr = friends.map(function(el){
        return this.name + ' is friends with '+el;
    }.bind(this));
    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);


//ES6
Person.prototype.myFriends6 = function(friends) {
    var arr = friends.map((el) => `${this.name} is friends with ${el}`);
    console.log(arr);
}
new Person('Mike').myFriends6(friends);



//######################################################################################################

// Destructuring - Very convinient way of extracting data from data structure or array

//ES5
var john = ['John', 26];
//var name = john[0];
//var age = john[1];

//ES6 - Variables
const [name, age] = ['John', 26];
console.log(name);
console.log(age);

//ES6 - Objects
const obj = {
    fName: 'John',
    age66: 27
}


//Keys should match
const {fName, age66} = obj;
console.log(fName);
console.log(age66);

//If you want to give aliase to keys
const {fName: a, age66: b} = obj;
console.log(a);
console.log(b);

//Practical application of destructuring - returning multiple values from a function.
function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

//Return 2 values from function and store them
const [age2, retirement] = calcAgeRetirement(1987);
console.log(age2);
console.log(retirement);


//######################################################################################################

//Arrays in ES6

const boxes = document.querySelectorAll('.box');

//ES5 - Change the color of all boxes
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur){
    cur.style.backgroundColor = 'dodgerblue';
});


//ES6
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');


/////For Of

//ES5 - For loop to lopp over and add if conditions
for(var i1 = 0 ; i1 < boxesArr5.length; i1++) {
    if(boxesArr5[i1].className === 'box blue') {
        continue;
    }
    boxesArr5[i1].textContent = 'I changed to blue';
}

//ES6 - with For of
for(const cur of boxesArr5)  {
    if(cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I changed to blue';
}

////Methods to find elements in the array - find & findIndex

//ES5
var agesArr = [12, 17, 8, 21, 14, 11];

var full = agesArr.map(function(cur){
    return cur >= 18;
});
console.log(full);

//Find the index of element with true age greater than 18
console.log(full.indexOf(true));        // --> Find Index
console.log(agesArr[full.indexOf(true)]) // --> Find Element



//With ES6 above entire code can be written in 2 lines- find & findIndex
console.log(agesArr.findIndex(cur => cur >= 18));  //Index
console.log(agesArr.find(cur => cur >= 18)); //Actual element


//######################################################################################################

//Spred operator - Expand the arrays - Receives single values and transform them into multiple arguments

// ...ages

//ES5
var agesss = [12, 23, 34, 45];
var addAges = function(a, b, c, d) {
    return a + b + c + d;
}

var sum = addAges(agesss[0], agesss[1], agesss[2], agesss[3]);
console.log(sum);

//ES6 -- spread operator
var sum6 = addAges(...agesss);
console.log(sum6);

//######################################################################################################

//Rest Parameter -- Excatly opposit of spread operator -- convert multiple input values in single object

//ES5 - With arguments object in ES6
function isFulAge5() {
    console.log(arguments);   //Implicit argument object - it's not array we have to convert it to array if we want to access objects

    var argsArr = Array.prototype.slice.call(arguments);
    argsArr.forEach(function(cur) {
        console.log((2018 - cur) >= 18);
    });
}

isFulAge5(1990, 2001, 1965);
isFulAge5(1991, 2001, 1965, 2005, 1999, 2007);

//ES6 -- Rest Paramters - Input to function is array itself
function isFullage6(...years) {
    years.forEach(cur => console.log((2018 - cur) >= 18));
}
isFullage6(1991, 2001, 1965, 2005, 1999, 2007);


//ES6 -- Rest Paramters - Input to function is array itself - Pass limit
function isFullage6(limit, ...years) {
    years.forEach(cur => console.log((2018 - cur) >= limit));
}
isFullage6(21, 1991, 2001, 1965, 2005, 1999, 2007);

//######################################################################################################

// Default Parameter

//ES5
function SmithPerson5(firstName, yearOfBirth, lastName, nationality) {

    //Set default if not sent
    lastName = lastName === undefined ? 'Boring' : lastName;
    nationality = nationality === undefined ? 'american' : nationality;

    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth,
    this.lastName = lastName;
    this.nationality = nationality
}

var john = new SmithPerson5('John', 26);
var Neha = new SmithPerson5('Neha', 25, 'Patil', 'Indian');
console.log(john);
console.log(Neha);


//ES6 - Set default in paramaters
function SmithPerson6(firstName, yearOfBirth, lastName='Boring', nationality='american') {

    this.firstName = firstName;
    this.yearOfBirth = yearOfBirth,
    this.lastName = lastName;
    this.nationality = nationality
}

var john6 = new SmithPerson6('John', 26);
var Neha6 = new SmithPerson6('Neha', 25, 'Patil', 'Indian');
console.log(john6);
console.log(Neha6);


//######################################################################################################

//Maps - Key value data structure. We can use any type as key

const question = new Map();

question.set('question', 'What is the latest version of JavaScript ?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct Answer');
question.set(false, 'Wrong Answer. Please try again!');

console.log(question.get('question'));
//console.log(question.size);

if(question.has(4)) {
    //question.delete(4);
    console.log('Answer 4 is here');
}
//question.clear();

//Maps is iterable
//question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));

//Use Destructuring to retrive both key and value from entries
for(let [key, value] of question.entries()) {
    //Just print answers -  by checking for type of key
    if(typeof(key) === 'number') {
        console.log(`Answer ${key} : ${value}`);
    }
}

//Get the answer from prompt
var ans = parseInt(prompt('Write the correct answer'));

//Check for Answer and print value
console.log(question.get(question.get('correct') === ans));


//######################################################################################################

//Classes

//ES5
/*var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('John', 1998, 'teacher');
john5.calculateAge();
*/

//ES6
class Person6 {

    constructor(name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

    static greeting() {
        console.log('Hey There');
    }
}

const john66 = new Person6('John', 1998, 'teacher');
john66.calculateAge();

Person6.greeting();  //--> Static method attached to class

//######################################################################################################

/////Subclasses


//ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var Athelete = function(name, yearOfBirth, job, numberOfGames, mdeals) {
    
    Person5.call(this, name, yearOfBirth, job);
    this.numberOfGames = numberOfGames;
    this.mdeals = mdeals;
}

Athelete.prototype = Object.create(Person5.prototype);

Athelete.prototype.wonMedal = function() {
    this.mdeals ++;
    console.log(this.mdeals);
}

var johnAthelete5 = new Athelete('John', 1998, 'teacher', 3, 10);

johnAthelete5.calculateAge();
johnAthelete5.wonMedal();



//ES6 - Person class from privious lecture

class Athelete6 extends Person6{

    constructor(name, yearOfBirth, job, numberOfGames, medals) {
        super(name, yearOfBirth, job);

        this.numberOfGames = numberOfGames;
        this.medals = medals;
    }

    wonMedal() {
        this.medals ++;
        console.log(this.medals);
    }
}

const athelete6 = new Athelete6('John', 1998, 'teacher', 3, 10);
athelete6.calculateAge();
athelete6.wonMedal();