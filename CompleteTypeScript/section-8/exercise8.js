"use strict";
var Entry = /** @class */ (function () {
    function Entry(key, val) {
        this.key = key;
        this.val = val;
    }
    return Entry;
}());
var MyMap = /** @class */ (function () {
    function MyMap() {
        this.entries = [];
    }
    MyMap.prototype.setItem = function (key, val) {
        this.entries.push(new Entry(key, val));
    };
    MyMap.prototype.getItem = function (key) {
        var entry = this.entries.filter(function (ele) { return ele.key === key; });
        return entry[0].val;
    };
    MyMap.prototype.clear = function () {
        this.entries = [];
    };
    MyMap.prototype.printMap = function () {
        this.entries.forEach(function (e) { return console.log("Key: " + e.key + " Value: " + e.val); });
    };
    return MyMap;
}());
var numberMap = new MyMap();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
var stringMap = new MyMap();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();
