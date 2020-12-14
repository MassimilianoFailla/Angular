import { MyOrder } from './../MyOrder';
import { MyTableConfig } from './../MyTableConfig';
import { Component, OnInit, Input } from '@angular/core';
import { MyData } from '../MyData';
import { orderBy } from 'lodash';
import * as _ from 'lodash';
import { MySearch } from '../MySearch';
import { FormControl } from '@angular/forms';

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


  reverse: boolean;
  orderType: string;

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

  // ordinamento per le varie colonne
  sort(key: string) {
    if (this.orderType === 'desc') {
      this.data = _.orderBy(this.data, [key], ['asc']);
      this.orderType = 'asc';
      this.icon = 'arrow_drop_down';
    } else {
      this.data = _.orderBy(this.data, [key], ['desc']);
      this.icon = 'arrow_drop_up';
      this.orderType = 'desc';
    }
  }
}