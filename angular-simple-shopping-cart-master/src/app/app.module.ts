import { LocalStorageService, StorageService } from "./services/storage.service";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing";
import { BrowserModule } from "@angular/platform-browser";
import { CheckoutComponent } from "./components/checkout/checkout.component";
import { DeliveryOptionsDataService } from "./services/delivery-options.service";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { NgModule } from "@angular/core";
import { OrderConfirmationComponent } from "./components/order-confirmation/order-confirmation.component";
import { PopulatedCartRouteGuard } from "./route-gaurds/populated-cart.route-gaurd";
import { ProductsDataService } from "./services/products.service";
import { ShoppingCartComponent } from "./components/shopping-cart/shopping-cart.component";
import { ShoppingCartService } from "./services/shopping-cart.service";
import { StoreFrontComponent } from "./components/store-front/store-front.component";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    StoreFrontComponent,
    CheckoutComponent,
    OrderConfirmationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    ProductsDataService,
    DeliveryOptionsDataService,
    PopulatedCartRouteGuard,
    LocalStorageService,
    { provide: StorageService, useClass: LocalStorageService },
    {
      deps: [StorageService, ProductsDataService, DeliveryOptionsDataService],
      provide: ShoppingCartService,
      useClass: ShoppingCartService
    }
  ]
})
export class AppModule { }
