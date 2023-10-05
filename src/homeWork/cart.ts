export class Product {
  constructor(public id: number, public title: string, public price: number) {}
}

export class Delivery {
  constructor(public date: Date) {}
}

export class HomeDelivery extends Delivery {
  constructor(date: Date, public address: string) {
    super(date);
  }
}

export class ShopDelivery extends Delivery {
  constructor(public shopId: string) {
    super(new Date());
  }
}

type deliveryOptions = HomeDelivery | ShopDelivery;

export class Cart {
  private products: Product[] = [];
  private delivery?: HomeDelivery | ShopDelivery;

  public addProdct(product: Product): void {
    this.products.push(product);
  }
  public deleteProdct(productId: number): void {
    this.products = this.products.filter((p: Product) => p.id !== productId);
  }

  public getSum() {
    return this.products
      .map((p: Product) => p.price)
      .reduce((p1: number, p2: number) => p1 + p2);
  }

  public setDelivery(delivery: deliveryOptions): void {
    this.delivery = delivery;
  }

  public checkOut() {
    if (this.products.length == 0) {
      throw new Error("Not found Products");
    }
    if (!this.delivery) {
      throw new Error("Not found for Delivery");
    }

    return { success: true };
  }
}
