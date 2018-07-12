"use strict";
var MyMap8 = /** @class */ (function () {
    function MyMap8() {
        this.map = {};
    }
    MyMap8.prototype.setItem = function (key, item) {
        this.map[key] = item;
    };
    MyMap8.prototype.getItem = function (key) {
        return this.map[key];
    };
    MyMap8.prototype.clear = function () {
        this.map = {};
    };
    MyMap8.prototype.printMap = function () {
        for (var key in this.map) {
            console.log(key, this.map[key]);
        }
    };
    return MyMap8;
}());
var numberMap8 = new MyMap8();
numberMap8.setItem('apples', 5);
numberMap8.setItem('bananas', 10);
numberMap8.printMap();
var stringMap8 = new MyMap8();
stringMap8.setItem('name', "Max");
stringMap8.setItem('age', "27");
stringMap8.printMap();
