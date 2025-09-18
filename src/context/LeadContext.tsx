import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import type { Leads } from "../@types/Leads";

interface LeadsContextProps {
  leads: Leads | null;
  fetchLeads: () => void;
}

const LeadsContext = createContext<LeadsContextProps | undefined>(undefined);

export const LeadsProvider = ({ children }: { children: ReactNode }) => {
  const [leads, setLeads] = useState<Leads | null>(null);

  const fetchLeads = async () => {};

  useEffect(() => {
    fetchLeads();
  }, []);

  return (
    <LeadsContext.Provider value={{ leads, fetchLeads }}>
      {children}
    </LeadsContext.Provider>
  );
};

export const useLeads = () => {
  const context = useContext(LeadsContext);
  if (!context) {
    throw new Error(
      "useLeads must be used within a LeadsProvider"
    );
  }
  return context;
};
