import { MyData } from './../MyData';
import { MyHeaders } from './../MyHeaders';
import { MyTableConfig } from './../MyTableConfig';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})

export class OrderByPipe implements PipeTransform {


  transform(dati: Array<MyData>, column?: string, reverse?: boolean): Array<MyData> {

    if (column === undefined || column === 'id') {
      dati.sort((e1, e2) => e1.id - e2.id);
    } else if (column === 'nome') {
      dati.sort((e1, e2) => e1.nome.localeCompare(e2.nome));
    }
    else if (column === 'cognome') {
      dati.sort((e1, e2) => e1.cognome.localeCompare(e2.cognome));
    }
    if (reverse) {
      dati.reverse();
    }
    return dati;
  }

}