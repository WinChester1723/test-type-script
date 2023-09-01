"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.action = exports.enumsProcess = void 0;
function enumsProcess() {
    const res = {
        message: "Some Text for Test",
        statusCode: 0 /* StatusCode.SUCCESS */,
    };
    return res;
}
exports.enumsProcess = enumsProcess;
function action(status) {
    if (status === 0 /* StatusCode.SUCCESS */) {
        console.log("Operation was successful.");
    }
    else if (status === 1 /* StatusCode.IN_PROGRESS */) {
        console.log("Operation is in progress.");
    }
    else if (status === 2 /* StatusCode.FAILED */) {
        console.log("Operation failed.");
    }
    else {
        console.log("Unknown status.");
    }
}
exports.action = action;
