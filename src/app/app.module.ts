import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import {ROUTES} from './app.router'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import {AboutComponent} from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import {RestaurantsService} from './restaurants/restaurants.service';
import { RestaurantDetailComponent } from './restautant-detail/restautant-detail.component';
import { MenuComponent } from './restautant-detail/menu/menu.component';
import { ShoppingCardComponent } from './restautant-detail/shopping-card/shopping-card.component';
import { MenuItemComponent } from './restautant-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './restautant-detail/reviews/reviews.component';
import {ShoppingCardService} from './restautant-detail/shopping-card/shopping-card.service';
import { OrderComponent } from './order/order.component';
import { InputComponent } from './shared/input/input.component';
import { RadioComponent } from './shared/radio/radio.component';
import{OrderService} from './order/order.service';
import { OrderItemComponent } from './order/order-item/order-item.component';
import { DeliveryCostsComponent } from './order/delivery-costs/delivery-costs.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { RatingComponent } from './shared/rating/rating.component'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCardComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderComponent,
    InputComponent,
    RadioComponent,
    OrderItemComponent,
    DeliveryCostsComponent,
    OrderSummaryComponent,
    RatingComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [RestaurantsService, ShoppingCardService,{provide: LOCALE_ID,useValue: 'pt-BR'},OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
