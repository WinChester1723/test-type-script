"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInter = exports.Logger = exports.Admin = exports.UserClass = void 0;
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
class Logger {
    log(...args) {
        console.log(...args);
    }
    error(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(...args);
        });
    }
}
exports.Logger = Logger;
class UserInter {
    delete() {
        throw new Error("Method not implemented.");
    }
    pay(paymentId) {
        throw new Error("Method not implemented.");
    }
}
exports.UserInter = UserInter;
