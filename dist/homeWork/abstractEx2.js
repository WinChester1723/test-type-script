"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyLogger = void 0;
class Logger {
    printDate(date) {
        this.log(date.toString());
    }
}
class MyLogger extends Logger {
    log(mes) {
        console.log(mes);
    }
    logWithDate(mes) {
        this.printDate(new Date());
        this.log(mes);
    }
}
exports.MyLogger = MyLogger;
