//#region Imports
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
import {
  Cart,
  Product,
  Delivery,
  HomeDelivery,
  ShopDelivery,
} from "./homeWork/cart";
import { PaymentThis } from "./lessons/classes/thisLes";
import { UserController } from "./lessons/classes/abstractLes";
import { LoggerRealization } from "./homeWork/abstractEx";
import { MyLogger } from "./homeWork/abstractEx2";



//#endregion

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

// const cart = new Cart();
// cart.addProdct(new Product(1, "cookie", 100));
// cart.addProdct(new Product(2, "cake", 300));
// cart.addProdct(new Product(3, "shocolate", 200));

// cart.deleteProdct(1);
// cart.setDelivery(new HomeDelivery(new Date(), "Yasamal"));
// console.log(cart.getSum());
// console.log(cart.checkOut());

// const p = new PaymentThis();
// console.log(p.getDate());   

// const z = new UserController();
// z.handleWithLogs('Somebody')

// const x = new LoggerRealization();
// x.longWithDate("Some");


// const z = new MyLogger();
// z.logWithDate("Test");



//#endregion
