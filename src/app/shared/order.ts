export interface  IOrder{
    orderId: number;
    customerId: string;
    product: string;
    orderOty: number;
    unitPrice: number;
}

export class Order{
    constructor(
       public orderId: number,
       public customerId: string,
       public product: string,
       public orderOty: number,
       public unitPrice: number
    ){
        
    }
}