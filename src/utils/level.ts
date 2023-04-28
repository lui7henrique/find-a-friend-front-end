export type Level = "LOW" | "MEDIUM" | "HIGH";

export const levelOptions: Array<{
  label: string;
  value: Level;
}> = [
  {
    label: "Baixo",
    value: "LOW",
  },
  {
    label: "Médio",
    value: "MEDIUM",
  },
  {
    label: "Alto",
    value: "HIGH",
  },
];
