"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFullInfo = exports.user = exports.userInfo = void 0;
const userInfo = (name, surname) => {
    return `${name} ${surname}`;
};
exports.userInfo = userInfo;
exports.user = {
    name: "Jhonny",
    surname: "Silverhand",
    city: "NightCity",
    age: 35,
    skills: {
        dev: true,
        hack: true,
    },
};
function getFullInfo(user) {
    return `${user.name} ${user.surname} ${user.city} ${user.age}`;
}
exports.getFullInfo = getFullInfo;
