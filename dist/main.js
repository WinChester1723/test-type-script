"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./lessons/app");
const taskOne_1 = require("./homeWork/taskOne");
const arrays_1 = require("./lessons/arrays");
console.log((0, app_1.userInfo)("mamed", "mamedov"));
console.log((0, app_1.getFullInfo)(app_1.user));
(0, taskOne_1.showInfoUser)("123", true, 1234567890, "email@example.com", "New York");
const res = (0, arrays_1.processSkills)();
console.log(res);
