
//Module helps to create modular structure of the application. It helps with data hiding and encapsulation

//Budget controller module
var budgetController = (function() {

    var x = 23;

    var add = function(a) {
        return x + a;
    }

    return {
        publicTest: function(b) {
            return add(b);
        }
    }

})();

//UI Controller module
var UIController = (function() {

    //Code

})();

//Application Module to connect both modules in the app
var controller = (function(budgerCtrl, UICtrl) {

    var x = budgerCtrl.publicTest(10);

    return {
        anotherPublicMethod : function() {
            console.log(x);
        }
    }

})(budgetController, UIController);