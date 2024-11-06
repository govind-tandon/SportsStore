import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from "./store/store.module";
import { StoreComponent } from './store/store.component';
import { CheckoutComponent } from './store/checkout.component';
import { CartDetailComponent } from './store/cartDetail.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule,

    //RouterModule.forRoot method id passed a set of routes, each of which maps a URL to a component, The first three routes in the listing match the URLs
    RouterModule.forRoot([
      { path:"store", component:StoreComponent },
      { path:"cart", component:CartDetailComponent },
      { path:"checkout", component:CheckoutComponent },
      { path:"**", redirectTo:"/store" }
    ])
],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
