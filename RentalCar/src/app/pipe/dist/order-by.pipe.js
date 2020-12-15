"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OrderByPipe = void 0;
var core_1 = require("@angular/core");
var OrderByPipe = /** @class */ (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (dati, column, reverse) {
        if (column === undefined || column === 'id') {
            dati.sort(function (e1, e2) { return e1.id - e2.id; });
        }
        else if (column === 'nome') {
            dati.sort(function (e1, e2) { return e1.nome.localeCompare(e2.nome); });
        }
        else if (column === 'cognome') {
            dati.sort(function (e1, e2) { return e1.cognome.localeCompare(e2.cognome); });
        }
        if (reverse) {
            dati.reverse();
        }
        return dati;
    };
    OrderByPipe = __decorate([
        core_1.Pipe({
            name: 'orderBy'
        })
    ], OrderByPipe);
    return OrderByPipe;
}());
exports.OrderByPipe = OrderByPipe;
