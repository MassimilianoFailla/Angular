import { MyOrder } from './../MyOrder';
import { MyTableConfig } from './../MyTableConfig';
import { Component, OnInit, Input } from '@angular/core';
import { MyData } from '../MyData';
import { orderBy } from 'lodash';
import * as _ from 'lodash';
import { MySearch } from '../MySearch';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() tableConfig: MyTableConfig;
  @Input() data: MyData;
  @Input() orderConfig: string;   // implementazione custom per l'ordinamento
  // @Input() orderConfig: MyOrder;   // implementazione custom da padre per l'ordinamento
  @Input() icon: string;
  // @Input() searchText= '';    // pipe di ricerca
  @Input() searchConfig: MySearch;      // ricerca custom

  sortColumnId = 'id';
  sortColumnNome = 'nome';
  sortColumnCognome = 'cognome';
  reverse: boolean;

  ngOnInit(): void {
    // configurazione dell'ordinamento
    this.orderConfig = this.tableConfig.order.orderType;
    if (this.tableConfig.order.orderType === 'asc') {
      this.data = _.orderBy(this.data, [this.tableConfig.order.defaultColumnId], ['asc']);
      this.data = _.orderBy(this.data, [this.tableConfig.order.defaultColumnNome], ['asc']);
      this.data = _.orderBy(this.data, [this.tableConfig.order.defaultColumnCognome], ['asc']);
      this.orderConfig = 'asc';
      this.icon = 'arrow_drop_down';
    } else {
      this.data = _.orderBy(this.data, [this.tableConfig.order.defaultColumnId], ['desc']);
      this.data = _.orderBy(this.data, [this.tableConfig.order.defaultColumnNome], ['desc']);
      this.data = _.orderBy(this.data, [this.tableConfig.order.defaultColumnCognome], ['desc']);
      this.orderConfig = 'desc';
      this.icon = 'arrow_drop_up';
    }
  }

  // ordinamento per le varie colonne
  sort(){
    // ?? modificare questo sort in funzione delle colonne di MySearch ?? Domanda
    if(this.sortColumnId === this.tableConfig.order.defaultColumnId){
      this.reverse =! this.reverse;
      this.icon = 'arrow_drop_down';
    }
    else if(this.sortColumnNome === this.tableConfig.order.defaultColumnNome){
      this.reverse =! this.reverse;
      this.icon = 'arrow_drop_down';
    }
    else if(this.sortColumnCognome === this.tableConfig.order.defaultColumnCognome){
      this.reverse =! this.reverse;
      this.icon = 'arrow_drop_down';
    }
    this.sortColumnId = this.tableConfig.order.defaultColumnId;
    this.sortColumnNome = this.tableConfig.order.defaultColumnNome;
    this.sortColumnCognome = this.tableConfig.order.defaultColumnCognome;
    this.icon = 'arrow_drop_down';
  }

}

