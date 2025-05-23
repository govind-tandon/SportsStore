import { Inject, Injectable } from "@angular/core";
import { StaticDatSource } from "./static.datasource";
import { Product } from "./product.model";

@Injectable()
    export class ProductRepository{
        private products: Product[] = [];
        private categories: string[] = [];

        constructor(private dataSource: StaticDatSource){
            dataSource.getProducts().subscribe(data => {
                this.products = data;
                this.categories = data.map(p => p.category ?? "(None)")
                .filter((c, index, array) => array.indexOf(c) == index).sort();
            });
        }
            getProducts(category ?: string): Product[]{
                return this.products
                .filter(p => category == undefined || category == p.category);
            }

            getProduct(id: number): Product | undefined {
                return this.products.find(p => p.id == id);
            }

            getCategories():string[]{
                    return this.categories;
            }
        }
