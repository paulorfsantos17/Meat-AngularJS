var Order = /** @class */ (function () {
    function Order(address, number, optional, paymentOption, orderItems) {
        if (orderItems === void 0) { orderItems = []; }
        this.address = address;
        this.number = number;
        this.optional = optional;
        this.paymentOption = paymentOption;
        this.orderItems = orderItems;
    }
    return Order;
}());
var OrderItem = /** @class */ (function () {
    function OrderItem(quantity, MenuId) {
        this.quantity = quantity;
        this.MenuId = MenuId;
    }
    return OrderItem;
}());
export { Order, OrderItem };
//# sourceMappingURL=order.model.js.map