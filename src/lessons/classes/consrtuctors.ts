export class UserConst {
  name?: string;
  age?: number;

  constructor();
  constructor(name: string);
  constructor(age: number);
  constructor(name: string, age: number);
  constructor(ageOrName?: string | number, age?: number) {
    if (typeof ageOrName === "string") {
      this.name = ageOrName;
      if (age !== undefined) { // typeof age === "number"
        this.age = age;
      }
    } else if (typeof ageOrName === "number") {
      this.age = ageOrName;
    }
  }
}