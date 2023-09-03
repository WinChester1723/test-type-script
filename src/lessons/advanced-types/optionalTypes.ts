interface UserPro {
  login: string;
  password?: {
    type: "primary" | "secondary";
  };
}

function testPass(user: UserPro) {
  const t = user.password?.type;
}

function multiply(first: number, second?: number) {
  if (!second) {
    return first * first;
  }
  return first * second;
}

function testOption(param?: string) {
  const t = param ?? multiply(5);
}
