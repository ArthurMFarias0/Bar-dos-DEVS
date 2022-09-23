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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vinho = void 0;
var Drinks_1 = require("./Drinks");
var Vinho = /** @class */ (function (_super) {
    __extends(Vinho, _super);
    function Vinho(teorAlcoolico) {
        return _super.call(this, teorAlcoolico) || this;
    }
    Vinho.prototype.softCrash = function () {
        console.log('Você deu uma leve tradava ');
    };
    Vinho.prototype.HeavyCrash = function () {
        console.log('Você deu uma leve tradava ');
    };
    return Vinho;
}(Drinks_1.Drink));
exports.Vinho = Vinho;
