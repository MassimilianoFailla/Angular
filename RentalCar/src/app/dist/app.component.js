"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Benvenuto in RentalCar - Angular';
        // configurazione bottone
        this.buttonConfig1 = {
            text: 'clicca',
            icon: 'home',
            customCssClass: 'myStyle'
        };
        // settaggio headers
        this.header = [
            { key: 'id', label: 'Id' },
            { key: 'nome', label: 'Nome' },
            { key: 'cognome', label: 'Cognome' }
        ];
        // settaggio datiConfig
        this.datiConfig = [
            { nome: 'Massimiliano', cognome: 'Failla', id: 1 },
            { nome: 'Francesca', cognome: 'Rumore', id: 2 },
            { nome: 'Tony', cognome: 'Rumore', id: 3 },
            { nome: 'Enrico', cognome: 'Galletti', id: 4 },
            { nome: 'Guglielmo', cognome: 'Risotto', id: 5 },
            { nome: 'Salvo', cognome: 'Montalbano', id: 6 },
            { nome: 'Mimì', cognome: 'Augello', id: 7 },
            { nome: 'Angelo', cognome: 'Catarella', id: 8 },
            { nome: 'Frodo', cognome: 'Baggins', id: 9 },
            { nome: 'Tom', cognome: 'Bombadil', id: 10 },
        ];
        // settaggio orderConfig
        this.orderConfig = {
            defaultColumn: 'id',
            orderType: 'asc'
        };
        this.columns = {
            columns: ['id', 'nome', 'cognome']
        };
        // configPages
        this.pagesConfig = {
            itemPerPage: 2,
            itemPerPageOptions: [2, 3, 4, 5]
        };
        // config action
        this.actionConfig = [
            NEW_ROW, 'Massimiliano', DELETE, 'Failla', EDIT, 1
        ];
        // configurazione tabella
        this.tableConfig = {
            headers: this.header,
            data: this.datiConfig,
            order: this.orderConfig,
            search: this.columns,
            pagination: this.pagesConfig,
            actions: this.actionConfig
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
