import { SelectOptions } from "src/components/FieldSelect/types";

export type Type = "CAT" | "DOG";

export const typeOptions: SelectOptions = [
  {
    label: "Gato",
    value: "CAT",
  },
  {
    label: "Cachorro",
    value: "DOG",
  },
];
