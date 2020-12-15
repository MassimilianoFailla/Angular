import { TableUserConfig } from '../ConfigFiles/TableUserConfig';
import { Component, Input, OnInit } from '@angular/core';
import { TableVeicoliConfig } from '../ConfigFiles/TableVeicoliConfig';

@Component({
  selector: 'app-tabella',
  templateUrl: './tabella.component.html',
  styleUrls: ['./tabella.component.css']
})
export class TabellaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // tabelle
  @Input() tabUsr: TableUserConfig;
  @Input() tabVeh: TableVeicoliConfig;
  // @Input() tabRes: TableReservationConfig;


  
}
