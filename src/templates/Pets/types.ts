import { Type } from "src/utils/type";

export type FilterPetForm = {
  city: string;
  state: string;
  age: string | "All";
  energy_level: string;
  size: string;
  independency_level: string;
  type: Type | "ALL";
};
