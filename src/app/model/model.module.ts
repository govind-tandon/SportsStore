import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDatSource } from "./static.datasource";

@NgModule({
    providers:[ProductRepository, StaticDatSource]
})

export class ModelModule { }