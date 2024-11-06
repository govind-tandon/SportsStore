import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDatSource } from "./static.datasource";
import { Cart } from "./cart.model";

@NgModule({
    providers:[ProductRepository, StaticDatSource, Cart]
})


export class ModelModule { }