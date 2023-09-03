interface User2 {
  name: string;
  age: number;
  skills: string[];
}

interface Role2 {
  roleId: number;
}

interface UserWithRole2 extends User2, Role2 {
  createdAt: Date;
}

let user1: UserWithRole2 = {
  name: "Johnny",
  age: 35,
  skills: ["1", "2"],
  roleId: 1,
  createdAt: new Date(),
};

type ID = string | number;

interface IDI {
  ID: ID;
}


