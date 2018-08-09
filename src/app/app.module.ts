import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';


import {ROUTES} from './app.router'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantDetailComponent } from './restautant-detail/restautant-detail.component';
import { MenuComponent } from './restautant-detail/menu/menu.component';
import { ShoppingCardComponent } from './restautant-detail/shopping-card/shopping-card.component';
import { MenuItemComponent } from './restautant-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './restautant-detail/reviews/reviews.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

import {AboutModule} from './about/about.module'
import {SharedModule} from './shared/shared.module'
import {OrderModule} from './order/order.module'
import {CoreModule} from './core/core.module'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCardComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderSummaryComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule.ForRoot(),
    RouterModule.forRoot(ROUTES , {preloadingStrategy : PreloadAllModules})
  ],
  providers: [{provide: LOCALE_ID,useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
