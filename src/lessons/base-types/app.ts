export const userInfo = (name: string, surname: string): string => {
  return `${name} ${surname}`;
};

export const user = {
  name: "Jhonny",
  surname: "Silverhand",
  city: "NightCity",
  age: 35,
  skills: {
    dev: true,
    hack: true,
  },
};

export function getFullInfo(user: {
  name: string;
  surname: string;
  city: string;
  age: number;
}): string {
  return `${user.name} ${user.surname} ${user.city} ${user.age}`;
}
