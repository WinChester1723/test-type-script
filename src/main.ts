import { userInfo, user, getFullInfo } from './lessons/app';
import {showInfoUser} from './homeWork/taskOne';
import {processSkills} from './lessons/arrays';

console.log(userInfo("mamed", "mamedov"));
console.log(getFullInfo(user));

showInfoUser("123", true, 1234567890, "email@example.com", "New York");

const res  = processSkills();
console.log(res);

