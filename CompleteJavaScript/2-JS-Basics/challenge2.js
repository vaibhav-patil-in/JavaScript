
function printFullAge(years) {
    var ages = [];
    var fullAges = [];
    
    for(var i=0; i < years.length; i++) {
        ages[i] = 2018 - years[i];
    }
    
    for(i=0; i < ages.length; i++) {
        if(ages[i] >= 18) {
            fullAges.push(true);
            console.log('Person ' + (i+1) + ' is '+ ages[i]+ ' years old and is of full age');
        } else {
            fullAges.push(false);
            console.log('Person ' + (i+1) + ' is '+ ages[i]+ ' years old and is NOT of full age');
        }
    }

    return fullAges;
}

var year = [2001, 1985, 1994, 2014, 1973];
var full_1 = printFullAge(year);
var full_2 = printFullAge([2012, 1915, 1999]);