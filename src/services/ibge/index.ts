import axios from "axios";
import { GetDistrictsByUF } from "./types";

 const api = axios.create({
  baseURL: "https://servicodados.ibge.gov.br/api/v1"
})

export const ibge = {
  getDistrictsByUF: async (UF: string) => {
    const {data} = await api.get<GetDistrictsByUF>(`/localidades/estados/${UF}/distritos`)

    return data
  }
}