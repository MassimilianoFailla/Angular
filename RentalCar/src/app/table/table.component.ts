import { MyOrder } from './../MyOrder';
import { MyTableConfig } from './../MyTableConfig';
import { Component, OnInit, Input } from '@angular/core';
import { MyData } from '../MyData';
import { orderBy } from 'lodash';
import * as _ from 'lodash';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() tableConfig: MyTableConfig;
  @Input() data: MyData;
  @Input() orderConfig: string;
  @Input() icon: string;
  @Input() searchText= '';
  // By default, it is sort by id.
  sortColumn = 'id';
  reverse: boolean;



  ngOnInit(): void {
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

  // Below code is for sorting column
  sort(column: string) {
    if (this.sortColumn === column) {
      // set boolean true or false
      this.reverse = !this.reverse;
      this.icon = 'arrow_drop_down';
    }
    // If we click on any column then it will assign that name to sortColumn.
    this.sortColumn = column;
    this.icon = 'arrow_drop_up';
  }
}

