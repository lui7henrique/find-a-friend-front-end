import { createContext, useContext } from "react";
import { FiltersContextProviderProps } from "./types";

export const FiltersContext = createContext({});

export const FiltersContextProvider = (props: FiltersContextProviderProps) => {
  const { children } = props;

  return (
    <FiltersContext.Provider value={{}}>{children}</FiltersContext.Provider>
  );
};

export const useFilters = () => {
  const context = useContext(FiltersContext);
  return context;
};
