import { MyData } from './../MyData';
import { MyHeaders } from './../MyHeaders';
import { MyTableConfig } from './../MyTableConfig';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(dati: Array<MyData>, column?: string, reverse?: boolean): Array<MyData> {
 
    // First we need to sort an Array.
    if ( column === undefined || column === 'id') {
      dati.sort((e1, e2) => e1.id - e2.id);
        // array.sort(compareFunction)
        // compareFunction - A function that defines an alternative sort order.
        // The function should return a negative, zero, or positive value, depending on the arguments,
        // like : function(a, b){return a-b}
        // When the sort() method compares two values,
        // it sends the values to the compare function,
        // and sorts the values according to the returned (negative, zero, positive) value.
      } else if ( column === 'nome') {
        dati.sort((e1, e2) => e1.nome.localeCompare(e2.nome));
        // The localeCompare() method compares two strings in the current locale.
        // The locale is based on the language settings of the browser.
        // The localeCompare() method returns a number indicating 
        // whether the string comes before, after or is equal as the compareString in sort order.
      } 
      else if (column === 'cognome') {
        dati.sort((e1, e2) => e1.cognome.localeCompare(e2.cognome));
      }
  // Reverse Array after sorting.
  // If flag is true then only reverse it.
    if (reverse) {
      dati.reverse();
    }
    return dati;
  }
}
