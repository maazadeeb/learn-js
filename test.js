"use strict";
exports.__esModule = true;
function distance(a, b) {
    return Math.sqrt(Math.pow(a.x - b.x, 2) +
        Math.pow(a.y - b.y, 2));
}
exports.distance = distance;
var p1 = { x: 0, y: 0 };
var p2 = { x: 1, y: 1 };
distance(p1, p2);
var Cow = /** @class */ (function () {
    function Cow() {
        this.name = 'Alice';
    }
    Cow.prototype.makeSound = function () {
        console.log('Moo!');
    };
    return Cow;
}());
exports.Cow = Cow;
