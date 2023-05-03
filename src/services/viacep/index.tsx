import axios from "axios";
import { GetAddressByPostalCode } from "./types";

const api = axios.create({
  baseURL: "https://viacep.com.br",
});

export const viacep = {
  getAddressByPostalCode: async (postalCode: string) => {
    const { data } = await api.get<GetAddressByPostalCode>(
      `/ws/${postalCode}/json/`
    );

    return data;
  },
};
