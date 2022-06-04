interface IReturn {
  token: string;
  error: string;
}

export type TLoginService = (username: string, password: string) => Promise<IReturn>;

export interface ILoginAPIReturn {
  token?: string;
  message?: string;
}
