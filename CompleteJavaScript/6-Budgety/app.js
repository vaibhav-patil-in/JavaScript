
//Module helps to create modular structure of the application. It helps with data hiding and encapsulation

//BUDGET CONTROLLER
var budgetController = (function() {

    //Create Models
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };

    Expense.prototype.calcPercentages = function(totalIncome) {
        if(totalIncome > 0)
        {
            this.percentage = Math.round((this.value / totalIncome) * 100);
        } else {
            this.percentage = -1;
        }
    };

    Expense.prototype.getPercentage = function() {
        return this.percentage;
    };

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var calculateTotal = function(type) {
        var sum = 0;
        data.allItems[type].forEach(function(current) {
            sum = sum + current.value;
        });
        data.totals[type] = sum;
    };

    //We can create separate arrays for storing expenses/incomes,
    //we can use datastructure which hold everything.
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    }

    return {
        addItem: function(type, des, val) {
            var newItem, ID;

            //Create new ID
            if(data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length -1].id + 1;
            } else {
                ID = 0;
            }

            //Create new Item based on 'inc' or 'exp' type
            if(type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if(type === 'inc') {
                newItem = new Income(ID, des, val);
            }

            //Push it into our data structure
            data.allItems[type].push(newItem);

            //Return new items
            return newItem;
        },

        deleteItem: function(type, id) {

            var ids, index;

            //Get array if id - Foreach and Map are same, but Map returns brand new array
            ids = data.allItems[type].map(function(current) {
                return current.id;
            });

            //Get index of input id
            index = ids.indexOf(id);

            //Start removing element at the index
            if(index !== -1) {
                data.allItems[type].splice(index, 1);
            }

        },

        calculateBudget: function() {

            // Calculate the total income & expenses
            calculateTotal('inc');
            calculateTotal('exp');

            // Calculate the budget: income - expenses
            data.budget = data.totals.inc - data.totals.exp;

            // Calculate the percentage of the income that we spent
            if(data.totals.inc > 0)
            {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {
                data.percentage = -1;
            }
        },

        calculatePercentages: function() {

            /**
             * exp a=10, b=20, c=40
             * income = 100
             * 
             * exp percentage a = 10/100= 10%
             *                b = 20/100= 20%
             *                c = 40/100= 40%
             */

            data.allItems.exp.forEach(function(current){
                current.calcPercentages(data.totals.inc);
            });
        },

        getPercentages: function() {
            var allPerc = data.allItems.exp.map(function(current){
                return current.getPercentage();
            });
            return allPerc;
        },

        getBudget: function() {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            }
        },

        testing: function() {
            console.log(data);
        }
    };

})();

//UI CONTROLLER
var UIController = (function() {

    //Expose DOM Strings to avoid multiple places changes
    var DOMStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputAddButton : '.add__btn',
        incomeContainer: '.income__list',
        expenseContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expenseLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercentageLabel: '.item__percentage',
        dateLabel: '.budget__title--month'
    };

    var formatNumber = function(num, type) {
        var numSplit, int, dec;
        /**
         * Rules - 
         * 1. + or - defore the number
         * 2. exactly 2 decimal points
         * 3. Comma separating thousands
         *
         */

        num = Math.abs(num);
        num = num.toFixed(2);

        numSplit = num.split('.');

        int = numSplit[0];
        if(int.length > 3) {
            int = int.substr(0, int.length-3) + ',' + int.substr(int.length-3, 3);
        }
        dec = numSplit[1];

        type === 'exp'? sign = '-' : sign = '+';

        return sign + ' ' + int + '.' + dec;
    };

    var nodeListForEach = function(list, callback) {
        for(var i = 0; i < list.length; i++)
        {
            callback(list[i], i);
        }
    };

    return {
        
        //To return multiple values - Return inputs as object.
        getInput: function() {
            return {
                type: document.querySelector(DOMStrings.inputType).value,
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMStrings.inputValue).value)
            }
        },

        addListItem: function(obj, type) {
            var html, newHtml, element;
            //Create HTML string with placeholder text

            if(type === 'inc')
            {
                element = DOMStrings.incomeContainer;
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            else if(type === 'exp')
            {
                element = DOMStrings.expenseContainer;
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            //Replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));

            //Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },

        deleteListItem: function(selectorID) {
            var el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);
        },

        clearFields: function() {
            var fields, fieldArr;
            fields = document.querySelectorAll(DOMStrings.inputDescription + ', '+DOMStrings.inputValue);

            fieldArr = Array.prototype.slice.call(fields);

            fieldArr.forEach(function(current, index, array) {
                current.value = "";
            });

            fieldArr[0].focus();
        },

        displayBudget: function(obj) {
            var type;
            type = obj.budget > 0 ? 'inc' : 'exp';
            document.querySelector(DOMStrings.budgetLabel).textContent = formatNumber(obj.budget, type);
            document.querySelector(DOMStrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
            document.querySelector(DOMStrings.expenseLabel).textContent = formatNumber(obj.totalExp, 'exp');
            document.querySelector(DOMStrings.percentageLabel).textContent = obj.percentage;

            if(obj.percentage > 0 ) {
                document.querySelector(DOMStrings.percentageLabel).textContent = obj.percentage + '%';
            } else {
                document.querySelector(DOMStrings.percentageLabel).textContent = "---";
            }
        },

        displayPercentages: function(percentages) {
            var fields = document.querySelectorAll(DOMStrings.expensesPercentageLabel);

            nodeListForEach(fields, function(current, index){
                if(percentages[index] > 0)
                {
                    current.textContent = percentages[index] + '%';
                } else {
                    current.textContent = '---';
                }
            });
        },

        displayDate: function() {
            var now, months, month, year;
            now = new Date();

            months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

            month = now.getMonth();
            year = now.getFullYear();

            document.querySelector(DOMStrings.dateLabel).textContent = months[month] + '-' +year;
        },

        changedType: function() {

            var fields = document.querySelectorAll(
                DOMStrings.inputType + ',' +
                DOMStrings.inputDescription + ',' +
                DOMStrings.inputValue);

                nodeListForEach(fields, function(cur){
                    cur.classList.toggle('red-focus');
                });

                document.querySelector(DOMStrings.inputAddButton).classList.toggle('red');
        },

        getDOMStrings: function() {
            return DOMStrings;
        }
    }

})();

//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMStrings();
        //Button event
        document.querySelector(DOM.inputAddButton).addEventListener('click', ctrlAddItem);

        //ENTER Key event
        document.addEventListener('keypress', function(event) {
            if(event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });

        //Attach event - Delete
        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);

        //Change event to list
        document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changedType);
    };

    var ctrlAddItem = function() {

        var input, newItem;

        //1. Get the field input data
        input = UICtrl.getInput();

        //Check validate of description & value 
        if(input.description !== "" && !isNaN(input.value) && input.value > 0)
        {
            //2. Add the item to the budget controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            //3. Add the the item to the UI
            UICtrl.addListItem(newItem, input.type);

            //4. Clear fields
            UICtrl.clearFields();

            //5. Calculate and update budget
            updateBudget();

            //6. Calculate and update percentages
            updatePercentages();
        }
    };

    var updateBudget = function() {
        
        //1. Calculate the budget
        budgetCtrl.calculateBudget();

        //2. Return the budget
        var budget = budgetCtrl.getBudget();

        //3. Dispaly the budget on UI
        UICtrl.displayBudget(budget);
    };

    var updatePercentages = function() {

        //1.Calculate percentages
        budgetCtrl.calculatePercentages();

        //2.Read percentages from the budget controller
        var percentages = budgetCtrl.getPercentages();

        //3.Update the UI with the new percentages
        UICtrl.displayPercentages(percentages);
    };

    var ctrlDeleteItem = function(event) {
        var itemID, splitID, type, ID;

        //Get to the parent top for fidning inc or exp
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        
        if(itemID) {

            //inc-1/exp-1
            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]);

            //1. Delete the item from data structure
            budgetCtrl.deleteItem(type, ID);

            //2. Delete the item from UI
            UICtrl.deleteListItem(itemID);

            //3. Update and show the new budget
            updateBudget();

            //4. Calculate and update percentages
            updatePercentages();
        }
    }

    return {
        init: function() {
            console.log('Application has started...');
            UICtrl.displayDate();
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: 0
            });
            setupEventListeners();
        }
    }

})(budgetController, UIController);

controller.init();