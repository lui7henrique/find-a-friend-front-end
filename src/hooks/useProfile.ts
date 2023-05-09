import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { api, client } from "src/services/api";
import { OrgProfileResponse } from "src/services/api/types";

import { AUTH_COOKIE } from "./useAuth";

export const useProfile = () => {
  const [profile, setProfile] = useState<OrgProfileResponse | null>(null);

  const getProfile = async () => {
    const user = await api.profile();
    setProfile(user);
  };

  useEffect(() => {
    const currentToken = Cookies.get(AUTH_COOKIE);

    if (currentToken) {
      client.defaults.headers["Authorization"] = `Bearer ${currentToken}`;

      if (!profile) {
        getProfile();
      }
    }
  }, [profile]);

  return { profile };
};
