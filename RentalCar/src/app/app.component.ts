import { MyHeaders } from './MyHeaders';
import { MySearch } from './MySearch';
import { MyOrder } from './MyOrder';
import { MyTableConfig } from './MyTableConfig';
import { MyButtonConfig } from './MyButtonConfig';
import { Component } from '@angular/core';
import { OrderByPipe } from './pipe/order-by.pipe';

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

  // settaggio datiConfig
  datiConfig = [
    { nome: 'Massimiliano', cognome: 'Failla', id: 1 },
    { nome: 'Francesca', cognome: 'Rumore', id: 2 },
    { nome: 'Tony', cognome: 'Rumore', id: 3 },
    { nome: 'Enrico', cognome: 'Galletti', id: 4},
    { nome: 'Guglielmo', cognome: 'Risotto', id: 5 },
  ];

  // settaggio orderConfig
  orderConfig: MyOrder = {
    defaultColumn: 'id',
    orderType: 'asc',
  };
  
  columns: MySearch = {
    columns: ['id', 'nome', 'cognome'],
  };


  // configurazione tabella
  tableConfig: MyTableConfig = {
    headers: this.header,
    data: this.datiConfig,
    order: this.orderConfig,
    search: this.columns,

  };

  
}