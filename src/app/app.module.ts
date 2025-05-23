import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from "./store/store.module";
import { StoreComponent } from './store/store.component';
import { CheckoutComponent } from './store/checkout.component';
import { CartDetailComponent } from './store/cartDetail.component';
import { RouterModule } from '@angular/router';
import { StoreFirstGuard } from './store/storeFirst.guard';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule,

    //RouterModule.forRoot method id passed a set of routes, each of which maps a URL to a component, The first three routes in the listing match the URLs
    RouterModule.forRoot([
      { 
        path:"store", component:StoreComponent,
        canActivate:[StoreFirstGuard]
       },

      { 
        path:"cart", component:CartDetailComponent,
        canActivate:[StoreFirstGuard]
      },

      { 
        path:"checkout", component:CheckoutComponent,
        canActivate:[StoreFirstGuard]
      },

      {
        path:"admin",
        loadChildren: () => import ("./admin/admin.module")
            .then(m => m.AdminModule),
          canActivate:[StoreFirstGuard]
      },

      { path:"**", redirectTo:"/store" }
    ])
],

  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
