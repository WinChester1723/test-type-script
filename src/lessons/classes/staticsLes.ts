class UserService {
  private static db: any;

  // Can use async!!!
  static getuser(id: number) {
    return UserService.db.findById(id);
  }

  constructor(id: number) {}

  create() {
    UserService.db;
  }

  // Can not use async!!!
  static {
    UserService.db = "sdf";
  }
}

UserService.getuser(1);
const inst = new UserService(1);
inst.create();