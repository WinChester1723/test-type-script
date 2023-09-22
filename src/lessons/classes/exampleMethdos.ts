enum PaymentStatus {
  Holded,
  Processed,
  Reversed,
}

export class Payment {
  id: number;
  status: PaymentStatus = PaymentStatus.Holded;
  createdAt: Date = new Date();
  updatedat?: Date;

  constructor(id: number) {
    this.id = id;
  }

  getPaymentLifeTime(): number {
    return new Date().getTime() - this.createdAt.getTime();
  }

  unholdPayment() {
    if (this.status === PaymentStatus.Processed) {
      throw new Error("Payment is not reversed");
    }
    this.status = PaymentStatus.Reversed;
    this.updatedat = new Date();
  }
}
