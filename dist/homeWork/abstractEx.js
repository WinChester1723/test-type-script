"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerRealization = void 0;
class LoggerAbstract {
    printDate() {
        return new Date();
    }
}
class LoggerRealization extends LoggerAbstract {
    show(message) {
        console.log("Some Text: " + message);
    }
    longWithDate(message) {
        console.log(this.printDate());
        this.show(message);
    }
}
exports.LoggerRealization = LoggerRealization;
