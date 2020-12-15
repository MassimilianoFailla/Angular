import { MyPagination } from './../MyPagination';
import { MyOrder } from './../MyOrder';
import { MyTableConfig } from './../MyTableConfig';
import { Component, OnInit, Input } from '@angular/core';
import { MyData } from '../MyData';
import { orderBy } from 'lodash';
import * as _ from 'lodash';
import { MySearch } from '../MySearch';
import { FormControl } from '@angular/forms';
import { NumberSymbol } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

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

  // per l'ordinamento
  reverse: boolean;
  orderType: string;


  selectedFilter:string;
  searched: string;

  searchValue: string;

  paginPipe: number;

  PageNum: number;
  isSelected: boolean;

  selectedPage: number ;
  perPage: number;

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
    this.selectedPage = 1;
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

  filtro(){
    this.data = this.data.filter((p: any) => p[this.selectedFilter].toString().includes(this.searched));
  }

  // pagination(){
  //   this.config.data = this.tableConfig.data;
  //   for(var i = 0; i < this.collection.count; i++){
  //     this.config.data.push({id: i+1, value: 'item number' +(i+1)});
  //   }

  //   this.config = this.tableConfig.pagination;

  //   this.config = {
  //     itemPerPage: 5,
  //     currentPage: 1,
  //     totalItems: this.collection.count,
  //     };


}