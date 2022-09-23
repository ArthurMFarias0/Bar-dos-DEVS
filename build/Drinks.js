"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Drinks = exports.Drink = void 0;
var Drink = /** @class */ (function () {
    function Drink(teorAlcoolico) {
        this.teorAlcoolico = teorAlcoolico;
    }
    return Drink;
}());
exports.Drink = Drink;
var Drinks;
(function (Drinks) {
    Drinks[Drinks["drink1"] = 0] = "drink1";
    Drinks[Drinks["drink2"] = 1] = "drink2";
    Drinks[Drinks["drink3"] = 2] = "drink3";
    Drinks[Drinks["drink4"] = 3] = "drink4";
})(Drinks || (Drinks = {}));
exports.Drinks = Drinks;
