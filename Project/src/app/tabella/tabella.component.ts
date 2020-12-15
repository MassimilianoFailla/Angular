import { TableConfig } from './../ConfigFiles/TableConfig';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabella',
  templateUrl: './tabella.component.html',
  styleUrls: ['./tabella.component.css']
})
export class TabellaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() confTab: TableConfig;
}
