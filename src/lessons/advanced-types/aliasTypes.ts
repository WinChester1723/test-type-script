type httpMethod = "post" | "get";

function fetchTestInAlias(url: string, method: httpMethod): 1 | -1 {
  if (method === "post") {
    return 1;
  } else {
    return -1;
  }
}

type User = {
  name: string;
  age: number;
  skills: string[];
};

type Role = {
  name: string;
  id: number;
};

// This is Intercection
// type UserWithRole = User & Role;

// let user: UserWithRole = {
//   name: "Johnny",
//   age: 35,
//   skills: ["1", "2"],
//   id: 1,
// };

type UserWithRole = {
  user: User;
  role: Role;
};

let user: UserWithRole = {
  user: {
    name: "Johnny",
    age: 35,
    skills: ["1", "2"],
  },
  role: {
    name: "Admin",
    id: 1,
  },
};
