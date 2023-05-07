import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { api, client } from "src/services/api";

const AUTH_COOKIE = "token";

export const useAuth = () => {
  const [token, setToken] = useState(null);

  const { push } = useRouter();

  const login = async (email: string, password: string) => {
    const { token } = await api.login({ email, password });

    if (token) {
      Cookies.set(AUTH_COOKIE, JSON.stringify(token));
      await push("/org/pets/register");
    }

    return token;
  };

  const logout = () => {
    Cookies.remove(AUTH_COOKIE);
  };

  useEffect(() => {
    const currentToken = Cookies.get(AUTH_COOKIE);

    if (currentToken) {
      setToken(JSON.parse(currentToken));
      client.defaults.headers["Authorization"] = `Bearer ${currentToken}`;
    }
  }, []);

  return { login, logout, token };
};
