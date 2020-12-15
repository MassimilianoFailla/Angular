import { TableUserConfig } from './ConfigFiles/TableUserConfig';
import { TableVeicoliConfig } from './ConfigFiles/TableVeicoliConfig';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project RentalCar in Angular';


  // creo la key e la label per 'utente
  headerUser = [
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
  headerVehi = [
    { key: 'id', label: 'Id' },
    { key: 'casaCostruttrice', label: 'CasaCostruttrice' },
    { key: 'modello', label: 'Modello' },
    { key: 'annoImmatricolazione', label: 'AnnoImmatricolazione' },
    { key: 'targa', label: 'Targa' },
  ];



  // creo la lista degli utenti da visualizzare
  datiUtenti = [
    {id: 1 , nome:'Massimiliano', cognome: 'Failla', dataNascita: '06/09/1992', codiceFiscale: 'FLLMLNP06ZQ192P',
    email: 'madalinvalentin.failla@gmail.com', username: 'max', password: 'ciao', role: 'Super'},
  ];

  // creo la lista degli utenti da visualizzare
  datiVeicoli = [
    {id: 1 , casaCostruttrice:'Ford', modello: 'CMax', annoImmatricolazione: '06/09/1989', targa: 'FRDCMX'},
  ];

  // gestione tabella utente
  tabUsr: TableUserConfig = {
    listaUtenti: this.datiUtenti,
    headers: this.headerUser,
  }

  // gestione tabella veicoli
  tabVeh: TableVeicoliConfig = {
    listaVeicoli: this.datiVeicoli,
    headers: this.headerVehi,
  }


}
