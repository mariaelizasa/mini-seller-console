import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import type { Leads } from "../@types/Leads";
import { fetchLeads } from "../services/LeadsService";

interface LeadsContextProps {
  leads: Leads[] | [];
  loading: boolean;
}

const LeadsContext = createContext<LeadsContextProps | undefined>(undefined);

export const LeadsProvider = ({ children }: { children: ReactNode }) => {
  const [leads, setLeads] = useState<Leads[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLeads().then((data) => {
      setLeads(data);
      setLoading(false);
    });
  }, []);

  return (
    <LeadsContext.Provider value={{ leads, loading }}>
      {children}
    </LeadsContext.Provider>
  );
};

export const useLeads = () => {
  const context = useContext(LeadsContext);
  if (!context) {
    throw new Error("useLeads must be used within a LeadsProvider");
  }
  return context;
};
