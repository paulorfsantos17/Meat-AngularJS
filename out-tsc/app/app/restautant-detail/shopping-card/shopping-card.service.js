var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { CardItem } from './cardItem.model';
import { NotificationService } from '../../shared/message/notification.service';
import { Injectable } from '@angular/core';
var ShoppingCardService = /** @class */ (function () {
    function ShoppingCardService(notificationService) {
        this.notificationService = notificationService;
        this.items = [];
    }
    ShoppingCardService.prototype.clear = function () {
        this.items = [];
    };
    ShoppingCardService.prototype.total = function () {
        return this.items
            .map(function (item) { return item.value(); })
            .reduce(function (prev, value) { return prev + value; }, 0);
    };
    ShoppingCardService.prototype.addItem = function (item) {
        var foundItem = this.items.find(function (mItem) { return mItem.menuItem.id === item.id; });
        if (foundItem) {
            this.increaseQty(foundItem);
        }
        else {
            this.items.push(new CardItem(item));
        }
        this.notificationService.notify("Voc\u00EA adicionou o Item: " + item.name);
    };
    ShoppingCardService.prototype.removeItem = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
        this.notificationService.notify("Voc\u00EA Removeu o Item: " + item.menuItem.name);
    };
    ShoppingCardService.prototype.increaseQty = function (item) {
        item.quantity = item.quantity + 1;
    };
    ShoppingCardService.prototype.decreaseQty = function (item) {
        item.quantity = item.quantity - 1;
        if (item.quantity === 0) {
            this.removeItem(item);
        }
    };
    ShoppingCardService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [NotificationService])
    ], ShoppingCardService);
    return ShoppingCardService;
}());
export { ShoppingCardService };
//# sourceMappingURL=shopping-card.service.js.map