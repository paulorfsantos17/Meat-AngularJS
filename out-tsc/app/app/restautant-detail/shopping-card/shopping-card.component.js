var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ShoppingCardService } from './shopping-card.service';
import { trigger, state, style, transition, animate, keyframes } from "@angular/animations";
var ShoppingCardComponent = /** @class */ (function () {
    function ShoppingCardComponent(shoppingCardService) {
        this.shoppingCardService = shoppingCardService;
        this.rowState = "ready";
    }
    ShoppingCardComponent.prototype.ngOnInit = function () {
    };
    ShoppingCardComponent.prototype.items = function () {
        return this.shoppingCardService.items;
    };
    ShoppingCardComponent.prototype.total = function () {
        return this.shoppingCardService.total();
    };
    ShoppingCardComponent.prototype.clear = function () {
        this.shoppingCardService.clear();
    };
    ShoppingCardComponent.prototype.removeItem = function (item) {
        this.shoppingCardService.removeItem(item);
    };
    ShoppingCardComponent.prototype.addItem = function (item) {
        this.shoppingCardService.addItem(item);
    };
    ShoppingCardComponent = __decorate([
        Component({
            selector: 'mt-shopping-card',
            templateUrl: './shopping-card.component.html',
            animations: [
                trigger('row', [
                    state('ready', style({ opacity: 1 })),
                    transition("void => ready", animate('300ms 0ms ease-in', keyframes([
                        style({ opacity: 0, transform: "translateX(-50px)", offset: 0 }),
                        style({ opacity: 0.8, transform: "translateX(10px)", offset: 0.8 }),
                        style({ opacity: 1, transform: "translateX(0px)", offset: 1 })
                    ]))),
                    transition("ready => void", animate('300ms 0ms ease-out', keyframes([
                        style({ opacity: 1, transform: "translateX( 0px)", offset: 0 }),
                        style({ opacity: 0.8, transform: "translateX(10px)", offset: 0.2 }),
                        style({ opacity: 0, transform: "translateX(-30px)", offset: 1 })
                    ])))
                ])
            ]
        }),
        __metadata("design:paramtypes", [ShoppingCardService])
    ], ShoppingCardComponent);
    return ShoppingCardComponent;
}());
export { ShoppingCardComponent };
//# sourceMappingURL=shopping-card.component.js.map