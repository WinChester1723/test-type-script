import { userInfo, user, getFullInfo } from "./lessons/base-types/app";
import { showInfoUser } from "./homeWork/taskOne";
import { processSkills } from "./lessons/base-types/arrays";
import { enumsProcess, action } from "./lessons/base-types/enums";
import { logId } from "./lessons/advanced-types/unionTypes";
import {
  UserClass,
  Admin,
  Logger,
  UserInter,
} from "./lessons/classes/classTest";
import { UserConst } from "./lessons/classes/consrtuctors";
import { Payment } from "./lessons/classes/exampleMethdos";
import { UserTest2 } from "./lessons/classes/getterSettertest";
import { User, AdminEx } from "./lessons/classes/extends";

//#region TestCode

// console.log(userInfo("mamed", "mamedov"));
// console.log(getFullInfo(user));

// showInfoUser("123", true, 1234567890, "email@example.com", "New York");

// const res = processSkills();
// console.log(res);

// const enumResult = enumsProcess();
// action(enumResult.statusCode);

// logId("Two");
// logId(22);
// logId(!false);
// logId("Some Body Shrek");

// const newUser = new UserClass("Petya");
// console.log(newUser.name);
// newUser.name = 'Vasya';
// console.log(newUser.name);

// console.log(new Admin(6));
// const newAdmin = new Admin(13);
// console.log(newAdmin.role);

// const user1 = new UserConst("Vasya");
// console.log(user1.name);
// const user2 = new UserConst();
// console.log(user2);
// const user3 = new UserConst(33);
// console.log(user3.age);
// const user4 = new UserConst("Johnny", 35)
// console.log(user4);

// const payment = new Payment(1);

// payment.unholdPayment();
// console.log(payment);

// const time = payment.getPaymentLifeTime();
// console.log(time);

// const user5 = new UserTest2();
// user5.login = 'myLogin';
// console.log(user5);
// console.log(user5.login);

//  new AdminEx();
//#endregion


