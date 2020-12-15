"use strict";
exports.__esModule = true;
exports.UserConfig = void 0;
var UserConfig = /** @class */ (function () {
    function UserConfig(id, nome, cognome, dataNascita, codiceFiscale, email, username, password, role) {
        this.id = id;
        this.nome = nome;
        this.cognome = cognome;
        this.dataNascita = dataNascita;
        this.codiceFiscale = codiceFiscale;
        this.email = email;
        this.username = username;
        this.password = password;
        this.role = role;
    }
    return UserConfig;
}());
exports.UserConfig = UserConfig;
