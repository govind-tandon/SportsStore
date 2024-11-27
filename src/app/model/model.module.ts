import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDatSource } from "./static.datasource";
import { Cart } from "./cart.model";
import { Order } from "./order.model";
import { OrderRepository } from "./order.repository";

@NgModule({
    providers:[ProductRepository, StaticDatSource, Cart, Order, OrderRepository]
})


export class ModelModule { }