"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processSkills = void 0;
function processSkills() {
    const skills = ["Dev", "DevOps", "Testing"];
    for (const skill of skills) {
        console.log(skill.toLowerCase());
    }
    return skills
        .filter((s) => s != "DevOps")
        .map((s) => s + "! ")
        .reduce((a, b) => a + b);
}
exports.processSkills = processSkills;
