//6 november
// create a component that will be displayed by the cart/checkout URLs

import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";
@Component({
    templateUrl: "cartDetail.component.html"
})

export class CartDetailComponent {
    constructor(public cart: Cart) { }
}
