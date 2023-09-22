"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = exports.UserClass = void 0;
class UserClass {
    constructor(name) {
        this.name = name;
    }
}
exports.UserClass = UserClass;
class Admin {
    constructor(role) {
        this.role = role;
    }
}
exports.Admin = Admin;
