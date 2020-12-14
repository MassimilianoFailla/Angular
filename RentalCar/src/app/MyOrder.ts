import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
export class MyOrder {

    orderType: string;
    defaultColumn: string;

    constructor(orderType: string, defaultColumn: string) {
        this.orderType = orderType;
        this.defaultColumn = defaultColumn;
    }

}