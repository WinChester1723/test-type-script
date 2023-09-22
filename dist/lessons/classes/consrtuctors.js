"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserConst = void 0;
class UserConst {
    constructor(ageOrName, age) {
        if (typeof ageOrName === "string") {
            this.name = ageOrName;
            if (age !== undefined) { // typeof age === "number"
                this.age = age;
            }
        }
        else if (typeof ageOrName === "number") {
            this.age = ageOrName;
        }
    }
}
exports.UserConst = UserConst;
