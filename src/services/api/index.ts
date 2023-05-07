import axios from "axios";
import {
  GetPetParams,
  GetPets,
  OrgLoginBody,
  OrgLoginResponse,
  OrgRegisterBody,
} from "./types";

export const client = axios.create({
  baseURL: "https://find-a-friend-back-end.onrender.com",
});

export const api = {
  getPets: async (params?: GetPetParams) => {
    const { data } = await client.get<GetPets>("/pets", {
      params: {
        ...params,
      },
    });

    return data;
  },
  createOrg: async (body: OrgRegisterBody) => {
    await client.post("/orgs", {
      ...body,
    });
  },
  login: async (body: OrgLoginBody) => {
    const { data } = await client.post<OrgLoginResponse>("/login", { ...body });

    return data;
  },
};
