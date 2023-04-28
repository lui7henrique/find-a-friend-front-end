import { Level } from "src/utils/level";
import { Size } from "src/utils/size";

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
};
