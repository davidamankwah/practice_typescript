//Generic example
function identity(arg) {
    return arg;
}
function identity2(arg) {
    return arg;
}
console.log(identity2(4));
console.log(identity("everyone"));
//arrow function rewrites a regular function
var arrowz = function (z, y) { return z + y; };
console.log(arrowz(4, 4));
//this keyword
var JOJO = /** @class */ (function () {
    function JOJO(part1) {
        this.part1 = part1;
    }
    return JOJO;
}());
var john = new JOJO("DIO!!");
console.log(john.part1);
//2D Array
var multList = [[1, 3, 4, 5], [4, 3, 3, 3], [7, 5, 2, 0]];
console.log("2d array: " + multList[0][3]); //return 5
console.log("2d array: " + multList[1][0]); //return 4
console.log("2d array: " + multList[2][2]); //return 2
//Map Function
var singles = [3, 6, 9, 16];
var triples = singles.map(function (el) {
    return el * 3;
});
console.log("single: " + singles);
console.log("triple:  " + triples);
