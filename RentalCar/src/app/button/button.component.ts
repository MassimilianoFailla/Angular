import { MyButtonConfig } from './../MyButtonConfig';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input() buttonConfig1: MyButtonConfig;

   // stile per l'ngStyle  ??
   mystyle = {
    button: 'font-family: Arial',
    background: '#002dfe',
    textDecoration: '#fafafa',

  };


}
