export type Size = "SMALL" | "MEDIUM" | "LARGE";

export const sizeOptions: Array<{
  label: string;
  value: Size;
}> = [
  {
    label: "Pequeno",
    value: "SMALL",
  },
  {
    label: "Médio",
    value: "MEDIUM",
  },
  {
    label: "Grande",
    value: "LARGE",
  },
];
