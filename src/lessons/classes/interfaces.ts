export interface ILogger {
  log(...args: any[]): void;
  error(...args: any[]): void;
}

export interface IPayable {
  pay(paymentId: number): void;
  price?: number;
}

export interface IDeletable {
  delete():void
}