import axios from "axios";
import { GetPets } from "./types";

const client = axios.create({
  baseURL: "https://find-a-friend-back-end.onrender.com",
});

export const api = {
  getPets: async () => {
    const { data } = await client.get<GetPets>("/pets", {
      params: {
        city: "Suzano",
      },
    });

    return data;
  },
};
