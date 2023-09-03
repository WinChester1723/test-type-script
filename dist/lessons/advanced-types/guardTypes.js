"use strict";
const user3 = {
    name: "Vasia",
    email: "vasiliy@yandex.ru",
    login: "vasia",
};
function logId(id) {
    if (typeof id === "string") {
        console.log(id);
    }
    else if (typeof id === "number") {
        console.log(id);
    }
    console.log(id); // string | number
}
//type Guard func for return
function isString(x) {
    return typeof x === "string";
}
function logId2(id) {
    // In this layer I use type Guard func
    if (isString(id)) {
        console.log(id);
    }
    else if (typeof id === "number") {
        console.log(id);
    }
    console.log(id); // string | number
}
function isAdmin(user) {
    return "role" in user;
}
function isAdminAlternative(user) {
    return user.role !== undefined;
}
function setRoleZero(user) {
    if (isAdmin(user)) {
        user.role = 0;
    }
    else {
        throw new Error("User is not Admin");
    }
}
