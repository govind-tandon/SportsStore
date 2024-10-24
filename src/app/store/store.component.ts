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
    productsPerPage = 4;
    selectedPage = 1;
    constructor(private repository: ProductRepository) { }

    get Products(): Product[]{
        let pageIndex = (this.selectedPage - 1) * this.productsPerPage
        return this.repository.getProducts(this.selectedCategory)
            .slice(pageIndex, pageIndex + this.productsPerPage);
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
    
    changePage(newPage: number){
        this.selectedPage = newPage;
    }

    changePageSize(newSize:number){
        this.productsPerPage = Number(newSize);
        this.changePage(1);
    }

    get pageNumbers(): number[]{

        /* This statement creates a new array, fills it with the value 0, and then uses the map method to generate a 
new array with the number sequence. */
        return Array(Math.ceil(this.repository
            .getProducts(this.selectedCategory).length/this.productsPerPage))
            .fill(0).map((x,i) => i + 1);
    }
}