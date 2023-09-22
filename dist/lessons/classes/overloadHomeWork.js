"use strict";
class UserTest1 {
    constructor() {
        this.skills = [];
    }
    addSkill(skillOrSkills) {
        if (typeof skillOrSkills === "string") {
            this.skills.push(skillOrSkills);
        }
        else {
            this.skills.concat(skillOrSkills);
        }
    }
}
function run(distance) {
    if (typeof distance === "number") {
        return 1;
    }
    else {
        return "";
    }
}
function some(distance) { }
