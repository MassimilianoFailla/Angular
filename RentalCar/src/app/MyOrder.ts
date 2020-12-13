import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
export class MyOrder {

    orderType: string;
    defaultColumnId: string;
    defaultColumnNome: string;
    defaultColumnCognome: string;

    constructor(orderType: string, defaultColumn: string) {
        this.orderType = orderType;
        this.defaultColumnId = defaultColumn;
    }

    // serviranno per l'ordinamento
    // sortColumnId = 'id';
    // sortColumnNome = 'Nome';
    // sortColumnCognome = 'Cognome';
    // reverse: boolean;


    // metodo di ordinamento
    // getOrdinamento(){
    //      this.orderConfig = this.tableConfig.order.orderType;
    // if (this.tableConfig.order.orderType === 'asc') {
    //     this.data = _.orderBy(this.data, [this.tableConfig.order.defaultColumnId], ['asc']);
    //     this.data = _.orderBy(this.data, [this.tableConfig.order.defaultColumnNome], ['asc']);
    //     this.data = _.orderBy(this.data, [this.tableConfig.order.defaultColumnCognome], ['asc']);
    //     this.orderConfig = 'asc';
    //     this.icon = 'arrow_drop_down';
    //   } else {
    //     this.data = _.orderBy(this.data, [this.tableConfig.order.defaultColumnId], ['desc']);
    //     this.data = _.orderBy(this.data, [this.tableConfig.order.defaultColumnNome], ['desc']);
    //     this.data = _.orderBy(this.data, [this.tableConfig.order.defaultColumnCognome], ['desc']);
    //     this.orderConfig = 'desc';
    //     this.icon = 'arrow_drop_up';
    //   }

    //   // sort ordinamento
    //   sort(){
    //     if(this.sortColumnId === this.tableConfig.order.defaultColumnId){
    //       this.reverse =! this.reverse;
    //       this.icon = 'arrow_drop_down';
    //     }
    //     else if(this.sortColumnNome === this.tableConfig.order.defaultColumnNome){
    //       this.reverse =! this.reverse;
    //       this.icon = 'arrow_drop_down';
    //     }
    //     else if(this.sortColumnCognome === this.tableConfig.order.defaultColumnCognome){
    //       this.reverse =! this.reverse;
    //       this.icon = 'arrow_drop_down';
    //     }
    //     this.sortColumnId = this.tableConfig.order.defaultColumnId;
    //     this.sortColumnNome = this.tableConfig.order.defaultColumnNome;
    //     this.sortColumnCognome = this.tableConfig.order.defaultColumnCognome;
    //     this.icon = 'arrow_drop_down';
    //   }
    
}