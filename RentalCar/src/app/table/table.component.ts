import { MyTableConfig } from './../MyTableConfig';
import { Component, OnInit, Input } from '@angular/core';
import { MyData } from '../MyData';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {


  @Input() tableConfig: MyTableConfig;
  @Input() data: MyData;

}
