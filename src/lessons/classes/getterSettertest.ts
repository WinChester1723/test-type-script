export class UserTest2 {
  _login?: string;
  password?: string;

  get login(): string | null {
    return this._login ? this._login : null;
  }

  set login(l: string) {
    this._login = "user - " + l;
  }
}