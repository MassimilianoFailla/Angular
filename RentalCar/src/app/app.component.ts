import { MyTableActionEnum } from './MyTableActionEnum';
import { MyPagination } from './MyPagination';
import { MyHeaders } from './MyHeaders';
import { MySearch } from './MySearch';
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
    { key: 'id', label: 'Id' },
    { key: 'nome', label: 'Nome' },
    { key: 'cognome', label: 'Cognome' }];

  // settaggio datiConfig
  datiConfig = [
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
  orderConfig: MyOrder = {
    defaultColumn: 'id',
    orderType: 'asc',
  };

  columns: MySearch = {
    columns: ['id', 'nome', 'cognome'],
  };

  // configPages
  pagesConfig: MyPagination = {
    itemPerPage: 2,
    itemPerPageOptions: [2, 3, 4, 5],
  };

  // config action
 

  // configurazione tabella
  tableConfig: MyTableConfig = {
    headers: this.header,
    data: this.datiConfig,
    order: this.orderConfig,
    search: this.columns,
    pagination: this.pagesConfig,
  };


}