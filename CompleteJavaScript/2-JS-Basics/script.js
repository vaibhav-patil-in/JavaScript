var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);

//#####################################################################################

//If/ese statement
var isMarried = 'NO';

if(isMarried === 'YES') {
    console.log(name + 'is married');
} else {
    console.log(name + 'will hopefull marry soon');
}

isMarried = false;
if(isMarried) {
    console.log('YES!');
} else {
    console.log('NO!');
}

//#####################################################################################

//Type coercion
if(23 === "23") {
    console.log('Something to print..');
}

//#####################################################################################

//Boolean Logic - Logical Operator && || !
var age = 25;

if(age < 20) {
    console.log('John is teenager.');
} else if(age > 20 && age < 30) {
    console.log('John is a young man.');
} else {
    console.log('John is man.');
}

//#####################################################################################

//Switch
var job = 'teacher';

job = prompt('What does john do ?');

switch(job) {
    case 'teacher':
        console.log('John teaches kids.');
        break;
    case 'driver':
        console.log('John drives a cab in Lisbon');
        break;
    case 'cop':
        console.log('John helps fight crime');
        break;
    default:
        console.log('John does something else');
}

//#####################################################################################

//Functions
function calculateAge(yearofBirth) {
    var age = 2018 - yearofBirth;
    return age;
}

var ageJohn = calculateAge(1987);
console.log(ageJohn);

//Function calls other functions
function yearUntilRetirement(name, year) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if(retirement >= 0) {
        console.log(retirement +' years remaning for ' + name + ' retirement.');
    } else {
        console.log(name + ' is already retired.');
    }

    
}

yearUntilRetirement('John', 1987);

//#####################################################################################

//Statements and Expressions

function someFunc(par) {
    
    //Function statements - Statement is meant to perform some steps
   
    //code
}

var someFunc = function(par) {

    ////Function Expression - An expression is meant to produce a value

    //code
}

//#####################################################################################

//Arrays
var names = ['John','Jane','Mark'];
var years = new Array(1990, 1969, 1946);

console.log(names);
console.log(names[2]);
names[2] = 'Vaibhav';
console.log(names[2]);

var john = ['John', 'Smith', 1980, 'designer', false];
john.push('blue'); //Add element at the end of array
john.unshift('Mr.') //Add element at the begining of array
john.pop(); //Removes last element of the array and returns it.
john.shift(); //Removes element from begining and returns it.

var index = john.indexOf('Smith'); //Returns position of the passed value in array

//Chekc if John is teacher
if(john.indexOf('teacher') === -1) {
    console.log('John is not a teacher');
}

console.log(index);
console.log(john);


//#####################################################################################

//Objects

var john = {
    name: 'John',
    lastName: 'Smith',
    yearofBirth: 1987,
    job: 'teacher',
    isMarried: false
}

console.log(john);
console.log(john.lastName); //By dot(.) notation
console.log(john['lastName']); //By Key

var xyz = 'job';
console.log(john[xyz]);

//data mutations
john.lastName = 'Miller';
john['job'] = 'Programmer';

console.log(john);

//Another way of creating object
var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1992;
jane['job'] = 'retired';
jane['isMarrie'] =  true;

console.log(jane);


//#####################################################################################

//Objects and Methods

//v1.0
/*var john = {
    name: 'John',
    lastName: 'Smith',
    yearofBirth: 1987,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function() {
        return 2018 - this.yearofBirth;
    }
}

console.log(john);
console.log(john.calculateAge());

var age = john.calculateAge();
john.age = age;
*/

//v2.0
var john = {
    name: 'John',
    lastName: 'Smith',
    yearofBirth: 1987,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function() {
        this.age=  2018 - this.yearofBirth;
    }
}

john.calculateAge();
console.log(john);


var mike = {
    name: 'Mike',
    lastName: 'Smith',
    yearofBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function() {
        this.age=  2018 - this.yearofBirth;
    }
}

mike.calculateAge();
console.log(mike);


//#####################################################################################

//Loops and Iterations

for(var i = 1; i <= 10; i++) {
    console.log(i);
}

var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

for(var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

for(var i = names.length-1; i >= 0 ; i--) {
    console.log(names[i]);
}

//While loop
console.log('While Loop');
var i = 0;
while(i < names.length) {
    console.log(names[i]);
    i++;
}


//#####################################################################################