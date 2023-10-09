"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
class Controller {
    handleWithLogs(req) {
        console.log("Start");
        this.handle(req);
        console.log("End");
    }
}
class UserController extends Controller {
    handle(req) {
        console.log(req);
    }
}
exports.UserController = UserController;
