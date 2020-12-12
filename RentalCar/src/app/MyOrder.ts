import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
export class MyOrder {

    orderType: string;
    defaultColumn: string;

    constructor(orderType: string, defaultColumn: string) {
        this.orderType = orderType;
        this.defaultColumn = defaultColumn;
    }
    // serviranno per l'ordinamento
    // sortColumn = 'id';
    // reverse: boolean;


    // metodo di ordinamento
    // getOrdinamento(){
    //     this.orderConfig = this.tableConfig.order.orderType;
    //     if (this.tableConfig.order.orderType === 'asc') {
    //       this.data = _.orderBy(this.data, [this.tableConfig.order.defaultColumn], ['asc']);
    //       this.orderConfig = 'asc';
    //       this.icon = 'arrow_drop_down';
    //     } else {
    //       this.data = _.orderBy(this.data, [this.tableConfig.order.defaultColumn], ['desc']);
    //       this.orderConfig = 'desc';
    //       this.icon = 'arrow_drop_up';
    //     }
    //   }

    //   // sort ordinamento
    //   sort(column: string) {
    //     if (this.sortColumn === column) {
    //       this.reverse = !this.reverse;
    //       this.icon = 'arrow_drop_down';
    //     }
    //     this.sortColumn = column;
    //     this.icon = 'arrow_drop_up';
    //   }
    // }


}