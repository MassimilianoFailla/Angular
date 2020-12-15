import { Pipe, PipeTransform } from '@angular/core';
import { MyData } from './../MyData';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(dati: Array<MyData>, colonna?: string, reverse?: boolean): Array<MyData> {

    if (colonna === undefined || colonna === 'id') {
      dati.sort((e1, e2) => e1.id - e2.id);
    } else if (colonna === 'nome') {
      dati.sort((e1, e2) => e1.nome.localeCompare(e2.nome));
    }
    else if (colonna === 'cognome') {
      dati.sort((e1, e2) => e1.cognome.localeCompare(e2.cognome));
    }
    if (reverse) {
      dati.reverse();
    }
    return dati;
  }
}
