interface ILogInReturn {
  ok: boolean;
  error: string;
}
type TLogIn = (username: string, password: string) => Promise<ILogInReturn>;

export interface IAuthContext {
  isLogged: boolean;
  logIn: TLogIn;
  register: (username: string, name: string, surname: string, email: string, password: string) => Promise<IRegister>;
  logOut: () => void;
  userData: IUserData;
}

export interface IUserData {
  username: string;
  name: string;
  token: string;
}

export interface IRegisterData {
  username: string;
  name: string;
  surname: string;
  email: string;
  role: string;
  appointments: string;
}

export interface IRegister {
  data: IRegisterData;
  ok: boolean;
}
