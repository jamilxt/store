import { Moment } from 'moment';
import { IInvoice } from 'app/shared/model/invoice.model';
import { IOrderItem } from 'app/shared/model/order-item.model';
import { ICustomer } from 'app/shared/model/customer.model';
import { OrderStatus } from 'app/shared/model/enumerations/order-status.model';

export interface IProductOrder {
  id?: number;
  placeDate?: Moment;
  status?: OrderStatus;
  code?: string;
  invoices?: IInvoice[];
  orderItems?: IOrderItem[];
  customer?: ICustomer;
}

export class ProductOrder implements IProductOrder {
  constructor(
    public id?: number,
    public placeDate?: Moment,
    public status?: OrderStatus,
    public code?: string,
    public invoices?: IInvoice[],
    public orderItems?: IOrderItem[],
    public customer?: ICustomer
  ) {}
}
