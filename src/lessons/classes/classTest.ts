import { ILogger, IPayable, IDeletable } from "./interfaces";

export class UserClass {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

export class Admin {
  role: number;

  constructor(role: number) {
    this.role = role;
  }
}

export class Logger implements ILogger {
  log(...args: any[]): void {
    console.log(...args);
  }
  async error(...args: any[]): Promise<void> {
    console.log(...args);
  }
}

export class UserInter implements IPayable, IDeletable {
  delete(): void {
    throw new Error("Method not implemented.");
  }
  pay(paymentId: number): void {
    throw new Error("Method not implemented.");
  }
  price?: number | undefined;
}
