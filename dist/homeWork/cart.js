"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = exports.ShopDelivery = exports.HomeDelivery = exports.Delivery = exports.Product = void 0;
class Product {
    constructor(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
}
exports.Product = Product;
class Delivery {
    constructor(date) {
        this.date = date;
    }
}
exports.Delivery = Delivery;
class HomeDelivery extends Delivery {
    constructor(date, address) {
        super(date);
        this.address = address;
    }
}
exports.HomeDelivery = HomeDelivery;
class ShopDelivery extends Delivery {
    constructor(shopId) {
        super(new Date());
        this.shopId = shopId;
    }
}
exports.ShopDelivery = ShopDelivery;
class Cart {
    constructor() {
        this.products = [];
    }
    addProdct(product) {
        this.products.push(product);
    }
    deleteProdct(productId) {
        this.products = this.products.filter((p) => p.id !== productId);
    }
    getSum() {
        return this.products
            .map((p) => p.price)
            .reduce((p1, p2) => p1 + p2);
    }
    setDelivery(delivery) {
        this.delivery = delivery;
    }
    checkOut() {
        if (this.products.length == 0) {
            throw new Error("Not found Products");
        }
        if (!this.delivery) {
            throw new Error("Not found for Delivery");
        }
        return { success: true };
    }
}
exports.Cart = Cart;
