var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ROUTES } from './app.router';
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
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './not-found/not-found.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
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
                NotFoundComponent
            ],
            imports: [
                BrowserAnimationsModule,
                BrowserModule,
                HttpModule,
                SharedModule.ForRoot(),
                RouterModule.forRoot(ROUTES, { preloadingStrategy: PreloadAllModules })
            ],
            providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy },
                { provide: LOCALE_ID, useValue: 'pt-BR' }],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map