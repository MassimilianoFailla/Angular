import { MyOrder } from './MyOrder';
import { MyTableConfig } from './MyTableConfig';
import { MyButtonConfig } from './MyButtonConfig';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Benvenuto in RentalCar - Angular';


  // configurazione bottone
  buttonConfig1: MyButtonConfig = {
    text: 'clicca',
    icon: 'home',
    customCssClass: 'myStyle',
  };


  // settaggio headers
  header = [
    { key: 'id', label: 'Id' }, { key: 'nome', label: 'Nome' }, { key: 'cognome', label: 'Cognome' }];

  dati = [
    { nome: 'Massimiliano', cognome: 'Failla', id: 1 },
    { nome: 'Francesca', cognome: 'Rumore', id: 2 },
    { nome: 'Tony', cognome: 'Rumore', id: 3 },
    { nome: 'Enrico', cognome: 'Galletti', id: 4 },
    { nome: 'Guglielmo', cognome: 'Risotto', id: 5 },
  ];


  defaultcol: 'id';

  orderConfig: MyOrder = {
    defaultColumn: 'id',
    orderType: 'asc',
  };

  // configurazione tabella
  tableConfig: MyTableConfig = {
    headers: this.header,
    data: this.dati,
    order: this.orderConfig,
  };
}