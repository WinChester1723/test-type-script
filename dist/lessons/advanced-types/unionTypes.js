"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logError = exports.logId = void 0;
function logId(id) {
    if (typeof id === "string") {
        console.log(id.toLowerCase());
    }
    else if (typeof id == "number") {
        console.log(id.toExponential());
    }
    else {
        console.log(id);
    }
}
exports.logId = logId;
function logError(err) {
    if (Array.isArray(err)) {
        console.log(err);
    }
    else {
        console.log(err);
    }
}
exports.logError = logError;
function logObject(obj) {
    if ("a" in obj) {
        console.log(obj.a);
    }
    else {
        console.log(obj.b);
    }
}
function logMultiplaIds(a, b) {
    if (a == b) {
        console.log(a.toLowerCase());
    }
}
