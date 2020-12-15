import { MyTableActionEnum } from './MyTableActionEnum';
import { MyPagination } from './MyPagination';
import { MyOrder } from './MyOrder';
import { MyData } from './MyData';
import { MyHeaders } from './MyHeaders';
import { MySearch } from './MySearch';

export class MyTableConfig{

    headers: MyHeaders[];
    data: MyData[];
    order: MyOrder;
    search: MySearch;
    pagination: MyPagination;
    actions: MyTableActionEnum[];

}
