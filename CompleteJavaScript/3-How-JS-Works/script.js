///////////////////////////////////////
// Lecture: Hoisting

calculateAge(1987);
function calculateAge(year) {
    console.log(2018 - year);
}
//calculateAge(1987);

//retirement(1987);
var retirement = function(year) {
    console.log(65 - (2018 - year));
}
//retirement(1987);  //Hoisting sets pointer to function

console.log(age);  //Hoisting sets varibale as undefined
var age = 31;
console.log(age);

function foo() {
    console.log(age);
    var age = 65;
    console.log(age);
}
foo();
console.log(age);




///////////////////////////////////////
// Lecture: Scoping


// First scoping example


/*var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}*/



// Example to show the differece between execution stack and scope chain


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third();
    }
}

function third() {
    var d = 'John';
    console.log(a + d);
    //console.log(a + b + c + d);
}


///////////////////////////////////////
// Lecture: The this keyword

console.log(this);

ageCalculate(1987);

function ageCalculate(year) {
    console.log(2018 - year);
    console.log(this);   // object calling function which is window right now
}


var john = {
    name: 'John',
    yearOfBirth: 1987,
    calculateAge: function() {
        console.log(this);  //Object calling function is John, so will print John
        console.log(2018 - this.yearOfBirth); //this object is John, so John DOB

        function innerFunction() {
            console.log(this); //THis is regular function again, so this will be window object
        }
        innerFunction();

    }
}

john.calculateAge(); 

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
}

//Method borrowing - We want John calculate age function to be same as Mike
mike.calculateAge = john.calculateAge;

mike.calculateAge(); //it also proves that this variables get value assigned only when it is called.



