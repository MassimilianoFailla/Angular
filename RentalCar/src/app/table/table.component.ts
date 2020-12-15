import { MySearch } from './../ConfigFile/MySearch';
import { MyPagination } from './../ConfigFile/MyPagination';
import { MyOrder } from '../ConfigFile/MyOrder';
import { MyTableConfig } from '../ConfigFile/MyTableConfig';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyData } from '../ConfigFile/MyData';
import * as _ from 'lodash';
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
  @Input() paginationConfig: MyPagination;  // per la paginazione della tabella


  @Output() operation = new EventEmitter<number>();

  // per l'ordinamento
  reverse: boolean;
  orderType: string;

  // per la paginazione
  selectedPage: number;
  perPage: number;
  paginPipe: number;

  // per il filraggio
  selectedFilter: string;
  searched: string;
  searchValue: string;

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

    // paginazione
    this.perPage = this.tableConfig.pagination.itemPerPage;
    this.selectedPage = 0;
  }

  // ordinamento per le varie colonne
  // tslint:disable-next-line:typedef
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

  // filtro(){
  //   this.data = this.data.filter((p: any) => p[this.selectedFilter].toString().includes(this.searched));
  // }

  // tslint:disable-next-line:typedef
  op(operation: number) {
    this.operation.emit(operation);
  }


}
