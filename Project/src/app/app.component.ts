import { TableConfig } from './ConfigFiles/TableConfig';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project RentalCar in Angular';


  // creo la key e la label
  header = [
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

  // creo la lista degli utenti da visualizzare
  datiUtenti = [
    {id: 1 , nome:'Massimiliano', cognome: 'Failla', dataNascita: '06/09/1992', codiceFiscale: 'FLLMLNP06ZQ192P',
    email: 'madalinvalentin.failla@gmail.com', username: 'max', password: 'ciao', role: 'Super'},
  ];


  confTab: TableConfig = {
    listaUtenti: this.datiUtenti,
    headers: this.header,
  }
}
