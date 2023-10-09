"use strict";
class UserService {
    // Can use async!!!
    static getuser(id) {
        return UserService.db.findById(id);
    }
    constructor(id) { }
    create() {
        UserService.db;
    }
}
// Can not use async!!!
(() => {
    UserService.db = "sdf";
})();
UserService.getuser(1);
const inst = new UserService(1);
inst.create();
