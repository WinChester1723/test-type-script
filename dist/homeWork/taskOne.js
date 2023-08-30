"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showInfoUser = exports.infoUser = void 0;
function showInfoUser(officeid, isOpenned, phone, email, city) {
    exports.infoUser = {
        officeid,
        isOpenned,
        contacts: {
            phone,
            email,
            address: {
                city,
            },
        },
    };
    console.log(exports.infoUser);
}
exports.showInfoUser = showInfoUser;
