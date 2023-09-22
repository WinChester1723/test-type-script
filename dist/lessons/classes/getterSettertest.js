"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserTest2 = void 0;
class UserTest2 {
    get login() {
        return this._login ? this._login : null;
    }
    set login(l) {
        this._login = "user - " + l;
    }
}
exports.UserTest2 = UserTest2;
