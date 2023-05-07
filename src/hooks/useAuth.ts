import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { api, client } from "src/services/api";

export const AUTH_COOKIE = "token";

export const useAuth = () => {
  const { push } = useRouter();

  const login = async (email: string, password: string) => {
    const { token } = await api.login({ email, password });

    if (token) {
      Cookies.set(AUTH_COOKIE, token);
      await push("/org/pet/register");
    }

    return token;
  };

  const logout = async () => {
    Cookies.remove(AUTH_COOKIE);
    await push("/org/login");
  };

  return { login, logout };
};
