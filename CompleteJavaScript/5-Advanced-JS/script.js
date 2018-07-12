
/*

//Function Constructor to create obejct blueprint

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

//To avoid each function getting copy of calculateAge use prototype for inheritance.
//It will not be present in the constructor, but object will have access to it
Person.prototype.calculateAge = function() {
    console.log(2018 - this.yearOfBirth);
}

//Can be done for properties as well

Person.prototype.lastName = 'Smith';

//Create new Object
var john = new Person('John', 1987, 'teacher');
console.log(john);

var jane = new Person('Jane', 1990, 'designer');
console.log(jane);

//Call Methods
john.calculateAge();
jane.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);

*/

//#########################################################

/*

//By using Object.create
var personProto = {
    calculateAge: function() {
        console.log(2018 - this.yearOfBirth);
    }
};

//First way
var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1987;
john.job = 'teacher';

//Second way
var jane = Object.create(personProto, 
{
    name: { value: 'Jane' },
    yearOfBirth: { value: 1990 },
    job: { value: 'designer' }
});

console.log(john);
console.log(jane);

*/

//#########################################################

//Primitives vs Objects - Pass by value and Pass by referrence

/*

//Primitives
var a = 30;
var b = a;
a = 27;

console.log(a);
console.log(b);

//Object
var obj1 = {
    name: 'John',
    age: 31
}
var obj2 = obj1;
obj1.age = 27;

console.log(obj1);
console.log(obj2);


//Functions
var age = 40;
var obj = {
    name: 'Vaibhav',
    city: 'New York'
}

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj);

*/

//#########################################################

//Passing function as an arguments

var years = [1990, 1965, 1968, 2005, 1978];

//Passing function as argument
function arrayCalc(arr, fn) {
    var arrRes = [];
    for(var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2018 - el;
}

function isFullAge(el) {
    return el >=18;
}

function maxHeartRate(el) {
    if(el >= 18 && el <=81) {
        return Math.round(206.9 - (0.67 * el));
    }
    else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
console.log(ages);

var fullages = arrayCalc(ages, isFullAge);
console.log(fullages);

var heartRates = arrayCalc(ages, maxHeartRate);
console.log(heartRates);

//#########################################################

//Functions returning functions

//Lets design a function which will return a question based on the job

function interviewQuestion(job) {
    if(job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if(job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, '+ name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

//Call function which will return function and pass name to it for execution
var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');
teacherQuestion('John');
designerQuestion('jane');
designerQuestion('Mark');

//Another way of calling
interviewQuestion('teacher')('Vaibhav');


//#########################################################

function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

//IIFE -- Immeditely invoked function execution - Used for creating private scopes, modularity
(function() {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

(function(goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);


//#########################################################

//Closures- An inner function has access to variables and paramters of outer 
//function even after outer function has returned.

function retirement(retirementAge) {
    var a = ' years left until retirement';
    return function(yearOfBirth) {
        var age = 2018 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGE = retirement(65);
var retirementIN = retirement(58);

retirementUS(1990);
retirementGE(1990);
retirementIN(1990);


//By using closure the interview function can be written as;
function interviewQuestionWithClosure(job) {
    return function(name) {
        if(job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if(job === 'teacher') {
            console.log('What subject do you teach, '+ name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var interviewQuestionWithClosureDesigner = interviewQuestionWithClosure('designer');
var interviewQuestionWithClosureTeacher = interviewQuestionWithClosure('teacher');
interviewQuestionWithClosureDesigner('Vaibhav');
interviewQuestionWithClosureTeacher('Neha');


//#########################################################

//Bind, Call & Apply methods  --> Carrying


var john = {
    name: 'John',
    age: 40,
    presentation: function(style,timeofDay) {
        if(style === 'formal') {
            console.log('Good ' + timeofDay + ' Ladies and gentlemen. I am ' + this.name);
        } else if (style === 'friendly'){
            console.log('Hey Whats up? ' + ' I am ' + this.name + ' Have a nice '+ timeofDay);
        }
    }
}

john.presentation('formal', 'morning');

var emily = {
    name: 'Emily',
    age:28
}

//Call
john.presentation.call(emily, 'friendly', 'morning');

//Apply -- This will not work, because presentation function does not accept arrays
john.presentation.apply(emily, ['friendly', 'morning']);

//Bind - Returns function which can be passed with other arguments
var johnFiendly = john.presentation.bind(john, 'friendly');
johnFiendly('morning');
johnFiendly('evening');

//Bind Real example - We have to pass array arguments
var years = [1990, 1965, 1968, 2005, 1999];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for(var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2018 - el;
}

function isFullAge(limit, el) {
    return el >=limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);