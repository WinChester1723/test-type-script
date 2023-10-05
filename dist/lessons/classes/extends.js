"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminEx = exports.User = exports.PersistedPayment = void 0;
class PaymentEx {
    constructor(id) {
        this.status = "new";
        this.id = id;
    }
    pay() {
        this.status = "paid";
    }
}
class PersistedPayment extends PaymentEx {
    constructor() {
        const id = Math.random();
        super(id);
    }
    save() { }
    pay(date) {
        // super.pay();
        this.status = "paid";
    }
}
exports.PersistedPayment = PersistedPayment;
class User {
    constructor() {
        this.name = "user";
        console.log(this.name);
    }
}
exports.User = User;
class AdminEx extends User {
    constructor() {
        super();
        this.name = "admin";
        console.log(this.name);
    }
}
exports.AdminEx = AdminEx;
