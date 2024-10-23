import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";

@Component({
    selector:"store",
    templateUrl:"store.component.html"
})

export class StoreComponent {

    /* selectedCategory property is assigned the user’s choice of category (where undefined
means all categories) and is used in the updateData method as an argument to the getProducts method
    */
    selectedCategory: string | undefined;
    constructor(private repository: ProductRepository) { }

    get Products(): Product[]{
        return this.repository.getProducts(this.selectedCategory);
    }

    get categories(): string[]{
        return this.repository.getCategories();
    }

    /* 
    changeCategory method brings these two members together 
in a method that can be invoked when the user makes a category selection. 
    */
    changeCategory(newCategory ?: string){
        this.selectedCategory = newCategory;
    }
}