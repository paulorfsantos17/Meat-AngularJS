var CardItem = /** @class */ (function () {
    function CardItem(menuItem, quantity) {
        if (quantity === void 0) { quantity = 1; }
        this.menuItem = menuItem;
        this.quantity = quantity;
    }
    CardItem.prototype.value = function () {
        return this.menuItem.price * this.quantity;
    };
    return CardItem;
}());
export { CardItem };
//# sourceMappingURL=cardItem.model.js.map