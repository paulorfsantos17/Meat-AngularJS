var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { RadioComponent } from './radio/radio.component';
import { RatingComponent } from './rating/rating.component';
import { RestaurantsService } from '../restaurants/restaurants.service';
import { ShoppingCardService } from '../restautant-detail/shopping-card/shopping-card.service';
import { OrderService } from '../order/order.service';
import { SnackbarComponent } from './message/snackbar/snackbar.component';
import { NotificationService } from './message/notification.service';
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.ForRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [RestaurantsService,
                ShoppingCardService,
                OrderService,
                NotificationService]
        };
    };
    var SharedModule_1;
    SharedModule = SharedModule_1 = __decorate([
        NgModule({
            declarations: [
                InputComponent,
                RadioComponent,
                RatingComponent,
                SnackbarComponent
            ],
            imports: [CommonModule,
                FormsModule,
                ReactiveFormsModule
            ],
            exports: [
                InputComponent,
                RadioComponent,
                RatingComponent,
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                SnackbarComponent
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
export { SharedModule };
//# sourceMappingURL=shared.module.js.map