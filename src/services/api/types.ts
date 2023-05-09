import { Level } from "src/utils/level";
import { Size } from "src/utils/size";
import { Type } from "src/utils/type";

export type GetPets = {
  pets: Array<Pet>;
};

export type Pet = {
  id: string;
  name: string;
  description: string;
  age: number;

  created_at: string; // date
  orgId: string;

  size: Size;
  energy_level: Level;
  independency_level: Level;
  ambient: Size;
  type: Type;
};

export type GetPetParams = {
  type?: Type;
};

export type OrgRegisterBody = {
  responsible_name: string;
  email: string;
  postal_code: string;
  address: string;
  neighborhood: string;
  number: string;
  city: string;
  state: string;
  whatsapp_number: string;
  password: string;
};

export type OrgLoginBody = {
  email: string;
  password: string;
};

export type OrgLoginResponse = {
  token: string;
};

export type OrgProfileResponse = {
  address: string;
  city: string;
  created_at: string;
  email: string;
  id: string;
  neighborhood: string;
  number: string;
  password_hash: string;
  postal_code: string;
  responsible_name: string;
  state: string;
  whatsapp_number: string;
};

export type PetRegisterBody = {
  name: string;
  description: string;
  age: number;
  size: string;
  energy_level: string;
  independency_level: string;
  ambient: string;
  type: string;
};
