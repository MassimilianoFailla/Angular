import { MyOrder } from './MyOrder';
import { MyData } from './MyData';
import { MyHeaders } from './MyHeaders';
import { MySearch } from './MySearch';
import { OrderByPipe } from './pipe/order-by.pipe';

export class MyTableConfig{

    headers: MyHeaders[];
    data: MyData[];
    order: MyOrder;
    search: MySearch;
}