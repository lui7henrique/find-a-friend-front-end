import axios from "axios";
import { GetPetParams, GetPets } from "./types";

const client = axios.create({
  baseURL: "https://find-a-friend-back-end.onrender.com",
});

export const api = {
  getPets: async (params?: GetPetParams) => {
    const { data } = await client.get<GetPets>("/pets", {
      params: {
        ...params
      },
    });

    return data;
  },
};
