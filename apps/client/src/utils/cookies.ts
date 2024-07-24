import { Cookies } from "react-cookie";

const cookies = new Cookies();

interface CookieOptions {
  expires?: Date;
  path?: string;
  secure?: boolean;
  httpOnly?: boolean;
}

export const setCookie = (
  name: string,
  value: string,
  options?: CookieOptions
) => {
  return cookies.set(name, value, { ...options });
};

export const getCookie = (name: string) => {
  return cookies.get(name);
};

export const removeCookie = (name: string) => {
  return cookies.remove(name);
};
