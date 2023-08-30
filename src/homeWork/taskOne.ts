type UserInfo = {
  officeid: string;
  isOpenned: boolean;
  contacts: {
    phone: number;
    email: string;
    address: {
      city: string;
    };
  };
};

export let infoUser: UserInfo;

export function showInfoUser(
  officeid: string,
  isOpenned: boolean,
  phone: number,
  email: string,
  city: string
): void {
  infoUser = {
    officeid,
    isOpenned,
    contacts: {
      phone,
      email,
      address: {
        city,
      },
    },
  };
  console.log(infoUser);
}
