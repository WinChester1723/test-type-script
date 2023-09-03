interface User3 {
  name: string;
  email: string;
  login: string;
}

const user3: User3 = {
  name: "Vasia",
  email: "vasiliy@yandex.ru",
  login: "vasia",
};

interface Admin {
  name: string;
  role: number;
}

function logId(id: string | number) {
  if (typeof id === "string") {
    console.log(id);
  } else if (typeof id === "number") {
    console.log(id);
  }
  console.log(id); // string | number
}

//type Guard func for return
function isString(x: string | number): x is string {
  return typeof x === "string";
}

function logId2(id: string | number) {
  // In this layer I use type Guard func
  if (isString(id)) {
    console.log(id);
  } else if (typeof id === "number") {
    console.log(id);
  }
  console.log(id); // string | number
}

function isAdmin(user: User3 | Admin): user is Admin {
  return "role" in user;
}

function isAdminAlternative(user: User3 | Admin): user is Admin {
  return (user as Admin).role !== undefined;
}

function setRoleZero(user: User3 | Admin) {
  if (isAdmin(user)) {
    user.role = 0;
  } else {
    throw new Error("User is not Admin");
  }
}
