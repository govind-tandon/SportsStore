import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Order } from "./order.model";
import { StaticDatSource } from "./static.datasource";
@Injectable()
export class OrderRepository {
    private orders: Order[] = [];
    constructor(private dataSource: StaticDatSource) { }
    getOrders(): Order[] {
        return this.orders;
    }
    saveOrder(order: Order): Observable<Order> {
        return this.dataSource.saveOrder(order);
    }
}