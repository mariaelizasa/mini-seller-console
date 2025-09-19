import { createContext, useContext, useState, type ReactNode } from "react";
import type { Opportunities } from "../@types/Opportunities";

interface OpportunitiesContextProps {
  opportunities: Opportunities[];
  addOpportunity: (opp: Opportunities) => void;
}

const OpportunitiesContext = createContext<
  OpportunitiesContextProps | undefined
>(undefined);

export const OpportunitiesProvider = ({ children }: { children: ReactNode }) => {
  const [opportunities, setOpportunities] = useState<Opportunities[]>([]);

  const addOpportunity = (opp: Opportunities) => {
    setOpportunities((prev) => [...prev, opp]);
  };

  return (
    <OpportunitiesContext.Provider value={{ opportunities, addOpportunity }}>
      {children}
    </OpportunitiesContext.Provider>
  );
};

export const useOpportunities = () => {
  const context = useContext(OpportunitiesContext);
  if (!context)
    throw new Error(
      "useOpportunities must be used within OpportunitiesContextProvider"
    );
  return context;
};
