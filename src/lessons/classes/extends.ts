type paymentStatus = "new" | "paid";

class PaymentEx {
  id: number;
  status: paymentStatus = "new";

  constructor(id: number) {
    this.id = id;
  }

  pay() {
    this.status = "paid";
  }
}

export class PersistedPayment extends PaymentEx {
  databeId?: number;
  paidAt?: Date;

  constructor() {
    const id = Math.random();
    super(id);
  }

  save() {}

  override pay(date?: Date) {
    // super.pay();
    this.status = "paid";
  }
}

export class User {
  name: string = "user";

  constructor() {
    console.log(this.name);
  }
}

export class AdminEx extends User {
  name: string = "admin";

  constructor() {
    super();
    console.log(this.name);
  }
}

export class HttpError extends Error {
  code: number;

  constructor(message: string, code?: number) {
    super(message);
    this.code = code ?? 500;
  }
}
