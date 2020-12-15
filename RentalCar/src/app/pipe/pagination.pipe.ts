import { MyTableConfig } from './../MyTableConfig';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginPipe'
})
export class PaginationPipe implements PipeTransform {

  transform(dati: any[], itemPerPage: number, itemPerPageOption: number): any {

    let data: any[] = [];
    let index = 0;
    let per_page = itemPerPage;
    console.log(dati);

    for(let elm of dati){
      console.log(index);
    if (index >= (itemPerPageOption * per_page) && index < (itemPerPageOption + 1) * per_page) {
       console.log(index);
        data.push(elm);
      }
      index++;
    }
    console.log(data);
    return data;
  }

}