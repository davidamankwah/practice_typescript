"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
//class example
var Ichigo = /** @class */ (function () {
    function Ichigo(Occupation, age, dead) {
        this.Occupation = Occupation;
        this.age = age;
        this.dead = dead;
    }
    return Ichigo;
}());
//implment interfaces
var Ido = /** @class */ (function () {
    function Ido() {
        this.manager = "Pochettino";
        this.trophies = 3;
        this.successful = true;
        ///preseason?: string; Optional argument
    }
    Ido.prototype.tactics = function () {
        console.log(this.manager + " has won " + this.trophies + ".");
    };
    return Ido;
}());
var Kazui = /** @class */ (function (_super) {
    __extends(Kazui, _super);
    function Kazui() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Kazui;
}(Ichigo));
//enum gives friendly name to numeric types
var oldFirm;
(function (oldFirm) {
    oldFirm[oldFirm["rangers"] = 55] = "rangers";
    oldFirm[oldFirm["celtic"] = 51] = "celtic";
})(oldFirm || (oldFirm = {}));
//create instances of objects
var vra = new Ichigo("Shinigami", 17, false);
var gr = new Kazui("well", 4, true);
var ra = new Ido();
//print to console
console.log(vra.Occupation + "\n" + vra.age + "\n" + vra.dead);
console.log(gr.Occupation + "\n" + gr.age + "\n" + gr.dead);
//call void method
ra.tactics();
console.log("Celtic have won " + oldFirm.celtic + " and Rangers have won " + oldFirm.rangers);
//type function
function bigdeal() {
    return 4 + 3;
}
//print to console
console.log(bigdeal());
