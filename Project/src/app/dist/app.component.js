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
        this.title = 'Project RentalCar in Angular';
        // creo la key e la label per 'utente
        this.headerUser = [
            { key: 'id', label: 'Id' },
            { key: 'nome', label: 'Nome' },
            { key: 'cognome', label: 'Cognome' },
            { key: 'dataNascita', label: 'DataNascita' },
            { key: 'codiceFiscale', label: 'CodiceFiscale' },
            { key: 'email', label: 'Email' },
            { key: 'username', label: 'Username' },
            { key: 'password', label: 'Password' },
            { key: 'role', label: 'role' },
        ];
        // creo la key e la label per i veicoli
        this.headerVehi = [
            { key: 'id', label: 'Id' },
            { key: 'casaCostruttrice', label: 'CasaCostruttrice' },
            { key: 'modello', label: 'Modello' },
            { key: 'annoImmatricolazione', label: 'AnnoImmatricolazione' },
            { key: 'targa', label: 'Targa' },
        ];
        // creo la lista degli utenti da visualizzare
        this.datiUtenti = [
            { id: 1, nome: 'Massimiliano', cognome: 'Failla', dataNascita: '06/09/1992', codiceFiscale: 'FLLMLNP06ZQ192P',
                email: 'madalinvalentin.failla@gmail.com', username: 'max', password: 'ciao', role: 'Super' },
        ];
        // creo la lista degli utenti da visualizzare
        this.datiVeicoli = [
            { id: 1, casaCostruttrice: 'Ford', modello: 'CMax', annoImmatricolazione: '06/09/1989', targa: 'FRDCMX' },
        ];
        // gestione tabella utente
        this.tabUsr = {
            listaUtenti: this.datiUtenti,
            headers: this.headerUser
        };
        // gestione tabella veicoli
        this.tabVeh = {
            listaVeicoli: this.datiVeicoli,
            headers: this.headerVehi
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
