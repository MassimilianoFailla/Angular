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
  @Input() orderConfig: string;
  // @Input() orderConfig: MyOrder;   // implementare questo per l'ordinamento
  @Input() icon: string;
  // @Input() searchText= '';    // pipe di ricerca
  @Input() searchConfig: MySearch;      // ricerca custom

  sortColumnId = 'id';
  //aggiungere sortColumnNome, sortColumnCognome
  reverse: boolean;

  ngOnInit(): void {
    // configurazione dell'ordinamento
    this.orderConfig = this.tableConfig.order.orderType;
    if (this.tableConfig.order.orderType === 'asc') {
      this.data = _.orderBy(this.data, [this.tableConfig.order.defaultColumn], ['asc']);
      this.orderConfig = 'asc';
      this.icon = 'arrow_drop_down';
    } else {
      this.data = _.orderBy(this.data, [this.tableConfig.order.defaultColumn], ['desc']);
      this.orderConfig = 'desc';
      this.icon = 'arrow_drop_up';
    }
  }

  // sort ordinamento tramite id
  sortId(column: string) {
    if (this.sortColumnId === column) {
      this.reverse = !this.reverse;
      this.icon = 'arrow_drop_down';
    }
    this.sortColumnId = column;
    this.icon = 'arrow_drop_up';
  }

  // sort ordinamento tramite nome
  // sortByNome(column: string) {
  //   if (this.sortColumn === column) {
  //     this.reverse = !this.reverse;
  //     this.icon = 'arrow_drop_down';
  //   }
  //   this.sortColumn = column;
  //   this.icon = 'arrow_drop_up';
  // }

  // sort ordinamento tramite cognome
  // sortByCognome(column: string) {
  //   if (this.sortColumn === column) {
  //     this.reverse = !this.reverse;
  //     this.icon = 'arrow_drop_down';
  //   }
  //   this.sortColumn = column;
  //   this.icon = 'arrow_drop_up';
  // }



}

