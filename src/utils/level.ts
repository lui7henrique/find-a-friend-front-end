type EnergyLevel = "LOW" | "MEDIUM" | "HIGH";

export const levelOptions: Array<{
  label: string;
  value: EnergyLevel;
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
